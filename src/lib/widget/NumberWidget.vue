<template>
  <FormItem :title="title" :error="error">
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
