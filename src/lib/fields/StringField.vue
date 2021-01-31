<script>
export default {
  name: 'StringField',
  inject: ['widget'],
  props: {
    schema: Object,
    errorSchema: Object,
    value: String
  },
  methods: {
    handleInput(event) {
      let value = event
      if (!value) {
        value = ''
      }
      this.$emit('change', value)
    }
  },
  render() {
    const Component = this.widget.StringWidget

    return (
      <Component
        schema={this.schema}
        value={this.value}
        onChange={v => this.handleInput(v)}
      />
    )
  }
}
</script>
