<script>
export default {
  name: 'NumberField',
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
    return <input type="number" value={this.value} onInput={this.handleInput} />
  }
}
</script>
