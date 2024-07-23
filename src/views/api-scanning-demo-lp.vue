<template>
  <div class="api-scanning-demo-lp-container">
    <div class="api-scanning-demo-lp-container1">
      <star-rating-white
        quote="“Dramatically streamlined our security testing process”"
        rootClassName="star-rating-white-root-class-name36"
      ></star-rating-white>
      <star-rating-white
        quote="“Provides consistent and reliable security scans that our devs trust”"
        rootClassName="star-rating-white-root-class-name37"
      ></star-rating-white>
      <star-rating-white
        quote=" Transformed our overall security posture with automated testing"
        rootClassName="star-rating-white-root-class-name38"
      ></star-rating-white>
    </div>
    <div class="api-scanning-demo-lp-container2">
      <div class="api-scanning-demo-lp-container3">
        <div class="api-scanning-demo-lp-container4">
          <span class="api-scanning-demo-lp-text Desktop-Heading4">
            Burp Suite Enterprise Edition
          </span>
          <h1 class="api-scanning-demo-lp-text1">
            More comprehensive scans. More time saved. No more workarounds.
            Welcome to built-in API scanning. 
          </h1>
        </div>
        <h2 class="api-scanning-demo-lp-text2">
          New native functionality means you can scan your APIs as part of your
          wider web apps scan, or independently. 
        </h2>
        <list-item-with-icon-dark3
          text="Test for vulnerabilities without having to host definition files"
          rootClassName="list-item-with-icon-dark3-root-class-name15"
        ></list-item-with-icon-dark3>
        <div class="api-scanning-demo-lp-container5">
          <list-item-with-icon-dark3
            text="Secure your entire web portfolio"
            rootClassName="list-item-with-icon-dark3-root-class-name16"
          ></list-item-with-icon-dark3>
          <list-item-with-icon-dark3
            text="Test a wider range of API enpoints"
            rootClassName="list-item-with-icon-dark3-root-class-name17"
          ></list-item-with-icon-dark3>
          <list-item-with-icon-dark3
            text="Scan APIs that require endpoint authentication"
            rootClassName="list-item-with-icon-dark3-root-class-name18"
          ></list-item-with-icon-dark3>
        </div>
        <h3 class="api-scanning-demo-lp-text3">
          Ready to speak to us about API scanning? Fill in the form to book your
          demo. 
        </h3>
      </div>
      <div class="api-scanning-demo-lp-container6">
        <span class="api-scanning-demo-lp-text4 Desktop-Heading4Light">
          Book a demo
        </span>
        <input-field
          placeholder="hggjgjgjgjg"
          rootClassName="input-field-root-class-name17"
        ></input-field>
        <input-field
          placeholder="Email"
          rootClassName="input-field-root-class-name22"
        ></input-field>
        <span class="api-scanning-demo-lp-text5 BodyLargeBold">Industry</span>
        <select autocomplete="off" class="api-scanning-demo-lp-select">
          <option value="Option 1">Option 1</option>
          <option value="Option 1">Accountancy</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 2">Advertising</option>
          <option value="Option 3">Aviation</option>
          <option value="Option 3">Option 3</option>
        </select>
        <primary-button-dark
          rootClassName="primary-button-dark-root-class-name13"
        ></primary-button-dark>
      </div>
    </div>
    <quotation-ent
      quote='"APIs are the biggest gap in our testing at the moment. We’ve done a small amount of scanning, but having a Burp API scan would be amazing"'
      source="A Burp Suite Enterprise Edition customer"
      rootClassName="quotation-ent-root-class-name"
    ></quotation-ent>
  </div>
</template>

<script>
import StarRatingWhite from '../components/star-rating-white'
import ListItemWithIconDark3 from '../components/list-item-with-icon-dark3'
import InputField from '../components/input-field'
import PrimaryButtonDark from '../components/primary-button-dark'
import QuotationEnt from '../components/quotation-ent'

export default {
  name: 'APIScanningDemoLP',
  props: {},
  components: {
    StarRatingWhite,
    ListItemWithIconDark3,
    InputField,
    PrimaryButtonDark,
    QuotationEnt,
  },
  metaInfo: {
    title: 'API-Scanning-demo-LP - Portswigger website',
    meta: [
      {
        property: 'og:title',
        content: 'API-Scanning-demo-LP - Portswigger website',
      },
    ],
  },
}
</script>

<style scoped>
.api-scanning-demo-lp-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
  background-image: linear-gradient(45deg, rgb(19, 83, 185) 0.00%,rgb(26, 159, 255) 100.00%);
  .-carousel-container: display: flex;     animation: scroll 20s linear infinite;
}
.api-scanning-demo-lp-container1 {
  width: 100%;
  height: auto;
  display: flex;
  margin-top: var(--dl-space-space-fourunits);
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-fourunits);
  flex-direction: row;
  justify-content: center;
}
.api-scanning-demo-lp-container2 {
  width: 931px;
  display: flex;
  align-self: center;
  margin-top: var(--dl-space-space-twounits);
  align-items: center;
  margin-bottom: var(--dl-space-space-twounits);
  flex-direction: row;
  justify-content: center;
}
.api-scanning-demo-lp-container3 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-right: var(--dl-space-space-threeunits);
  flex-direction: column;
  justify-content: center;
}
.api-scanning-demo-lp-container4 {
  width: 490px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.api-scanning-demo-lp-text {
  fill: #BBE2FC;
  color: #BBE2FC;
  text-align: left;
  margin-bottom: var(--dl-space-space-unit);
}
.api-scanning-demo-lp-text1 {
  fill: var(--dl-color-theme-neutral-light);
  color: var(--dl-color-theme-neutral-light);
  margin-bottom: var(--dl-space-space-unit);
}
.api-scanning-demo-lp-text2 {
  fill: var(--dl-color-theme-secondary1);
  color: var(--dl-color-theme-secondary1);
  margin-bottom: var(--dl-space-space-twounits);
}
.api-scanning-demo-lp-container5 {
  width: 466px;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.api-scanning-demo-lp-text3 {
  fill: var(--dl-color-theme-secondary1);
  color: var(--dl-color-theme-secondary1);
  margin-top: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.api-scanning-demo-lp-container6 {
  width: 629px;
  height: auto;
  display: flex;
  padding: var(--dl-space-space-twounits);
  align-self: center;
  align-items: center;
  padding-top: var(--dl-space-space-oneandhalfunits);
  padding-left: var(--dl-space-space-oneandhalfunits);
  border-radius: var(--dl-radius-radius-radius8);
  padding-right: var(--dl-space-space-oneandhalfunits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-oneandhalfunits);
  justify-content: center;
  background-color: var(--dl-color-theme-neutral-light);
}
.api-scanning-demo-lp-text4 {
  fill: var(--dl-color-theme-neutral-dark);
  color: var(--dl-color-theme-neutral-dark);
  text-align: left;
  margin-bottom: var(--dl-space-space-oneandhalfunits);
}
.api-scanning-demo-lp-text5 {
  width: 100%;
  line-height: 1.15;
  margin-bottom: var(--dl-space-space-halfunit);
  text-transform: none;
  text-decoration: none;
}
.api-scanning-demo-lp-select {
  width: 100%;
  height: 30px;
  border-color: var(--dl-color-text-tertiary);
  border-style: solid;
  border-width: 1px;
  margin-bottom: var(--dl-space-space-oneandhalfunits);
}
@media(max-width: 1600px) {
  .api-scanning-demo-lp-container {
    overflow-x: scroll;
    background-image: linear-gradient(45deg, rgb(19, 83, 185) 1.00%,rgb(26, 159, 255) 100.00%);
  }
  .api-scanning-demo-lp-container1 {
    margin-top: var(--dl-space-space-fiveunits);
    margin-bottom: var(--dl-space-space-fiveunits);
  }
  .api-scanning-demo-lp-container2 {
    width: 1000px;
    margin-bottom: var(--dl-space-space-twounits);
  }
  .api-scanning-demo-lp-container3 {
    margin-right: var(--dl-space-space-oneandhalfunits);
  }
  .api-scanning-demo-lp-container4 {
    width: auto;
  }
  .api-scanning-demo-lp-text1 {
    color: var(--dl-color-theme-neutral-light);
    width: auto;
    margin-right: var(--dl-space-space-fiveunits);
    margin-bottom: var(--dl-space-space-unit);
  }
  .api-scanning-demo-lp-text2 {
    fill: var(--dl-color-theme-secondary1);
    color: var(--dl-color-theme-secondary1);
    z-index: 100;
    box-shadow: inherit;
    border-color: #ffffff;
    border-width: 0px;
    margin-right: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-twounits);
  }
  .api-scanning-demo-lp-container5 {
    width: auto;
  }
  .api-scanning-demo-lp-text3 {
    fill: var(--dl-color-theme-secondary1);
    color: var(--dl-color-theme-secondary1);
    box-shadow: inherit;
    margin-top: var(--dl-space-space-twounits);
    border-color: #ffffff;
    border-width: 0px;
    margin-bottom: var(--dl-space-space-twounits);
  }
  .api-scanning-demo-lp-container6 {
    height: auto;
  }
}
@media(max-width: 1200px) {
  .api-scanning-demo-lp-text1 {
    color: var(--dl-color-theme-neutral-light);
    font-family: Roboto;
    font-weight: 700;
    line-height: 1.15;
    text-transform: none;
    text-decoration: none;
  }
}
</style>
