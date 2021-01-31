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
    <div class="left-wrapper">
      <SchemaFrom
        class="form-wrapper"
        :schema="schema"
        :value="formData"
        @change="handleChange"
        ref="form"
      />
      <el-button @click="handleValidate">校验</el-button>
    </div>
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
        required: ['list'],
        properties: {
          list: {
            title: '名称',
            type: 'string',
            format: 'email',
            uiwidget: 'select'
          },
          code: {
            title: '年龄',
            type: 'number'
          },
          one: {
            title: '设置',
            type: 'boolean'
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
    },
    handleValidate() {
      const res = this.$refs.form.validator()
      console.log('res is', res)
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
  .left-wrapper {
    width: 50%;
    flex: 0 1 auto;
    .form-wrapper {
      margin: 0 20px;
    }
  }
}
</style>
