import Vue from 'vue';
import Element from 'main/index.js';
import App from './play/index.vue';
// import 'packages/theme-chalk/src/input.scss';
// import 'packages/theme-chalk/src/form.scss';
// import 'packages/theme-chalk/src/form-item.scss';
import 'packages/theme-chalk/src/menu.scss';
import 'packages/theme-chalk/src/icon.scss';
import 'packages/theme-chalk/src/tooltip.scss';

Vue.use(Element);

new Vue({ // eslint-disable-line
  render: h => h(App)
}).$mount('#app');
