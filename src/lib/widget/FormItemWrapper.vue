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
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 40px;
  line-height: 40px;
  .label {
    width: 120px;
  }
  .content {
    width: calc(100% -120px);
  }
}
</style>
