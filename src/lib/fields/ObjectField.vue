<script>
export default {
  name: 'ObjectField',
  props: {
    schema: Object,
    value: Object,
    errorSchema: Object
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
    return (
      <div>
        {Object.keys(properties).map((item, index) => {
          return (
            <Component
              key={index}
              schema={properties[item]}
              value={values[item] || null}
              errorSchema={errors[item]}
              onChange={v => this.handleChange(item, v)}
            />
          )
        })}
      </div>
    )
  }
}
</script>
