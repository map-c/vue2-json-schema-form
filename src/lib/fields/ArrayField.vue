<script>
import ArrayWrapper from './ArrayWrapper'

export default {
  name: 'ArrayField',
  inject: ['formItem'],
  components: {
    ArrayWrapper
  },
  props: {
    schema: Object,
    value: null,
    errorSchema: Object
  },
  methods: {
    handleMulitChange(v, index) {
      const raw = Array.isArray(this.value) ? this.value : []
      raw[index] = v
      this.$emit('change', raw)
    },
    handleSingleChange(val, index) {
      const raw = this.value
      if (typeof val === 'object' && val !== null) {
        const tmp = raw[index]
        raw[index] = {
          ...tmp,
          ...val
        }
      } else {
        raw[index] = val
      }
      this.$emit('change', raw)
    },
    handleAdd(index) {
      const value = Array.isArray(this.value) ? this.value : []
      value.splice(index + 1, 0, undefined)
      this.$emit('change', value)
    },
    handleDelete(index) {
      const value = Array.isArray(this.value) ? this.value : []
      value.splice(index, 1)
      this.$emit('change', value)
    }
  },
  render() {
    const items = this.schema.items
    const isMulitType = Array.isArray(items)
    const isSingleType = typeof items === 'object' && !Array.isArray(items)
    if (isMulitType) {
      const currentValue = Array.isArray(this.value) ? this.value : []
      return (
        <div>
          {items.map((item, index) => {
            const Component = this.formItem
            return (
              <Component
                schema={item}
                value={currentValue[index]}
                errorSchema={{}}
                onChange={v => this.handleMulitChange(v, index)}
              />
            )
          })}
        </div>
      )
    } else if (isSingleType) {
      const value = this.value || []
      const Component = this.formItem
      const schema = this.schema.items
      if (value.length) {
        return (
          <div>
            {value.map((item, index) => {
              return (
                <ArrayWrapper
                  key={index}
                  onAdd={() => this.handleAdd(index)}
                  onDelete={() => this.handleDelete(index)}
                >
                  <Component
                    schema={schema}
                    value={item}
                    errorSchema={{}}
                    onChange={v => this.handleSingleChange(v, index)}
                  />
                </ArrayWrapper>
              )
            })}
          </div>
        )
      } else {
        return <button onclick={() => this.handleAdd(0)}>add</button>
      }
    }

    return <div>Array field</div>
  }
}
</script>
