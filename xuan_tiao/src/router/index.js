import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Layout from '@/view/layout/index.vue';
import Main from '@/view/main/index.vue';
import My from '@/view/my/index.vue';
import Home from '@/view/home/index.vue';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children:[
        {
          path:"/main",
          component:Main,
          text:"主页"
        },
        {
          path:"/my",
          component:My,
          text:"我的"
        },
        {
          path:"home",
          component:Home,
          text:"首页"
        }
      ]
    },
    {
      path:"/",
      redirect:"/home"
    }
  ]
})
