<template>
  <div class="list-item-with-icon-dark-container" v-bind:class="rootClassName">
    <div class="list-item-with-icon-dark-frame1">
      <img
        alt="CheckInCircleOutlined1216"
        src="/external/checkincircleoutlined1216-agf1.svg"
        class="list-item-with-icon-dark-check-in-circle-outlined"
      />
      <span class="list-item-with-icon-dark-text BodyLarge">{{ text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListItemWithIconDark',
  props: {
    text: {
      type: String,
      default: 'Secure your whole web portfolio',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.list-item-with-icon-dark-container {
  width: auto;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.list-item-with-icon-dark-frame1 {
  gap: 20px;
  width: 100%;
  height: auto;
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
}
.list-item-with-icon-dark-check-in-circle-outlined {
  width: 24px;
  height: 24px;
}
.list-item-with-icon-dark-text {
  fill: var(--dl-color-theme-neutral-light);
  color: var(--dl-color-theme-neutral-light);
}
.list-item-with-icon-dark-root-class-name {
  margin-bottom: 32px;
}
.list-item-with-icon-dark-root-class-name1 {
  margin-bottom: 32px;
}

.list-item-with-icon-dark-root-class-name3 {
  margin-bottom: 32px;
}
.list-item-with-icon-dark-root-class-name4 {
  margin-bottom: 32px;
}

.list-item-with-icon-dark-root-class-name6 {
  margin-bottom: 32px;
}
.list-item-with-icon-dark-root-class-name7 {
  margin-bottom: 32px;
}

.list-item-with-icon-dark-root-class-name9 {
  margin-bottom: 32px;
}
.list-item-with-icon-dark-root-class-name10 {
  margin-bottom: 32px;
}

.list-item-with-icon-dark-root-class-name12 {
  margin-bottom: 32px;
}
.list-item-with-icon-dark-root-class-name13 {
  margin-bottom: 32px;
}

.list-item-with-icon-dark-root-class-name15 {
  margin-bottom: 32px;
}
.list-item-with-icon-dark-root-class-name16 {
  margin-bottom: 32px;
}

</style>
