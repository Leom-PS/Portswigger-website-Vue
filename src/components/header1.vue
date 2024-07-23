<template>
  <div class="header1-container" v-bind:class="rootClassName">
    <div class="header1-default-header">
      <img
        alt="LogosPortswigger7418"
        src="/external/logosportswigger7418-if36.svg"
        class="header1-logos-portswigger"
      />
      <div class="header1-navigation">
        <div id="Solutions" class="header1-container1">
          <span id="Products" class="header1-text BodyLarge">{{ link1 }}</span>
          <img
            alt="ChevronDown7418"
            src="/external/chevrondown7418-0l3m.svg"
            class="header1-chevron-down"
          />
        </div>
        <div id="Solutions" class="header1-container2">
          <span id="Solutions" class="header1-text1 BodyLarge">{{ link2 }}</span>
          <img
            alt="ChevronDown7418"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a39970b4-b90a-4fc2-9092-0f4a556662a2/f3903082-a44e-4b9b-b9dd-d3974ac36cfe?org_if_sml=1546&amp;force_format=original"
            class="header1-chevron-down1"
          />
        </div>
        <span id="Research" class="header1-text2 BodyLarge">{{ link3 }}</span>
        <span id="Academy" class="header1-text3 BodyLarge">{{ link4 }}</span>
        <div id="Solutions" class="header1-container3">
          <span id="Support" class="header1-text4 BodyLarge">{{ link5 }}</span>
          <img
            alt="ChevronDown7418"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a39970b4-b90a-4fc2-9092-0f4a556662a2/f3903082-a44e-4b9b-b9dd-d3974ac36cfe?org_if_sml=1546&amp;force_format=original"
            class="header1-chevron-down2"
          />
        </div>
        <div id="Solutions" class="header1-container4">
          <span id="Resources" class="header1-text5 BodyLarge">{{ link6 }}</span>
          <img
            alt="ChevronDown7418"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a39970b4-b90a-4fc2-9092-0f4a556662a2/f3903082-a44e-4b9b-b9dd-d3974ac36cfe?org_if_sml=1546&amp;force_format=original"
            class="header1-chevron-down3"
          />
        </div>
        <button class="header1-button">
          <span class="header1-text6 BodyLargeBold">{{ cTA }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header1',
  props: {
    imageAlt: {
      type: String,
      default: 'Portswigger',
    },
    link6: {
      type: String,
      default: 'Resources',
    },
    link4: {
      type: String,
      default: 'Academy',
    },
    link5: {
      type: String,
      default: 'Support',
    },
    cTA: {
      type: String,
      default: 'Login',
    },
    imagesrc: {
      type: String,
      default: '6051c3b5-69b0-4461-81d7-9dc363de7c81',
    },
    link1: {
      type: String,
      default: 'Products',
    },
    link3: {
      type: String,
      default: 'Research',
    },
    link2: {
      type: String,
      default: 'Solutions',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.header1-container {
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.header1-default-header {
  gap: 80px;
  width: 100%;
  height: auto;
  display: flex;
  padding: 12px 0;
  align-items: center;
  flex-shrink: 0;
  justify-content: center;
}
.header1-logos-portswigger {
  width: 249px;
  height: 42px;
}
.header1-navigation {
  gap: 40px;
  display: flex;
  align-items: center;
}
.header1-container1 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.header1-text {
  fill: var(--dl-color-text-text-bodyprimary);
  color: var(--dl-color-text-text-bodyprimary);
  margin-right: var(--dl-space-space-halfunit);
}
.header1-chevron-down {
  width: 16px;
  height: 16px;
}
.header1-container2 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.header1-text1 {
  fill: var(--dl-color-text-text-bodyprimary);
  color: var(--dl-color-text-text-bodyprimary);
  margin-right: var(--dl-space-space-halfunit);
}
.header1-chevron-down1 {
  width: 16px;
  height: 16px;
}
.header1-text2 {
  fill: var(--dl-color-text-text-bodyprimary);
  color: var(--dl-color-text-text-bodyprimary);
  margin-right: 0px;
}
.header1-text3 {
  fill: var(--dl-color-text-text-bodyprimary);
  color: var(--dl-color-text-text-bodyprimary);
  margin-right: 0px;
}
.header1-container3 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.header1-text4 {
  fill: var(--dl-color-text-text-bodyprimary);
  color: var(--dl-color-text-text-bodyprimary);
  margin-right: var(--dl-space-space-halfunit);
}
.header1-chevron-down2 {
  width: 16px;
  height: 16px;
}
.header1-container4 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.header1-text5 {
  fill: var(--dl-color-text-text-bodyprimary);
  color: var(--dl-color-text-text-bodyprimary);
  margin-right: var(--dl-space-space-halfunit);
}
.header1-chevron-down3 {
  width: 16px;
  height: 16px;
}
.header1-button {
  gap: 8px;
  height: 40px;
  display: flex;
  padding: 12px 24px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 8px;
  justify-content: center;
  background-color: rgba(255, 102, 51, 1);
}
.header1-text6 {
  fill: var(--dl-color-default-white);
  color: var(--dl-color-default-white);
}
</style>
