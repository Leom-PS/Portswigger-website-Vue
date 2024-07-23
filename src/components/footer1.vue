<template>
  <footer class="footer1-container" v-bind:class="rootClassName">
    <div class="footer1-main">
      <div class="footer1-container1">
        <div class="footer1-container2">
          <div class="footer1-container3">
            <footer-column-title
              text="Burp Suite"
              rootClassName="footer-column-title-root-class-name"
            ></footer-column-title>
            <span
              href="https://play.teleporthq.io/static/svg/default-img.svg"
              class="footer1-text Footer"
            >
              {{ text1 }}
            </span>
            <span
              href="https://play.teleporthq.io/static/svg/default-img.svg"
              class="footer1-text01 Footer"
            >
              {{ text2 }}
            </span>
            <span
              href="https://play.teleporthq.io/static/svg/default-img.svg"
              class="footer1-text02 Footer"
            >
              {{ text3 }}
            </span>
          </div>
          <div class="footer1-container4">
            <footer-column-title
              text="Vulnerabilities"
              rootClassName="footer-column-title-root-class-name1"
            ></footer-column-title>
            <span
              href="https://play.teleporthq.io/static/svg/default-img.svg"
              class="footer1-text03 Footer"
            >
              {{ text5 }}
            </span>
            <span
              href="https://play.teleporthq.io/static/svg/default-img.svg"
              class="footer1-text04 Footer"
            >
              {{ text6 }}
            </span>
            <span
              href="https://play.teleporthq.io/static/svg/default-img.svg"
              class="footer1-text05 Footer"
            >
              {{ text7 }}
            </span>
            <span
              href="https://play.teleporthq.io/static/svg/default-img.svg"
              class="footer1-text06 Footer"
            >
              {{ text8 }}
            </span>
            <span
              href="https://play.teleporthq.io/static/svg/default-img.svg"
              class="footer1-text07 Footer"
            >
              {{ text9 }}
            </span>
            <span
              href="https://play.teleporthq.io/static/svg/default-img.svg"
              class="footer1-text08 Footer"
            >
              {{ text10 }}
            </span>
          </div>
          <div class="footer1-container5">
            <footer-column-title
              text="Customers"
              rootClassName="footer-column-title-root-class-name2"
            ></footer-column-title>
            <span
              href="https://play.teleporthq.io/static/svg/default-img.svg"
              class="footer1-text09 Footer"
            >
              {{ text12 }}
            </span>
            <span
              href="https://play.teleporthq.io/static/svg/default-img.svg"
              class="footer1-text10 Footer"
            >
              {{ text13 }}
            </span>
            <span
              href="https://play.teleporthq.io/static/svg/default-img.svg"
              class="footer1-text11 Footer"
            >
              {{ text14 }}
            </span>
          </div>
          <div class="footer1-container6">
            <footer-column-title
              text="Company"
              rootClassName="footer-column-title-root-class-name3"
            ></footer-column-title>
            <span
              href="https://play.teleporthq.io/static/svg/default-img.svg"
              class="footer1-text12 Footer"
            >
              {{ text16 }}
            </span>
            <span
              href="https://play.teleporthq.io/static/svg/default-img.svg"
              class="footer1-text13 Footer"
            >
              {{ text17 }}
            </span>
            <span
              href="https://play.teleporthq.io/static/svg/default-img.svg"
              class="footer1-text14 Footer"
            >
              {{ text18 }}
            </span>
            <span
              href="https://play.teleporthq.io/static/svg/default-img.svg"
              class="footer1-text15 Footer"
            >
              {{ text19 }}
            </span>
            <span
              href="https://play.teleporthq.io/static/svg/default-img.svg"
              class="footer1-text16 Footer"
            >
              {{ text20 }}
            </span>
          </div>
          <div class="footer1-container7">
            <footer-column-title
              text="Insights"
              rootClassName="footer-column-title-root-class-name4"
            ></footer-column-title>
            <span
              href="https://play.teleporthq.io/static/svg/default-img.svg"
              class="footer1-text17 Footer"
            >
              {{ text22 }}
            </span>
            <span
              href="https://play.teleporthq.io/static/svg/default-img.svg"
              class="footer1-text18 Footer"
            >
              {{ text23 }}
            </span>
            <span
              href="https://play.teleporthq.io/static/svg/default-img.svg"
              class="footer1-text19 Footer"
            >
              {{ text24 }}
            </span>
          </div>
          <div class="footer1-container8">
            <img :alt="imageAlt" :src="imageSrc" class="footer1-image" />
            <twitter-button
              :text="componentText"
              rootClassName="twitter-button-root-class-name"
            ></twitter-button>
            <p class="footer1-text20 Footer">{{ text25 }}</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import FooterColumnTitle from './footer-column-title'
import TwitterButton from './twitter-button'

export default {
  name: 'Footer1',
  props: {
    text7: {
      type: String,
      default: 'Cross-site request forgery',
    },
    text2: {
      type: String,
      default: 'Burp Suite Editions',
    },
    text8: {
      type: String,
      default: 'XML external entity injection',
    },
    twitterandXlogossvg1Alt: {
      type: String,
      default: 'TwitterandXlogossvg14713',
    },
    imageAlt: {
      type: String,
      default: 'image',
    },
    text12: {
      type: String,
      default: 'Organizations',
    },
    text20: {
      type: String,
      default: 'Privacy Notice',
    },
    text23: {
      type: String,
      default: 'Blog',
    },
    text25: {
      type: String,
      default: '© 2024 PortSwigger Ltd.',
    },
    text19: {
      type: String,
      default: 'Legal',
    },
    text10: {
      type: String,
      default: 'Server-side request forgery',
    },
    text18: {
      type: String,
      default: 'Contact',
    },
    text16: {
      type: String,
      default: 'About',
    },
    text14: {
      type: String,
      default: 'Developers',
    },
    twitterandXlogossvg1Src: {
      type: String,
      default:
        'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a39970b4-b90a-4fc2-9092-0f4a556662a2/e9c7bded-0a3d-4a16-8ef0-54b26340f18f?org_if_sml=1305&force_format=original',
    },
    text9: {
      type: String,
      default: 'Directory traversal',
    },
    text17: {
      type: String,
      default: 'Careers',
    },
    text24: {
      type: String,
      default: 'Research',
    },
    text3: {
      type: String,
      default: 'Release Notes',
    },
    rootClassName: String,
    text5: {
      type: String,
      default: 'Cross-site scripting (XSS)',
    },
    text1: {
      type: String,
      default: 'Web vulnerability scanner',
    },
    componentText: String,
    text6: {
      type: String,
      default: 'SQL injection',
    },
    imageSrc: {
      type: String,
      default: '/external/portswigger-logo.svg',
    },
    text13: {
      type: String,
      default: 'Testers',
    },
    text22: {
      type: String,
      default: 'Web Security Academy',
    },
  },
  components: {
    FooterColumnTitle,
    TwitterButton,
  },
}
</script>

<style scoped>
.footer1-container {
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  border-color: var(--dl-color-theme-primary1);
  border-style: solid;
  border-width: 1px;
  flex-direction: row;
  padding-bottom: 32px;
  justify-content: center;
  background-color: #ffffff;
  border-top-width: 3px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
}
.footer1-main {
  flex: 0 0 auto;
  width: 1140px;
  height: auto;
  display: flex;
  align-items: flex-start;
  margin-left: 280px;
  margin-right: 280px;
  flex-direction: column;
}
.footer1-container1 {
  width: 1140px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.footer1-container2 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.footer1-container3 {
  flex: 0 0 auto;
  width: 190px;
  display: flex;
  align-items: flex-start;
  margin-right: 0px;
  flex-direction: column;
}
.footer1-text {
  fill: var(--dl-color-text-text-bodyprimary);
  color: var(--dl-color-text-text-bodyprimary);
}
.footer1-text01 {
  fill: var(--dl-color-text-text-bodyprimary);
  color: var(--dl-color-text-text-bodyprimary);
}
.footer1-text02 {
  fill: var(--dl-color-text-text-bodyprimary);
  color: var(--dl-color-text-text-bodyprimary);
}
.footer1-container4 {
  flex: 0 0 auto;
  width: 190px;
  display: flex;
  align-items: flex-start;
  margin-right: 0px;
  flex-direction: column;
}
.footer1-text03 {
  fill: var(--dl-color-text-text-bodyprimary);
  color: var(--dl-color-text-text-bodyprimary);
}
.footer1-text04 {
  fill: var(--dl-color-text-text-bodyprimary);
  color: var(--dl-color-text-text-bodyprimary);
}
.footer1-text05 {
  fill: var(--dl-color-text-text-bodyprimary);
  color: var(--dl-color-text-text-bodyprimary);
}
.footer1-text06 {
  fill: var(--dl-color-text-text-bodyprimary);
  color: var(--dl-color-text-text-bodyprimary);
}
.footer1-text07 {
  fill: var(--dl-color-text-text-bodyprimary);
  color: var(--dl-color-text-text-bodyprimary);
}
.footer1-text08 {
  fill: var(--dl-color-text-text-bodyprimary);
  color: var(--dl-color-text-text-bodyprimary);
}
.footer1-container5 {
  flex: 0 0 auto;
  width: 190px;
  display: flex;
  align-items: flex-start;
  margin-right: 0px;
  flex-direction: column;
}
.footer1-text09 {
  fill: var(--dl-color-text-text-bodyprimary);
  color: var(--dl-color-text-text-bodyprimary);
}
.footer1-text10 {
  fill: var(--dl-color-text-text-bodyprimary);
  color: var(--dl-color-text-text-bodyprimary);
}
.footer1-text11 {
  fill: var(--dl-color-text-text-bodyprimary);
  color: var(--dl-color-text-text-bodyprimary);
}
.footer1-container6 {
  flex: 0 0 auto;
  width: 190px;
  display: flex;
  align-items: flex-start;
  margin-right: 0px;
  flex-direction: column;
}
.footer1-text12 {
  fill: var(--dl-color-text-text-bodyprimary);
  color: var(--dl-color-text-text-bodyprimary);
}
.footer1-text13 {
  fill: var(--dl-color-text-text-bodyprimary);
  color: var(--dl-color-text-text-bodyprimary);
}
.footer1-text14 {
  fill: var(--dl-color-text-text-bodyprimary);
  color: var(--dl-color-text-text-bodyprimary);
}
.footer1-text15 {
  fill: var(--dl-color-text-text-bodyprimary);
  color: var(--dl-color-text-text-bodyprimary);
}
.footer1-text16 {
  fill: var(--dl-color-text-text-bodyprimary);
  color: var(--dl-color-text-text-bodyprimary);
}
.footer1-container7 {
  flex: 0 0 auto;
  width: 190px;
  display: flex;
  align-items: flex-start;
  margin-right: 0px;
  flex-direction: column;
}
.footer1-text17 {
  fill: var(--dl-color-text-text-bodyprimary);
  color: var(--dl-color-text-text-bodyprimary);
}
.footer1-text18 {
  fill: var(--dl-color-text-text-bodyprimary);
  color: var(--dl-color-text-text-bodyprimary);
}
.footer1-text19 {
  fill: var(--dl-color-text-text-bodyprimary);
  color: var(--dl-color-text-text-bodyprimary);
}
.footer1-container8 {
  flex: 0 0 auto;
  width: 190px;
  display: flex;
  align-items: flex-start;
  margin-right: 0px;
  flex-direction: column;
}
.footer1-image {
  width: 181px;
  height: 38px;
  object-fit: cover;
  text-decoration: none;
}
.footer1-text20 {
  fill: var(--dl-color-default-texttertiary);
  color: var(--dl-color-default-texttertiary);
  margin-top: 5px;
}

@media(max-width: 1600px) {
  .footer1-text20 {
    fill: #999998ff;
    color: #999998ff;
  }
}
</style>
