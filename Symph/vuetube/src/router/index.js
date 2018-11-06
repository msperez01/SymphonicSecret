import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login' //this is localhost:8080/#/login
import SignUp from '@/components/SignUp'
import VideoPlayer from '@/components/VideoPlayer'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path:'/login', //what the login page is.
      name: 'Login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'Sign-Up',
      component: SignUp
    },
    /*{
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        requiresAuth: true
      }
    },/*/
    {
      path: '/VideoPlayer',
      name: 'VideoPlayer',
      component: VideoPlayer,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to,from,next) => {

  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if(requiresAuth && !currentUser) next ('login')
  else if(!requiresAuth && currentUser) next ('VideoPlayer')
  else next()

})

export default router

