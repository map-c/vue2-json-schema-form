<template>
  <div class="form-item">
    <div :class="['label', required ? 'is-required' : '']">{{ title }}</div>
    <div class="content">
      <slot />
    </div>
    <div class="error-wrapper">
      <span v-for="(item, index) in errors" :key="index"> {{ item }} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormItemWrapper',
  props: {
    title: String,
    errors: Array,
    required: Boolean
  }
}
</script>

<style lang="stylus" scoped>
.form-item {
  margin: 10px 0;
}
</style>
