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
import Widget from '@/lib/widget/index'
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
    },
    errorSchema: {
      type: Object
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
        formats: [
          {
            name: 'test',
            definition: data => {
              return data === '123'
            }
          }
        ],
        keywords: [
          {
            keyword: 'uiwidget',
            type: 'string',
            schemaType: 'string',
            code: () => true
          }
        ]
      })
      const res = valid(this.schema, this.value)
      console.log('res is', res)
    }
  }
}
</script>

<style lang="scss" scoped>
.schema-form {
  margin: 0;
}
</style>
