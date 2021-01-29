<script>
export default {
  name: 'BooleanField',
  props: {
    value: Boolean,
    schema: Object,
    errorSchema: Object
  },
  methods: {
    handleChange(event) {
      const value = event.target.value
      console.log('value is', value)
    }
  },
  render() {
    return (
      <div>
        <input
          id="radio"
          type="radio"
          value={this.vlaue}
          label="1"
          onChange={this.handleChange}
        />
        <label for="radio">nan</label>
      </div>
    )
  }
}
</script>
