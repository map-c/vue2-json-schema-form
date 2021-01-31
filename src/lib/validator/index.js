import Ajv from 'ajv'
import ajvErrors from 'ajv-errors'
import addFormats from 'ajv-formats'
import defaultConfig from './defaultOptions'
// import toPath from 'lodash.toPath'

function mergerOptions(config1, config2) {
  const { defaultOptions, keywords, formats } = config1
  const res = {}
  res.options = Object.create(defaultOptions, config2.options)
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
    const valid = ajv.validate(schema, data)
    return {
      valid,
      errors: ajv.errors
    }
  }
}
