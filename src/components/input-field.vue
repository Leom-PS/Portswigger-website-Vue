<template>
  <div class="input-field-container" v-bind:class="rootClassName">
    <div class="input-field-field">
      <span class="BodyLargeBold">{{ placeholder }}</span>
      <input type="text" :placeholder="placeholder1" class="input-field-input" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputField',
  props: {
    placeholder1: {
      type: String,
      default: 'Placeholder',
    },
    rootClassName: String,
    placeholder: {
      type: String,
      default: 'Name',
    },
  },
}
</script>

<style scoped>
.input-field-container {
  width: auto;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.input-field-field {
  gap: 5px;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
}
.input-field-input {
  gap: 10px;
  color: rgba(29, 28, 26, 1);
  display: flex;
  padding: 5px 10px;
  font-size: 16px;
  align-self: stretch;
  text-align: left;
  align-items: center;
  flex-shrink: 0;
  font-family: Roboto;
  font-weight: 400;
  border-color: rgba(160, 160, 161, 1);
  border-style: solid;
  border-width: 1px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 1);
}
.input-field-root-class-name {
  fill: var(--dl-color-theme-neutral-dark);
  color: var(--dl-color-theme-neutral-dark);
  width: 100%;
  margin-bottom: var(--dl-space-space-twounits);
}
.input-field-root-class-name1 {
  fill: var(--dl-color-theme-neutral-dark);
  color: var(--dl-color-theme-neutral-dark);
  width: 100%;
  margin-bottom: var(--dl-space-space-twounits);
}
.input-field-root-class-name2 {
  fill: var(--dl-color-theme-neutral-dark);
  color: var(--dl-color-theme-neutral-dark);
  width: 100%;
  margin-bottom: var(--dl-space-space-twounits);
}
.input-field-root-class-name3 {
  fill: var(--dl-color-theme-neutral-dark);
  color: var(--dl-color-theme-neutral-dark);
  width: 100%;
  margin-bottom: var(--dl-space-space-twounits);
}
.input-field-root-class-name4 {
  fill: var(--dl-color-default-white);
  color: var(--dl-color-default-white);
  width: 100%;
  margin-bottom: var(--dl-space-space-twounits);
}
.input-field-root-class-name5 {
  fill: var(--dl-color-theme-neutral-dark);
  color: var(--dl-color-theme-neutral-dark);
  width: 100%;
  margin-bottom: var(--dl-space-space-twounits);
}
.input-field-root-class-name6 {
  fill: var(--dl-color-theme-neutral-dark);
  color: var(--dl-color-theme-neutral-dark);
  width: 100%;
  margin-bottom: var(--dl-space-space-twounits);
}
.input-field-root-class-name7 {
  fill: var(--dl-color-theme-neutral-dark);
  color: var(--dl-color-theme-neutral-dark);
  width: 100%;
  margin-bottom: var(--dl-space-space-twounits);
}
.input-field-root-class-name8 {
  fill: var(--dl-color-theme-neutral-dark);
  color: var(--dl-color-theme-neutral-dark);
  width: 100%;
  margin-bottom: var(--dl-space-space-twounits);
}



.input-field-root-class-name12 {
  fill: var(--dl-color-theme-neutral-dark);
  color: var(--dl-color-theme-neutral-dark);
  width: 100%;
  margin-bottom: var(--dl-space-space-twounits);
}
.input-field-root-class-name13 {
  fill: var(--dl-color-theme-neutral-dark);
  color: var(--dl-color-theme-neutral-dark);
  width: 100%;
  margin-bottom: var(--dl-space-space-twounits);
}
.input-field-root-class-name14 {
  fill: var(--dl-color-theme-neutral-dark);
  color: var(--dl-color-theme-neutral-dark);
  width: 100%;
  margin-bottom: var(--dl-space-space-twounits);
}
.input-field-root-class-name15 {
  fill: var(--dl-color-default-white);
  color: var(--dl-color-default-white);
  width: 100%;
  margin-bottom: var(--dl-space-space-twounits);
}
.input-field-root-class-name16 {
  fill: var(--dl-color-default-white);
  color: var(--dl-color-default-white);
  width: 100%;
  margin-bottom: var(--dl-space-space-twounits);
}
.input-field-root-class-name17 {
  fill: var(--dl-color-theme-neutral-dark);
  color: var(--dl-color-theme-neutral-dark);
  width: 100%;
  margin-bottom: var(--dl-space-space-twounits);
}
.input-field-root-class-name18 {
  fill: var(--dl-color-theme-neutral-dark);
  color: var(--dl-color-theme-neutral-dark);
  width: 100%;
  margin-bottom: var(--dl-space-space-twounits);
}
.input-field-root-class-name19 {
  fill: var(--dl-color-theme-neutral-dark);
  color: var(--dl-color-theme-neutral-dark);
  width: 100%;
  margin-bottom: var(--dl-space-space-twounits);
}
.input-field-root-class-name20 {
  fill: var(--dl-color-theme-neutral-dark);
  color: var(--dl-color-theme-neutral-dark);
  width: 100%;
  margin-bottom: var(--dl-space-space-twounits);
}
.input-field-root-class-name21 {
  fill: var(--dl-color-default-white);
  color: var(--dl-color-default-white);
  width: 100%;
  margin-bottom: var(--dl-space-space-twounits);
}
.input-field-root-class-name22 {
  fill: var(--dl-color-theme-neutral-dark);
  color: var(--dl-color-theme-neutral-dark);
  width: 100%;
  margin-bottom: var(--dl-space-space-twounits);
}
.input-field-root-class-name23 {
  fill: var(--dl-color-theme-neutral-dark);
  color: var(--dl-color-theme-neutral-dark);
  width: 100%;
  margin-bottom: var(--dl-space-space-twounits);
}
.input-field-root-class-name24 {
  fill: var(--dl-color-theme-neutral-dark);
  color: var(--dl-color-theme-neutral-dark);
  width: 100%;
  margin-bottom: var(--dl-space-space-twounits);
}
@media(max-width: 1600px) {
  .input-field-root-class-name {
    margin-top: var(--dl-space-space-unit);
  }
  .input-field-root-class-name2 {
    fill: var(--dl-color-default-white);
    color: var(--dl-color-default-white);
    margin-top: var(--dl-space-space-unit);
  }
  .input-field-root-class-name3 {
    fill: var(--dl-color-default-white);
    color: var(--dl-color-default-white);
  }
  .input-field-root-class-name4 {
    margin-top: var(--dl-space-space-unit);
  }
  .input-field-root-class-name5 {
    fill: var(--dl-color-default-white);
    color: var(--dl-color-default-white);
  }
  .input-field-root-class-name6 {
    margin-top: var(--dl-space-space-unit);
  }
  .input-field-root-class-name12 {
    margin-top: var(--dl-space-space-unit);
  }
  .input-field-root-class-name15 {
    margin-top: var(--dl-space-space-unit);
  }
  .input-field-root-class-name17 {
    margin-top: var(--dl-space-space-unit);
  }
  .input-field-root-class-name18 {
    margin-top: var(--dl-space-space-unit);
  }
  .input-field-root-class-name23 {
    margin-top: var(--dl-space-space-unit);
  }
}
</style>
