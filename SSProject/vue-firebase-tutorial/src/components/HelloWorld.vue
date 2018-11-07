<template>
<div class="mainArea">
  <div class="row">
    <div class="col-md-6 col-md-offset-3">
      <form action="#" id="searchIt">
        <p><input type="text" id="searchBar" placeholder="Enter Video ID here" autocomplete="off" class="form-control" /></p>
        <button v-on:click="searchVid"> Search </button>
        <!--<p><input type="submit" value="Search" class="form-control btn btn-primary w100"></p>-->
      </form>
      <button v-on:click="timeCheck" id="eggEXP"> EXP </button>
      <div id="search-results"></div>
    </div>

  <iframe id="videoPlayer" width="640" height="360" src="//www.youtube.com/embed/UOxkGD8qRB4" frameborder="0" allowfullscreen></iframe>
    <button v-on:click="logout"> Logout </button>
  </div>
</div>
</template>
<script >
//var totalTime=(dt.toLocaleString() - parseInt(getStoredValue('viewKey'),10));
//storeValue('viewKey', totalTime);
import firebase from 'firebase';
var $ = document.getElementById;
function storeValue(key, value){
  if(localStorage)
    localStorage.setItem(key, value);
  else
    $.cookies.set(key,value);
}

function getStoredValue(key){
  if(localStorage)
    return localStorage.getItem(key);
  else
    return $.cookies.get(key);
}
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    logout: function () {
      firebase.auth().signOut().then(() => {
        alert('Bye bye');
        this.$router.replace('login')
      })
    },
    searchVid: function () {
      var searchTerm = document.getElementById('searchBar').value;
        //alert('New Video URL: ' + searchTerm);
        var string = "//www.youtube.com/embed/" + searchTerm;
        document.getElementById("videoPlayer").src = string;

      //alert('New Video URL: ' + document.getElementById("videoPlayer").src);
    },
    timeCheck: function(){
      console.log('Total' + (Date.now()/1000));
      UpdateTime();
    }
  }
}

var sTime = new Date().getTime();
var countDown = 2;

  function UpdateTime() {
    var cTime = new Date().getTime();
    var diff = cTime - sTime;
    var seconds = countDown - Math.floor(diff / 1000);
    //show seconds
    console.log('Seconds: ' + (seconds*-1));
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

button{
  padding: 10px 20px;
  background: #42b983;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 22px;
  outline: 0;
  cursor: pointer;
}
</style>
