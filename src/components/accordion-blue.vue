<template>
  <div
    class="accordion-blue-faq8 thq-section-padding"
    v-bind:class="rootClassName"
  >
    <div class="accordion-blue-max-width thq-section-max-width">
      <div class="accordion-blue-container thq-flex-column">
        <div class="accordion-blue-list thq-flex-column">
          <div class="accordion-blue-faq1">
            <div
              @click="faq1Visible = !faq1Visible"
              class="accordion-blue-trigger"
            >
              <p class="accordion-blue-faq1-question BodyLarge thq-body-large">
                {{ titletext }}
              </p>
              <div class="accordion-blue-icons-container">
                <div v-if="!faq1Visible">
                  <svg viewBox="0 0 1024 1024" class="accordion-blue-icon">
                    <path
                      d="M316 366l196 196 196-196 60 60-256 256-256-256z"
                    ></path>
                  </svg>
                </div>
                <div v-if="faq1Visible">
                  <svg viewBox="0 0 1024 1024" class="accordion-blue-icon2">
                    <path
                      d="M316 658l-60-60 256-256 256 256-60 60-196-196z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div v-if="faq1Visible" class="accordion-blue-container3">
              <span
                id="zxcz as dasdjkahsjafb as dajshdg ajasbdajshdgaj kjashdj"
                class="accordion-blue-text BodyLarge"
              >
                {{ content }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccordionBlue',
  props: {
    rootClassName: String,
    titletext: {
      type: String,
      default: 'Here is the title',
    },
    content: {
      type: String,
      default: 'Here is the new text',
    },
  },
  data() {
    return {
      faq1Visible: false,
    }
  },
}
</script>

<style scoped>
.accordion-blue-faq8 {
  width: 100%;
  height: auto;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-shrink: 0;
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
  flex-direction: column;
  padding-bottom: 0px;
}
.accordion-blue-max-width {
  gap: var(--dl-space-space-threeunits);
  display: flex;
  align-items: center;
  flex-direction: column;
}
.accordion-blue-container {
  gap: var(--dl-space-space-threeunits);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}
.accordion-blue-list {
  gap: var(--dl-space-space-halfunit);
  width: 100%;
  height: auto;
  display: flex;
  align-self: center;
  align-items: flex-start;
}
.accordion-blue-faq1 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.accordion-blue-trigger {
  cursor: pointer;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  transition: 0.3s;
  align-items: center;
  border-radius: var(--dl-radius-radius-radius4);
  flex-direction: row;
  justify-content: space-between;
  background-color: var(--dl-color-backgrounds-blue6);
}
.accordion-blue-trigger:hover {
  fill: var(--dl-color-theme-secondary2);
  color: var(--dl-color-theme-secondary2);
  background-color: var(--dl-color-backgrounds-blue5);
}
.accordion-blue-faq1-question {
  fill: var(--dl-color-text-text-bodyprimary);
  color: var(--dl-color-text-text-bodyprimary);
  text-align: center;
}
.accordion-blue-icons-container {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
.accordion-blue-icon {
  width: 24px;
  height: 24px;
}
.accordion-blue-icon2 {
  width: 24px;
  height: 24px;
}
.accordion-blue-container3 {
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  align-items: flex-start;
  animation-name: fadeIn;
  flex-direction: row;
  animation-delay: 0s;
  justify-content: space-between;
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}
.accordion-blue-text {
  fill: var(--dl-color-text-text-bodyprimary);
  color: var(--dl-color-text-text-bodyprimary);
}
.accordion-blue-root-class-name {
  margin-bottom: 20px;
}
.accordion-blue-root-class-name1 {
  margin-bottom: 20px;
}
.accordion-blue-root-class-name2 {
  margin-bottom: 20px;
}
.accordion-blue-root-class-name3 {
  margin-bottom: 20px;
}
.accordion-blue-root-class-name4 {
  margin-bottom: 20px;
}
.accordion-blue-root-class-name5 {
  margin-bottom: 20px;
}
.accordion-blue-root-class-name6 {
  margin-bottom: 20px;
}
.accordion-blue-root-class-name7 {
  margin-bottom: 20px;
}

.accordion-blue-root-class-name9 {
  margin-bottom: 20px;
}
.accordion-blue-root-class-name10 {
  margin-bottom: 20px;
}

.accordion-blue-root-class-name12 {
  margin-bottom: 20px;
}
.accordion-blue-root-class-name13 {
  margin-bottom: 20px;
}

.accordion-blue-root-class-name15 {
  margin-bottom: 20px;
}
.accordion-blue-root-class-name16 {
  margin-bottom: 20px;
}

.accordion-blue-root-class-name18 {
  margin-bottom: 20px;
}
.accordion-blue-root-class-name19 {
  margin-bottom: 20px;
}

.accordion-blue-root-class-name21 {
  margin-bottom: 20px;
}
.accordion-blue-root-class-name22 {
  margin-bottom: 20px;
}

.accordion-blue-root-class-name24 {
  margin-bottom: 20px;
}
.accordion-blue-root-class-name25 {
  margin-bottom: 20px;
}

@media(max-width: 991px) {
  .accordion-blue-container {
    flex-direction: column;
  }
}
@media(max-width: 360px) {
  .accordion-blue-max-width {
    gap: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
