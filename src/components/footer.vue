<template>
  <footer class="footer-container" v-bind:class="rootClassName">
    <div class="footer-main">
      <div class="footer-container1">
        <div class="footer-container2">
          <footer-column-title text="Burp Suite"></footer-column-title>
          <span
            href="https://play.teleporthq.io/static/svg/default-img.svg"
            class="Footer"
          >
            {{ text1 }}
          </span>
          <span
            href="https://play.teleporthq.io/static/svg/default-img.svg"
            class="Footer"
          >
            {{ text2 }}
          </span>
          <span
            href="https://play.teleporthq.io/static/svg/default-img.svg"
            class="Footer"
          >
            {{ text3 }}
          </span>
        </div>
        <div class="footer-container3">
          <footer-column-title text="Vulnerabilities"></footer-column-title>
          <span
            href="https://play.teleporthq.io/static/svg/default-img.svg"
            class="Footer"
          >
            {{ text5 }}
          </span>
          <span
            href="https://play.teleporthq.io/static/svg/default-img.svg"
            class="Footer"
          >
            {{ text6 }}
          </span>
          <span
            href="https://play.teleporthq.io/static/svg/default-img.svg"
            class="Footer"
          >
            {{ text7 }}
          </span>
          <span
            href="https://play.teleporthq.io/static/svg/default-img.svg"
            class="Footer"
          >
            {{ text8 }}
          </span>
          <span
            href="https://play.teleporthq.io/static/svg/default-img.svg"
            class="Footer"
          >
            {{ text9 }}
          </span>
          <span
            href="https://play.teleporthq.io/static/svg/default-img.svg"
            class="Footer"
          >
            {{ text10 }}
          </span>
        </div>
        <div class="footer-container4">
          <footer-column-title text="Customers"></footer-column-title>
          <span
            href="https://play.teleporthq.io/static/svg/default-img.svg"
            class="Footer"
          >
            {{ text12 }}
          </span>
          <span
            href="https://play.teleporthq.io/static/svg/default-img.svg"
            class="Footer"
          >
            {{ text13 }}
          </span>
          <span
            href="https://play.teleporthq.io/static/svg/default-img.svg"
            class="Footer"
          >
            {{ text14 }}
          </span>
        </div>
        <div class="footer-container5">
          <footer-column-title text="Company"></footer-column-title>
          <span
            href="https://play.teleporthq.io/static/svg/default-img.svg"
            class="Footer"
          >
            {{ text16 }}
          </span>
          <span
            href="https://play.teleporthq.io/static/svg/default-img.svg"
            class="Footer"
          >
            {{ text17 }}
          </span>
          <span
            href="https://play.teleporthq.io/static/svg/default-img.svg"
            class="Footer"
          >
            {{ text18 }}
          </span>
          <span
            href="https://play.teleporthq.io/static/svg/default-img.svg"
            class="Footer"
          >
            {{ text19 }}
          </span>
          <span
            href="https://play.teleporthq.io/static/svg/default-img.svg"
            class="Footer"
          >
            {{ text20 }}
          </span>
        </div>
        <div class="footer-container6">
          <footer-column-title text="Insights"></footer-column-title>
          <span
            href="https://play.teleporthq.io/static/svg/default-img.svg"
            class="Footer"
          >
            {{ text22 }}
          </span>
          <span
            href="https://play.teleporthq.io/static/svg/default-img.svg"
            class="Footer"
          >
            {{ text23 }}
          </span>
          <span
            href="https://play.teleporthq.io/static/svg/default-img.svg"
            class="Footer"
          >
            {{ text24 }}
          </span>
        </div>
        <div class="footer-container7">
          <img :alt="imageAlt" :src="imageSrc" class="footer-image" />
          <span
            rel="noreferrer"
            href="https://twitter.com/Burp_Suite"
            class="footer-text20"
          >
            <span></span>
            <span>Follow us</span>
          </span>
          <p class="Footer footer-text23">{{ text25 }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import FooterColumnTitle from './footer-column-title'

export default {
  name: 'Footer',
  props: {
    text14: {
      type: String,
      default: 'Developers',
    },
    text19: {
      type: String,
      default: 'Legal',
    },
    text1: {
      type: String,
      default: 'Web vulnerability scanner',
    },
    text12: {
      type: String,
      default: 'Organizations',
    },
    text2: {
      type: String,
      default: 'Burp Suite Editions',
    },
    text9: {
      type: String,
      default: 'Directory traversal',
    },
    text10: {
      type: String,
      default: 'Server-side request forgery',
    },
    text23: {
      type: String,
      default: 'Blog',
    },
    text7: {
      type: String,
      default: 'Cross-site request forgery',
    },
    text22: {
      type: String,
      default: 'Web Security Academy',
    },
    text18: {
      type: String,
      default: 'Contact',
    },
    text21: {
      type: String,
      default: 'Insights',
    },
    text13: {
      type: String,
      default: 'Testers',
    },
    text3: {
      type: String,
      default: 'Release Notes',
    },
    rootClassName: String,
    imageSrc: {
      type: String,
      default: '/external/portswigger-logo.svg',
    },
    text8: {
      type: String,
      default: 'XML external entity injection',
    },
    text24: {
      type: String,
      default: 'Research',
    },
    text16: {
      type: String,
      default: 'About',
    },
    imageSrc1: {
      type: String,
      default:
        'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a39970b4-b90a-4fc2-9092-0f4a556662a2/9b88ca70-2644-4979-803f-52cc8a0afae7?org_if_sml=13256&force_format=original',
    },
    text20: {
      type: String,
      default: 'Privacy Notice',
    },
    text25: {
      type: String,
      default: '© 2024 PortSwigger Ltd.',
    },
    text6: {
      type: String,
      default: 'SQL injection',
    },
    text5: {
      type: String,
      default: 'Cross-site scripting (XSS)',
    },
    imageAlt: {
      type: String,
      default: 'image',
    },
    linkImage: String,
    text15: {
      type: String,
      default: 'Company',
    },
    imageAlt1: {
      type: String,
      default: 'image',
    },
    text11: {
      type: String,
      default: 'Customers',
    },
    text17: {
      type: String,
      default: 'Careers',
    },
    text4: {
      type: String,
      default: 'Vulnerabilities',
    },
  },
  components: {
    FooterColumnTitle,
  },
}
</script>

<style scoped>
.footer-container {
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
  background-color: #ffffff;
  border-top-width: 3px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
}
.footer-main {
  flex: 0 0 auto;
  width: 1140px;
  height: auto;
  display: flex;
  align-items: flex-start;
  margin-left: 280px;
  margin-right: 280px;
  flex-direction: column;
}
.footer-container1 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.footer-container2 {
  flex: 0 0 auto;
  width: 200px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.footer-container3 {
  flex: 0 0 auto;
  width: 200px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.footer-container4 {
  flex: 0 0 auto;
  width: 200px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.footer-container5 {
  flex: 0 0 auto;
  width: 200px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.footer-container6 {
  flex: 0 0 auto;
  width: 200px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.footer-container7 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.footer-image {
  width: 200px;
  object-fit: cover;
  text-decoration: none;
}
.footer-text20 {
  border-color: #00acee;
  border-width: 2px;
  border-radius: 40px;
}


@media(max-width: 1600px) {
  .footer-text20 {
    border-color: #00acee;
    border-width: 2px;
    padding-left: 20px;
    border-radius: 40px;
    padding-right: 20px;
  }
  .footer-text23 {
    fill: #999998ff;
    color: #999998ff;
  }
}
</style>
