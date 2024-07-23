<template>
  <div class="card-horizontal-dark-container" v-bind:class="rootClassName">
    <div class="card-horizontal-dark-frame5496">
      <img :alt="imageAlt" :src="imagesrc" class="card-horizontal-dark-image10" />
      <div class="card-horizontal-dark-frame5495">
        <div class="card-horizontal-dark-tags">
          <span class="card-horizontal-dark-text BodySmallBold">
            <span>Scan scheduled</span>
          </span>
        </div>
        <h1 class="card-horizontal-dark-text2 Desktop-Heading4">{{ heading }}</h1>
        <span class="card-horizontal-dark-text3 HeadingHeading6Light">
          {{ bodycopy }}
        </span>
        <secondary-button-dark
          rootClassName="secondary-button-dark-root-class-name3"
        ></secondary-button-dark>
      </div>
    </div>
  </div>
</template>

<script>
import SecondaryButtonDark from './secondary-button-dark'

export default {
  name: 'CardHorizontalDark',
  props: {
    imageAlt: {
      type: String,
      default: 'image103425',
    },
    rootClassName: String,
    imagesrc: {
      type: String,
      default: '/external/image103425-mpks-300h.png',
    },
    bodycopy: {
      type: String,
      default:
        'Get the inside scoop on the latest Burp Suite news, tech, and interviews - from right across the PortSwigger team.',
    },
    heading: {
      type: String,
      default: 'Burp Suite roadmap update',
    },
  },
  components: {
    SecondaryButtonDark,
  },
}
</script>

<style scoped>
.card-horizontal-dark-container {
  width: auto;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.card-horizontal-dark-frame5496 {
  gap: 20px;
  width: 1000px;
  height: auto;
  display: flex;
  padding: 28px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 8px;
}
.card-horizontal-dark-image10 {
  width: 526px;
  height: 220px;
}
.card-horizontal-dark-frame5495 {
  gap: 20px;
  width: 395px;
  display: flex;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}
.card-horizontal-dark-tags {
  gap: 8px;
  height: 20px;
  display: flex;
  padding: 4px 8px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 4px;
  background-color: rgba(19, 83, 185, 1);
}
.card-horizontal-dark-text {
  color: rgba(255, 255, 255, 1);
  height: auto;
  text-align: left;
  line-height: 150%;
}
.card-horizontal-dark-text2 {
  fill: var(--dl-color-default-white);
  color: var(--dl-color-default-white);
}
.card-horizontal-dark-text3 {
  fill: var(--dl-color-default-white);
  color: var(--dl-color-default-white);
  width: 100%;
}
</style>
