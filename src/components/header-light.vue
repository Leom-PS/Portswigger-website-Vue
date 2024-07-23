<template>
  <div class="header-light-container" v-bind:class="rootClassName">
    <div class="header-light-default-header">
      <img
        alt="LogosPortswigger7418"
        src="/external/LogosPortswigger7418-if361.svg"
        class="header-light-logos-portswigger"
      />
      <div class="header-light-navigation">
        <div id="Solutions" class="header-light-container1">
          <span id="Products" class="header-light-text BodyLarge">
            {{ link1 }}
          </span>
          <img
            alt="ChevronDown7418"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a39970b4-b90a-4fc2-9092-0f4a556662a2/a4eed5fa-7658-4310-bc5d-2cd8fda82d42?org_if_sml=1546&amp;force_format=original"
            class="header-light-chevron-down"
          />
        </div>
        <div id="Solutions" class="header-light-container2">
          <span id="Solutions" class="header-light-text1 BodyLarge">
            {{ link2 }}
          </span>
          <img
            alt="ChevronDown7418"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a39970b4-b90a-4fc2-9092-0f4a556662a2/f3903082-a44e-4b9b-b9dd-d3974ac36cfe?org_if_sml=1546&amp;force_format=original"
            class="header-light-chevron-down1"
          />
        </div>
        <span id="Research" class="header-light-text2 BodyLarge">
          {{ link3 }}
        </span>
        <span id="Academy" class="header-light-text3 BodyLarge">{{ link4 }}</span>
        <div id="Solutions" class="header-light-container3">
          <span id="Support" class="header-light-text4 BodyLarge">
            {{ link5 }}
          </span>
          <img
            alt="ChevronDown7418"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a39970b4-b90a-4fc2-9092-0f4a556662a2/f3903082-a44e-4b9b-b9dd-d3974ac36cfe?org_if_sml=1546&amp;force_format=original"
            class="header-light-chevron-down2"
          />
        </div>
        <div id="Solutions" class="header-light-container4">
          <span id="Resources" class="header-light-text5 BodyLarge">
            {{ link6 }}
          </span>
          <img
            alt="ChevronDown7418"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a39970b4-b90a-4fc2-9092-0f4a556662a2/f3903082-a44e-4b9b-b9dd-d3974ac36cfe?org_if_sml=1546&amp;force_format=original"
            class="header-light-chevron-down3"
          />
        </div>
        <button class="header-light-button">
          <span class="header-light-text6 BodyLargeBold">{{ cTA }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderLight',
  props: {
    cTA: {
      type: String,
      default: 'Login',
    },
    link6: {
      type: String,
      default: 'Resources',
    },
    link1: {
      type: String,
      default: 'Products',
    },
    link4: {
      type: String,
      default: 'Academy',
    },
    link2: {
      type: String,
      default: 'Solutions',
    },
    link3: {
      type: String,
      default: 'Research',
    },
    rootClassName: String,
    link5: {
      type: String,
      default: 'Support',
    },
  },
}
</script>

<style scoped>
.header-light-container {
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.header-light-default-header {
  gap: 80px;
  width: 100%;
  height: auto;
  display: flex;
  padding: 12px 0;
  align-items: center;
  flex-shrink: 0;
  justify-content: center;
}
.header-light-logos-portswigger {
  width: 249px;
  height: 42px;
}
.header-light-navigation {
  gap: 40px;
  display: flex;
  align-items: center;
}
.header-light-container1 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.header-light-text {
  fill: var(--dl-color-text-text-bodyprimary);
  color: var(--dl-color-text-text-bodyprimary);
  margin-right: var(--dl-space-space-halfunit);
}
.header-light-chevron-down {
  width: 16px;
  height: 16px;
}
.header-light-container2 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.header-light-text1 {
  fill: var(--dl-color-text-text-bodyprimary);
  color: var(--dl-color-text-text-bodyprimary);
  margin-right: var(--dl-space-space-halfunit);
}
.header-light-chevron-down1 {
  width: 16px;
  height: 16px;
}
.header-light-text2 {
  fill: var(--dl-color-text-text-bodyprimary);
  color: var(--dl-color-text-text-bodyprimary);
  margin-right: 0px;
}
.header-light-text3 {
  fill: var(--dl-color-text-text-bodyprimary);
  color: var(--dl-color-text-text-bodyprimary);
  margin-right: 0px;
}
.header-light-container3 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.header-light-text4 {
  fill: var(--dl-color-text-text-bodyprimary);
  color: var(--dl-color-text-text-bodyprimary);
  margin-right: var(--dl-space-space-halfunit);
}
.header-light-chevron-down2 {
  width: 16px;
  height: 16px;
}
.header-light-container4 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.header-light-text5 {
  fill: var(--dl-color-text-text-bodyprimary);
  color: var(--dl-color-text-text-bodyprimary);
  margin-right: var(--dl-space-space-halfunit);
}
.header-light-chevron-down3 {
  width: 16px;
  height: 16px;
}
.header-light-button {
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
.header-light-text6 {
  fill: var(--dl-color-default-white);
  color: var(--dl-color-default-white);
}
</style>
