<template>
  <div class="primary-button-light-container" v-bind:class="rootClassName">
    <button class="primary-button-light-button button">
      <span class="BodyLargeBold">{{ text }}</span>
      <img
        alt="ChevronRightI542"
        :src="iconright"
        class="primary-button-light-chevron-right"
      />
    </button>
  </div>
</template>

<script>
export default {
  name: 'PrimaryButtonLight',
  props: {
    text: {
      type: String,
      default: 'Buy - $399',
    },
    rootClassName: String,
    iconright: {
      type: String,
      default: '/external/chevronrighti542-b7be.svg',
    },
  },
}
</script>

<style scoped>
.primary-button-light-container {
  width: auto;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.primary-button-light-button {
  gap: 8px;
  width: 100%;
  height: auto;
  display: flex;
  padding: 12px 24px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 8px;
  justify-content: center;
  background-color: rgba(255, 255, 255, 1);
}
.primary-button-light-chevron-right {
  width: 16px;
  height: 16px;
}
.primary-button-light-root-class-name {
  margin-right: 0px;
}
</style>
