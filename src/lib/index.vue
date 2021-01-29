<template>
  <form-item
    :schema="schema"
    :value="value"
    :errorSchema="errorSchema"
    @change="handleFormDataChange"
  />
</template>

<script>
import FormItem from '@/lib/fields/FormItem'

export default {
  name: 'SchemaForm',
  components: {
    FormItem
  },
  provide: {
    formItem: FormItem
  },
  props: {
    schema: {
      type: Object,
      requried: true
    },
    value: {
      type: Object
    },
    errorSchema: {
      type: Object
    }
  },
  methods: {
    handleFormDataChange(value) {
      console.log('form Data change', value)
      const raw = {
        ...this.formData,
        ...value
      }
      this.$emit('change', raw)
    }
  }
}
</script>

<style lang="scss" scoped>
.schema-form {
  margin: 0;
}
</style>
