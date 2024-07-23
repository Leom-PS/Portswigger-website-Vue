<template>
  <div class="client-logos-container" v-bind:class="rootClassName">
    <img
      :alt="component2Alt"
      :src="component2Src"
      class="client-logos-component2"
    />
  </div>
</template>

<script>
export default {
  name: 'ClientLogos',
  props: {
    rootClassName: String,
    component2Alt: {
      type: String,
      default: 'Component24173',
    },
    component2Src: {
      type: String,
      default: '/external/component24173-93hn.svg',
    },
  },
}
</script>

<style scoped>
.client-logos-container {
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.client-logos-component2 {
  width: 1985px;
  height: 32px;
}
.client-logos-root-class-name {
  margin-bottom: 100px;
}
</style>
