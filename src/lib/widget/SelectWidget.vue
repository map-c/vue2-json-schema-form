<template>
  <FormItem
    :title="title"
    :required="required"
    :errors="errorsMap"
    :readonly="false"
  >
    <Select :value="value" @change="handleChange">
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
    },
    size() {
      if (this.options && this.options.size) {
        return this.options.size
      }
      return 'small'
    },
    errorsMap() {
      if (this.error && this.error.__errors) {
        return this.error.__errors
      }
      return []
    },
    required() {
      if (this.options && this.options.required) {
        return this.options.required
      }
      return false
    },
    disabled() {
      if (this.options && 'disabled' in this.options) {
        return this.options.disabled
      }
      return false
    }
  },
  handleChange(event) {
    this.$emit('change', event)
  }
}
</script>

<style lang="scss" scoped>
.select-widget {
  margin: 0;
}
</style>
