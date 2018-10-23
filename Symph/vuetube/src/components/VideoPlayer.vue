<template>
  <div class="video-player">
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
