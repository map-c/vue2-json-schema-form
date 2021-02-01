<script>
export default {
  name: 'StringField',
  inject: ['widget'],
  props: {
    value: String,
    schema: Object,
    required: Boolean,
    rootSchema: Object,
    errorSchema: Object
  },
  computed: {
    disabled() {
      console.log(this.schema.disabled)
      return !!this.schema.disabled
    }
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
    console.log('this.schema is', this.schema)

    const options = { required: this.required, disabled: this.disabled }
    console.log('options is', options)
    return (
      <Component
        schema={this.schema}
        value={this.value}
        error={this.errorSchema}
        options={options}
        onChange={v => this.handleInput(v)}
      />
    )
  }
}
</script>
