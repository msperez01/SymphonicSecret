<template xmlns:padding-top="http://www.w3.org/1999/xhtml">
<div class="mainArea">
  <div class="row">
    <div class="col-md-6 col-md-offset-3">
      <form action="#" id="searchIt">
        <p><input type="text" id="searchBar" placeholder="Enter Video ID here" autocomplete="off" class="form-control" /></p>
        <button v-on:click="searchVid" class="submitButton"> Search </button>
      </form>
    </div>
  <br/>
  <iframe id="videoPlayer" width="640" height="360" src="//www.youtube.com/embed/LbjcaMAhJRQ" frameborder="0" allowfullscreen></iframe>
  <br/>
    <div id="gameArea" class="gameArea">
      <button class="avriButton" id="avriButton" v-on:click="toggleMenu">
              <img class="avri" id="avri" src="https://i.imgur.com/D191Onw.png" width="170" style:background="transparent"></button>
      <img id="buttonEgg" src="https://i.imgur.com/YvXJe9U.gif" width="300" height="300">
    </div>
  </div>
  <div class="tbaBox" id="tbaBox" style="display: none">
    <img src="https://i.imgur.com/CAZCHKE.png" class="tbaImage" width="500px">
  <br/>
    <button class="avributtons" id="tbaButton" v-on:click="toggleTBA"> Close </button>
  </div>
  <div class="gameBox" id="gameBox" style="display: none">
    <img src="https://i.imgur.com/gtaZxvd.png" class="textBox" id="textBox" width="500px">
    <br/>
    <button class="yesChoice" id="yesChoice" v-on:click="yesChoice"> YES </button>
    <button class="noChoice" id="noChoice" v-on:click="noChoice"> NO </button>
  </div>
   <div class="avriArea" id="avriArea" style="display: none">
    <button class="avriButtons" id="historyButton" v-on:click="toggleHistory"> History </button>
    <button class="avriButtons" id="settingsButton" v-on:click="toggleSettings"> Settings </button>
    <button class="submitButton" id="demoButton" v-on:click="toggleDemo"> Demo </button>
    <button class="avriButtons" id="resetButton" v-on:click="toggleReset"> Reset </button>
     <button class="avriButtons" id="saveButton" v-on:click="toggleSave"> Save </button>
  </div>
  <div class="settingsArea" id="settingsArea" style="display:none">
    <button class="yesChoice" id="eraseButton" v-on:click="toggleErase"> Erase</button>
    <button class="yesChoice" id="logoutButton" v-on:click="logout"> Logout </button>
  </div>
  <div class="hA" id="hA" style="display:none">
    <img src="https://i.imgur.com/MlFVqeZ.png">
    <div class="historyArea" id="historyArea">
    </div>
    <button class="yesChoice" id="historyReturn" v-on:click="toggleHistory"> RETURN </button>
  </div>
</div>
</template>
<script >
  /* eslint-disable */
import firebase from 'firebase';
var $ = document.getElementById;
let seconds =parseInt(getStoredValue("EXP"),-1);// make this = to 0 to reset EXP.
//var t = setInterval(UpdateTime, 1000); //unsaved exp every 1 seconds
//var t = setInterval(console.log("ChoiceValue = " + choiceValue), 3000); //autosaves exp every 10 seconds
//var t = setInterval(checkEXP, 10000); // exp
var history = [];
var choiceValue = -1;
var switchRoute = true;
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
      seconds,
      history
    }
  },
  methods: {
    logout: function () {
      localStorage.removeItem("choiceValue");
      localStorage.getItem("choiceValue");
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
    timeCheckA: function(){
      //alert('Current EXP: ' + getStoredValue("EXP"));
      console.log("Current EXP: " + 10);
      storeValue("EXP",10);
      choice1();
      console.log("Current EXP: " + 50);
      storeValue("EXP",10);
      setTimeout(choice2a,1000);
    },
    timeCheckB: function(){
      //alert('Current EXP: ' + getStoredValue("EXP"));
      console.log("Current EXP: " + 10);
      choice1();
      console.log("Current EXP: " + 50);
      setTimeout(choice2b,1000);
    },
    saveEXP: function(){
      storeValue("EXP",seconds + parseInt(getStoredValue("EXP")));
      alert("Manually saved. EXP = " + getStoredValue("EXP"));
    },
    toggleMenu: function (){
    var myMenu = document.getElementById('avriArea');
    var displaySetting = myMenu.style.display;
    if(displaySetting === 'block'){
      myMenu.style.display = 'none';
    } else {
      myMenu.style.display = 'block';
    }
  },
    toggleHistory:function(){
      getMounted();
      updateHistory();
      toggleHistory();
      hideHistoryBox();
    },
    toggleDemo: function(){
      hideChoiceBox();
    },
    toggleReset: function(){
      resetEgg();
    },
    toggleSave: function(){
      localStorage.removeItem("choiceValue");
      localStorage.getItem("choiceValue");
      mounted();
    },
    toggleSettings:function(){
      hideSettingsBox();
    },
    toggleTBA:function(){
      hideTBABox();
    },
    toggleErase:function(){
      if (confirm('Do you want to delete your save history?')) {
        if (confirm('Are you sure?')){
        localStorage.clear();
        alert('* AVRI looks strange.');
        setTimeout(glitchOut, 1000);
        } else {
          alert('* AVRI looks relieved.');
        }
      } else {
        alert('* AVRI looks pleased.');
      }
    },
    yesChoice: function(){
      if(choiceValue===-1){
        choice1(true);
        hideChoiceBox();
        switchRoute = true;
        if(switchRoute === true){
          let img = document.getElementById("textBox"); //branch2a
          img.src = "https://i.imgur.com/tlDH4o5.png";
        } else {
          let img = document.getElementById("textBox"); //branch2b
          img.src = "https://i.imgur.com/tlDH4o5.png";
        }

      }
      else if(choiceValue==="2a"){
        choice2a(true);
        hideChoiceBox();
        switchRoute = true;
        if(switchRoute === true){
          let img = document.getElementById("textBox"); //branch3a
          img.src = "https://i.imgur.com/rEevBks.png";
        } else {
          let img = document.getElementById("textBox"); //branch3b
          img.src = "https://i.imgur.com/dHmKZOS.png";
        }
      }
      else if(choiceValue==="2b"){
        choice2b(true);
        hideChoiceBox();
        switchRoute = true;
        if(switchRoute === true){
          let img = document.getElementById("textBox"); //branch3c
          img.src = "https://i.imgur.com/Sq4aF2b.png";
        } else {
          let img = document.getElementById("textBox"); //branch3d
          img.src = "https://i.imgur.com/Sq4aF2b.png";
        }
      }
      else if(choiceValue==="3a"){
        choice3a(true);
        hideChoiceBox();
      }
      else if(choiceValue==="3b"){
        choice3b(true);
        hideChoiceBox();
      }
      else if(choiceValue==="3c"){
        choice3c(true);
        hideChoiceBox();
      }
      else if(choiceValue==="4a"){
        hideTBABox();
      }
      else if(choiceValue==="4b"){
        hideTBABox();
      }
      else if(choiceValue==="4c"){
        hideTBABox();
      }
      else if(choiceValue==="4d"){
        hideTBABox();
      }
    },
    noChoice: function(){
      if(choiceValue===-1){
        choice1(false);
        hideChoiceBox();
        switchRoute = false;
        if(switchRoute === true){
          let img = document.getElementById("textBox"); //branch2a
          img.src = "https://i.imgur.com/tlDH4o5.png";
        } else {
          let img = document.getElementById("textBox"); //branch2b
          img.src = "https://i.imgur.com/tlDH4o5.png";
        }

      }
      else if(choiceValue==="2a"){
        choice2a(false);
        hideChoiceBox();
        switchRoute = false;
        if(switchRoute === true){
          let img = document.getElementById("textBox"); //branch3a
          img.src = "https://i.imgur.com/rEevBks.png";
        } else {
          let img = document.getElementById("textBox"); //branch3b
          img.src = "https://i.imgur.com/dHmKZOS.png";
        }
      }
      else if(choiceValue==="2b"){
        choice2b(false);
        hideChoiceBox();
        switchRoute = false;
        if(switchRoute === true){
          let img = document.getElementById("textBox"); //branch3c
          img.src = "https://i.imgur.com/Sq4aF2b.png";
        } else {
          let img = document.getElementById("textBox"); //branch3d
          img.src = "https://i.imgur.com/Sq4aF2b.png";
        }
      }
      else if(choiceValue==="3a"){
        choice3a(false);
        hideChoiceBox();
      }
      else if(choiceValue==="3b"){
        choice3b(false);
        hideChoiceBox();
      }
      else if(choiceValue==="3c"){
        choice3c(false);
        hideChoiceBox();
      }
      else if(choiceValue==="4a"){
        hideTBABox();
      }
      else if(choiceValue==="4b"){
        hideTBABox();
      }
      else if(choiceValue==="4c"){
        hideTBABox();
      }
      else if(choiceValue==="4d"){
        hideTBABox();
      }
    }
  }
}

//var sTime = new Date().getTime();
//var countDown = 2;
function glitchOut(){
  let img = document.getElementById("avri");
  img.src = "https://i.imgur.com/vwCxSIq.gif";
  let thing = document.getElementById("gameArea");
  thing.style.backgroundColor= "black";
  setTimeout(normalized1, 500);
}
function normalized1(){
  alert("* W h y   d i d    y o u    d o   t h a t ");
  let img = document.getElementById("avri");
  img.src = "https://i.imgur.com/D191Onw.png";
  let thing = document.getElementById("gameArea");
  thing.style.backgroundColor= "transparent";
  }
/*History Save area*/
  function mounted(){
    if("history" in localStorage){
      while(localStorage.getItem("history") != null)
        localStorage.removeItem("history");
    }
     // localStorage.setItem("EXP", seconds);
      localStorage.setItem("history",JSON.stringify(history));
      //console.log("Current EXP: " + localStorage.getItem("EXP"));

    alert("Saved!");
  }

  function getMounted() {
    //localStorage.clear();
    if ("history" in localStorage) {
      let historyData = localStorage.getItem("history");
      if(history){
        history = JSON.parse(historyData);
      }
    }
  }
/*
  function UpdateTime() {
    var cTime = new Date().getTime();
    var diff = cTime - sTime;
    seconds = -1*(countDown - Math.floor(diff / 1000));
    //show seconds
    //console.log('Seconds: ' + seconds);

  }

  function autoSave(){
    storeValue("EXP", seconds + parseInt(getStoredValue("EXP")));
    console.log('Autosave: ' + getStoredValue("EXP"));
  }
*/
  function hideChoiceBox(){
    var myChoice = document.getElementById('gameBox');
    var displaySetting = myChoice.style.display;
    if(displaySetting === 'block'){
      myChoice.style.display = 'none';
    } else {
      myChoice.style.display = 'block';
    }
  }
  function hideHistoryBox(){
    var a = document.getElementById('hA');
    var d = a.style.display;
    if(d === 'block'){
      a.style.display = 'none';
    } else {
      a.style.display = 'block';
    }
  }
  function hideSettingsBox(){
    var b = document.getElementById('settingsArea');
    var e = b.style.display;
    if(e === 'block'){
      b.style.display = 'none';
    } else {
      b.style.display = 'block';
    }
  }
  function hideTBABox(){
    var myChoice = document.getElementById('tbaBox');
    var displaySetting = myChoice.style.display;
    if(displaySetting === 'block'){
      myChoice.style.display = 'none';
    } else {
      myChoice.style.display = 'block';
    }
  }
  function resetEgg(){
    alert('. . . Good thing we have another egg! ᕕ( ᐛ )ᕗ');
    choiceValue = -1;
    let img = document.getElementById("textBox"); //branch2a
    img.src = "https://i.imgur.com/gtaZxvd.png";
    img = document.getElementById("buttonEgg");
    img.src = "https://i.imgur.com/YvXJe9U.gif";
  }

  function toggleHistory(){
    var historyContainer = document.getElementById("historyArea");
    for(let i=0; i < history.length; i++){
      var image = new Image();
      image.src = history[i];
      image.style.width="500px";
      image.style.height="500px";
      historyContainer.appendChild(image);
    }
  }

  function updateHistory(){
    var myNode = document.getElementById("historyArea");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
    }
  }
  ////////////////////////////////////////Start of choices
function checkEXP(){
    //if(parseInt(getStoredValue("EXP")) === 500 )
     // choice1();

}

function choice1(ch){
  if(ch === true){
    let img = document.getElementById("buttonEgg");
    img.src = "https://i.imgur.com/VlhPcpB.png";
    alert('It looks happy!');
    previousEgg(img.src);
    choiceValue = "2a";
    console.log("Choice Value = " + choiceValue);
  } else {
    let img = document.getElementById("buttonEgg");
    img.src = "https://i.imgur.com/qwgHnmj.png";
    alert('Something about it looks off...');
    previousEgg(img.src);
    choiceValue = "2b";
    console.log("Choice Value = " + choiceValue);
  }
}
function choice2a(ch){
  if(ch === true){
    let img = document.getElementById("buttonEgg");
    img.src = "https://i.imgur.com/TnLhl1K.png";
    alert('Something came out!');
    previousEgg(img.src);
    choiceValue = "3a";
    console.log("Choice Value = " + choiceValue);
  } else {
    let img = document.getElementById("buttonEgg");
    img.src = "https://i.imgur.com/f1uSDs3.png";
    alert('It looks... sad?');
    previousEgg(img.src);
    choiceValue="3b";
    console.log("Choice Value = " + choiceValue);
  }
}
function choice2b(ch){
    if(ch === true){
      let img = document.getElementById("buttonEgg");
      img.src = "https://i.imgur.com/4VBR6p4.png";
      alert('The top popped off!');
      previousEgg(img.src);
      choiceValue="3c";
      console.log("Choice Value = " + choiceValue);
      //r = "https://i.imgur.com/VlhPcpB.png";
    } else {
      let img = document.getElementById("buttonEgg");
      img.src = "https://i.imgur.com/TnLhl1K.png";
      alert('Oh no!');
      alert('Whatever was inside it seems to be gone now.');
      previousEgg(img.src);
      setTimeout(resetEgg, 500);
      console.log("Choice Value = " + choiceValue);
      history.push("https://i.imgur.com/KFAT7xD.png"); //end of route image
      //r = "https://i.imgur.com/qwgHnmj.png";
    }
  }
function choice3a(ch){
  if(ch === true){
    let img = document.getElementById("buttonEgg");
    img.src = "https://i.imgur.com/TnLhl1K.png";
    alert('It seems to be humming to itself rather than yelling.');
    previousEgg(img.src);
    choiceValue="4a";
    console.log("Choice Value = " + choiceValue);
    hideTBABox();
  } else {
    let img = document.getElementById("buttonEgg");
    img.src = "https://i.imgur.com/TnLhl1K.png";
    alert('Oh no! It became too rambunctious and ran away!');
    previousEgg(img.src);
    resetEgg();
    console.log("Choice Value = " + choiceValue);
    history.push("https://i.imgur.com/KFAT7xD.png"); //end of route image
    }
  }
function choice3b(ch){
  if(ch === true){
    let img = document.getElementById("buttonEgg");
    img.src = "https://i.imgur.com/TnLhl1K.png";
    alert('Oh! Something came out! (Though the shell look a bit silly)');
    previousEgg(img.src);
    choiceValue="4a";
    console.log("Choice Value = " + choiceValue);
    hideTBABox();
  } else {
    let img = document.getElementById("buttonEgg");
    img.src = "https://i.imgur.com/TnLhl1K.png";
    alert('Oh no!');
    alert('The egg disintegrated into mist... It shall be missed.');
    setTimeout(resetEgg, 500);
    alert(' * AVRI sighs at its own pun.');
    previousEgg(img.src);
    console.log("Choice Value = " + choiceValue);
    history.push("https://i.imgur.com/KFAT7xD.png"); //end of route image
  }
}
function choice3c(ch){
    if(ch === true){
      let img = document.getElementById("buttonEgg");
      img.src = "https://i.imgur.com/TnLhl1K.png";
      alert('Oh! It looks cute. (´･ω･`)');
      previousEgg(img.src);
      choiceValue="4c";
      console.log("Choice Value = " + choiceValue);
      hideTBABox();
    } else {
      let img = document.getElementById("buttonEgg");
      img.src = "https://i.imgur.com/TnLhl1K.png";
      alert('Well, it went back into its egg. Good job.');
      previousEgg(img.src);
      alert('. . . Wait, are those holes? ');
      choiceValue="4d";
      console.log("Choice Value = " + choiceValue);
      hideTBABox();
    }
  }
////////////////end of choices
function previousEgg(x){
  history.push(x);
  console.log("Choice has been engraved.");
  //var i;
  //for (i = 0; i < history.length; i++) {
    //console.log(history[i]);
  //}
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  body {
    font-family: gameFont, Helvetica, Arial, sans-serif;
  }

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
button:focus {
  outline: none;
}

button.avriButtons{
  transform-style: preserve-3d;
  color: #2c3e50; /* button text color */
  outline: none;
  background: transparent;
  border: none;
  border-bottom: 4px solid #113b53;
  letter-spacing: 0.0625em;
  text-transform: uppercase;
  font: bold 16px 'Bitter', sans-serif; /* use google font */
  line-height: 2;
  position: relative;
  display: inline-block;
  margin-right: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  text-decoration: none; /* remove underline if using A instead of BUTTON tag */
  overflow: hidden;
  transition: all .5s;
}
  button.avriButtons:before, button.avriButtons:after{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    background: #417da5; /* onhover background color */
    z-index: -1;
    transform: translate3D(0,-100%,0); /* move elements above button so they don't appear initially */
    transition: all .5s;
  }
  button.avriButtons:hover:before{
    color: white;
  }

  button.avriButtons:hover:after{
    transform: translate3D(0,0,0);
    transition: all .5s;
  }
  button.submitButton {
    transform-style: preserve-3d;
    color: #2c3e50; /* button text color */
    outline: none;
    background: transparent;
    border: none;
    border-bottom: 4px solid #113b53;
    letter-spacing: 0.0625em;
    text-transform: uppercase;
    font: bold 16px 'Bitter', sans-serif; /* use google font */
    line-height: 2;
    position: relative;
    display: inline-block;
    margin-right: 20px;
    margin-bottom: 20px;
    cursor: pointer;
    text-decoration: none; /* remove underline if using A instead of BUTTON tag */
    overflow: hidden;
    transition: all .5s;
  }
  button.submitButton:before, button.submitButton:after{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    background: #417da5; /* onhover background color */
    z-index: -1;
   transition: all .5s;
    transform-origin: center center;
    transform: scale(1,0);
  }

  button.submitButton:hover:before, button.submitButton:hover:after{
    transition: all .5s;
    transform: scale(1);
    border-radius: 0;
  }

  button.avriButton{
    background-color: transparent;
    width: 170px;
    border: none;
    border-radius: 100px;
    transform: rotate(0);
    transition: transform 0.5s ease;
  }

  img{
    vertical-align: middle;
  }

  button.yesChoice, button.noChoice{
    text-align: center;
    display: inline-block;
    margin:20px;
    font: bold 20px 'Bitter', sans-serif;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: lightgray;
    text-shadow: -1px -1px black, 1px 1px white;
    color: gray;
    -webkit-border-radius: 7px;
    -moz-border-radius: 7px;
    border-radius: 7px;
    box-shadow: 0 .2em gray;
    cursor: pointer;
  }
  button.yesChoice:active, button.noChoice:active{
    box-shadow: none;
    position: relative;
    top: .2em;
  }

  div.gameBox{
    padding-top: 30px;
    background: black no-repeat;
  }
  div.gameBox:hover{
    -webkit-animation: swing 1s ease;
    animation: swing 1s ease;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
  }

  button.avriButton:hover{
    -webkit-transform: rotateZ(-30deg);
    -ms-transform: rotateZ(-30deg);
    transform: rotateZ(360deg);

  }
  @-webkit-keyframes swing
  {
    15%
    {
      -webkit-transform: translateX(5px);
      transform: translateX(5px);
    }
    30%
    {
      -webkit-transform: translateX(-5px);
      transform: translateX(-5px);
    }
    50%
    {
      -webkit-transform: translateX(3px);
      transform: translateX(3px);
    }
    65%
    {
      -webkit-transform: translateX(-3px);
      transform: translateX(-3px);
    }
    80%
    {
      -webkit-transform: translateX(2px);
      transform: translateX(2px);
    }
    100%
    {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
  @keyframes swing
  {
    15%
    {
      -webkit-transform: translateX(5px);
      transform: translateX(5px);
    }
    30%
    {
      -webkit-transform: translateX(-5px);
      transform: translateX(-5px);
    }
    50%
    {
      -webkit-transform: translateX(3px);
      transform: translateX(3px);
    }
    65%
    {
      -webkit-transform: translateX(-3px);
      transform: translateX(-3px);
    }
    80%
    {
      -webkit-transform: translateX(2px);
      transform: translateX(2px);
    }
    100%
    {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }

  div.historyArea{
    padding-top: 30px;
    background: url("https://i.imgur.com/zZmz3KH.png") no-repeat;
  }
@font-face {
  font-family: gameFont;
  src: url('/akashi-webfont.eot');
  src: url('/akashi-webfont.eot?#iefix') format('embedded-opentype'),
  url('/akashi-webfont.woff') format('woff'),
  url('/akashi-webfont.ttf') format('truetype'),
  url('/akashi-webfont.svg#fira_sans_otbold') format('svg');
  font-weight: normal;
  font-style: normal;
}
</style>
