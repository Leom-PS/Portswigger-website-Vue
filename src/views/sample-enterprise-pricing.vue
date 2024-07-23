<template>
  <div class="sample-enterprise-pricing-container">
    <div class="sample-enterprise-pricing-container1">
      <header-dark rootClassName="header-dark-root-class-name2"></header-dark>
      <div class="sample-enterprise-pricing-container2">
        <star-rating-white
          quote="“Burp Suite turns our web security testing into a comprehensive, seamless process”"
          rootClassName="star-rating-white-root-class-name27"
        ></star-rating-white>
        <star-rating-white
          quote="“SaaS model and AI integration mark a thrilling evolution for our security”"
          rootClassName="star-rating-white-root-class-name28"
        ></star-rating-white>
        <star-rating-white
          quote="“Burp's automated scanning gives us confidence in our app's security posture”"
          rootClassName="star-rating-white-root-class-name29"
        ></star-rating-white>
      </div>
      <h1 class="sample-enterprise-pricing-text Desktop-Display1">
        Burp Suite Enterprise Edition plans
      </h1>
      <div class="sample-enterprise-pricing-container3">
        <primary-button-dark
          buttontext="Get in touch"
          rootClassName="primary-button-dark-root-class-name9"
        ></primary-button-dark>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderDark from '../components/header-dark'
import StarRatingWhite from '../components/star-rating-white'
import PrimaryButtonDark from '../components/primary-button-dark'

export default {
  name: 'SampleEnterprisePricing',
  props: {},
  components: {
    HeaderDark,
    StarRatingWhite,
    PrimaryButtonDark,
  },
  metaInfo: {
    title: 'SampleEnterprise-pricing - Portswigger website',
    meta: [
      {
        property: 'og:title',
        content: 'SampleEnterprise-pricing - Portswigger website',
      },
    ],
  },
}
</script>

<style scoped>
.sample-enterprise-pricing-container {
  width: 100%;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.sample-enterprise-pricing-container1 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-image: linear-gradient(45deg, rgb(19, 83, 185) 0.00%,rgb(26, 159, 255) 100.00%);
}
.sample-enterprise-pricing-container2 {
  width: 1140px;
  display: flex;
  margin-top: 50px;
  align-items: center;
  margin-bottom: 50px;
  flex-direction: row;
  justify-content: center;
}
.sample-enterprise-pricing-text {
  fill: var(--dl-color-default-white);
  color: var(--dl-color-default-white);
  width: 1000px;
  align-self: center;
  text-align: center;
  margin-bottom: 36px;
}
.sample-enterprise-pricing-container3 {
  gap: 20;
  display: flex;
  align-items: center;
  margin-bottom: 36px;
  flex-direction: row;
  justify-content: flex-start;
}
</style>
