<template>
  <div class="video-player">
    <button v-on:click="logout"> Logout </button>
    <div class="video-container">
        <iframe width="640" height="360" :src="this.activeVideo.youtubeURL" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          <h3>{{this.activeVideo.title}}</h3>
          <div class="row">
              <p>{{this.activeVideo.views}} views</p>
              <p>{{this.activeVideo.likes}} <button @click="addLike" >:)</button></p>
          </div>
    </div>
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
     <!-- Avi and Egg -->
     <div class="avi_line">
        <div class="aviArea">
            <button class="button avi"> <img src="https://i.imgur.com/D191Onw.png" width="100" height="100"> </button>
            <!--
            <div class="avi-info"> <button class="info" onmousedown="get_EXP()">Info</button></div>
            <div class="avi-settings"> <button class="settings">Settings</button></div>
            <div class="avi-minigame"> <button class="minigame"> Minigame</button></div>
            --></div>
        <div class="eggArea">
            <button class="button egg" onmousedown="egg(0.5)"> <img src="egg.png" width="100" height="120"> </button>
            Egg EXP:
            <span id="egg_time"> 0 </span>
        </div>
    </div>
     <div class="egg_tick"></div>
</div>
  </div>
</template>

<script>
/* eslint-disable */
let videos = [{
    id: 1,
    title: "[ L O S E R ]",
    thumbnail:
      "https://ubisafe.org/images/box-transparent-question-2.png",
    youtubeURL: "https://www.youtube.com/embed/gzJxZ9ETnJU",
    creator: "marasy8",
    likes: 0,
    views: 0
  },
  {
    id: 2,
    title: "XXXTENTACION - Moonlight | The Theorist Piano Cover",
    thumbnail:
      "https://ubisafe.org/images/box-transparent-question-2.png",
    youtubeURL: "https://www.youtube.com/embed/faZhnReprS4",
    creator: "The Theorist",
    likes: 0,
    views: 0
  },
  {
    id: 3,
    title: "Khalid - Location | The Theorist Piano Cover",
    thumbnail:
      "https://ubisafe.org/images/box-transparent-question-2.png",
    youtubeURL: "https://www.youtube.com/embed/yy-E2AdSfkI",
    creator: "The Theorist",
    likes: 0,
    views: 0
  },
  {
    id: 4,
    title: "dark cat - CRAZY MILK",
    thumbnail:
      "https://ubisafe.org/images/box-transparent-question-2.png",
    youtubeURL: "https://www.youtube.com/embed/7xFe0vkUJXU",
    creator: "sigma DMS",
    likes: 0,
    views: 0
  },
  {
    id: 5,
    title: "Steve Aoki - Pretender (ft. AJR & Lil Yachty)",
    thumbnail:
      "https://ubisafe.org/images/box-transparent-question-2.png",
    youtubeURL: "https://www.youtube.com/embed/GPVaYDzxljc",
    creator: "Proximity",
    likes: 0,
    views: 0
  }];

var egg_time;
var ytplayer = document.getElementById("activeVideo");
var threshold = 1;
var thresholdReached = false;
export default {
  name: 'VideoPlayer',
  data () {
    return {
      videos,
      activeVideo: videos[0]
    }
  },
  methods:{
  chooseVideo(video){
      //SET VIDEO AS ACTIVE VIDEO
      this.activeVideo = video;
      //INCREASE THE VIDEOS VIEWS BY 1
      video.views += 1;
  },
  addLike(){
  this.activeVideo.likes += 1;
  },
  logout:function(){
      firebase.auth().signOut().then(() => {
        alert('Bye bye')
        this.$router.replace('login')
      })
  },
  ticker(){
    ytplayer.on('timeupdate', function () { // the interaction with the video
      for (var i = 0; i < threshold; i++) {
        egg(0.25); //controls how fast the egg_increase is :D
        //console.log("Tick" + this.currentTime()); //ticks work!!!
       }
    })
  },
  egg(num) {   
    if(egg_time == null)
      egg_time = 0;  
    egg_time = egg_time + num;
   localStorage.setItem('Egg EXP', egg_time); 
   console.log("Console Egg EXP:", egg_time);  
   console.log("Local Storage Egg EXP:", localStorage.getItem('Egg EXP'));                
  }

}
}
/* eslint-enable */
</script>
<style scoped>
.thumbnail{
    display:flex;
  }
.thumbnail img{
    width:168px;
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
    font-size:14px;
}

.video-player{
    display:flex;
    width:1200px;
    margin:auto;
}

.video-container{
    margin-right:40px;
}

.row{
    display:flex;
    justify-content:space-between;
}

button{
    background:#D0021B;
    color:white;
    border:none;
    padding:10px 20px;
}
</style>
