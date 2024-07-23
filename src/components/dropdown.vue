<template>
  <div class="dropdown-container" v-bind:class="rootClassName">
    <div class="dropdown-dropdown">
      <span class="dropdown-text BodyLargeBold">{{ label }}</span>
      <div class="dropdown-input">
        <span :id="placeholder" class="dropdown-text1 BodyLarge">
          Placeholder
        </span>
        <img
          alt="ChevronDownI121"
          src="/external/chevrondowni121-klbq.svg"
          class="dropdown-chevron-down"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    placeholder: {
      type: String,
      default: 'Placeholder',
    },
    rootClassName: String,
    label: {
      type: String,
      default: 'Industry',
    },
  },
}
</script>

<style scoped>
.dropdown-container {
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.dropdown-dropdown {
  gap: 5px;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
}
.dropdown-text {
  line-height: 1.15;
  text-transform: none;
  text-decoration: none;
}
.dropdown-input {
  gap: 10px;
  display: flex;
  padding: 5px 10px;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
  border-color: rgba(160, 160, 161, 1);
  border-style: solid;
  border-width: 1px;
  border-radius: 4px;
  justify-content: flex-end;
  background-color: rgba(255, 255, 255, 1);
}
.dropdown-text1 {
  color: rgba(29, 28, 26, 1);
  width: 100%;
  height: auto;
  flex-grow: 1;
  text-align: left;
  line-height: 139.9999976158142%;
}
.dropdown-chevron-down {
  width: 16px;
  height: 16px;
}
@media(max-width: 1600px) {
  .dropdown-container {
    width: auto;
    height: auto;
  }
  .dropdown-dropdown {
    width: 100%;
  }
  .dropdown-input {
    width: 100%;
    height: auto;
  }
}
</style>
