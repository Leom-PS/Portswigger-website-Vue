<template>
  <header class="navbar5-container">
    <header data-thq="thq-navbar" class="navbar5-navbar-interactive">
      <img :alt="logoAlt" :src="logoSrc" class="navbar5-image1" />
      <div data-thq="thq-navbar-nav" class="navbar5-desktop-menu">
        <nav class="navbar5-links">
          <span class="thq-body-small thq-link">{{ link1 }}</span>
          <span class="thq-body-small thq-link">{{ link2 }}</span>
          <span class="thq-body-small thq-link">{{ link3 }}</span>
          <div class="navbar5-container1">
            <div
              @click="link5DropdownVisible = !link5DropdownVisible"
              class="navbar5-link5-dropdown-trigger"
            >
              <span class="thq-body-small thq-link">{{ link4 }}</span>
              <div class="navbar5-icon-container">
                <div v-if="link5DropdownVisible" class="navbar5-container2">
                  <svg viewBox="0 0 1024 1024" class="navbar5-icon">
                    <path d="M298 426h428l-214 214z"></path>
                  </svg>
                </div>
                <div v-if="!link5DropdownVisible" class="navbar5-container3">
                  <svg viewBox="0 0 1024 1024" class="navbar5-icon02">
                    <path d="M426 726v-428l214 214z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              v-if="link5DropdownVisible"
              class="navbar5-container4 thq-box-shadow"
            >
              <div class="navbar5-menu-item">
                <div class="navbar5-content">
                  <span class="navbar5-page1 thq-body-large">{{ page1 }}</span>
                </div>
              </div>
              <div class="navbar5-menu-item1">
                <div class="navbar5-content1">
                  <span class="navbar5-page2 thq-body-large">{{ page2 }}</span>
                </div>
              </div>
              <div class="navbar5-menu-item2">
                <div class="navbar5-content2">
                  <span class="navbar5-page3 thq-body-large">{{ page3 }}</span>
                </div>
              </div>
              <div class="navbar5-menu-item3">
                <div class="navbar5-content3">
                  <span class="navbar5-page4 thq-body-large">{{ page4 }}</span>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div data-thq="thq-burger-menu" class="navbar5-burger-menu">
        <svg viewBox="0 0 1024 1024" class="navbar5-icon04">
          <path
            d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
          ></path>
        </svg>
      </div>
      <div data-thq="thq-mobile-menu" class="navbar5-mobile-menu">
        <div class="navbar5-nav">
          <div class="navbar5-top">
            <img :alt="logoAlt" :src="logoSrc" class="navbar5-logo" />
            <div data-thq="thq-close-menu" class="navbar5-close-menu">
              <svg viewBox="0 0 1024 1024" class="navbar5-icon06">
                <path
                  d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                ></path>
              </svg>
            </div>
          </div>
          <nav class="navbar5-links1">
            <span class="thq-body-small thq-link">{{ link1 }}</span>
            <span class="thq-body-small thq-link">{{ link2 }}</span>
            <span class="thq-body-small thq-link">{{ link3 }}</span>
            <div class="navbar5-link5-accordion">
              <div
                @click="link5AccordionOpen = !link5AccordionOpen"
                class="navbar5-trigger"
              >
                <span class="thq-body-small thq-link">{{ link4 }}</span>
                <div class="navbar5-icon-container1">
                  <div v-if="link5AccordionOpen" class="navbar5-container5">
                    <svg viewBox="0 0 1024 1024" class="navbar5-icon08">
                      <path d="M298 426h428l-214 214z"></path>
                    </svg>
                  </div>
                  <div v-if="!link5AccordionOpen" class="navbar5-container6">
                    <svg viewBox="0 0 1024 1024" class="navbar5-icon10">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div v-if="link5AccordionOpen" class="navbar5-container7">
                <div class="navbar5-menu-item4">
                  <div class="navbar5-content4">
                    <span class="navbar5-page11 thq-body-large">{{ page1 }}</span>
                  </div>
                </div>
                <div class="navbar5-menu-item5">
                  <div class="navbar5-content5">
                    <span class="navbar5-page21 thq-body-large">{{ page2 }}</span>
                  </div>
                </div>
                <div class="navbar5-menu-item6">
                  <div class="navbar5-content6">
                    <span class="navbar5-page31 thq-body-large">{{ page3 }}</span>
                  </div>
                </div>
                <div class="navbar5-menu-item7">
                  <div class="navbar5-content7">
                    <span class="navbar5-page41 thq-body-large">{{ page4 }}</span>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div class="navbar5-icon-group">
          <svg viewBox="0 0 950.8571428571428 1024" class="thq-icon-x-small">
            <path
              d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
            ></path></svg
          ><svg
            viewBox="0 0 877.7142857142857 1024"
            class="navbar5-icon14 thq-icon-x-small"
          >
            <path
              d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
            ></path></svg
          ><svg
            viewBox="0 0 602.2582857142856 1024"
            class="navbar5-icon16 thq-icon-x-small"
          >
            <path
              d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
            ></path>
          </svg>
        </div>
      </div>
    </header>
    <div
      @click="link5DropdownVisible = false"
      v-if="link5DropdownVisible"
      class="navbar5-container8"
    ></div>
  </header>
</template>

<script>
export default {
  name: 'Navbar5',
  props: {
    logoAlt: {
      type: String,
      default: 'logo',
    },
    link3: {
      type: String,
      default: 'Link 3',
    },
    link4: {
      type: String,
      default: 'Link 4',
    },
    page2: {
      type: String,
      default: 'Page Two',
    },
    page3: {
      type: String,
      default: 'Page Three',
    },
    page1: {
      type: String,
      default: 'Page One',
    },
    page4: {
      type: String,
      default: 'Page Four',
    },
    logoSrc: {
      type: String,
      default:
        'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
    },
    link2: {
      type: String,
      default: 'Link 2',
    },
    link1: {
      type: String,
      default: 'Link 1',
    },
  },
  data() {
    return {
      link5AccordionOpen: false,
      link5DropdownVisible: false,
    }
  },
}
</script>

<style scoped>
.navbar5-container {
  width: 100%;
  display: flex;
  z-index: 100;
  position: relative;
  justify-content: center;
  background-color: var(--dl-color-theme-neutral-light);
}
.navbar5-navbar-interactive {
  width: 100%;
  display: flex;
  z-index: 100;
  align-items: center;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-threeunits);
  padding-bottom: var(--dl-space-space-twounits);
  justify-content: space-between;
}
.navbar5-image1 {
  height: 3rem;
}
.navbar5-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: space-between;
}
.navbar5-links {
  gap: var(--dl-space-space-twounits);
  flex: 1;
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
.navbar5-container1 {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
.navbar5-link5-dropdown-trigger {
  gap: 4px;
  cursor: pointer;
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
.navbar5-icon-container {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
.navbar5-container2 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
.navbar5-icon {
  width: 24px;
  height: 24px;
}
.navbar5-container3 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
.navbar5-icon02 {
  width: 24px;
  height: 24px;
}
.navbar5-container4 {
  top: 30px;
  right: 0px;
  display: flex;
  padding: var(--dl-space-space-oneandhalfunits);
  z-index: 100;
  position: absolute;
  align-items: flex-start;
  animation-name: fadeInDown;
  flex-direction: column;
  animation-delay: 0s;
  background-color: var(--dl-color-theme-neutral-light);
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}
.navbar5-menu-item {
  gap: 12px;
  cursor: pointer;
  display: flex;
  padding: 8px 0;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.navbar5-content {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.navbar5-page1 {
  white-space: nowrap;
}
.navbar5-menu-item1 {
  gap: 12px;
  cursor: pointer;
  display: flex;
  padding: 8px 0;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.navbar5-content1 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.navbar5-page2 {
  white-space: nowrap;
}
.navbar5-menu-item2 {
  gap: 12px;
  cursor: pointer;
  display: flex;
  padding: 8px 0;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.navbar5-content2 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.navbar5-page3 {
  white-space: nowrap;
}
.navbar5-menu-item3 {
  gap: 12px;
  cursor: pointer;
  display: flex;
  padding: 8px 0;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.navbar5-content3 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.navbar5-page4 {
  white-space: nowrap;
}
.navbar5-burger-menu {
  display: none;
}
.navbar5-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.navbar5-mobile-menu {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  display: none;
  padding: var(--dl-space-space-twounits);
  z-index: 100;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--dl-color-theme-neutral-light);
}
.navbar5-nav {
  display: flex;
  align-items: stretch;
  flex-direction: column;
}
.navbar5-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.navbar5-logo {
  height: 2rem;
}
.navbar5-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.navbar5-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.navbar5-links1 {
  gap: var(--dl-space-space-unit);
  width: 100%;
  display: flex;
  align-self: flex-start;
  flex-direction: column;
}
.navbar5-link5-accordion {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.navbar5-trigger {
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
.navbar5-icon-container1 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
.navbar5-container5 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
.navbar5-icon08 {
  width: 24px;
  height: 24px;
}
.navbar5-container6 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
.navbar5-icon10 {
  width: 24px;
  height: 24px;
}
.navbar5-container7 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-top: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-oneandhalfunits);
  flex-direction: column;
}
.navbar5-menu-item4 {
  gap: 12px;
  cursor: pointer;
  display: flex;
  padding: 8px 0;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.navbar5-content4 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.navbar5-page11 {
  white-space: nowrap;
}
.navbar5-menu-item5 {
  gap: 12px;
  cursor: pointer;
  display: flex;
  padding: 8px 0;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.navbar5-content5 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.navbar5-page21 {
  white-space: nowrap;
}
.navbar5-menu-item6 {
  gap: 12px;
  cursor: pointer;
  display: flex;
  padding: 8px 0;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.navbar5-content6 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.navbar5-page31 {
  white-space: nowrap;
}
.navbar5-menu-item7 {
  gap: 12px;
  cursor: pointer;
  display: flex;
  padding: 8px 0;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.navbar5-content7 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.navbar5-page41 {
  white-space: nowrap;
}
.navbar5-icon-group {
  gap: var(--dl-space-space-twounits);
  display: flex;
}
.navbar5-icon14 {
  height: var(--dl-size-size-xsmall);
}
.navbar5-icon16 {
  height: var(--dl-size-size-xsmall);
}
.navbar5-container8 {
  top: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  align-items: flex-start;
  flex-direction: column;
}
@media(max-width: 767px) {
  .navbar5-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .navbar5-desktop-menu {
    display: none;
  }
  .navbar5-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
@media(max-width: 360px) {
  .navbar5-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }
  .navbar5-mobile-menu {
    padding: var(--dl-space-space-unit);
  }
}
</style>
