import Ajv from 'ajv'
import ajvErrors from 'ajv-errors'
import addFormats from 'ajv-formats'
import defaultConfig from './defaultOptions'
import i18n from 'ajv-i18n'
// import toPath from 'lodash.toPath'

function mergerOptions(config1, config2) {
  const { defaultOptions, keywords, formats } = config1
  const res = {}
  res.options = Object.assign(defaultOptions, config2.options)
  res.keywords = keywords.concat(config2.keywords || [])
  res.formats = formats.concat(config2.formats || [])
  return res
}

export default function createInstance(config) {
  const options = mergerOptions(defaultConfig, config)
  const { options: instanceOptions, formats, keywords } = options
  const ajv = new Ajv(instanceOptions)
  addFormats(ajv)
  ajvErrors(ajv)

  formats.forEach(({ name, definition }) => ajv.addFormat(name, definition))
  keywords.forEach(definition => {
    ajv.addKeyword(definition)
  })

  return function validateData(schema, data) {
    let errors = []
    try {
      const valid = ajv.validate(schema, data)
      if (!valid) {
        console.log('ajv.errors is', ajv.errors)
        i18n['zh'](ajv.errors)
        errors = ajv.errors
      }
    } catch (err) {
      errors = [err]
    }
    const errorObject = error2Object(errors)
    console.log(errorObject)
    // if (customValidate) {
    //   const res = customValidate(data)
    //   errors = errors.concat(res)
    // }
    return {
      valid: errors.length === 0,
      errors: errorObject
    }
  }
}

function error2Object(errorArr) {
  const res = errorArr.reduce((acc, error) => {
    const { message, dataPath, params } = error
    let parent = acc
    if (dataPath) {
      const keys = dataPath.split('/')
      console.log('keys is', keys)
      if (keys.length && keys[0] === '') {
        keys.splice(0, 1)
        console.log('keys isis', keys)
      }
      keys.forEach(key => {
        if (!(key in parent)) {
          console.log('key is **', key)
          parent[key] = {}
          console.log('parent is1', parent)
        }
        parent = parent[key]
        console.log('parent is2', parent)
      })
    } else {
      console.log('params is', params)
      const key = params.missingProperty
      parent[key] = { __errors: [message] }
    }
    console.log('parnet is3', parent)
    if (Array.isArray(parent.__errors)) {
      parent.__errors = parent.__errors.concat(message || '')
    } else {
      parent.__errors = [message]
    }
    return acc
  }, {})
  console.log('res ***', res)
  return res
}
