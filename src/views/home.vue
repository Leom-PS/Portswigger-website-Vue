<template>
  <div class="home-container"><ps-header></ps-header></div>
</template>

<script>
import PsHeader from '../components/ps-header'

export default {
  name: 'Home',
  props: {},
  components: {
    PsHeader,
  },
  metaInfo: {
    title: 'Portswigger website',
    meta: [
      {
        property: 'og:title',
        content: 'Portswigger website',
      },
    ],
  },
}
</script>

<style scoped>
.home-container {
  width: 100%;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
</style>
