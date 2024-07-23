<template>
  <div class="trial-request-template2-container">
    <div class="trial-request-template2-container1">
      <star-rating-white
        quote="“Dramatically streamlined our security testing process”"
        rootClassName="star-rating-white-root-class-name6"
      ></star-rating-white>
      <star-rating-white
        quote="“Provides consistent and reliable security scans that our devs trust”"
        rootClassName="star-rating-white-root-class-name7"
      ></star-rating-white>
      <star-rating-white
        quote=" Transformed our overall security posture with automated testing"
        rootClassName="star-rating-white-root-class-name8"
      ></star-rating-white>
    </div>
    <div class="trial-request-template2-container2">
      <span class="trial-request-template2-text Desktop-Heading4">
        Burp Suite Enterprise Edition
      </span>
      <h2 class="trial-request-template2-text1 Desktop-Heading1">
        <span class="Desktop-Heading3">The </span>
        <span class="Desktop-Heading1">
          automated vulnerability scanner that 
        </span>
        <span class="Desktop-Heading1">scales across your enterprise.</span>
      </h2>
    </div>
    <div class="trial-request-template2-container3">
      <img
        alt="image"
        src="/enterprise-db-500h.png"
        class="trial-request-template2-image"
      />
      <div class="trial-request-template2-container4">
        <span class="trial-request-template2-text5 Desktop-Heading4Light">
          Request a fully-featured free trial
        </span>
        <input-field
          placeholder1="Placeholder"
          rootClassName="input-field-root-class-name4"
        ></input-field>
        <input-field
          placeholder="Email"
          rootClassName="input-field-root-class-name21"
        ></input-field>
        <span class="trial-request-template2-text6 BodyLargeBold">Industry</span>
        <select class="trial-request-template2-select">
          <option value="Advertising">Option 1</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
          <option value="Option 3">Option 3</option>
        </select>
        <primary-button-dark
          rootClassName="primary-button-dark-root-class-name7"
        ></primary-button-dark>
      </div>
    </div>
  </div>
</template>

<script>
import StarRatingWhite from '../components/star-rating-white'
import InputField from '../components/input-field'
import PrimaryButtonDark from '../components/primary-button-dark'

export default {
  name: 'TrialRequestTemplate2',
  props: {},
  components: {
    StarRatingWhite,
    InputField,
    PrimaryButtonDark,
  },
  metaInfo: {
    title: 'Trial-Request-template-2 - Portswigger website',
    meta: [
      {
        property: 'og:title',
        content: 'Trial-Request-template-2 - Portswigger website',
      },
    ],
  },
}
</script>

<style scoped>
.trial-request-template2-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-image: linear-gradient(45deg, rgb(19, 83, 185) 0.00%,rgb(26, 159, 255) 100.00%);
}
.trial-request-template2-container1 {
  width: 100%;
  height: auto;
  display: flex;
  margin-top: var(--dl-space-space-fourunits);
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-fourunits);
  flex-direction: row;
  justify-content: center;
}
.trial-request-template2-container2 {
  width: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.trial-request-template2-text {
  fill: #BBE2FC;
  color: #BBE2FC;
  text-align: left;
  margin-bottom: var(--dl-space-space-unit);
}
.trial-request-template2-text1 {
  fill: var(--dl-color-theme-neutral-light);
  color: var(--dl-color-theme-neutral-light);
  width: 800px;
  text-align: center;
  margin-bottom: var(--dl-space-space-threeunits);
}
.trial-request-template2-container3 {
  width: 1000PX;
  display: flex;
  margin-top: var(--dl-space-space-twounits);
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.trial-request-template2-image {
  width: 495px;
  height: 353px;
  object-fit: cover;
  margin-right: var(--dl-space-space-fiveunits);
}
.trial-request-template2-container4 {
  width: 357px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.trial-request-template2-text5 {
  fill: var(--dl-color-default-white);
  color: var(--dl-color-default-white);
  text-align: left;
  margin-bottom: var(--dl-space-space-oneandhalfunits);
}
.trial-request-template2-text6 {
  fill: var(--dl-color-default-white);
  color: var(--dl-color-default-white);
  width: 100%;
  line-height: 1.15;
  margin-bottom: var(--dl-space-space-halfunit);
  text-transform: none;
  text-decoration: none;
}
.trial-request-template2-select {
  width: 100%;
  height: 30px;
  border-color: var(--dl-color-text-tertiary);
  border-style: solid;
  border-width: 1px;
  margin-bottom: var(--dl-space-space-oneandhalfunits);
}
@media(max-width: 1600px) {
  .trial-request-template2-container2 {
    width: 800px;
    align-items: center;
  }
  .trial-request-template2-text1 {
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
  .trial-request-template2-container3 {
    width: auto;
    flex-direction: row;
  }
  .trial-request-template2-image {
    width: 605px;
    height: 431px;
    margin-right: var(--dl-space-space-fiveunits);
  }
  .trial-request-template2-container4 {
    width: 350px;
  }
}
</style>
