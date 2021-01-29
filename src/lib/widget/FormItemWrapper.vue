<template>
  <div class="form-item">
    <div class="label">{{ title }}</div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormItemWrapper',
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
.form-item {
  margin: 0;
}
</style>
