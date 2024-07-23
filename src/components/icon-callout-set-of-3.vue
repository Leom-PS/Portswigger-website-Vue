<template>
  <div class="icon-callout-set-of-3-container" v-bind:class="rootClassName">
    <div class="icon-callout-set-of-3-magnifyingglass">
      <div class="icon-callout-set-of-3-frame4836">
        <div class="icon-callout-set-of-3-group4832">
          <img
            alt="VectorI542"
            src="/external/vectori542-i5z5.svg"
            class="icon-callout-set-of-3-vector"
          />
        </div>
      </div>
      <div class="icon-callout-set-of-3-magnifyingglass1">
        <div class="icon-callout-set-of-3-group4842">
          <img
            alt="magnifyingglass2I542"
            :src="icon"
            class="icon-callout-set-of-3-magnifyingglass2"
          />
        </div>
      </div>
    </div>
    <h1 class="icon-callout-set-of-3-text Desktop-Heading5">{{ heading }}</h1>
    <div class="icon-callout-set-of-3-container1">
      <h1 class="icon-callout-set-of-3-text1 BodyLargeBold">{{ linktext }}</h1>
      <img
        alt="ChevronDownI542"
        :src="icon1"
        class="icon-callout-set-of-3-chevron-down"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'IconCalloutSetOf3',
  props: {
    icon: {
      type: String,
      default: '/external/magnifyingglass2i542-u2eu.svg',
    },
    linktext: {
      type: String,
      default: 'This is a quaternary link',
    },
    icon1: {
      type: String,
      default: '/external/chevrondowni542-vuzo.svg',
    },
    rootClassName: String,
    heading: {
      type: String,
      default: 'Heading goes here',
    },
  },
}
</script>

<style scoped>
.icon-callout-set-of-3-container {
  width: auto;
  height: 100%;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  min-width: 250px;
  min-height: 100%;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  flex-direction: column;
  justify-content: flex-start;
}
.icon-callout-set-of-3-magnifyingglass {
  width: 90px;
  height: 80px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.icon-callout-set-of-3-frame4836 {
  gap: 10px;
  top: 47px;
  left: 0px;
  width: 56px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-end;
}
.icon-callout-set-of-3-group4832 {
  width: 56px;
  height: 32.61332321166992px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 1;
}
.icon-callout-set-of-3-vector {
  top: 32.31059646606445px;
  left: 56.12603759765625px;
  width: 32px;
  height: 56px;
  position: absolute;
}
.icon-callout-set-of-3-magnifyingglass1 {
  top: 0px;
  left: 0px;
  width: 90px;
  height: 80px;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
}
.icon-callout-set-of-3-group4842 {
  top: 2.5px;
  left: 0px;
  width: 90px;
  height: 80px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.icon-callout-set-of-3-magnifyingglass2 {
  top: 0px;
  left: 0px;
  width: 90px;
  height: 80px;
  position: absolute;
  margin-bottom: 20px;
}
.icon-callout-set-of-3-text {
  fill: var(--dl-color-text-text-headingnavy);
  color: var(--dl-color-text-text-headingnavy);
  align-self: center;
  margin-top: 20px;
  text-align: center;
  margin-bottom: 20px;
}
.icon-callout-set-of-3-container1 {
  width: auto;
  height: auto;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
}
.icon-callout-set-of-3-text1 {
  fill: var(--dl-color-text-text-linkorange);
  color: var(--dl-color-text-text-linkorange);
  margin-right: var(--dl-space-space-halfunit);
}
.icon-callout-set-of-3-chevron-down {
  width: 16px;
  height: 16px;
}
.icon-callout-set-of-3-root-class-name {
  width: 100%;
  min-height: 100%;
}
.icon-callout-set-of-3-root-class-name1 {
  width: 100%;
  align-self: center;
}
.icon-callout-set-of-3-root-class-name2 {
  width: 100%;
}
.icon-callout-set-of-3-root-class-name3 {
  width: 100%;
  min-height: 100%;
}
.icon-callout-set-of-3-root-class-name4 {
  width: 100%;
  align-self: center;
}
.icon-callout-set-of-3-root-class-name5 {
  width: 100%;
}
.icon-callout-set-of-3-root-class-name6 {
  width: 100%;
  min-height: 100%;
}
.icon-callout-set-of-3-root-class-name7 {
  width: 100%;
  align-self: center;
}
.icon-callout-set-of-3-root-class-name8 {
  width: 100%;
}
</style>
