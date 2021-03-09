<template>
  <FormItem
    :title="title"
    :required="required"
    :errors="errorsMap"
    :readonly="false"
  >
    <InputNumber size="small" :value="value" @change="handleInput" />
  </FormItem>
</template>

<script>
import FormItem from './FormItemWrapper'
import { InputNumber } from 'element-ui'

export default {
  name: 'NumberWidget',
  components: {
    FormItem,
    InputNumber
  },
  props: {
    value: String,
    schema: Object,
    error: String,
    options: Object
  },
  computed: {
    title() {
      return this.schema && this.schema.title
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
  methods: {
    handleInput(value) {
      console.log('value change', value)
      this.$emit('change', value)
    }
  }
}
</script>
