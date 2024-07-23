import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import SampleEnterprisePricing from './views/sample-enterprise-pricing'
import TrialRequestTemplate1 from './views/trial-request-template-1'
import LeomsLandingPage from './views/leoms-landing-page'
import SampleLandingPageProFWImage from './views/sample-landing-page-pro-fw-image'
import EnterprisePricingCurrent from './views/enterprise-pricing-current'
import SampleLandingPageEnt from './views/sample-landing-page-ent'
import TrialRequestTemplate2 from './views/trial-request-template-2'
import APIScanningDemoLP from './views/api-scanning-demo-lp'
import Home from './views/home'
import SampleLandingPagePro from './views/sample-landing-page-pro'
import APIScanningDemoLPV2 from './views/api-scanning-demo-lp-v2'
import NotFound from './views/not-found'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'SampleEnterprise-pricing',
      path: '/sample-enterprise-pricing',
      component: SampleEnterprisePricing,
    },
    {
      name: 'Trial-Request-template-1',
      path: '/trial-request-template-1',
      component: TrialRequestTemplate1,
    },
    {
      name: 'leoms-landing-page',
      path: '/leoms-landing-page',
      component: LeomsLandingPage,
    },
    {
      name: 'Sample-Landing-page-Pro-FW-image',
      path: '/sample-landing-page-pro-fw-image',
      component: SampleLandingPageProFWImage,
    },
    {
      name: 'Enterprise-Pricing-Current',
      path: '/enterprise-pricing-current',
      component: EnterprisePricingCurrent,
    },
    {
      name: 'Sample-Landing-page-Ent',
      path: '/sample-landing-page-ent',
      component: SampleLandingPageEnt,
    },
    {
      name: 'Trial-Request-template-2',
      path: '/trial-request-template-2',
      component: TrialRequestTemplate2,
    },
    {
      name: 'API-Scanning-demo-LP',
      path: '/api-scanning-demo-lp',
      component: APIScanningDemoLP,
    },
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
    {
      name: 'Sample-Landing-page-Pro',
      path: '/sample-landing-page-pro',
      component: SampleLandingPagePro,
    },
    {
      name: 'API-Scanning-demo-LP-V2',
      path: '/api-scanning-demo-lp-v2',
      component: APIScanningDemoLPV2,
    },
    {
      name: '404 - Not Found',
      path: '**',
      component: NotFound,
      fallback: true,
    },
  ],
})
