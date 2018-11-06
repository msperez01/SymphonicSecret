<!--suppress ALL -->
<template>
  <div class="html">
    <form class = "searchBar" id="search" method="get"  >
    <input type="submit" value=Search width=250px @click="changeVid"/>
    <br/><input v-model= "searchTerm" id="searchTerm" name="search_query" type="text" maxlength="128"/>
    </form>
    <button @click="logout" class="buttonLogout"> Logout </button>
  <div class="video-player">
    <br/>
    <div class="video-container">
    <!--<div id="player"></div>-->
      <!--<iframe id="player" width="640" height="360" :src="this.activeVideo.youtubeURL" ref = "youtube" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen position="center"></iframe>
      -->
      <iframe class="video w100" width="640" height="360" src="//www.youtube.com/embed/{{videoid}}" frameborder="0" allowfullscreen></iframe>
      <!--<div id="player"></div>-->
        <h3>{{this.activeVideo.title}}</h3>
        <div class="row">
            <p>{{this.activeVideo.views}} views</p>
            <p>{{this.activeVideo.likes}} <button @click="addLike" > :D </button></p>
        </div>
        <div class="aviArea">
          <button class="buttonAvi"> <img src="https://i.imgur.com/D191Onw.png" width="100" height="100"> </button>
          <img id="buttonEgg" src="https://i.imgur.com/S2TagaG.png" width="300" height="300">
          <!--<button class="""buttonEgg" onmousedown="egg(0.5)"> <img src="https://i.imgur.com/S2TagaG.png" width="300" height="320"> </button>-->
        </div>
    <div id="results"></div>
  </div>
  </div><!--
    <div class="video-list">
      <div @click="chooseVideo(video)" :key="video.id" v-for="video in videos" class="thumbnail">
        <div class="thumbnail-img">
          <img :src="video.thumbnail" />
        </div>
        <div class="thumbnail-info">
          <h3>{{video.title}}</h3>
          <p>{{video.creator}}</p>
          <p class="thumbnail-views">{{video.views}} Views</p>
        </div>
      </div>
    </div>-->
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
  addLike () {
    this.activeVideo.likes += 1;
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


$(function() {
  $("form").on("submit", function(e) {
    e.preventDefault();
    // prepare the request
    var request = gapi.client.youtube.search.list({
      part: "snippet",
      type: "video",
      q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
      maxResults: 3,
      order: "viewCount",
      publishedAfter: "2015-01-01T00:00:00Z"
    });
    // execute the request
    request.execute(function(response) {
      var results = response.result;
      $("#results").html("");
      $.each(results.items, function(index, item) {
        $.get("tpl/item.html", function(data) {
          $("#results").append(tplawesome(data, [{"title":item.snippet.title, "videoid":item.id.videoId}]));
        });
      });
      resetVideoHeight();
    });
  });
  $(window).on("resize", resetVideoHeight);
});

function resetVideoHeight() {
  $(".video").css("height", $("#results").width() * 9/16);
}
function tplawesome(e,t){res=e;for(var n=0;n<t.length;n++){res=res.replace(/\{\{(.*?)\}\}/g,function(e,r){return t[n][r]})}return res}

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
</style>
