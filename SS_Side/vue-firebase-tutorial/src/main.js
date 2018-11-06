// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

let app;
var config={
    apiKey: "AIzaSyBYpE_V-0Z9QRu49aWJ6OWWba1ofGcDAE8",
    authDomain: "vuepractice-f302e.firebaseapp.com",
    databaseURL: "https://vuepractice-f302e.firebaseio.com",
    projectId: "vuepractice-f302e",
    storageBucket: "vuepractice-f302e.appspot.com",
    messagingSenderId: "706619142745"
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
