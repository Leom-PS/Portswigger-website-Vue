<template>
  <div class="footer-column-title-container" v-bind:class="rootClassName">
    <p class="footer-column-title-text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'FooterColumnTitle',
  props: {
    rootClassName: String,
    text: {
      type: String,
      default: 'Header1',
    },
  },
}
</script>

<style scoped>
.footer-column-title-container {
  display: flex;
  position: relative;
}
.footer-column-title-text {
  font-size: 13px;
  margin-top: 8px;
  font-weight: bold;
  margin-bottom: 8px;
}
.footer-column-title-root-class-name {
  fill: var(--dl-color-text-text-bodyprimary);
  color: var(--dl-color-text-text-bodyprimary);
}
.footer-column-title-root-class-name1 {
  fill: var(--dl-color-text-text-bodyprimary);
  color: var(--dl-color-text-text-bodyprimary);
}
.footer-column-title-root-class-name2 {
  fill: var(--dl-color-text-text-bodyprimary);
  color: var(--dl-color-text-text-bodyprimary);
}
.footer-column-title-root-class-name3 {
  fill: var(--dl-color-text-text-bodyprimary);
  color: var(--dl-color-text-text-bodyprimary);
}
.footer-column-title-root-class-name4 {
  fill: var(--dl-color-text-text-bodyprimary);
  color: var(--dl-color-text-text-bodyprimary);
}
</style>
