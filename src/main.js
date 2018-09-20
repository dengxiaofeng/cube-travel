import 'babel-polyfill'
import Vue from 'vue'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import AMap from 'vue-amap'
import store from './store'
import {
  /* eslint-disable no-unused-vars */
  Style,
  Toolbar,
  TabBar,
  TabPanels,
  ImagePreview,
  Scroll,
  Slide,
  IndexList
} from 'cube-ui'
import App from './App'
import router from './router'
import 'common/stylus/index.styl'
import 'common/stylus/border.styl'

Vue.use(Toolbar)
Vue.use(TabBar)
Vue.use(TabPanels)
Vue.use(ImagePreview)
Vue.use(Scroll)
Vue.use(Slide)
Vue.use(IndexList)


fastclick.attach(document.body)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: require('common/images/default.png')
})

Vue.use(AMap)

AMap.initAMapApiLoader({
  key: '270ec55bbb2e608a614f00c11fcb4b7a',
  plugin: ['AMap.Geolocation', 'ToolBar', 'MapType', 'OverView', 'Scale']
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
