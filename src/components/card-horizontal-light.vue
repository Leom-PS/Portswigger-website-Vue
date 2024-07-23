<template>
  <div class="card-horizontal-light-container" v-bind:class="rootClassName">
    <div class="card-horizontal-light-frame5496">
      <img
        :alt="imageAlt"
        :src="imagesrc"
        class="card-horizontal-light-image10"
      />
      <div class="card-horizontal-light-frame5495">
        <div class="card-horizontal-light-tags">
          <span class="card-horizontal-light-text BodySmallBold">
            <span>Scan scheduled</span>
          </span>
        </div>
        <h1 class="card-horizontal-light-text2 Desktop-Heading4">
          {{ heading }}
        </h1>
        <span class="card-horizontal-light-text3 HeadingHeading6Light">
          {{ bodycopy }}
        </span>
        <secondary-button-light
          rootClassName="secondary-button-light-root-class-name2"
        ></secondary-button-light>
      </div>
    </div>
  </div>
</template>

<script>
import SecondaryButtonLight from './secondary-button-light'

export default {
  name: 'CardHorizontalLight',
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
    heading: {
      type: String,
      default: 'Burp Suite roadmap update',
    },
    bodycopy: {
      type: String,
      default:
        'Get the inside scoop on the latest Burp Suite news, tech, and interviews - from right across the PortSwigger team.',
    },
  },
  components: {
    SecondaryButtonLight,
  },
}
</script>

<style scoped>
.card-horizontal-light-container {
  width: auto;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.card-horizontal-light-frame5496 {
  gap: 20px;
  width: 100%;
  height: auto;
  display: flex;
  padding: 28px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 8px;
}
.card-horizontal-light-image10 {
  width: 526px;
  height: 220px;
}
.card-horizontal-light-frame5495 {
  gap: 20px;
  width: auto;
  display: flex;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}
.card-horizontal-light-tags {
  gap: 8px;
  height: 20px;
  display: flex;
  padding: 4px 8px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 4px;
  background-color: rgba(19, 83, 185, 1);
}
.card-horizontal-light-text {
  color: rgba(255, 255, 255, 1);
  height: auto;
  text-align: left;
  line-height: 150%;
}
.card-horizontal-light-text2 {
  fill: var(--dl-color-text-text-headingnavy);
  color: var(--dl-color-text-text-headingnavy);
}
.card-horizontal-light-text3 {
  fill: var(--dl-color-default-textsecondary);
  color: var(--dl-color-default-textsecondary);
  width: auto;
}
.card-horizontal-light-root-class-name {
  margin-top: var(--dl-space-space-fiveunits);
  margin-bottom: var(--dl-space-space-fiveunits);
}
.card-horizontal-light-root-class-name1 {
  margin-top: var(--dl-space-space-fiveunits);
  margin-bottom: var(--dl-space-space-fiveunits);
}
</style>
