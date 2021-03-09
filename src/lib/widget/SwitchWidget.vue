<template>
  <FormItem :title="title" :error="error" :required="required">
    <ElSwitch :value="value" @change="handleChange" />
  </FormItem>
</template>

<script>
// import { Switch } from 'element-ui'
import FormItem from './FormItemWrapper'

export default {
  name: 'SwitchWidget',
  components: {
    FormItem
  },
  props: {
    schema: Object,
    error: String,
    value: Boolean,
    options: Object
  },
  computed: {
    title() {
      if (this.schema && this.schema.title) {
        return this.schema.title
      }
      return ''
    },
    required() {
      console.log('options is', this.options.required)
      if (this.options) {
        return !!this.options.required
      }
      return false
    }
  },
  methods: {
    handleChange(event) {
      this.$emit('change', event)
    }
  }
}
</script>
