<template>
  <div class="app-component-container">
    <div class="app-component-container1">
      <div class="app-component-container2">
        <star-rating-white
          quote="“Dramatically streamlined our security testing process”"
          rootClassName="star-rating-white-root-class-name30"
        ></star-rating-white>
        <star-rating-white
          quote="“Provides consistent and reliable security scans that our devs trust”"
          rootClassName="star-rating-white-root-class-name31"
        ></star-rating-white>
        <star-rating-white
          quote=" Transformed our overall security posture with automated testing"
          rootClassName="star-rating-white-root-class-name32"
        ></star-rating-white>
      </div>
      <div class="app-component-container3">
        <span class="app-component-text Desktop-Heading4">{{ text }}</span>
        <h2 class="app-component-text1">
          <span class="Desktop-Heading3">{{ text1 }}</span>
          <span class="Desktop-Heading1">{{ text2 }}</span>
          <span class="Desktop-Heading1">{{ text3 }}</span>
        </h2>
      </div>
      <div class="app-component-container4">
        <img :alt="imageAlt" :src="imageSrc" class="app-component-image" />
        <div class="app-component-container5">
          <span class="app-component-text5 Desktop-Heading4Light">
            {{ text4 }}
          </span>
          <input-field
            placeholder1="Placeholder"
            rootClassName="input-field-root-class-name15"
          ></input-field>
          <input-field
            placeholder="Email"
            rootClassName="input-field-root-class-name16"
          ></input-field>
          <span class="app-component-text6 BodyLargeBold">{{ text5 }}</span>
          <select class="app-component-select">
            <option value="Option 1">Option 1</option>
            <option value="Advertising">Option 1</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
            <option value="Option 3">Option 3</option>
            <option value="Option 3">Option 3</option>
          </select>
          <primary-button-dark
            rootClassName="primary-button-dark-root-class-name10"
          ></primary-button-dark>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRatingWhite from './star-rating-white'
import InputField from './input-field'
import PrimaryButtonDark from './primary-button-dark'

export default {
  name: 'AppComponent',
  props: {
    text1: {
      type: String,
      default: 'The ',
    },
    imageAlt: {
      type: String,
      default: 'image',
    },
    text4: {
      type: String,
      default: 'Request a fully-featured free trial',
    },
    text3: {
      type: String,
      default: 'scales across your enterprise.',
    },
    imageSrc: {
      type: String,
      default: '/enterprise-db-500h.png',
    },
    text: {
      type: String,
      default: 'Burp Suite Enterprise Edition',
    },
    text2: {
      type: String,
      default: 'automated vulnerability scanner that ',
    },
    text5: {
      type: String,
      default: 'Industry',
    },
  },
  components: {
    StarRatingWhite,
    InputField,
    PrimaryButtonDark,
  },
}
</script>

<style scoped>
.app-component-container {
  width: 100%;
  height: 400px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.app-component-container1 {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-image: linear-gradient(45deg, rgb(19, 83, 185) 0.00%,rgb(26, 159, 255) 100.00%);
}
.app-component-container2 {
  width: 100%;
  height: auto;
  display: flex;
  margin-top: var(--dl-space-space-fourunits);
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-fourunits);
  flex-direction: row;
  justify-content: center;
}
.app-component-container3 {
  width: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.app-component-text {
  fill: #BBE2FC;
  color: #BBE2FC;
  text-align: left;
  margin-bottom: var(--dl-space-space-unit);
}
.app-component-text1 {
  fill: var(--dl-color-theme-neutral-light);
  color: var(--dl-color-theme-neutral-light);
  width: 800px;
  text-align: center;
  margin-bottom: var(--dl-space-space-threeunits);
}
.app-component-container4 {
  width: 1000PX;
  display: flex;
  margin-top: var(--dl-space-space-twounits);
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.app-component-image {
  width: 495px;
  height: 353px;
  object-fit: cover;
  margin-right: var(--dl-space-space-fiveunits);
}
.app-component-container5 {
  width: 357px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.app-component-text5 {
  fill: var(--dl-color-default-white);
  color: var(--dl-color-default-white);
  text-align: left;
  margin-bottom: var(--dl-space-space-oneandhalfunits);
}
.app-component-text6 {
  fill: var(--dl-color-default-white);
  color: var(--dl-color-default-white);
  width: 100%;
  line-height: 1.15;
  margin-bottom: var(--dl-space-space-halfunit);
  text-transform: none;
  text-decoration: none;
}
.app-component-select {
  width: 100%;
  height: 30px;
  border-color: var(--dl-color-text-tertiary);
  border-style: solid;
  border-width: 1px;
  margin-bottom: var(--dl-space-space-oneandhalfunits);
}
@media(max-width: 1600px) {
  .app-component-container3 {
    width: 800px;
    align-items: center;
  }
  .app-component-text1 {
    color: var(--dl-color-theme-neutral-light);
    width: 100%;
    align-self: center;
    text-align: center;
    font-family: Roboto;
    font-weight: 700;
    line-height: 1.15;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-fiveunits);
    text-transform: none;
    text-decoration: none;
  }
  .app-component-container4 {
    width: auto;
    flex-direction: row;
  }
  .app-component-image {
    width: 605px;
    height: 431px;
    margin-right: var(--dl-space-space-fiveunits);
  }
  .app-component-container5 {
    width: 350px;
  }
}
</style>
