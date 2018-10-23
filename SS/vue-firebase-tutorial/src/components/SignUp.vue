<template>
    <div class="sign-up">
        <p> Let's make that new account bro</p>
        <input type="text" v-model="email" placeholder="TotallyLegitEmail(tm)"><br>
        <input type="password" v-model="password" placeholder="Pass the Ta"><br>
        <button v-on:click="signUp"> REGIS TARR </button>
        <span> or <router-link to ="/login"> go back</router-link> to login ;; Wasted my time</span>
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