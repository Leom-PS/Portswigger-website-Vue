<template>
  <div
    class="existing-ds-list-item-with-icon-container"
    v-bind:class="rootClassName"
  >
    <div class="existing-ds-list-item-with-icon-container1">
      <img
        :alt="imageAlt"
        :src="imageSrc"
        class="existing-ds-list-item-with-icon-image"
      />
      <span class="existing-ds-list-item-with-icon-text">
        <span class="existing-ds-list-item-with-icon-text1">{{ bold }}</span>
        <span>{{ regular }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExistingDSListItemWithIcon',
  props: {
    rootClassName: String,
    imageSrc: {
      type: String,
      default: '/check%20in%20circle%20outlined.svg',
    },
    regular: {
      type: String,
      default:
        ' All subscriptions come with no limits on the number of applications (FQDNs) or users.',
    },
    bold: {
      type: String,
      default: 'Unlimited Applications and Users:',
    },
    imageAlt: {
      type: String,
      default: 'image',
    },
  },
}
</script>

<style scoped>
.existing-ds-list-item-with-icon-container {
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.existing-ds-list-item-with-icon-container1 {
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
  flex-direction: row;
  justify-content: flex-start;
}
.existing-ds-list-item-with-icon-image {
  width: 24px;
  margin-top: 3px;
  object-fit: cover;
}
.existing-ds-list-item-with-icon-text {
  fill: #5C5C5B;
  color: #5C5C5B;
  font-size: 18px;
  font-family: "Arial";
  line-height: 30px;
  margin-left: 20px;
}
.existing-ds-list-item-with-icon-text1 {
  font-style: normal;
  font-weight: 700;
}
.existing-ds-list-item-with-icon-root-class-name {
  width: auto;
}
.existing-ds-list-item-with-icon-root-class-name1 {
  width: auto;
}
.existing-ds-list-item-with-icon-root-class-name2 {
  width: auto;
}
.existing-ds-list-item-with-icon-root-class-name3 {
  width: auto;
}
</style>
