<template>
  <div
    class="thq-section-padding testimonial3-testimonial13"
    v-bind:class="rootClassName"
  >
    <div class="testimonial3-max-width thq-section-max-width">
      <img
        :alt="image1Alt"
        :src="image1Src"
        class="testimonial3-thumbnail thq-img-ratio-1-1"
      />
      <div class="testimonial3-content">
        <div class="testimonial3-stars"></div>
        <p class="thq-body-large testimonial3-text">{{ review1 }}</p>
        <div class="testimonial3-avatar">
          <div class="testimonial3-avatar-content">
            <span class="testimonial3-text1 thq-body-small">
              {{ author1Name }}
            </span>
            <span class="thq-body-small testimonial3-text2">
              {{ author1Position }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Testimonial3',
  props: {
    author1Position: {
      type: String,
      default: 'Position, Company name',
    },
    company1LogoAlt: {
      type: String,
      default: 'Company Logo',
    },
    image1Alt: {
      type: String,
      default: 'Company Alt',
    },
    company1LogoSrc: {
      type: String,
      default:
        'https://presentation-website-assets.teleporthq.io/logos/logo.png',
    },
    rootClassName: String,
    author1Name: {
      type: String,
      default: 'Author Name',
    },
    review1: {
      type: String,
      default:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."',
    },
    image1Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=700',
    },
  },
}
</script>

<style scoped>
.testimonial3-max-width {
  gap: var(--dl-space-space-twounits);
  display: flex;
  align-items: center;
  justify-content: center;
}
.testimonial3-thumbnail {
  max-width: 640px;
}
.testimonial3-content {
  gap: var(--dl-space-space-twounits);
  flex: 1;
  width: 100%;
  display: flex;
  overflow: hidden;
  flex-grow: 1;
  max-width: 800px;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}
.testimonial3-stars {
  fill: var(--dl-color-theme-primary1);
  border: 2px dashed rgba(120, 120, 120, 0.4);
  display: flex;
  align-items: center;
  flex-direction: row;
}
.testimonial3-avatar {
  gap: var(--dl-space-space-oneandhalfunits);
  width: 100%;
  display: flex;
  align-items: center;
}
.testimonial3-avatar-content {
  flex: 1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.testimonial3-text1 {
  font-weight: 600;
}
@media(max-width: 1600px) {
  .testimonial3-testimonial13 {
    align-items: flex-start;
    flex-direction: column;
  }
  .testimonial3-thumbnail {
    height: 367px;
  }
  .testimonial3-text {
    fill: var(--dl-color-theme-secondary1);
    color: var(--dl-color-theme-secondary1);
    font-style: normal;
    font-family: Inter;
    font-weight: 600;
  }
  .testimonial3-text1 {
    fill: var(--dl-color-theme-secondary2);
    color: var(--dl-color-theme-secondary2);
    font-family: Inter;
  }
  .testimonial3-text2 {
    fill: var(--dl-color-theme-secondary2);
    color: var(--dl-color-theme-secondary2);
    font-family: Inter;
  }
}
@media(max-width: 991px) {
  .testimonial3-max-width {
    flex-direction: column;
  }
  .testimonial3-content {
    align-items: center;
    justify-content: center;
  }
  .testimonial3-avatar {
    gap: 0;
    width: 100%;
    justify-content: space-between;
  }
}
@media(max-width: 767px) {
  .testimonial3-max-width {
    padding: var(--dl-space-space-threeunits);
  }
}
@media(max-width: 360px) {
  .testimonial3-max-width {
    padding: var(--dl-space-space-oneandhalfunits);
  }
  .testimonial3-text {
    text-align: center;
  }
  .testimonial3-avatar {
    flex-direction: column;
  }
  .testimonial3-avatar-content {
    align-items: center;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
