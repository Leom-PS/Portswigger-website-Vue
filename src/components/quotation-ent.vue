<template>
  <div class="quotation-ent-container" v-bind:class="rootClassName">
    <div class="quotation-ent-frame5519">
      <h1 class="quotation-ent-text Desktop-Heading1">{{ quote }}</h1>
      <span class="quotation-ent-text1 HeadingHeading5Light">{{ source }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuotationEnt',
  props: {
    quote: {
      type: String,
      default:
        '“Is there anything better than Burp Suite Professional by @PortSwigger? I have some tools like it but I have yet to find anything as good”',
    },
    source: {
      type: String,
      default: 'Source: @AlicornSkyler - Twitter',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.quotation-ent-container {
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.quotation-ent-frame5519 {
  gap: 30px;
  width: 100%;
  height: auto;
  display: flex;
  padding: 80px 30px;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.quotation-ent-text {
  fill: var(--dl-color-default-white);
  color: var(--dl-color-default-white);
  width: 900px;
}
.quotation-ent-text1 {
  fill: var(--dl-color-default-white);
  color: var(--dl-color-default-white);
  width: 900px;
  line-height: 1.15;
  text-transform: none;
  text-decoration: none;
}
.quotation-ent-root-class-name {
  margin-bottom: var(--dl-space-space-twounits);
}
@media(max-width: 1600px) {
  .quotation-ent-root-class-name {
    margin-bottom: var(--dl-space-space-twounits);
  }
}
</style>
