<template>
  <div class="quaternary-link-container">
    <h1 class="quaternary-link-text BodyLargeBold">{{ linktext }}</h1>
    <img alt="ChevronDownI542" :src="icon" class="quaternary-link-chevron-down" />
  </div>
</template>

<script>
export default {
  name: 'QuaternaryLink',
  props: {
    icon: {
      type: String,
      default: '/external/chevrondowni542-vuzo.svg',
    },
    linktext: {
      type: String,
      default: 'This is a quaternary link',
    },
  },
}
</script>

<style scoped>
.quaternary-link-container {
  width: auto;
  height: auto;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
}
.quaternary-link-text {
  fill: var(--dl-color-text-text-linkorange);
  color: var(--dl-color-text-text-linkorange);
  margin-right: var(--dl-space-space-halfunit);
}
.quaternary-link-chevron-down {
  width: 16px;
  height: 16px;
}
</style>
