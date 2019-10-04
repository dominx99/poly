import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Pusher from 'pusher-js'
import '@/assets/css/tailwind.scss'

Vue.use(VueRouter)
Vue.prototype.$bus = new Vue()

import routes from './routes'
import store from './store/index'

window.socket = new Pusher('ed5340121001ba23bad9', {
  cluster: 'eu',
  forceTLS: true
});

let axios = require('axios')
window.axios = axios.create({
  transformRequest: [function (data, headers) {
    headers['Authorization'] = 'Bearer ' + localStorage.getItem('token')
    return JSON.stringify(data)
  }],
  headers: {
    'Content-Type': 'application/json'
  }
})
Vue.prototype.$axios = window.axios

Vue.config.productionTip = false

const router = new VueRouter({
  routes
})
window.router = router

// Creates a `nextMiddleware()` function which not only
// runs the default `next()` callback but also triggers
// the subsequent Middleware function.
function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index];
  // If no subsequent Middleware exists,
  // the default `next()` callback is returned.
  if (!subsequentMiddleware) return context.next;

  return (...parameters) => {
    // Run the default Vue Router `next()` callback first.
    context.next(...parameters);
    // Then run the subsequent Middleware with a new
    // `nextMiddleware()` callback.
    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({ ...context, next: nextMiddleware });
  };
}

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware];

    const context = {
      from,
      next,
      router,
      to,
    };
    const nextMiddleware = nextFactory(context, middleware, 1);

    return middleware[0]({ ...context, next: nextMiddleware });
  }

  return next();
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
