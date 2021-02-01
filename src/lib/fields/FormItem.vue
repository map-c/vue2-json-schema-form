<script>
import StringField from '@/lib/fields/StringField'
import NumberField from '@/lib/fields/NumberField'
import BooleanField from '@/lib/fields/BooleanField'
import ArrayField from '@/lib/fields/ArrayField'
import ObjectField from '@/lib/fields/ObjectField'
import TYPE from '@/lib/constants/fieldType'

export default {
  name: 'FormItem',
  props: {
    schema: Object,
    value: null,
    required: Boolean,
    errorSchema: Object,
    rootSchema: Object
  },
  methods: {
    handleChange(value) {
      this.$emit('change', value)
    }
  },
  render() {
    let Component = null
    const type = this.schema.type
    switch (type) {
      case TYPE.STRING:
        Component = StringField
        break
      case TYPE.NUMBER:
        Component = NumberField
        break
      case TYPE.BOOLEAN:
        Component = BooleanField
        break
      case TYPE.ARRAY:
        Component = ArrayField
        break
      case TYPE.OBJECT:
        Component = ObjectField
        break
      default:
        console.warn(`不支持该字段: ${type}`)
    }
    const schema = this.schema
    return (
      <Component
        schema={schema}
        value={this.value}
        required={this.required}
        rootSchema={schema}
        errorSchema={this.errorSchema}
        onChange={v => this.handleChange(v)}
      />
    )
  }
}
</script>

<style lang="scss" scoped>
.form-item {
  margin: 0;
}
</style>
