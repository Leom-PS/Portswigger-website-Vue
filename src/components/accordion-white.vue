<template>
  <div
    class="accordion-white-faq8 thq-section-padding"
    v-bind:class="rootClassName"
  >
    <div class="accordion-white-max-width thq-section-max-width">
      <div class="accordion-white-container thq-flex-column">
        <div class="accordion-white-list thq-flex-column">
          <div class="accordion-white-faq1">
            <div
              @click="faq1Visible = !faq1Visible"
              class="accordion-white-trigger"
            >
              <p class="accordion-white-faq1-question BodyLarge thq-body-large">
                {{ accordiontitle }}
              </p>
              <div class="accordion-white-icons-container">
                <div v-if="!faq1Visible">
                  <svg viewBox="0 0 1024 1024" class="accordion-white-icon">
                    <path
                      d="M316 366l196 196 196-196 60 60-256 256-256-256z"
                    ></path>
                  </svg>
                </div>
                <div v-if="faq1Visible">
                  <svg viewBox="0 0 1024 1024" class="accordion-white-icon2">
                    <path
                      d="M316 658l-60-60 256-256 256 256-60 60-196-196z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div v-if="faq1Visible" class="accordion-white-container3">
              <span
                id="sfdfsdfsf assay asasfa as asf af"
                class="accordion-white-text"
              >
                {{ accordioncontent }}
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
  name: 'AccordionWhite',
  props: {
    rootClassName: String,
    accordiontitle: {
      type: String,
      default: 'Accordion title',
    },
    accordioncontent: {
      type: String,
      default: 'test here',
    },
  },
  data() {
    return {
      faq3Visible: false,
      faq2Visible: false,
      faq4Visible: false,
      faq5Visible: false,
      faq1Visible: false,
    }
  },
}
</script>

<style scoped>
.accordion-white-faq8 {
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
.accordion-white-max-width {
  gap: var(--dl-space-space-threeunits);
  display: flex;
  align-items: center;
  flex-direction: column;
}
.accordion-white-container {
  gap: var(--dl-space-space-threeunits);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}
.accordion-white-list {
  gap: var(--dl-space-space-halfunit);
  width: 100%;
  height: auto;
  display: flex;
  align-self: center;
  align-items: flex-start;
}
.accordion-white-faq1 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.accordion-white-trigger {
  cursor: pointer;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: stretch;
  transition: 0.3s;
  align-items: center;
  border-radius: var(--dl-radius-radius-radius4);
  flex-direction: row;
  justify-content: space-between;
  background-color: var(--dl-color-default-white);
}
.accordion-white-trigger:hover {
  fill: var(--dl-color-theme-secondary2);
  color: var(--dl-color-theme-secondary2);
  background-color: var(--dl-color-backgrounds-blue5);
}
.accordion-white-faq1-question {
  fill: var(--dl-color-text-text-bodyprimary);
  color: var(--dl-color-text-text-bodyprimary);
  text-align: center;
}
.accordion-white-icons-container {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
.accordion-white-icon {
  width: 24px;
  height: 24px;
}
.accordion-white-icon2 {
  width: 24px;
  height: 24px;
}
.accordion-white-container3 {
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
.accordion-white-text {
  fill: var(--dl-color-text-text-bodyprimary);
  color: var(--dl-color-text-text-bodyprimary);
}
.accordion-white-root-class-name {
  margin-bottom: 20px;
}
.accordion-white-root-class-name1 {
  margin-bottom: 20px;
}

.accordion-white-root-class-name3 {
  margin-bottom: 20px;
}

.accordion-white-root-class-name5 {
  margin-bottom: 20px;
}
.accordion-white-root-class-name6 {
  margin-bottom: 20px;
}
.accordion-white-root-class-name7 {
  margin-bottom: 20px;
}

.accordion-white-root-class-name9 {
  margin-bottom: 20px;
}
.accordion-white-root-class-name10 {
  margin-bottom: 20px;
}

@media(max-width: 991px) {
  .accordion-white-container {
    flex-direction: column;
  }
}
@media(max-width: 360px) {
  .accordion-white-max-width {
    gap: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
