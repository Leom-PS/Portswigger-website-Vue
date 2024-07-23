<template>
  <div class="headshot-set-of-3-container" v-bind:class="rootClassName">
    <img :alt="imageAlt" :src="imageSrc" class="headshot-set-of-3-image" />
    <h1 class="headshot-set-of-3-text Desktop-Heading5">{{ heading }}</h1>
    <div class="headshot-set-of-3-container1">
      <h1 class="headshot-set-of-3-text1 BodyLargeBold">{{ linktext }}</h1>
      <img
        alt="ChevronDownI542"
        :src="linkicon"
        class="headshot-set-of-3-chevron-down"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeadshotSetOf3',
  props: {
    rootClassName: String,
    linkicon: {
      type: String,
      default: '/external/chevrondowni542-vuzo.svg',
    },
    imageAlt: {
      type: String,
      default: 'image',
    },
    heading: {
      type: String,
      default: 'Heading goes here',
    },
    linktext: {
      type: String,
      default: 'This is a quaternary link',
    },
    imageSrc: {
      type: String,
      default: '/corey-ball-200w.png',
    },
  },
}
</script>

<style scoped>
.headshot-set-of-3-container {
  width: auto;
  height: auto;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  min-width: 250px;
  min-height: 100%;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  flex-direction: column;
  justify-content: flex-start;
}
.headshot-set-of-3-image {
  width: 200px;
  object-fit: cover;
}
.headshot-set-of-3-text {
  fill: var(--dl-color-text-text-headingnavy);
  color: var(--dl-color-text-text-headingnavy);
  align-self: center;
  margin-top: 20px;
  text-align: center;
  margin-bottom: 20px;
}
.headshot-set-of-3-container1 {
  width: auto;
  height: auto;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
}
.headshot-set-of-3-text1 {
  fill: var(--dl-color-text-text-linkorange);
  color: var(--dl-color-text-text-linkorange);
  margin-right: var(--dl-space-space-halfunit);
}
.headshot-set-of-3-chevron-down {
  width: 16px;
  height: 16px;
}
.headshot-set-of-3-root-class-name {
  width: 100%;
}
.headshot-set-of-3-root-class-name1 {
  width: 100%;
}
.headshot-set-of-3-root-class-name2 {
  width: 100%;
}
.headshot-set-of-3-root-class-name3 {
  width: 100%;
}
.headshot-set-of-3-root-class-name4 {
  width: 100%;
}
.headshot-set-of-3-root-class-name5 {
  width: 100%;
}
</style>
