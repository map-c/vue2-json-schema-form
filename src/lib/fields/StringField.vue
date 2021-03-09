<script>
import { getWidget } from '../utils/index'

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
    let Component = null
    Component = getWidget(this.schema)
    if (!Component) {
      Component = this.widget.StringWidget
    }

    const options = { required: this.required, disabled: this.disabled }
    const enumMap = this.schema.enum ? this.schema.enum : []
    if (enumMap.length) {
      options.items = enumMap.map(item => ({ label: item, value: item }))
      Component = this.widget.SelectWidget
      console.log('Component is', Component)
    }
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
