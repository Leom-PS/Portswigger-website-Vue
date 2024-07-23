<template>
  <div id="ps-header" class="ps-header-container" v-bind:class="rootClassName">
    <div class="ps-header-container1">
      <div class="ps-header-container2">
        <DangerousHTML
          html="<script>
  body = document.querySelector('body');
  if(body !== null){
  body.insertAdjacentHTML('afterbegin',`<header class='page-header' id='top'>
              <div class='container'>
      <a class='logo' href='/'></a>
      <div class='header-right'>
          <div class='login-buttons'>
                  <a class='button-orange-small' href='/users'>Login</a>
          </div>
  
  
      <input type='checkbox' id='hamburger-mobile' class='hamburger-input-mobile'>
      <input type='radio' id='hamburger-desktop' class='hamburger-input-desktop' name='mega-nav-input'>
      <div class='hamburger-menu-mobile'>
          <label class='hamburger-menu-label header-hidden' for='hamburger-mobile'>
              <span class='hamburger-layers'></span>
          </label>
      </div>
      <div class='mega-nav'>
          <input type='radio' id='mega-nav-close' class='mega-nav-input-close' name='mega-nav-input'>
          <input type='radio' id='mega-nav-label-1' class='mega-nav-input-1' name='mega-nav-input'>
          <input type='radio' id='mega-nav-label-2' class='mega-nav-input-2' name='mega-nav-input'>
          <input type='radio' id='mega-nav-label-6' class='mega-nav-input-6' name='mega-nav-input'>
          <input type='radio' id='mega-nav-label-7' class='mega-nav-input-7' name='mega-nav-input'>
  
          <label for='mega-nav-close' class='mega-nav-close'></label>
  
          <label class='mega-nav-label mega-nav-label-1' for='mega-nav-label-1'>
              <span class='mega-nav-text'>Products</span>
              <span class='icon-arrow-head-down'></span>
          </label>
          <label class='mega-nav-label mega-nav-label-2' for='mega-nav-label-2'>
              <span class='mega-nav-text'>Solutions</span>
              <span class='icon-arrow-head-down'></span>
          </label>
          <a class='mega-nav-link' href='/research'><span class='mega-nav-text'>Research</span></a>
          <a class='mega-nav-link' href='/web-security'><span class='mega-nav-text'>Academy</span></a>
          <label class='mega-nav-label mega-nav-label-6' for='mega-nav-label-6'>
              <span class='mega-nav-text'>Support</span>
              <span class='icon-arrow-head-down'></span>
          </label>
  
          <label class='mega-nav-label mega-nav-label-7 header-hidden' for='mega-nav-label-7'>
              <span class='mega-nav-text'>Company</span>
              <span class='icon-arrow-head-down'></span>
          </label>
          <div class='hamburger-menu-desktop'>
              <label class='hamburger-menu-label header-show' for='hamburger-desktop'>
                  <span class='hamburger-layers'></span>
              </label>
              <div>
                  <a class='hamburger-menu-desktop-link hamburger-menu-desktop-link-1' href='/customers'><span class='mega-nav-text'>Customers</span></a>
                  <a class='hamburger-menu-desktop-link hamburger-menu-desktop-link-3' href='/about'><span class='mega-nav-text'>About</span></a>
                  <a class='hamburger-menu-desktop-link hamburger-menu-desktop-link-4' href='/blog'><span class='mega-nav-text'>Blog</span></a>
                  <a class='hamburger-menu-desktop-link hamburger-menu-desktop-link-5' href='/careers'><span class='mega-nav-text'>Careers</span></a>
                  <a class='hamburger-menu-desktop-link hamburger-menu-desktop-link-6' href='/legal'><span class='mega-nav-text'>Legal</span></a>
                  <a class='hamburger-menu-desktop-link hamburger-menu-desktop-link-7' href='/contact'><span class='mega-nav-text'>Contact</span></a>
                  <a class='hamburger-menu-desktop-link hamburger-menu-desktop-link-8' href='/support/reseller-faqs'><span class='mega-nav-text'>Resellers</span></a>
              </div>
          </div>
  
          <a class='mega-nav-link header-hidden' href='/users/youraccount'><span class='mega-nav-text'>My account</span></a>
          <a class='hamburger-menu-link hamburger-menu-link-1' href='/customers'><span class='mega-nav-text'>Customers</span></a>
          <a class='hamburger-menu-link hamburger-menu-link-3' href='/about'><span class='mega-nav-text'>About</span></a>
          <a class='hamburger-menu-link hamburger-menu-link-4' href='/blog'><span class='mega-nav-text'>Blog</span></a>
          <a class='hamburger-menu-link hamburger-menu-link-5' href='/careers'><span class='mega-nav-text'>Careers</span></a>
          <a class='hamburger-menu-link hamburger-menu-link-6' href='/legal'><span class='mega-nav-text'>Legal</span></a>
          <a class='hamburger-menu-link hamburger-menu-link-7' href='/contact'><span class='mega-nav-text'>Contact</span></a>
          <a class='hamburger-menu-link hamburger-menu-link-8' href='/support/reseller-faqs'><span class='mega-nav-text'>Resellers</span></a>
  
          <div class='mega-nav-container'>
  
              <div class='mega-nav-content mega-nav-content-1'>
                  <div class='section-white-medium-no-padding'>
                      <div class='container-columns-66-percent-right'>
                          <div>
                              <a href='/burp/enterprise' class='link-block-white'>
                                  <img src='/content/images/svg/icons/enterprise.svg' alt='Burp Suite Enterprise Edition'>
                                  <span><strong>Burp Suite Enterprise Edition</strong></span>
                                  <span>The enterprise-enabled dynamic web vulnerability scanner.</span>
                              </a>
  
                              <a href='/burp/pro' class='link-block-white'>
                                  <img src='/content/images/svg/icons/professional.svg' alt='Burp Suite Professional'>
                                  <span><strong>Burp Suite Professional</strong></span>
                                  <span>The world's #1 web penetration testing toolkit.</span>
                              </a>
  
                              <a href='/burp/communitydownload' class='link-block-white'>
                                  <img src='/content/images/svg/icons/community.svg' alt='Burp Suite Community Edition'>
                                  <span><strong>Burp Suite Community Edition</strong></span>
                                  <span>The best manual tools to start web security testing.</span>
                              </a>
  
                              <a href='/burp/dastardly' class='link-block-white'>
                                  <img src='/mega-nav/images/dastardly.svg' alt='Dastardly, from Burp Suite'>
                                  <span><strong>Dastardly, from Burp Suite</strong></span>
                                  <span>Free, lightweight web application security scanning for CI/CD.</span>
                              </a>
  
                              <a href='/burp' class='chevron-after'>View all product editions</a>
                          </div>
  
                          <div>
                              <div class='container-cards-lists-white'>
                                  <a href='/burp/vulnerability-scanner'>
                                      <p><strong>Burp Scanner</strong></p>
                                      <p>Burp Suite's web vulnerability scanner</p>
                                      <img src='/mega-nav/images/burp-suite-scanner.jpg' alt='Burp Suite's web vulnerability scanner''>
                                  </a>
                              </div>
  
                          </div>
  
  
                      </div>
                  </div>
              </div>
  
              <div class='mega-nav-content mega-nav-content-2'>
                  <div class='section-white-medium-no-padding'>
                      <div class='container-columns-66-percent-right'>
                          <div>
                              <div class='container-columns'>
                                  <a href='/solutions/attack-surface-visibility' class='link-block-white'>
                                      <span><strong>Attack surface visibility</strong></span>
                                      <span>Improve security posture, prioritize manual testing, free up time.</span>
                                  </a>
                                  <a href='/solutions/ci-driven-scanning' class='link-block-white'>
                                      <span><strong>CI-driven scanning</strong></span>
                                      <span>More proactive security - find and fix vulnerabilities earlier.</span>
                                  </a>
                                  <a href='/solutions' class='link-block-white'>
                                      <span><strong>Application security testing</strong></span>
                                      <span>See how our software enables the world to secure the web.</span>
                                  </a>
                                  <a href='/solutions/devsecops' class='link-block-white'>
                                      <span><strong>DevSecOps</strong></span>
                                      <span>Catch critical bugs; ship more secure software, more quickly.</span>
                                  </a>
  
                                  <a href='/solutions/penetration-testing' class='link-block-white'>
                                      <span><strong>Penetration testing</strong></span>
                                      <span>Accelerate penetration testing - find more bugs, more quickly.</span>
                                  </a>
                                  <a href='/solutions/automated-security-testing' class='link-block-white'>
                                      <span><strong>Automated scanning</strong></span>
                                      <span>Scale dynamic scanning. Reduce risk. Save time/money.</span>
                                  </a>
  
                                  <a href='/solutions/bug-bounty-hunting' class='link-block-white'>
                                      <span><strong>Bug bounty hunting</strong></span>
                                      <span>Level up your hacking and earn more bug bounties.</span>
                                  </a>
                                  <a href='/solutions/compliance' class='link-block-white'>
                                      <span><strong>Compliance</strong></span>
                                      <span>Enhance security monitoring to comply with confidence.</span>
                                  </a>
                              </div>
                              <a href='/solutions' class='chevron-after'>View all solutions</a>
                          </div>
  
                          <div>
                              <div class='container-cards-lists-white'>
                                  <a href='/burp/enterprise/resources/enterprise-edition-vs-professional'>
                                      <p><strong>Product comparison</strong></p>
                                      <p>What's the difference between Pro and Enterprise Edition?</p>
                                      <img src='/mega-nav/images/burp-suite.jpg' alt='Burp Suite Professional vs Burp Suite Enterprise Edition'>
                                  </a>
                              </div>
  
                          </div>
  
  
                      </div>
                  </div>
              </div>
  
              <div class='mega-nav-content mega-nav-content-6'>
                  <div class='section-white-medium-no-padding'>
                      <div class='container-columns-66-percent-right'>
                          <div>
                              <div class='container-columns'>
                                  <a href='/support' class='link-block-white'>
                                      <span><strong>Support Center</strong></span>
                                      <span>Get help and advice from our experts on all things Burp.</span>
                                  </a>
                                  <a href='/burp/documentation' class='link-block-white'>
                                      <span><strong>Documentation</strong></span>
                                      <span>Tutorials and guides for Burp Suite.</span>
                                  </a>
                                  <a href='/burp/documentation/desktop/getting-started' class='link-block-white'>
                                      <span><strong>Get Started - Professional</strong></span>
                                      <span>Get started with Burp Suite Professional.</span>
                                  </a>
                                  <a href='/burp/documentation/enterprise/getting-started' class='link-block-white'>
                                      <span><strong>Get Started - Enterprise</strong></span>
                                      <span>Get started with Burp Suite Enterprise Edition.</span>
                                  </a>
                                  <a href='https://forum.portswigger.net/' class='link-block-white'>
                                      <span><strong>User Forum</strong></span>
                                      <span>Get your questions answered in the User Forum.</span>
                                  </a>
                                  <a href='/burp/releases' class='link-block-white'>
                                      <span><strong>Downloads</strong></span>
                                      <span>Download the latest version of Burp Suite.</span>
                                  </a>
                              </div>
                              <a href='/support' class='chevron-after'>Visit the Support Center</a>
                          </div>
  
                          <div>
                              <div class='container-cards-lists-white'>
                                  <a href='/burp/releases'>
                                      <p><strong>Downloads</strong></p>
                                      <p>Download the latest version of Burp Suite.</p>
                                      <img src='/mega-nav/images/latest-burp-suite-software-download.jpg' alt='The latest version of Burp Suite software for download'>
                                  </a>
                              </div>
  
                          </div>
  
  
                      </div>
                  </div>
              </div>
  
          </div>
  
      </div>
  
      </div>
  </div>
          </header>`);
          }
  </script>"
        ></DangerousHTML>
      </div>
    </div>
  </div>
</template>

<script>
import DangerousHTML from 'dangerous-html/vue'

export default {
  name: 'PSHeader',
  props: {
    rootClassName: String,
  },
  components: {
    DangerousHTML,
  },
}
</script>

<style scoped>
.ps-header-container {
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
}
.ps-header-container1 {
  display: none;
}
.ps-header-container2 {
  display: contents;
}


</style>
