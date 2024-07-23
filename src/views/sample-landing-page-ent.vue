<template>
  <div class="sample-landing-page-ent-container">
    <div class="sample-landing-page-ent-container1">
      <header-dark rootClassName="header-dark-root-class-name1"></header-dark>
      <div class="sample-landing-page-ent-container2">
        <star-rating-white
          quote="“Burp Suite turns our web security testing into a comprehensive, seamless process”"
          rootClassName="star-rating-white-root-class-name21"
        ></star-rating-white>
        <star-rating-white
          quote="“SaaS model and AI integration mark a thrilling evolution for our security”"
          rootClassName="star-rating-white-root-class-name22"
        ></star-rating-white>
        <star-rating-white
          quote="“Burp's automated scanning gives us confidence in our app's security posture”"
          rootClassName="star-rating-white-root-class-name23"
        ></star-rating-white>
      </div>
      <h1 class="sample-landing-page-ent-text Desktop-Heading4">
        Burp Suite Enterprise Edition
      </h1>
      <h1 class="sample-landing-page-ent-text1 Desktop-Display1">
        Unburden your security team, empower your developers
      </h1>
      <div class="sample-landing-page-ent-container3">
        <secondary-button-dark
          cTAtext="Pricing and plans"
          rootClassName="secondary-button-dark-root-class-name"
        ></secondary-button-dark>
        <primary-button-dark
          rootClassName="primary-button-dark-root-class-name5"
        ></primary-button-dark>
      </div>
      <img
        alt="image"
        src="/enterprise-fw-screen.svg"
        class="sample-landing-page-ent-image"
      />
    </div>
  </div>
</template>

<script>
import HeaderDark from '../components/header-dark'
import StarRatingWhite from '../components/star-rating-white'
import SecondaryButtonDark from '../components/secondary-button-dark'
import PrimaryButtonDark from '../components/primary-button-dark'

export default {
  name: 'SampleLandingPageEnt',
  props: {},
  components: {
    HeaderDark,
    StarRatingWhite,
    SecondaryButtonDark,
    PrimaryButtonDark,
  },
  metaInfo: {
    title: 'Sample-Landing-page-Ent - Portswigger website',
    meta: [
      {
        property: 'og:title',
        content: 'Sample-Landing-page-Ent - Portswigger website',
      },
    ],
  },
}
</script>

<style scoped>
.sample-landing-page-ent-container {
  width: 100%;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.sample-landing-page-ent-container1 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-image: linear-gradient(45deg, rgb(19, 83, 185) 0.00%,rgb(26, 159, 255) 100.00%);
}
.sample-landing-page-ent-container2 {
  width: 1140px;
  display: flex;
  margin-top: 40px;
  align-items: center;
  margin-bottom: 40px;
  flex-direction: row;
  justify-content: center;
}
.sample-landing-page-ent-text {
  fill: var(--dl-color-default-white);
  color: var(--dl-color-default-white);
  margin-bottom: 36px;
}
.sample-landing-page-ent-text1 {
  fill: var(--dl-color-default-white);
  color: var(--dl-color-default-white);
  width: 940px;
  align-self: center;
  text-align: center;
  margin-bottom: 36px;
}
.sample-landing-page-ent-container3 {
  gap: 20;
  display: flex;
  align-items: center;
  margin-bottom: 36px;
  flex-direction: row;
  justify-content: flex-start;
}
.sample-landing-page-ent-image {
  width: 1170px;
  object-fit: cover;
  border-radius: var(--dl-radius-radius-cardradius);
  margin-bottom: var(--dl-space-space-fiveunits);
}
</style>
