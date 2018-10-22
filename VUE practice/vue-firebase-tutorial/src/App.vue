<template>
  <div id="app">
    <img src="./assets/logo.png"> 
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.login{
  margin-top: 40px;
  background-color:#FF5733;
}

input{
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}

button{
  margin-top: 20px;
  width: 10%;
  cursor: pointer;
}
p{
  margin-top: 40px;
  font-size: 13px;
}
p a{
  text-decoration: underLine;
  cursor: pointer;
}


</style>
