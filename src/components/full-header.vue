<template>
  <div class="full-header-container">
    <img :alt="imageAlt" :src="imageSrc" class="full-header-image" />
    <img :alt="imageAlt1" :src="imageSrc1" class="full-header-image1" />
    <img :alt="imageAlt2" :src="imageSrc2" class="full-header-image2" />
    <img :alt="imageAlt3" :src="imageSrc3" class="full-header-image3" />
    <img :alt="imageAlt4" :src="imageSrc4" class="full-header-image4" />
    <img :alt="imageAlt5" :src="imageSrc5" class="full-header-image5" />
    <img :alt="imageAlt6" :src="imageSrc6" class="full-header-image6" />
  </div>
</template>

<script>
export default {
  name: 'FullHeader',
  props: {
    imageSrc1: {
      type: String,
      default: '/mega-nav/images/dastardly.svg',
    },
    imageAlt6: {
      type: String,
      default: 'image',
    },
    imageAlt4: {
      type: String,
      default: 'image',
    },
    imageSrc3: {
      type: String,
      default: '/content/images/svg/icons/professional.svg',
    },
    imageAlt2: {
      type: String,
      default: 'image',
    },
    imageAlt: {
      type: String,
      default: 'image',
    },
    imageSrc6: {
      type: String,
      default: '/mega-nav/images/latest-burp-suite-software-download-200h.jpg',
    },
    imageSrc: {
      type: String,
      default: '/content/images/svg/icons/community.svg',
    },
    imageSrc5: {
      type: String,
      default: '/mega-nav/images/burp-suite-200h.jpg',
    },
    imageSrc4: {
      type: String,
      default: '/mega-nav/images/burp-suite-scanner-200w.jpg',
    },
    imageAlt5: {
      type: String,
      default: 'image',
    },
    imageAlt3: {
      type: String,
      default: 'image',
    },
    imageAlt1: {
      type: String,
      default: 'image',
    },
    imageSrc2: {
      type: String,
      default: '/content/images/svg/icons/enterprise.svg',
    },
  },
}
</script>

<style scoped>
.full-header-container {
  width: 100%;
  display: flex;
  position: relative;
}
.full-header-image {
  width: 200px;
  object-fit: cover;
}
.full-header-image1 {
  width: 200px;
  object-fit: cover;
}
.full-header-image2 {
  width: 200px;
  object-fit: cover;
}
.full-header-image3 {
  width: 200px;
  object-fit: cover;
}
.full-header-image4 {
  width: 200px;
  object-fit: cover;
}
.full-header-image5 {
  width: 200px;
  object-fit: cover;
}
.full-header-image6 {
  width: 200px;
  object-fit: cover;
}
</style>
