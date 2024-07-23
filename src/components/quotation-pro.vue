<template>
  <div class="quotation-pro-container" v-bind:class="rootClassName">
    <div class="quotation-pro-frame5519">
      <h1 class="quotation-pro-text Desktop-Heading1">{{ quote }}</h1>
      <span class="quotation-pro-text1 HeadingHeading5Light">{{ source }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuotationPro',
  props: {
    quote: {
      type: String,
      default:
        '“Is there anything better than Burp Suite Professional by @PortSwigger? I have some tools like it but I have yet to find anything as good”',
    },
    rootClassName: String,
    source: {
      type: String,
      default: 'Source: @AlicornSkyler - Twitter',
    },
  },
}
</script>

<style scoped>
.quotation-pro-container {
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.quotation-pro-frame5519 {
  gap: 30px;
  width: 100%;
  height: auto;
  display: flex;
  padding: 80px 30px;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(76, 79, 177, 1);
}
.quotation-pro-text {
  fill: var(--dl-color-default-white);
  color: var(--dl-color-default-white);
  width: 900px;
}
.quotation-pro-text1 {
  fill: var(--dl-color-default-white);
  color: var(--dl-color-default-white);
  width: 900px;
  line-height: 1.15;
  text-transform: none;
  text-decoration: none;
}


</style>
