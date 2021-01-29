<template>
  <div id="app">
    <Editor :value="codeValue" @change="handleCodeChange" />
  </div>
</template>

<script>
import Editor from '@/components/Editor'

export default {
  name: 'App',
  components: {
    Editor
  },
  data() {
    return {
      codeValue: JSON.stringify(
        {
          name: 'code'
        },
        null,
        2
      )
    }
  },
  methods: {
    handleCodeChange(value) {
      console.log('code change is', value)
    }
  }
}
</script>

<style lang="scss" scoped></style>
