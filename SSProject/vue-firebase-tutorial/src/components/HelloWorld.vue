<template xmlns:padding-top="http://www.w3.org/1999/xhtml">
<div class="mainArea">
  <div class="row">
    <div class="col-md-6 col-md-offset-3">
      <form action="#" id="searchIt">
        <p><input type="text" id="searchBar" placeholder="Enter Video ID here" autocomplete="off" class="form-control" /></p>
        <button v-on:click="searchVid"> Search </button>
        <!--<p><input type="submit" value="Search" class="form-control btn btn-primary w100"></p>-->
      </form>
    </div>
  <br/>
  <iframe id="videoPlayer" width="640" height="360" src="//www.youtube.com/embed/UOxkGD8qRB4" frameborder="0" allowfullscreen></iframe>
  <br/>
    <div id="gameArea">
      <img id="avri" src="https://i.imgur.com/D191Onw.png" width="170">
      <img id="buttonEgg" src="https://i.imgur.com/S2TagaG.png" width="300" height="300">
    </div>
  </div>
  <button v-on:click="timeCheck" id="eggEXP"> EXP </button>
  <button v-on:click="logout"> Logout </button>
  <button v-on:click="saveEXP" id="eggers"> SAVE </button>


</div>
</template>
<script >
//var totalTime=(dt.toLocaleString() - parseInt(getStoredValue('viewKey'),10));
//storeValue('viewKey', totalTime);


/*firebase.initializeApp({
  "serviceAccount":"./service-account.json",
  "databaseURL": "https://symphonicsecret.firebaseio.com"
});
*/
import firebase from 'firebase';
var $ = document.getElementById;
let seconds =parseInt(getStoredValue("EXP"),10);// make this = to 0 to reset EXP.
var t = setInterval(UpdateTime, 1000); //unsaved exp every 1 seconds
var t = setInterval(autoSave, 60000); //autosaves exp every 10 seconds
var t = setInterval(checkEXP, 10000); // exp
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
      title: 'home',
      seconds
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
        if(searchTerm.includes("www.youtube.com/watch")){
          let st = searchTerm;
          let temp = st.indexOf("=");
          let newVid = st.slice(temp+1, temp+12);
          let string = "//www.youtube.com/embed/" + newVid;
          console.log("VID:" + newVid);
          document.getElementById("videoPlayer").src = string;
        }
        else
      {
        let string = "//www.youtube.com/embed/" + searchTerm;
        document.getElementById("videoPlayer").src = string;
      }
      //alert('New Video URL: ' + document.getElementById("videoPlayer").src);
    },
    timeCheck: function(){
      //alert('Current EXP: ' + getStoredValue("EXP"));
      choice1();
    },
    saveEXP: function(){
      storeValue("EXP",seconds + parseInt(getStoredValue("EXP")));
      alert("Manually saved. EXP = " + getStoredValue("EXP"));
    },
  }
}

var sTime = new Date().getTime();
var countDown = 2;

  function UpdateTime() {
    var cTime = new Date().getTime();
    var diff = cTime - sTime;
    seconds = -1*(countDown - Math.floor(diff / 1000));
    //show seconds
    //console.log('Seconds: ' + seconds);

  }

  function autoSave(){
    storeValue("EXP",seconds + parseInt(getStoredValue("EXP")));
    console.log('Autosave: ' + getStoredValue("EXP"));
  }


  ////////////////////////////////////////Start of choices
function checkEXP(){
    if(parseInt(getStoredValue("EXP")) === 500 )
      choice1();
}

function choice1(){
  let ch = confirm('The egg is moving! Should you let AVRI pet it?')
  if(ch === true){
    let img = document.getElementById("buttonEgg");
    img.src = "https://i.imgur.com/VlhPcpB.png";
    alert('It looks happy!');
    return false;
    //r = "https://i.imgur.com/VlhPcpB.png";
  } else {
    let img = document.getElementById("buttonEgg");
    img.src = "https://i.imgur.com/qwgHnmj.png";
    alert('Something about it looks off...');
    return false;
    //r = "https://i.imgur.com/qwgHnmj.png";
  }
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
/*
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
*/
button {
  display: inline-block;
  color: #fff;
  background: #42b983;
  margin: 20px;
  width: 130px;
  height: 40px;
  line-height: 40px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  }
button:before{
  content: "";
  top: -30px;
  left: -80px;
  height: 100px;
  width: 70px;
  background: rgba(255, 255, 255, .7);
  transform: rotate(20deg);
}

button:hover:before{
  left: 150px;
  transition: all .5s;
}

input[type="button"].avri-style{
  width: 500px;
  height: 600px;
  }

  egg{

  }
</style>
