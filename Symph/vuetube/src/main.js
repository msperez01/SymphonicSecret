// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueYoutube from 'vue-youtube'
import App from './App'
import router from './router'
import firebase from 'firebase'


Vue.config.productionTip = false
Vue.use(VueYoutube)
let app;
var config = {
  apiKey: "AIzaSyAspp7dZuAo2vu2901wEhSQAxltem5wanA",
  authDomain: "symphonicsecret.firebaseapp.com",
  databaseURL: "https://symphonicsecret.firebaseio.com",
  projectId: "symphonicsecret",
  storageBucket: "symphonicsecret.appspot.com",
  messagingSenderId: "836529216891"
};

   /*firebase.initializeApp(config);
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

*/
firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(function(user) {

  if(!app){


    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }

});
