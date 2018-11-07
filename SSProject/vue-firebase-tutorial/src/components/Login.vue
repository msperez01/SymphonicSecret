<template>
  <div class="login">

    <img src="https://i.imgur.com/LjjBd7v.png" height="280" width="380">
    <h3> Sign in Here</h3>
    <form class="emailInput"> <input type="text" v-model= "email" placeholder="Email..."> </form>
    <form class="passInput"><input type="password" v-model= "password" placeholder="Password..."></form><br>
    <button v-on:click="signIn" class="loginButton"> ENTER </button>
    <p> Don't have an account? <router-link to ="sign-up"> Let's help with that </router-link> </p>
  </div>
</template>

<script>

  import firebase from 'firebase'
  export default{
    name: 'login',
    data: function(){
      return{
        email: '',
        password: ''
      }
    },

    methods: {
      signIn: function(){
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            alert('You are in.')
            this.$router.replace('VideoPlayer')
          },
          (err) => {
            alert('Uh oh.' + err.message)
          }
        );
      }
    }
  }
</script>


<style scoped> </style>
