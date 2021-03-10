<script>
export default {
  name: 'ArrayWrapper',
  props: {
    schema: null,
    title: String,
    value: null
  },
  inject: ['formItem'],
  data() {
    return {}
  },
  methods: {
    handleAdd() {
      if (this.value.length) {
        this.$emit('add', this.value.length)
      } else {
        this.$emit('add')
      }
    },
    handleDelete() {
      this.$emit('delete', this.value.length - 1)
    },
    handleChange(val, index) {
      let value = null
      const oldValue = this.value[index]
      if (typeof oldValue !== 'object') {
        value = val
      } else {
        value = {
          ...oldValue,
          ...val
        }
      }
      this.$emit('change', { value, index })
    }
  },
  render() {
    const Component = this.formItem
    const value = this.value
    const schema = this.schema.items
    if (this.value && value.length) {
      return (
        <div class="array-wrapper">
          <div class="header">
            <div class="label">{this.title}</div>
            <div class="handler">
              <span class="item" onClick={this.handleAdd}>
                新增
              </span>
              <span class="item" onClick={this.handleDelete}>
                删除
              </span>
            </div>
          </div>
          {value.map((item, index) => {
            return (
              <Component
                class="array-item"
                schema={schema}
                key={index}
                value={item}
                onChange={val => this.handleChange(val, index)}
              />
            )
          })}
        </div>
      )
    } else {
      return (
        <div class="array-wrapper">
          <div class="header">
            <div class="label">{this.title}</div>
            <span class="item" onClick={this.handleAdd}>
              新增
            </span>
          </div>
        </div>
      )
    }
  }
}
</script>

<style lang="stylus" scoped>
.array-wrapper {
  margin: 0;
}
.array-wrapper .header {
  box-sizing: border-box;
  padding: 5px 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  background-color: #e3e3e3;
  .item {
    margin: 0 5px;
    &:hover {
      cursor: pointer;
    }
  }
}
.array-item {
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 40px;
  line-height: 40px;
  >>> .form-item {
    margin: 0;
  }
}
</style>
