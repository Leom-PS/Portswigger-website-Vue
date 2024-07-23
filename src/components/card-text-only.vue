<template>
  <div class="card-text-only-container" v-bind:class="rootClassName">
    <div class="card-text-only-frame5512">
      <h1 class="Desktop-Heading4">{{ heading }}</h1>
      <span class="card-text-only-text1 HeadingHeading6Light">{{ text }}</span>
      <div class="card-text-only-container1">
        <span class="card-text-only-text2 BodyLargeBold">{{ link }}</span>
        <img
          alt="ChevronRightI175"
          src="/external/chevronrighti175-32xa.svg"
          class="card-text-only-chevron-right"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardTextOnly',
  props: {
    text: {
      type: String,
      default:
        'Learn the basics of Burp Suite Professional - with our series of beginner video tutorials.',
    },
    link: {
      type: String,
      default: 'Read more',
    },
    heading: {
      type: String,
      default: 'Video tutorials',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.card-text-only-container {
  width: auto;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.card-text-only-frame5512 {
  gap: 12px;
  width: 100%;
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
.card-text-only-text1 {
  fill: var(--dl-color-default-textsecondary);
  color: var(--dl-color-default-textsecondary);
}
.card-text-only-container1 {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}
.card-text-only-text2 {
  fill: var(--dl-color-text-text-linkorange);
  color: var(--dl-color-text-text-linkorange);
  margin-right: var(--dl-space-space-halfunit);
}
.card-text-only-chevron-right {
  width: 16px;
  height: 16px;
}
.card-text-only-root-class-name {
  width: 100%;
  margin-right: 20px;
}
.card-text-only-root-class-name1 {
  margin-right: 20px;
}
.card-text-only-root-class-name2 {
  margin-right: 0px;
}
.card-text-only-root-class-name3 {
  width: 100%;
}
.card-text-only-root-class-name4 {
  width: 100%;
  height: 100%;
  margin-right: 20px;
}
</style>
