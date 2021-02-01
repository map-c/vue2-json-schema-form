<script>
export default {
  name: 'ObjectField',
  props: {
    schema: Object,
    value: Object,
    errorSchema: Object,
    rootSchema: Object
  },
  inject: ['formItem'],
  methods: {
    handleChange(key, value) {
      const values = this.value || {}
      values[key] = value
      this.$emit('change', values)
    }
  },
  render() {
    const Component = this.formItem
    const properties = this.schema.properties || {}
    const values = this.value || {}
    const errors = this.errorSchema || {}
    const required = key => {
      if (this.rootSchema && this.rootSchema.required) {
        const state = this.rootSchema.required.indexOf(key) > -1
        return state
      }
      return false
    }
    return (
      <div>
        {Object.keys(properties).map((item, index) => {
          const state = required(item)
          return (
            <Component
              key={index}
              schema={properties[item]}
              value={values[item] || null}
              required={state}
              errorSchema={errors[item]}
              rootSchema={this.rootSchema}
              onChange={v => this.handleChange(item, v)}
            />
          )
        })}
      </div>
    )
  }
}
</script>
