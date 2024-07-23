<template>
  <div class="card-portrait-container" v-bind:class="rootClassName">
    <div class="card-portrait-frame5512">
      <img :alt="imageAlt" :src="imageSrc" class="card-portrait-image" />
      <h1 class="Desktop-Heading4">{{ heading }}</h1>
      <span class="card-portrait-text1 HeadingHeading6Light">{{ text }}</span>
      <div class="card-portrait-container1">
        <span class="card-portrait-text2 BodyLargeBold">{{ link }}</span>
        <img
          alt="ChevronRightI175"
          src="/external/chevronrighti175-32xa.svg"
          class="card-portrait-chevron-right"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardPortrait',
  props: {
    text: {
      type: String,
      default:
        'Learn the basics of Burp Suite Professional - with our series of beginner video tutorials.',
    },
    rootClassName: String,
    imageSrc: {
      type: String,
      default: '/card-image-example-300h.png',
    },
    imageAlt: {
      type: String,
      default: 'image',
    },
    link: {
      type: String,
      default: 'Read more',
    },
    heading: {
      type: String,
      default: 'Video tutorials',
    },
  },
}
</script>

<style scoped>
.card-portrait-container {
  width: auto;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.card-portrait-frame5512 {
  gap: 12px;
  width: auto;
  height: auto;
  display: flex;
  padding: 28px;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: rgba(223, 224, 225, 1);
  border-style: solid;
  border-width: 1px;
  padding-left: 28px;
  border-radius: 8px;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 1);
}
.card-portrait-image {
  width: 100%;
  height: 276px;
  object-fit: cover;
}
.card-portrait-text1 {
  fill: var(--dl-color-default-textsecondary);
  color: var(--dl-color-default-textsecondary);
}
.card-portrait-container1 {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}
.card-portrait-text2 {
  fill: var(--dl-color-text-text-linkorange);
  color: var(--dl-color-text-text-linkorange);
  margin-right: var(--dl-space-space-halfunit);
}
.card-portrait-chevron-right {
  width: 16px;
  height: 16px;
}
.card-portrait-root-class-name {
  width: 100%;
  margin-right: 20PX;
}
.card-portrait-root-class-name1 {
  width: 100%;
}
.card-portrait-root-class-name2 {
  width: 100%;
  height: 100%;
  margin-right: 20PX;
}
.card-portrait-root-class-name3 {
  width: 100%;
  margin-right: 20PX;
}
.card-portrait-root-class-name4 {
  width: 100%;
  margin-right: 20PX;
}
.card-portrait-root-class-name5 {
  width: 100%;
  margin-right: 20PX;
}
.card-portrait-root-class-name6 {
  width: 100%;
  height: 100%;
  margin-right: 20PX;
}
.card-portrait-root-class-name7 {
  width: 100%;
}
.card-portrait-root-class-name8 {
  width: 100%;
  margin-right: 20PX;
}
.card-portrait-root-class-name9 {
  width: 100%;
  margin-right: 20PX;
}
</style>
