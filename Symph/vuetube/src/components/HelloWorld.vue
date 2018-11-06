<template>
  <div class="video-player">
    <div class="video-container">
      <button @click="logout" class="buttonLogout"> Logout </button>
      <iframe player="player" width="640" height="360" :src="this.activeVideo.youtubeURL" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
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
        <!--<button @click="saveEXP" class="manualSave"> Save EXP? </button>-->
      </div>
  </div>
  </div>
</template>

<script>
  import firebase from 'firebase';
  let tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api"
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: 'M7lc1UVf-VE',
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }

  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    event.target.playVideo();
  }

  // 5. The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  //    the player should play for six seconds and then stop.
  var done = false;
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 6000);
      done = true;
    }
  }
  function stopVideo() {
    player.stopVideo();
  }
  /* eslint-disable */
  //let r = "https://i.imgur.com/S2TagaG.png"
  let videos = [{
    id: 1,
    title: "XXXTENTACION - Moonlight | The Theorist Piano Cover",
    thumbnail:
      "https://ubisafe.org/images/box-transparent-question-2.png",
    youtubeURL: "https://www.youtube.com/embed/faZhnReprS4",
    creator: "The Theorist",
    likes: 0,
    views: 0,
    totalviews: 0,
    duration: 100
  },
    {
      id: 2,
      title: "[ L O S E R]",
      thumbnail:
        "https://ubisafe.org/images/box-transparent-question-2.png",
      youtubeURL: "https://www.youtube.com/embed/gzJxZ9ETnJU",
      creator: "marasy8",
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

  export default {
    name: 'HelloWorld',
    data () {
      return {
        title:'home',
        videos,
        activeVideo: videos[0]
      }
    },
    methods: {
      chooseVideo (video) {
        //SET VIDEO AS ACTIVE VIDEO
        this.activeVideo = video;
        //INCREASE THE VIDEOS VIEWS BY 1
        videos[0].totalviews+= 1;//this.activeVideo.views;
        console.log("Console Egg EXP:", videos[0].totalviews);
        video.views += 1;
        if((videos[0].totalviews % 10) === 0){
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
    width:1200px;
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
</style>
