<script>
export default {
  name: 'StringField',
  props: {
    schema: Object,
    errorSchema: Object,
    value: String
  },
  methods: {
    handleInput(event) {
      let value = event.target.value
      if (!value) {
        value = ''
      }
      this.$emit('change', value)
    }
  },
  render() {
    return <input value={this.value} onInput={this.handleInput} />
  }
}
</script>
