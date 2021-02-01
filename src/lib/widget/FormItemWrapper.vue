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

<style lang="scss" scoped>
.form-item {
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 40px;
  line-height: 40px;
  .label {
    width: 120px;
  }
  .is-required::before {
    content: '*';
    color: red;
    margin-right: 5px;
  }
  .content {
    width: calc(100% -120px);
  }
}
</style>
