<template>
  <div class="list-item-with-icon-light-container" v-bind:class="rootClassName">
    <div class="list-item-with-icon-light-frame1">
      <img
        :alt="imageAlt"
        :src="imageSrc"
        class="list-item-with-icon-light-image"
      />
      <span class="list-item-with-icon-light-text BodyLarge">{{ text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListItemWithIconLight',
  props: {
    text: {
      type: String,
      default: 'Secure your whole web portfolio',
    },
    rootClassName: String,
    imageSrc: {
      type: String,
      default: '/check%20in%20circle%20outlined-light.svg',
    },
    imageAlt: {
      type: String,
      default: 'image',
    },
  },
}
</script>

<style scoped>
.list-item-with-icon-light-container {
  width: auto;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.list-item-with-icon-light-frame1 {
  gap: 20px;
  width: 100%;
  height: auto;
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
}
.list-item-with-icon-light-image {
  width: 24px;
  height: 24px;
  object-fit: cover;
}
.list-item-with-icon-light-text {
  fill: var(--dl-color-text-text-bodyprimary);
  color: var(--dl-color-text-text-bodyprimary);
}
</style>
