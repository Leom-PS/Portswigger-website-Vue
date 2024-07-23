<template>
  <div class="header-dark-container" v-bind:class="rootClassName">
    <div class="header-dark-default-header">
      <img
        alt="LogosPortswigger7418"
        src="/ps-logo-dark.svg"
        class="header-dark-logos-portswigger"
      />
      <div class="header-dark-navigation">
        <div id="Solutions" class="header-dark-container1">
          <span id="Products" class="header-dark-text BodyLarge">
            {{ link1 }}
          </span>
          <img
            alt="ChevronDown7418"
            src="/chevron%20down.svg"
            class="header-dark-chevron-down"
          />
        </div>
        <div id="Solutions" class="header-dark-container2">
          <span id="Solutions" class="header-dark-text1 BodyLarge">
            {{ link2 }}
          </span>
          <img
            alt="ChevronDown7418"
            src="/chevron%20down.svg"
            class="header-dark-chevron-down1"
          />
        </div>
        <span id="Research" class="header-dark-text2 BodyLarge">{{ link3 }}</span>
        <span id="Academy" class="header-dark-text3 BodyLarge">{{ link4 }}</span>
        <div id="Solutions" class="header-dark-container3">
          <span id="Support" class="header-dark-text4 BodyLarge">
            {{ link5 }}
          </span>
          <img
            alt="ChevronDown7418"
            src="/chevron%20down.svg"
            class="header-dark-chevron-down2"
          />
        </div>
        <div id="Solutions" class="header-dark-container4">
          <span id="Resources" class="header-dark-text5 BodyLarge">
            {{ link6 }}
          </span>
          <img
            alt="ChevronDown7418"
            src="/chevron%20down.svg"
            class="header-dark-chevron-down3"
          />
        </div>
        <secondary-button-light
          buttontext1="Login"
          rootClassName="secondary-button-light-root-class-name1"
        ></secondary-button-light>
      </div>
    </div>
  </div>
</template>

<script>
import SecondaryButtonLight from './secondary-button-light'

export default {
  name: 'HeaderDark',
  props: {
    cTA: {
      type: String,
      default: 'Login',
    },
    link4: {
      type: String,
      default: 'Academy',
    },
    link6: {
      type: String,
      default: 'Resources',
    },
    link3: {
      type: String,
      default: 'Research',
    },
    imagesrc: {
      type: String,
      default: '6051c3b5-69b0-4461-81d7-9dc363de7c81',
    },
    imageAlt: {
      type: String,
      default: 'Portswigger',
    },
    link1: {
      type: String,
      default: 'Products',
    },
    link5: {
      type: String,
      default: 'Support',
    },
    rootClassName: String,
    link2: {
      type: String,
      default: 'Solutions',
    },
  },
  components: {
    SecondaryButtonLight,
  },
}
</script>

<style scoped>
.header-dark-container {
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.header-dark-default-header {
  gap: 80px;
  width: 100%;
  height: auto;
  display: flex;
  padding: 12px 0;
  align-items: center;
  flex-shrink: 0;
  justify-content: center;
}
.header-dark-logos-portswigger {
  width: 249px;
  height: 42px;
}
.header-dark-navigation {
  gap: 40px;
  display: flex;
  align-items: center;
}
.header-dark-container1 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.header-dark-text {
  fill: var(--dl-color-default-white);
  color: var(--dl-color-default-white);
  margin-right: var(--dl-space-space-halfunit);
}
.header-dark-chevron-down {
  width: 16px;
  height: 16px;
}
.header-dark-container2 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.header-dark-text1 {
  fill: var(--dl-color-default-white);
  color: var(--dl-color-default-white);
  margin-right: var(--dl-space-space-halfunit);
}
.header-dark-chevron-down1 {
  width: 16px;
  height: 16px;
  background-size: cover;
  background-image: url("/chevron%20down.svg");
}
.header-dark-text2 {
  fill: var(--dl-color-default-white);
  color: var(--dl-color-default-white);
  margin-right: 0px;
}
.header-dark-text3 {
  fill: var(--dl-color-default-white);
  color: var(--dl-color-default-white);
  margin-right: 0px;
}
.header-dark-container3 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.header-dark-text4 {
  fill: var(--dl-color-default-white);
  color: var(--dl-color-default-white);
  margin-right: var(--dl-space-space-halfunit);
}
.header-dark-chevron-down2 {
  width: 16px;
  height: 16px;
}
.header-dark-container4 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.header-dark-text5 {
  fill: var(--dl-color-default-white);
  color: var(--dl-color-default-white);
  margin-right: var(--dl-space-space-halfunit);
}
.header-dark-chevron-down3 {
  width: 16px;
  height: 16px;
}
.header-dark-root-class-name {
  margin-top: 32px;
  margin-bottom: 32px;
}
.header-dark-root-class-name1 {
  margin-top: 0px;
  margin-bottom: 0px;
  background-color: #3098F0;
}
.header-dark-root-class-name2 {
  margin-top: 0px;
  margin-bottom: 0px;
  background-color: #3098F0;
}
.header-dark-root-class-name3 {
  margin-top: 0px;
  margin-bottom: 0px;
  background-color: #635CD5;
}
</style>
