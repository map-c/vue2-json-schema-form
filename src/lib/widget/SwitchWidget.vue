<template>
  <FormItem :title="title" :error="error">
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
    }
  },
  methods: {
    handleChange(event) {
      this.$emit('change', event)
    }
  }
}
</script>

<style lang="scss" scoped>
.switch-widget {
  margin: 0;
}
</style>
