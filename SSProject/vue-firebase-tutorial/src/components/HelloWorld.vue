<template>
<div class="mainArea">
  <iframe class="video w100" width="640" height="360" src="//www.youtube.com/embed/UOxkGD8qRB4" frameborder="0" allowfullscreen></iframe>
  <div class="row">
    <div class="col-md-6 col-md-offset-3">
      <form action="#" id="searchIt">
        <p><input type="text" id="searchBar" placeholder="Type something..." autocomplete="off" class="form-control" /></p>
        <button v-on:click="searchVid"> Search </button>
        <!--<p><input type="submit" value="Search" class="form-control btn btn-primary w100"></p>-->
      </form>
      <div id="results"></div>
    </div>
  </div>
  <button v-on:click="logout"> Logout </button>
</div>


</template>

<script>

import firebase from 'firebase';

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    logout:function(){
      firebase.auth().signOut().then(() => {
        alert('Bye bye');
        this.$router.replace('login')
      })
    },
    searchVid: function(){
      alert('Your video name was ' + document.getElementById('searchBar').value );
    }
  }
}

function resetVideoHeight() {
  $(".video").css("height", $("#results").width() * 9/16);
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
