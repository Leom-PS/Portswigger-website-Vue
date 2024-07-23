<template>
  <div
    class="existing-ds-header-and-intro-container"
    v-bind:class="rootClassName"
  >
    <div class="existing-ds-header-and-intro-container1">
      <h1 class="existing-ds-header-and-intro-text">{{ heading }}</h1>
      <span class="existing-ds-header-and-intro-text1">{{ intro }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExistingDSHeaderAndIntro',
  props: {
    rootClassName: String,
    intro: {
      type: String,
      default:
        "Whetther you're a small pentesting team or a mature AppSec division responsible for safeguarding thousands of web applications, we have a tailored solution for you.",
    },
    heading: {
      type: String,
      default: 'Burp Suite Enterprise Edition plans',
    },
  },
}
</script>

<style scoped>
.existing-ds-header-and-intro-container {
  width: auto;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.existing-ds-header-and-intro-container1 {
  width: 1000px;
  display: flex;
  align-self: center;
  align-items: center;
  margin-bottom: 30px;
  flex-direction: column;
  justify-content: center;
}
.existing-ds-header-and-intro-text {
  fill: var(--dl-color-text-text-headingnavy);
  color: var(--dl-color-text-text-headingnavy);
  font-size: 60px;
  margin-top: 40px;
  font-family: "Arial";
  margin-bottom: 40px;
  letter-spacing: -2px;
}
.existing-ds-header-and-intro-text1 {
  fill: transparent;
  color: #333332;
  font-size: 18px;
  text-align: center;
  font-family: "Arial";
  margin-bottom: 30px;
}

</style>
