// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import VueYoutube from 'vue-youtube'
import App from './App'
import router from './router'
import firebase from 'firebase'
import VueGAPI from 'vue-gapi'

Vue.config.productionTip = false
//Vue.use(VueYoutube)
let app;
var config = {
  apiKey: "AIzaSyAspp7dZuAo2vu2901wEhSQAxltem5wanA",
  authDomain: "symphonicsecret.firebaseapp.com",
  databaseURL: "https://symphonicsecret.firebaseio.com",
  projectId: "symphonicsecret",
  storageBucket: "symphonicsecret.appspot.com",
  messagingSenderId: "836529216891"
};
const apiConfig = {
  apiKey: "AIzaSyCHHmbCzn_-hd8uuU5LmLGBaGAlIyqd1Vg",
  clientId: "836529216891-0sc8lom3ltd0cjgf4au2kfbi55qhl4kb.apps.googleusercontent.com",
  discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
  scope: "https://www.googleapis.com/auth/spreadsheets"
  // see all available scopes here: https://developers.google.com/identity/protocols/googlescopes'
};
/*
function init() {
  gapi.client.setApiKey("AIzaSyAT-mNIDjw8TrMS1dEG5H_XU3f30OZh_vc");
  gapi.client.load("youtube", "v3", function() {
    // yt api is ready
  });
}*/
Vue.use(VueGAPI, apiConfig);

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
