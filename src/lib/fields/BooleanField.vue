<script>
export default {
  name: 'BooleanField',
  inject: ['widget'],
  props: {
    value: Boolean,
    schema: Object,
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
    return (
      <Component
        schema={this.schema}
        value={this.value}
        error={this.error}
        options={{}}
        onChange={v => this.handleChange(v)}
      />
    )
  }
}
</script>
