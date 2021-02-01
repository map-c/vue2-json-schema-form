<script>
export default {
  name: 'BooleanField',
  inject: ['widget'],
  props: {
    value: Boolean,
    schema: Object,
    required: Boolean,
    errorSchema: Object
  },
  methods: {
    handleChange(event) {
      const value = event
      this.$emit('change', value)
    }
  },
  render() {
    const Component = this.widget.SwitchWidget
    const options = { required: this.required }
    return (
      <Component
        schema={this.schema}
        value={this.value}
        error={this.error}
        options={options}
        onChange={v => this.handleChange(v)}
      />
    )
  }
}
</script>
