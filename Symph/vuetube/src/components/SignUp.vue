<template>
    <div class="sign-up">
       <img src="https://i.imgur.com/LjjBd7v.png" height="280" width="380"> 
        <h3> Let's make that new account bro</h3>
        <input type="text" v-model="email" placeholder="Enter your email"><br>
        <input type="password" v-model="password" placeholder="Enter your password"><br>
        <button v-on:click="signUp"> Create </button>
        <span> <router-link to ="/login"> Click here to go back </router-link></span>
    </div>
</template>

<script>

    import firebase from 'firebase'

    export default{
        name: 'signUp', 
        data: function(){
            return{
                email : '',
                password : ''
            }
        },
        methods: {
            signUp: function(){
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                    function(user){
                        alert('Your account was created!')
                        this.$router.replace('VideoPlayer')
                    },
                    function(err){
                        alert('Uh oh...' + err.message)
                    }
                );
                    
            }
        }
    }
</script>

<style scoped> 
.signUp{
    margin-top: 40px;
}

input{
    margin: 10 0;
    width: 20%;
    padding: 15px;
}

button{
    margin-top: 10px;
    width: 10%;
}

span{
    display: block;
    margin-top: 20px;
    font-size: 11px;
}







</style>