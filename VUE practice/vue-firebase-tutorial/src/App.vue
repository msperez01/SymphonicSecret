<template>
  <div id="html">
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
  
}
html{
  background-image: radial-gradient( #b6d4e7 0%, #417da5 100%);
  repeat: none;
 font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.music1{ /*Top music notes*/
    position: relative;
    width: 100%;
    background-size: 300px;
    background-image: url(https://i.imgur.com/56sW0hH.png);
    /*Previous symbols background-image:url(https://i.imgur.com/3RhqzJb.png);*/
    background-repeat: repeat-x;
    background-position: 0px 0px;
    animation: animatedBackground2 40s linear infinite;   
}

.music2{/*Bottom music notes*/
    position: relative;
    height: 12%; 
    width: 100%;
    background-size: 300px;
    background-image: url(https://i.imgur.com/56sW0hH.png);
    /*Previous symbols background-image:url(https://i.imgur.com/3RhqzJb.png);*/
    background-repeat: repeat-x;
    background-position: 0px 0px;
    animation: animatedBackground1 40s linear infinite;   
}
@keyframes animatedBackground1{/*Scrolls right to left on the top*/
    from { background-position: 0 0; }
    to { background-position: 100% 0; }
}
    
@keyframes animatedBackground2{/*Scrolls left to right on the bottom*/
    from { background-position: 100% 0; }
    to { background-position: 0 0; }
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
