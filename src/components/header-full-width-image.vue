<template>
  <div class="header-full-width-image-container" v-bind:class="rootClassName">
    <h1 class="header-full-width-image-text Desktop-Heading1">{{ heading }}</h1>
    <img :alt="imageAlt" :src="imageSrc" class="header-full-width-image-image" />
  </div>
</template>

<script>
export default {
  name: 'HeaderFullWidthImage',
  props: {
    imageSrc: {
      type: String,
      default: '/yt-thumbnail-700h.png',
    },
    imageAlt: {
      type: String,
      default: 'image',
    },
    heading: {
      type: String,
      default: 'Sample heading goes here',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.header-full-width-image-container {
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: center;
  padding-top: 80px;
  padding-left: 80px;
  padding-right: 80px;
  flex-direction: column;
  padding-bottom: 80px;
}
.header-full-width-image-text {
  fill: var(--dl-color-text-text-headingnavy);
  color: var(--dl-color-text-text-headingnavy);
  width: 100%;
  align-self: center;
  text-align: center;
  margin-bottom: 40px;
}
.header-full-width-image-image {
  width: 1180px;
  height: 662px;
  object-fit: cover;
}
.header-full-width-image-root-class-name {
  margin-top: 40px;
  background-color: var(--dl-color-backgrounds-purple5);
}
.header-full-width-image-root-class-name1 {
  margin-top: 40px;
  background-color: var(--dl-color-backgrounds-purple5);
}
.header-full-width-image-root-class-name2 {
  margin-top: 40px;
  background-color: var(--dl-color-backgrounds-purple5);
}
</style>
