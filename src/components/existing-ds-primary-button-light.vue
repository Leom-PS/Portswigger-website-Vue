<template>
  <div
    class="existing-ds-primary-button-light-container"
    v-bind:class="rootClassName"
  >
    <button class="existing-ds-primary-button-light-buttons button">
      <span class="existing-ds-primary-button-light-text">{{ buttontext }}</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ExistingDSPrimaryButtonLight',
  props: {
    rootClassName: String,
    buttontext: {
      type: String,
      default: 'SOMETHING',
    },
  },
}
</script>

<style scoped>
.existing-ds-primary-button-light-container {
  width: auto;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.existing-ds-primary-button-light-buttons {
  gap: 10px;
  width: 100%;
  height: auto;
  display: flex;
  padding: 10px 20px;
  align-items: center;
  flex-shrink: 0;
  border-width: 0px;
  border-radius: 100px;
  justify-content: center;
  background-color: var(--dl-color-default-orange1ff6633);
}
.existing-ds-primary-button-light-text {
  fill: var(--dl-color-default-white);
  color: var(--dl-color-default-white);
  font-style: normal;
  font-family: "Arial";
  font-weight: 700;
}

</style>
