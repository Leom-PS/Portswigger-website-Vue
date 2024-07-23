<template>
  <div class="leoms-landing-page-container">
    <ps-header rootClassName="ps-header-root-class-name"></ps-header>
    <div class="leoms-landing-page-container01">
      <hero-banner-dark
        copy="Hands-on security testers need the best tools for the job. Tools you have faith in, and enjoy using all day long. The tools that other professionals trust."
        heading1="Test like a Pro."
        buttontext="Try for free"
        rootClassName="hero-banner-dark-root-class-name1"
      ></hero-banner-dark>
      <div class="leoms-landing-page-container02">
        <star-rating-white
          quote="“Burp Suite turns our web security testing into a comprehensive, seamless process”"
          rootClassName="star-rating-white-root-class-name24"
        ></star-rating-white>
        <star-rating-white
          quote="“SaaS model and AI integration mark a thrilling evolution for our security”"
          rootClassName="star-rating-white-root-class-name25"
        ></star-rating-white>
        <star-rating-white
          quote="“Burp's automated scanning gives us confidence in our app's security posture”"
          rootClassName="star-rating-white-root-class-name26"
        ></star-rating-white>
      </div>
    </div>
    <div class="leoms-landing-page-container03">
      <icon-callout-set-of3
        heading="Find more vulnerabilities faster"
        linktext="Read more"
        rootClassName="icon-callout-set-of3-root-class-name3"
      ></icon-callout-set-of3>
      <icon-callout-set-of3
        icon="/professional%20app.svg"
        heading="Test like a pro - with the industry's trusted toolkit"
        linktext="Read more"
        rootClassName="icon-callout-set-of3-root-class-name4"
      ></icon-callout-set-of3>
      <icon-callout-set-of3
        icon="/rocket.svg"
        heading="Extend your capabilities"
        linktext="Read more"
        rootClassName="icon-callout-set-of3-root-class-name5"
      ></icon-callout-set-of3>
    </div>
    <header-full-width-image
      heading="Take a tour of Burp Suite Professional"
      rootClassName="header-full-width-image-root-class-name1"
    ></header-full-width-image>
    <h1 class="leoms-landing-page-text Desktop-Heading1">
      Find more vulnerabilities, faster
    </h1>
    <div class="leoms-landing-page-container04">
      <div class="leoms-landing-page-container05">
        <accordion-blue
          content="Smart automation works in concert with expert-designed manual tools, to save you time. Optimize your workflow, and do more of what you do best."
          titletext="Automate and save time"
          rootClassName="accordion-blue-root-class-name15"
        ></accordion-blue>
        <accordion-blue
          content="Smart automation works in concert with expert-designed manual tools, to save you time. Optimize your workflow, and do more of what you do best."
          titletext="Scan the modern web"
          rootClassName="accordion-blue-root-class-name16"
        ></accordion-blue>
        <accordion-blue
          titletext="Minimise false positives"
          rootClassName="accordion-blue-root-class-name17"
        ></accordion-blue>
      </div>
      <img
        alt="image"
        src="/product-eg-img2-500h.png"
        class="leoms-landing-page-image"
      />
    </div>
    <div class="leoms-landing-page-container06">
      <h1 class="leoms-landing-page-text1 Desktop-Heading1">
        Test like a pro - with the industry&apos;s trusted toolkit
      </h1>
      <div class="leoms-landing-page-container07">
        <img
          alt="image"
          src="/product-eg-img-400h.png"
          class="leoms-landing-page-image1"
        />
        <div class="leoms-landing-page-container08">
          <accordion-white
            rootClassName="accordion-white-root-class-name6"
            accordiontitle="Find vulnerabilities others can't"
          ></accordion-white>
          <accordion-white
            rootClassName="accordion-white-root-class-name7"
            accordiontitle="Be more productive"
          ></accordion-white>
          <accordion-white
            rootClassName="accordion-white-root-class-name8"
            accordiontitle="Share your findings more easily"
          ></accordion-white>
        </div>
      </div>
    </div>
    <h1 class="leoms-landing-page-text2 Desktop-Heading1">
      Extend your capabilities
    </h1>
    <div class="leoms-landing-page-container09">
      <div class="leoms-landing-page-container10">
        <accordion-blue
          titletext="Adapt your toolkit to suit your needs"
          rootClassName="accordion-blue-root-class-name18"
        ></accordion-blue>
        <accordion-blue
          titletext="Create your own functionality"
          rootClassName="accordion-blue-root-class-name19"
        ></accordion-blue>
        <accordion-blue
          titletext="Customize the way you work"
          rootClassName="accordion-blue-root-class-name20"
        ></accordion-blue>
      </div>
      <img
        alt="image"
        src="/capabilities-600w.png"
        class="leoms-landing-page-image2"
      />
    </div>
  </div>
</template>

<script>
import PsHeader from '../components/ps-header'
import HeroBannerDark from '../components/hero-banner-dark'
import StarRatingWhite from '../components/star-rating-white'
import IconCalloutSetOf3 from '../components/icon-callout-set-of-3'
import HeaderFullWidthImage from '../components/header-full-width-image'
import AccordionBlue from '../components/accordion-blue'
import AccordionWhite from '../components/accordion-white'

export default {
  name: 'LeomsLandingPage',
  props: {},
  components: {
    PsHeader,
    HeroBannerDark,
    StarRatingWhite,
    IconCalloutSetOf3,
    HeaderFullWidthImage,
    AccordionBlue,
    AccordionWhite,
  },
  metaInfo: {
    title: 'leoms-landing-page - Portswigger website',
    meta: [
      {
        property: 'og:title',
        content: 'leoms-landing-page - Portswigger website',
      },
    ],
  },
}
</script>

<style scoped>
.leoms-landing-page-container {
  width: 100%;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.leoms-landing-page-container01 {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 80px;
  flex-direction: column;
  justify-content: center;
  background-image: linear-gradient(45deg, rgb(55, 55, 74) 0.00%,rgb(91, 79, 254) 100.00%);
}
.leoms-landing-page-container02 {
  width: 1140px;
  display: flex;
  align-items: center;
  margin-bottom: 80px;
  flex-direction: row;
  justify-content: center;
}
.leoms-landing-page-container03 {
  width: 1140px;
  height: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  flex-direction: row;
  justify-content: center;
}
.leoms-landing-page-text {
  fill: var(--dl-color-text-text-headingnavy);
  color: var(--dl-color-text-text-headingnavy);
  margin-top: 80px;
  margin-bottom: 40px;
}
.leoms-landing-page-container04 {
  width: 1140px;
  display: flex;
  align-items: center;
  margin-bottom: 80px;
  flex-direction: row;
  justify-content: center;
}
.leoms-landing-page-container05 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.leoms-landing-page-image {
  width: 561px;
  height: 429px;
  object-fit: cover;
  margin-left: 80px;
}
.leoms-landing-page-container06 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-backgrounds-purple6);
}
.leoms-landing-page-text1 {
  fill: var(--dl-color-text-text-headingnavy);
  color: var(--dl-color-text-text-headingnavy);
  margin-top: 80px;
  margin-bottom: 40px;
}
.leoms-landing-page-container07 {
  width: 1140px;
  display: flex;
  align-items: center;
  margin-bottom: 80px;
  flex-direction: row;
  justify-content: center;
}
.leoms-landing-page-image1 {
  width: 552px;
  height: 364px;
  margin-top: 0px;
  object-fit: cover;
  margin-left: 0px;
  margin-right: 80px;
  margin-bottom: 0px;
}
.leoms-landing-page-container08 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.leoms-landing-page-text2 {
  fill: var(--dl-color-text-text-headingnavy);
  color: var(--dl-color-text-text-headingnavy);
  margin-top: 80px;
  margin-bottom: 40px;
}
.leoms-landing-page-container09 {
  width: 1140px;
  display: flex;
  align-items: center;
  margin-bottom: 80px;
  flex-direction: row;
  justify-content: center;
}
.leoms-landing-page-container10 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.leoms-landing-page-image2 {
  width: 536px;
  height: 297px;
  object-fit: cover;
  margin-left: 80px;
}
</style>
