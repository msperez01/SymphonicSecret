<script src="../../../Symph/vuetube/src/main.js"></script>
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  //<VideoPlayer/> <router-view> </router-view>
  import VideoPlayer from './components/VideoPlayer'
  import Login from './components/Login'
  import SignUp from './components/SignUp'
  import HelloWorld from './components/HelloWorld'

  export default {
    name: 'App',
    components: {
      Login,
      SignUp,
      VideoPlayer,
      HelloWorld
    }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  body{
    background-image: radial-gradient( #b6d4e7 0%, #417da5 100%);
    background-repeat: none;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .login{
    margin-top: 40px;
  }

  input{
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }

  input[type=text] {
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid rgb(255, 255, 255);
    background-color: transparent;
    border-radius: 4px;
    width: 30%;
    transition: width 0.4s ease-in-out;
    position: relative;
  }

  input[type=text]:focus{
    width: 91%;
    background-color: transparent;
    border: 3px solid rgb(167, 211, 212);
  }

  input[type=password] {
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid rgb(255, 255, 255);
    background-color: transparent;
    border-radius: 4px;
    width: 30%;
    transition: width 0.4s ease-in-out;
    position: relative;
  }

  input[type=password]:focus{
    width: 91%;
    background-color: transparent;
    border: 3px solid rgb(167, 211, 212);
  }
  button{
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
    background-color: #b6d4e7;
    border: none;
    color: rgb(17, 59, 83);
    text-align: center;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    border-radius: 12px;
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
