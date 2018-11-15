<!--suppress ALL -->
<template>
  <div class="html">
    <form class = "searchBar" id="search" method="get">
    <input type="submit" class="buttonSearch" value=Search width=250px @click="changeVid"/>
    <br/><input v-model= "searchTerm" id="searchTerm" name="search_query" type="text" maxlength="128"/>
    </form>
    <button @click="logout" class="buttonLogout"> Logout </button>
  <div class="video-player">
    <br/>
    <div class="video-container">
      <iframe id="player" width="640" height="360" :src="this.activeVideo.youtubeURL" ref = "youtube" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen position="center"></iframe>

        <h3>{{this.activeVideo.title}}</h3>
        <div class="row">
            <p>{{this.activeVideo.views}} views</p>
        </div>
        <div class="aviArea">
          <button class="buttonAvi"> <img src="https://i.imgur.com/D191Onw.png" width="100" height="100"> </button>
          <img id="buttonEgg" src="https://i.imgur.com/S2TagaG.png" width="300" height="300">
          </div>
    <div id="results"></div>
  </div>
  </div><
  <div class="results"></div>
  </div>
</template>

<script>
import firebase from 'firebase';
let urlVid = "https://www.youtube.com/embed/";
let urlId = "vJyR2QpHGvc";
//localStorage.setItem('viewKey', -1); //resetter
console.log("URL VID: " + "vJyR2QpHGvc");
let totalviews = parseInt(getStoredValue('viewKey'),10);
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
/* eslint-disable */
//let r = "https://i.imgur.com/S2TagaG.png"
let videos = {
  id: 0,
  title: "XXXTENTACION - Moonlight | The Theorist Piano Cover",
  thumbnail:
    "https://ubisafe.org/images/box-transparent-question-2.png",
  youtubeURL: urlVid + urlId,
  creator: "The Theorist",
  likes: 0,
  views: 0
};
export default {
  name: 'VideoPlayer',
  data () {
    return {
      title:'home',
      videos,
      activeVideo: videos,
      urlId: "searchTerm"
    }
  },
  methods: {
  init() {
      gapi.client.setApiKey("AIzaSyAT-mNIDjw8TrMS1dEG5H_XU3f30OZh_vc");
      gapi.client.load("youtube", "v3", function() {
        // yt api is ready
      });
    },
  chooseVideo (video) {
    //SET VIDEO AS ACTIVE VIDEO
    this.activeVideo = video;
    //INCREASE THE VIDEOS VIEWS BY 1
    totalviews+= 1;//this.activeVideo.views;
    storeValue('viewKey', totalviews);
    console.log("Console Egg EXP:", totalviews);
    video.views += 1;
    if(totalviews == 0){
      choice1();
    }
  },
  logout () {
    firebase.auth().signOut().then(() => {
      alert('Bye bye')
      this.$router.replace('login')
    })
  },
    changeVid(){
      urlVid = "https://www.youtube.com/embed/" + searchId;
    }
  }
}

function choice1 (){
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
/* eslint-enable */
</script>

<style scoped>
.thumbnail{
    display:flex;
  }
.thumbnail img{
    width:120px;
}

.thumbnail-info{
    margin-left:20px;
}

.thumbnail h3{
    font-size:16px;
}

h3,
p{
    margin:0;
    padding:0;
}

.thumbnail-views{
    font-size:18px;
}

.video-player{
    display:flex;
    width:640px;
}

.video-container{
    margin-right:40px;
}

.row{
    display:flex;
    justify-content:space-between;
}

button{
    background:transparent;
    color:white;
    border:none;
    width: 50px;
}

.buttonLogout{
  background:transparent;
    color:cornflowerblue;
    border:none;
    width: 50px;
}


.aviArea{
    display:flex;
    margin-left: 7em;
    margin-right: 100px;
    background-color:transparent;
    outline: none;
    border-color: transparent;
}

.buttonEgg{
    display:flex;
    margin-left: 5em;
    background-color:transparent;
    outline: none;
    border-color: steelblue;
    width: 20em;
}
.buttonAvi{
    background-color:transparent;
    outline: none;
    border-color: transparent;
}
  .searchBar{
    position: top absolute;
  }

  .buttonSearch{
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
</style>
