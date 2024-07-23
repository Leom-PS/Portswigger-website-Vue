<template>
  <div class="secondary-button-light-container" v-bind:class="rootClassName">
    <button class="secondary-button-light-button button">
      <span class="secondary-button-light-text BodyLargeBold">
        {{ buttontext1 }}
      </span>
      <img
        alt="ChevronRight1151"
        :src="chevronRightSrc1"
        class="secondary-button-light-chevron-right"
      />
    </button>
  </div>
</template>

<script>
export default {
  name: 'SecondaryButtonLight',
  props: {
    buttontext1: {
      type: String,
      default: 'Buy - $399',
    },
    chevronRightSrc1: {
      type: String,
      default: '/external/chevronright1151-t4lc.svg',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.secondary-button-light-container {
  width: auto;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.secondary-button-light-button {
  gap: 8px;
  width: auto;
  height: auto;
  display: flex;
  padding: 12px 24px;
  align-items: center;
  flex-shrink: 0;
  border-color: var(--dl-color-text-text-linkorange);
  border-radius: 8px;
  justify-content: center;
  background-color: rgba(255, 255, 255, 1);
}
.secondary-button-light-text {
  fill: var(--dl-color-text-text-linkorange);
  color: var(--dl-color-text-text-linkorange);
}
.secondary-button-light-chevron-right {
  width: 16px;
  height: 16px;
}


</style>
