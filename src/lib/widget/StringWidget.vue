<template>
  <FormItem
    :title="title"
    :required="required"
    :errors="errorsMap"
    :readonly="false"
  >
    <Input
      size="small"
      :value="value"
      :disabled="disabled"
      @input="handleInput"
    />
  </FormItem>
</template>

<script>
import FormItem from './FormItemWrapper'
import { Input } from 'element-ui'

export default {
  name: 'StringWidget',
  components: {
    FormItem,
    Input
  },
  props: {
    value: String,
    schema: Object,
    error: Object,
    options: Object
  },
  computed: {
    title() {
      if (this.schema) {
        return this.schema.title
      }
      return 'title'
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
      this.$emit('change', value)
    }
  }
}
</script>

<style lang="scss" scoped>
.string-widget {
  margin: 0;
}
</style>
