<template>
  <div class="primary-button-dark-container" v-bind:class="rootClassName">
    <button type="button" class="primary-button-dark-button button">
      <span class="primary-button-dark-text BodyLargeBold">{{ buttontext }}</span>
      <img
        alt="ChevronRightI121"
        src="/external/chevronrighti121-blkr.svg"
        class="primary-button-dark-chevron-right"
      />
    </button>
  </div>
</template>

<script>
export default {
  name: 'PrimaryButtonDark',
  props: {
    rootClassName: String,
    buttontext: {
      type: String,
      default: 'Book a demo',
    },
  },
}
</script>

<style scoped>
.primary-button-dark-container {
  width: auto;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.primary-button-dark-button {
  gap: 8px;
  width: auto;
  height: auto;
  display: flex;
  padding: 12px 24px;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
  border-width: 0px;
  border-radius: 8px;
  justify-content: center;
  background-color: rgba(255, 102, 51, 1);
}
.primary-button-dark-text {
  fill: var(--dl-color-theme-neutral-light);
  color: var(--dl-color-theme-neutral-light);
}
.primary-button-dark-chevron-right {
  width: 16px;
  height: 16px;
}
.primary-button-dark-root-class-name {
  width: 100%;
  margin-top: var(--dl-space-space-unit);
}
.primary-button-dark-root-class-name1 {
  width: 100%;
}
.primary-button-dark-root-class-name2 {
  width: 100%;
}

.primary-button-dark-root-class-name4 {
  width: 100%;
}

.primary-button-dark-root-class-name6 {
  width: 100%;
}
.primary-button-dark-root-class-name7 {
  width: 100%;
  margin-top: var(--dl-space-space-unit);
}


.primary-button-dark-root-class-name10 {
  width: 100%;
  margin-top: var(--dl-space-space-unit);
}
.primary-button-dark-root-class-name11 {
  margin-bottom: 80px;
}
.primary-button-dark-root-class-name12 {
  margin-bottom: 80px;
}
.primary-button-dark-root-class-name13 {
  width: 100%;
  margin-top: var(--dl-space-space-unit);
}
.primary-button-dark-root-class-name14 {
  width: 100%;
  margin-top: var(--dl-space-space-unit);
}
</style>
