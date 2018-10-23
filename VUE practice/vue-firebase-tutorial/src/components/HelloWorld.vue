<template>
  <div class="hello">

<button v-on:click="logout"> Logout </button>
  </div>


</template>
<script>

import firebase from 'firebase';
import Vue from 'vue'
import VueYoutube from 'vue-youtube'

Vue.use(VueYoutube)

<youtube :video-id="videoId" ref="youtube" @playing="playing"></youtube>
<button @click="playVideo">play</button>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Symphonic Secret'
    }
  },
  methods:{
    logout:function(){
      firebase.auth().signOut().then(() => {
        alert('Bye bye')
        this.$router.replace('login')
      })
    }
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
