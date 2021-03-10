<script>
import ArrayWrapper from './ArrayWrapper'

export default {
  name: 'ArrayField',
  inject: ['formItem'],
  components: {
    ArrayWrapper
  },
  props: {
    schema: Object,
    value: null,
    errorSchema: Object,
    rootSchema: Object
  },
  methods: {
    handleMulitChange(v, index) {
      const raw = Array.isArray(this.value) ? this.value : []
      raw[index] = v
      this.$emit('change', raw)
    },
    handleSingleChange(data) {
      const { value: val, index } = data
      let raw = null
      if (typeof val !== 'object') {
        raw = this.value.map(item => item)
        raw[index] = val
      } else {
        raw = this.value.map(item => ({ ...item }))
        if (typeof val === 'object' && val !== null) {
          const tmp = raw[index]
          raw[index] = {
            ...tmp,
            ...val
          }
        }
      }
      this.$emit('change', raw)
    },
    handleAdd(index) {
      const value = Array.isArray(this.value) ? this.value : []
      value.splice(index, 0, undefined)
      this.$emit('change', value)
    },
    handleDelete(index) {
      if (index) {
        const value = Array.isArray(this.value) ? this.value : []
        value.splice(index, 1)
        this.$emit('change', value)
      }
    }
  },
  render() {
    const items = this.schema.items
    const isMulitType = Array.isArray(items)
    const isSingleType = typeof items === 'object' && !Array.isArray(items)
    const required = key => {
      if (this.rootSchema && this.rootSchema.required) {
        return this.rootSchema.required.indexOf(key) > -1
      }
      return false
    }
    if (isMulitType) {
      const currentValue = Array.isArray(this.value) ? this.value : []
      return (
        <div>
          {items.map((item, index) => {
            const Component = this.formItem
            const state = required(item)
            const options = {}
            return (
              <Component
                schema={item}
                required={state}
                rootSchema={this.rootSchema}
                errorSchema={{}}
                options={options}
                value={currentValue[index]}
                onChange={v => this.handleMulitChange(v, index)}
              />
            )
          })}
        </div>
      )
    } else if (isSingleType) {
      const title = this.schema.title
      const value = this.value
      return (
        <ArrayWrapper
          title={title}
          value={value}
          schema={this.schema}
          onAdd={index => this.handleAdd(index)}
          onDelete={index => this.handleDelete(index)}
          onChange={value => this.handleSingleChange(value)}
        />
      )
    }

    return <div>Array field</div>
  }
}
</script>
