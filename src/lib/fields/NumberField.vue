<script>
export default {
  name: 'NumberField',
  inject: ['widget'],
  props: {
    schema: Object,
    errorSchema: Object,
    value: Number
  },
  methods: {
    handleInput(event) {
      let value = event.target.value
      value = Number(value)
      if (isNaN(value)) {
        value = undefined
      }
      this.$emit('change', value)
    }
  },
  render() {
    const Component = this.widget.NumberWidget

    return (
      <Component
        schema={this.schema}
        type="number"
        value={this.value}
        onInput={this.handleInput}
      />
    )
  }
}
</script>
