<template>
  <FormItem :title="title">
    <Select :value="value">
      <Option
        v-for="item in items"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></Option>
    </Select>
  </FormItem>
</template>

<script>
import { Select, Option } from 'element-ui'
import FormItem from './FormItemWrapper'

export default {
  name: 'SelectWidget',
  props: {
    schema: Object,
    value: Boolean,
    options: Object,
    error: String
  },
  components: {
    FormItem,
    Select,
    Option
  },
  computed: {
    title() {
      if (this.schema && this.schema.title) {
        return this.schema.title
      }
      return ''
    },
    items() {
      if (this.options && Array.isArray(this.options.items)) {
        return this.options.items
      }
      return []
    }
  }
}
</script>

<style lang="scss" scoped>
.select-widget {
  margin: 0;
}
</style>
