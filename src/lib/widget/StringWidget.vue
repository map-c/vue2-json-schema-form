<template>
  <FormItem :title="title" :error="error">
    <input type="text" :value="value" />
  </FormItem>
</template>

<script>
import FormItem from './FormItemWrapper'

export default {
  name: 'StringWidget',
  components: {
    FormItem
  },
  props: {
    value: String,
    schema: Object,
    error: String,
    options: Object
  },
  computed: {
    title() {
      return (this.schema && this.schema.title) || ''
    }
  }
}
</script>

<style lang="scss" scoped>
.string-widget {
  margin: 0;
}
</style>
