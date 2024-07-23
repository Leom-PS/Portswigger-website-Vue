<template>
  <div class="list-item-with-icon-dark3-container" v-bind:class="rootClassName">
    <div class="list-item-with-icon-dark3-frame1">
      <img
        alt="CheckInCircleOutlined1216"
        src="/external/checkincircleoutlined1216-agf.svg"
        class="list-item-with-icon-dark3-check-in-circle-outlined"
      />
      <span class="list-item-with-icon-dark3-text">{{ text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListItemWithIconDark3',
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
.list-item-with-icon-dark3-container {
  width: auto;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.list-item-with-icon-dark3-frame1 {
  gap: 20px;
  width: 100%;
  height: auto;
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
}
.list-item-with-icon-dark3-check-in-circle-outlined {
  width: 24px;
  height: 24px;
}
.list-item-with-icon-dark3-text {
  fill: var(--dl-color-theme-neutral-light);
  color: var(--dl-color-theme-neutral-light);
}
.list-item-with-icon-dark3-root-class-name {
  margin-bottom: var(--dl-space-space-twounits);
}
.list-item-with-icon-dark3-root-class-name1 {
  margin-bottom: var(--dl-space-space-twounits);
}

.list-item-with-icon-dark3-root-class-name3 {
  margin-bottom: var(--dl-space-space-twounits);
}
.list-item-with-icon-dark3-root-class-name4 {
  margin-bottom: var(--dl-space-space-twounits);
}

.list-item-with-icon-dark3-root-class-name6 {
  margin-bottom: var(--dl-space-space-twounits);
}
.list-item-with-icon-dark3-root-class-name7 {
  margin-bottom: var(--dl-space-space-twounits);
}

.list-item-with-icon-dark3-root-class-name9 {
  margin-bottom: var(--dl-space-space-twounits);
}
.list-item-with-icon-dark3-root-class-name10 {
  margin-bottom: var(--dl-space-space-twounits);
}

.list-item-with-icon-dark3-root-class-name12 {
  margin-bottom: var(--dl-space-space-twounits);
}
.list-item-with-icon-dark3-root-class-name13 {
  margin-bottom: var(--dl-space-space-twounits);
}

.list-item-with-icon-dark3-root-class-name15 {
  margin-bottom: var(--dl-space-space-twounits);
}
.list-item-with-icon-dark3-root-class-name16 {
  margin-bottom: var(--dl-space-space-twounits);
}
.list-item-with-icon-dark3-root-class-name17 {
  margin-bottom: var(--dl-space-space-twounits);
}

.list-item-with-icon-dark3-root-class-name19 {
  margin-bottom: var(--dl-space-space-twounits);
}
.list-item-with-icon-dark3-root-class-name20 {
  margin-bottom: var(--dl-space-space-twounits);
}
.list-item-with-icon-dark3-root-class-name21 {
  margin-bottom: var(--dl-space-space-twounits);
}
@media(max-width: 1600px) {
  .list-item-with-icon-dark3-root-class-name17 {
    fill: var(--dl-color-theme-neutral-dark);
    color: var(--dl-color-theme-neutral-dark);
    margin-bottom: var(--dl-space-space-twounits);
  }
}
@media(max-width: 991px) {
  .list-item-with-icon-dark3-frame1 {
    gap: 10px;
  }
  .list-item-with-icon-dark3-root-class-name {
    margin-right: var(--dl-space-space-twounits);
  }
  .list-item-with-icon-dark3-root-class-name1 {
    margin-right: var(--dl-space-space-twounits);
  }
  .list-item-with-icon-dark3-root-class-name19 {
    margin-right: var(--dl-space-space-twounits);
  }
  .list-item-with-icon-dark3-root-class-name20 {
    margin-right: var(--dl-space-space-twounits);
  }
  .list-item-with-icon-dark3-root-class-name21 {
    margin-right: var(--dl-space-space-twounits);
  }
}
@media(max-width: 767px) {
  .list-item-with-icon-dark3-root-class-name {
    margin-bottom: var(--dl-space-space-unit);
  }
  .list-item-with-icon-dark3-root-class-name1 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .list-item-with-icon-dark3-root-class-name19 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .list-item-with-icon-dark3-root-class-name20 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .list-item-with-icon-dark3-root-class-name21 {
    margin-bottom: var(--dl-space-space-unit);
  }
}
</style>
