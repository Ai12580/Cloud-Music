import Vue from 'vue'
import App from './App.vue'
import Spin from './components/Spin.vue'
import router from './router'
import store from './store'
import loading from '@/assets/img/load/loading.jpg'

Vue.use(Spin) // 全局的loading组件
Vue.component('spin', Spin)

Vue.config.productionTip = false

// 注册一个全局自定义指令 `v-lazy`用于图片懒加载
// 在后台创建一个图片元素用于加载图片，当图片完全加载后，再去显示图片
Vue.directive('lazy', (el, binding) => {
  const backImg = document.createElement('img')
  if (el.getAttribute('lazy') === 'loaded') {
    return
  }
  el.setAttribute('lazy', 'loading')
  el.src = loading
  backImg.onload = () => {
    el.setAttribute('lazy', 'loaded')
    el.src = binding.value
  };
  backImg.src = binding.value
})

new Vue({
  router,
  store,
  render: h => h(App),
  components: {
    Spin
  }
}).$mount('#app')
