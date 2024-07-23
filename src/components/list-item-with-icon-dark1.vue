<template>
  <div class="list-item-with-icon-dark1-container" v-bind:class="rootClassName">
    <div class="list-item-with-icon-dark1-frame1">
      <img
        alt="CheckInCircleOutlined1216"
        src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/1a02367f-e1ab-4d6d-81a8-d7d01ad8815e/943f32b7-f894-4142-ab16-ea300529f526?org_if_sml=11007&amp;force_format=original"
        class="list-item-with-icon-dark1-check-in-circle-outlined"
      />
      <span class="list-item-with-icon-dark1-text BodyLarge">{{ text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListItemWithIconDark1',
  props: {
    text: {
      type: String,
      default: 'Secure your whole web portfolio',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.list-item-with-icon-dark1-container {
  width: auto;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.list-item-with-icon-dark1-frame1 {
  gap: 20px;
  width: 100%;
  height: auto;
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
}
.list-item-with-icon-dark1-check-in-circle-outlined {
  width: 24px;
  height: 24px;
}
.list-item-with-icon-dark1-text {
  fill: var(--dl-color-theme-neutral-light);
  color: var(--dl-color-theme-neutral-light);
}
.list-item-with-icon-dark1-root-class-name {
  margin-bottom: 32px;
}
.list-item-with-icon-dark1-root-class-name1 {
  margin-bottom: 32px;
}

.list-item-with-icon-dark1-root-class-name3 {
  margin-bottom: 32px;
}
.list-item-with-icon-dark1-root-class-name4 {
  margin-bottom: 32px;
}

.list-item-with-icon-dark1-root-class-name6 {
  margin-bottom: 32px;
}
.list-item-with-icon-dark1-root-class-name7 {
  margin-bottom: 32px;
}

.list-item-with-icon-dark1-root-class-name9 {
  margin-bottom: 32px;
}
.list-item-with-icon-dark1-root-class-name10 {
  margin-bottom: 32px;
}

.list-item-with-icon-dark1-root-class-name12 {
  margin-bottom: 32px;
}
.list-item-with-icon-dark1-root-class-name13 {
  margin-bottom: 32px;
}

.list-item-with-icon-dark1-root-class-name15 {
  margin-bottom: 32px;
}
.list-item-with-icon-dark1-root-class-name16 {
  margin-bottom: 32px;
}

</style>
