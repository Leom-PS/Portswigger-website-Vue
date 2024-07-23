<template>
  <div class="star-rating-white-container" v-bind:class="rootClassName">
    <div class="star-rating-white-frame5148">
      <img
        alt="Frame51478119"
        src="/external/frame51478119-imwa.svg"
        class="star-rating-white-frame5147"
      />
      <span class="star-rating-white-text BodyRegular">{{ quote }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StarRatingWhite',
  props: {
    rootClassName: String,
    quote: {
      type: String,
      default:
        '“Burp Suite turns our web security testing into a comprehensive, seamless process”',
    },
  },
}
</script>

<style scoped>
.star-rating-white-container {
  width: auto;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  padding-left: 20px;
  padding-right: 20px;
  flex-direction: column;
}
.star-rating-white-frame5148 {
  gap: 8px;
  width: 100%;
  height: auto;
  display: flex;
  align-self: center;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
.star-rating-white-frame5147 {
  width: 120px;
  height: 24px;
}
.star-rating-white-text {
  fill: var(--dl-color-theme-neutral-light);
  color: var(--dl-color-theme-neutral-light);
  width: 100%;
  height: auto;
  text-align: center;
}
.star-rating-white-root-class-name {
  width: 225px;
  margin-right: var(--dl-space-space-twounits);
}
.star-rating-white-root-class-name3 {
  width: 225px;
  margin-right: var(--dl-space-space-twounits);
}
.star-rating-white-root-class-name4 {
  width: 225px;
  margin-right: var(--dl-space-space-twounits);
}
.star-rating-white-root-class-name5 {
  width: 225px;
}
.star-rating-white-root-class-name6 {
  width: 225px;
  margin-right: var(--dl-space-space-twounits);
}
.star-rating-white-root-class-name7 {
  width: 225px;
  margin-right: var(--dl-space-space-twounits);
}
.star-rating-white-root-class-name8 {
  width: 225px;
}



.star-rating-white-root-class-name12 {
  width: 225px;
  margin-right: var(--dl-space-space-twounits);
}
.star-rating-white-root-class-name13 {
  width: 225px;
  margin-right: var(--dl-space-space-twounits);
}
.star-rating-white-root-class-name14 {
  width: 225px;
}
.star-rating-white-root-class-name15 {
  width: 225px;
  margin-right: var(--dl-space-space-twounits);
}
.star-rating-white-root-class-name16 {
  width: 225px;
  margin-right: var(--dl-space-space-twounits);
}
.star-rating-white-root-class-name17 {
  width: 225px;
}
.star-rating-white-root-class-name18 {
  width: 100%;
  align-self: center;
  margin-right: 100px;
}
.star-rating-white-root-class-name19 {
  width: 100%;
  align-self: center;
}
.star-rating-white-root-class-name20 {
  width: 100%;
  align-self: center;
  margin-right: 100px;
}
.star-rating-white-root-class-name21 {
  width: 100%;
  align-self: center;
  margin-right: 100px;
}
.star-rating-white-root-class-name22 {
  width: 100%;
  align-self: center;
  margin-right: 100px;
}
.star-rating-white-root-class-name23 {
  width: 100%;
  align-self: center;
}
.star-rating-white-root-class-name24 {
  width: 100%;
  align-self: center;
  margin-right: 100px;
}
.star-rating-white-root-class-name25 {
  width: 100%;
  align-self: center;
  margin-right: 100px;
}
.star-rating-white-root-class-name26 {
  width: 100%;
  align-self: center;
}
.star-rating-white-root-class-name27 {
  width: 100%;
  align-self: center;
  margin-right: 100px;
}
.star-rating-white-root-class-name28 {
  width: 100%;
  align-self: center;
  margin-right: 100px;
}
.star-rating-white-root-class-name29 {
  width: 100%;
  align-self: center;
}
.star-rating-white-root-class-name30 {
  width: 225px;
  margin-right: var(--dl-space-space-twounits);
}
.star-rating-white-root-class-name31 {
  width: 225px;
  margin-right: var(--dl-space-space-twounits);
}
.star-rating-white-root-class-name32 {
  width: 225px;
}
.star-rating-white-root-class-name33 {
  width: 100%;
  align-self: center;
  margin-right: 100px;
}
.star-rating-white-root-class-name34 {
  width: 100%;
  align-self: center;
  margin-right: 100px;
}
.star-rating-white-root-class-name35 {
  width: 100%;
  align-self: center;
}
.star-rating-white-root-class-name36 {
  width: 225px;
  margin-right: var(--dl-space-space-twounits);
}
.star-rating-white-root-class-name37 {
  width: 225px;
  margin-right: var(--dl-space-space-twounits);
}
.star-rating-white-root-class-name38 {
  width: 225px;
}
.star-rating-white-root-class-name1 {
  width: 225px;
  margin-right: var(--dl-space-space-twounits);
}
.star-rating-white-root-class-name2 {
  width: 225px;
  margin-right: var(--dl-space-space-twounits);
}
.star-rating-white-root-class-name39 {
  width: 225px;
  margin-right: var(--dl-space-space-twounits);
}
.star-rating-white-root-class-name40 {
  width: 225px;
  margin-right: var(--dl-space-space-twounits);
}
.star-rating-white-root-class-name41 {
  width: 225px;
  margin-right: var(--dl-space-space-twounits);
}
@media(max-width: 360px) {
  .star-rating-white-root-class-name {
    width: 360px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
  }
  .star-rating-white-root-class-name1 {
    width: 360px;
  }
  .star-rating-white-root-class-name2 {
    width: 360px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
  }
  .star-rating-white-root-class-name39 {
    width: 360px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
  }
  .star-rating-white-root-class-name40 {
    width: 360px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
  }
  .star-rating-white-root-class-name41 {
    width: 360px;
  }
}
</style>
