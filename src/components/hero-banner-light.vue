<template>
  <div class="hero-banner-light-container">
    <div class="hero-banner-light-container1">
      <div class="hero-banner-light-container2">
        <h1 class="hero-banner-light-text Desktop-Display1">{{ heading1 }}</h1>
        <span class="hero-banner-light-text1 Desktop-Heading4Light">
          {{ copy }}
        </span>
        <primary-button-dark
          :buttontext="buttontext"
          rootClassName="primary-button-dark-root-class-name8"
        ></primary-button-dark>
      </div>
      <img
        alt="Tasksubmenu25003"
        :src="image"
        class="hero-banner-light-tasksubmenu2"
      />
    </div>
  </div>
</template>

<script>
import PrimaryButtonDark from './primary-button-dark'

export default {
  name: 'HeroBannerLight',
  props: {
    copy: {
      type: String,
      default: 'Teasadsdad fsdfsfxt',
    },
    rootClassName: String,
    heading1: {
      type: String,
      default: 'Sample heading goes here',
    },
    buttontext: {
      type: String,
      default: 'Button link',
    },
    image: {
      type: String,
      default: '/external/tasksubmenu25003-fqk8-500w-500w.png',
    },
  },
  components: {
    PrimaryButtonDark,
  },
}
</script>

<style scoped>
.hero-banner-light-container {
  width: 1140px;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.hero-banner-light-container1 {
  display: flex;
  align-self: flex-end;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
}
.hero-banner-light-container2 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-right: var(--dl-space-space-fourunits);
  padding-right: 40px;
  flex-direction: column;
}
.hero-banner-light-text {
  fill: var(--dl-color-text-text-headingnavy);
  color: var(--dl-color-text-text-headingnavy);
  width: 100%;
  align-self: flex-start;
  text-align: left;
  margin-bottom: 20px;
}
.hero-banner-light-text1 {
  fill: var(--dl-color-text-text-bodyprimary);
  color: var(--dl-color-text-text-bodyprimary);
  text-align: left;
  margin-bottom: 20px;
}
.hero-banner-light-tasksubmenu2 {
  width: 461px;
  height: 374px;
}
</style>
