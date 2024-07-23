<template>
  <div class="twitter-button-container" v-bind:class="rootClassName">
    <div href="https://twitter.com/Burp_Suite" class="twitter-button-frame5622">
      <div class="twitter-button-frame5626">
        <img
          alt="TwitterandXlogossvg14713"
          src="/external/twitterandxlogossvg14713-0pok-200h.png"
          class="twitter-button-twitterand-xlogossvg1"
        />
        <span class="twitter-button-text">{{ text }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TwitterButton',
  props: {
    rootClassName: String,
    text: {
      type: String,
      default: 'Follow us',
    },
  },
}
</script>

<style scoped>
.twitter-button-container {
  width: auto;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.twitter-button-frame5622 {
  gap: 10px;
  width: 100%;
  height: auto;
  display: flex;
  padding: 2px 20px;
  align-items: center;
  border-color: rgba(0, 172, 238, 1);
  border-style: solid;
  border-width: 1px;
  border-radius: 20px;
  justify-content: center;
}
.twitter-button-frame5626 {
  gap: 5px;
  display: flex;
  align-items: center;
}
.twitter-button-twitterand-xlogossvg1 {
  width: 18px;
  height: 14px;
}
.twitter-button-text {
  fill: rgba(0, 172, 238, 1);
  color: rgba(0, 172, 238, 1);
  font-size: 14px;
  font-family: "Arial";
  line-height: 24px;
}
.twitter-button-root-class-name {
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>
