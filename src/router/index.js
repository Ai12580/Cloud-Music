import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store';
const Home = () => import('@/views/Home/Home')
const My = () => import('@/views/My/My')
const Search = () => import('@/views/Search/Search')
const LeaderBoard = () => import('@/views/LeaderBoard/LeaderBoard')
const PlayListDetail = () =>import('@/views/PlayListDetail/PlayListDetail')
const PlayControl = () => import('@/views/PlayControl/PlayControl')
const Login = () => import('@/views/Login/Login')
const RecentPlay = () => import('@/views/RecentPlay/RecentPlay')


Vue.use(VueRouter);

const routes= [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/my',
    name: 'My',
    component: My,
    meta: {
      needLogin: true,
    },
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
  },
  {
    path: '/leader-board',
    name: 'LeaderBoard',
    component: LeaderBoard,
  },
  {
    path: '/play-list-detail',
    name: 'PlayListDetail',
    component: PlayListDetail,
  },
  {
    path: '/song/:coverImgUrl',
    name: 'Song',
    component: PlayControl,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/recent-play',
    name: 'RecentPlay',
    component: RecentPlay,
  },
]

/* // 如果后台登录接口不稳定，可以用这种临时的解决方案：通过localStorage里是否有uid来判断是否登录，而不用发请求的方式
router.beforeEach((to, from, next) => {
  if (to.meta.needLogin) {
    if (localStorage.getItem('uid')) next();
    else router.push('/login');
  } else next();
}); */

// router.beforeEach((to, from, next) => {
//   if (to.meta.needLogin && !store.state.loginStatus) router.push('/login');
//   else next();
// });


//路由导航守卫
// router.beforeEach((to, form, next) => {
//   if(to.meta.needLogin && !store.state.loginStatus) return next('/login');
//   next();
// });
//3.创建路由对象
const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router