<template>
  <div class="hero-banner-dark-container" v-bind:class="rootClassName">
    <div class="hero-banner-dark-container1">
      <div class="hero-banner-dark-container2">
        <h1 class="hero-banner-dark-text Desktop-Display1">{{ heading1 }}</h1>
        <span class="hero-banner-dark-text1 Desktop-Heading4Light">
          {{ copy }}
        </span>
        <secondary-button-dark
          rootClassName="secondary-button-dark-root-class-name1"
        ></secondary-button-dark>
      </div>
      <img
        alt="Tasksubmenu25003"
        :src="image"
        class="hero-banner-dark-tasksubmenu2"
      />
    </div>
  </div>
</template>

<script>
import SecondaryButtonDark from './secondary-button-dark'

export default {
  name: 'HeroBannerDark',
  props: {
    rootClassName: String,
    image: {
      type: String,
      default: '/external/tasksubmenu25003-fqk8-500w-500w.png',
    },
    heading1: {
      type: String,
      default: 'Sample heading goes here',
    },
    buttontext: {
      type: String,
      default: 'Button link',
    },
    copy: {
      type: String,
      default: 'Teasadsdad fsdfsfxt',
    },
  },
  components: {
    SecondaryButtonDark,
  },
}
</script>

<style scoped>
.hero-banner-dark-container {
  width: 1140px;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.hero-banner-dark-container1 {
  display: flex;
  align-self: flex-end;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
}
.hero-banner-dark-container2 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-right: var(--dl-space-space-fourunits);
  padding-right: 40px;
  flex-direction: column;
}
.hero-banner-dark-text {
  fill: var(--dl-color-default-white);
  color: var(--dl-color-default-white);
  width: 100%;
  align-self: flex-start;
  text-align: left;
  margin-bottom: 20px;
}
.hero-banner-dark-text1 {
  fill: var(--dl-color-default-white);
  color: var(--dl-color-default-white);
  text-align: left;
  margin-bottom: 20px;
}
.hero-banner-dark-tasksubmenu2 {
  width: 461px;
  height: 374px;
}
.hero-banner-dark-root-class-name {
  margin-top: 40px;
  margin-bottom: 40px;
}
.hero-banner-dark-root-class-name1 {
  margin-top: 40px;
  margin-bottom: 40px;
}
</style>
