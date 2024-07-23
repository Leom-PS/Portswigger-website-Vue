<template>
  <div class="secondary-button-dark-container" v-bind:class="rootClassName">
    <button class="secondary-button-dark-button button">
      <span class="secondary-button-dark-text BodyLarge">{{ cTAtext }}</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'SecondaryButtonDark',
  props: {
    cTAtext: {
      type: String,
      default: 'Button text',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.secondary-button-dark-container {
  width: auto;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.secondary-button-dark-button {
  gap: 8px;
  width: auto;
  height: auto;
  display: flex;
  padding: 12px 24px;
  align-items: center;
  flex-shrink: 0;
  border-color: rgba(255, 255, 255, 1);
  border-style: solid;
  border-width: 1.5px;
  border-radius: 8px;
  justify-content: center;
  background-color: transparent;
}
.secondary-button-dark-text {
  fill: var(--dl-color-default-white);
  color: var(--dl-color-default-white);
}
.secondary-button-dark-root-class-name {
  margin-right: 20px;
}

.secondary-button-dark-root-class-name2 {
  margin-right: 20px;
}

</style>
