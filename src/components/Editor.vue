<template>
  <div class="container">
    <div class="title">{{ title }}</div>
    <div class="code-aaaa" ref="container" style="height:300px"></div>
  </div>
</template>

<script>
import * as monaco from 'monaco-editor'

export default {
  name: 'Editro',
  props: {
    value: String,
    title: String
  },
  data() {
    return {
      editor: {}
    }
  },
  watch: {
    value(val) {
      this.editor.setValue(val)
    }
  },
  mounted() {
    this.editor = monaco.editor.create(this.$refs.container, {
      value: this.value,
      language: 'json',
      formatOnPaste: true,
      tabSize: 2,
      theme: 'vs-dark',
      minimap: {
        enabled: false
      }
    })
    this.editor.onDidChangeModelContent(this.changeEditor)
  },
  beforeDestroy() {
    this.destroyEditor()
  },
  methods: {
    changeEditor() {
      const value = this.editor.getValue()
      this.$emit('change', value)
      this.editor.getAction('editor.action.formatDocument')._run()
    },
    destroyEditor() {
      this.editor.dispose()
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  .title {
    background-color: #eee;
    padding: 10px 0;
  }
  > .code-aaa {
    flex-grow: 1;
    text-align: left;
  }
}
</style>
