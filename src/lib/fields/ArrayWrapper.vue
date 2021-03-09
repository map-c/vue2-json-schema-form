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
      this.$emit('add', this.value.length)
    },
    handleDelete() {
      this.$emit('delete', this.value.length)
    },
    handleChange(val, index) {
      const values = this.value.map(item => ({ ...item }))
      values[index] = val
      this.$emit('change', values)
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
  height: 30px;
  line-height: 30px;
}
</style>
