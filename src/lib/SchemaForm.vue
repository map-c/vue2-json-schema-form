<template>
  <form-item
    :schema="schema"
    :value="value"
    :errorSchema="errorSchema"
    :rootSchema="schema"
    @change="handleFormDataChange"
  />
</template>

<script>
import FormItem from './fields/FormItem'
import Widget from './widget/index'
import validator from './validator/index'

export default {
  name: 'SchemaForm',
  components: {
    FormItem
  },
  provide: {
    formItem: FormItem,
    widget: Widget
  },
  props: {
    schema: {
      type: Object,
      requried: true
    },
    value: {
      type: Object
    }
  },
  data() {
    return {
      errorSchema: {}
    }
  },
  methods: {
    handleFormDataChange(value) {
      const raw = {
        ...this.formData,
        ...value
      }
      this.$emit('change', raw)
    },
    validator() {
      const valid = validator({
        options: { allErrors: true },
        formats: [],
        keywords: []
      })
      const customValidate = formData => {
        console.log('form data is:', formData)
      }
      const res = valid(this.schema, this.value, customValidate)
      console.log('res is', res)
      if (!res.valid) {
        this.errorSchema = res.errors
      } else {
        this.errorSchema = null
      }
    }
  }
}
</script>
