<template>
  <div id="app">
    <div class="aside">
      <Editor
        class="editor"
        title="schema"
        :value="schemaStr"
        @change="handleCodeChange"
      />
      <Editor class="editor" title="formData" :value="res" />
    </div>
    <SchemaFrom :schema="schema" :value="formData" @change="handleChange" />
  </div>
</template>

<script>
import Editor from '@/components/Editor'
import SchemaFrom from '@/lib/index'

export default {
  name: 'App',
  components: {
    Editor,
    SchemaFrom
  },
  computed: {
    res() {
      const data = this.formData
      return JSON.stringify(data, null, 2)
    },
    schemaStr() {
      const data = { ...this.schema }
      return JSON.stringify(data, null, 2)
    }
  },
  data() {
    return {
      codeValue: JSON.stringify(
        {
          name: 'code'
        },
        null,
        2
      ),
      schema: {
        type: 'object',
        properties: {
          list: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                code: {
                  title: '语言',
                  type: 'string'
                },
                value: {
                  title: '值',
                  type: 'string'
                }
              }
            }
          }
        }
      },
      formData: {}
    }
  },
  methods: {
    handleCodeChange(value) {
      console.log('code change is', value)
    },
    handleChange(value) {
      const raw = {
        ...this.formData,
        ...value
      }
      this.formData = raw
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: row;
  .aside {
    width: 50%;
  }
}
</style>
