<template>
  <div class="array-wrapper">
    <div class="header">
      <button @click="handleAdd">新增</button>
      <button @click="handleDelete">删除</button>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ArrayWrapper',
  methods: {
    handleAdd() {
      this.$emit('add')
    },
    handleDelete() {
      this.$emit('delete')
    }
  }
}
</script>

<style lang="scss" scoped>
.array-wrapper {
  margin: 0;
}
</style>
