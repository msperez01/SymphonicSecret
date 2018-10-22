<template>
    <div class="login">
        <h3> Sign in here M8</h3>
        <input type="text" v-model= "email" placeholder="TotallyLegitEmail"><br>
        <input type="password" v-model= "password" placeholder="Password"><br>
        <button v-on:click="signIn"> ENTER </button>
        <p> Bro. You don't have an account.  <router-link to ="sign-up"> Let's help with that </router-link> </p>
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
                        this.$router.replace('helloWorld')
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