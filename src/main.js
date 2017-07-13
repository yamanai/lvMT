import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import resource from 'vue-resource'
import $ from 'jquery'
import Mint from 'mint-ui'
import './filter/filter.js'
import {FontUtil} from './models/utils'
import './assets/font/WebRupee.V2.0.ttf'
import {DatetimePicker,Picker,Button,Range,Popup,Radio} from 'mint-ui'
import { store } from './vuex'
require('../static/fastclick.js')
if ('addEventListener' in document) {  
  document.addEventListener('DOMContentLoaded', function() {  
    FastClick.attach(document.body);  
  }, false)
}
Vue.component(DatetimePicker.name,DatetimePicker);
Vue.component(DatetimePicker.name,Picker);
Vue.component(Button.name, Button);
Vue.component(Range.name, Range);
Vue.component(Popup.name, Popup);
Vue.component(Radio.name, Radio);
Vue.use(resource);
Vue.use(Mint);

FontUtil.init();

var vm = new Vue({
  el: '#app',
  store,
  router,
  store,
  render: h => h(App)
})
