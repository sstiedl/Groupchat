<template>
  <div class="welcome container">
    <p>Welcome</p>
    <div v-if="showLogin">
      <h2>Login</h2>
      <LoginForm @login="enterChat"/>
      <p>
        No Account yet? <span @click="showLogin = false">Signup</span> instead
      </p>
    </div>
    <div v-else>
      <h2>Signup</h2>
      <SignupForm  @signup="enterChat"/>
      <p>
        Already registred? <span @click="showLogin = true">Login</span> instead
      </p>
    </div>
    <hr>
    <p class="list">For testing purposes you can use:
      
      <p>email: user1@mail.com | pw: user123</p>
      <p>email: user2@mail.com | pw: user123</p>
      <p>email: user3@mail.com | pw: user123</p>
      <p>email: user4@mail.com | pw: user123</p>
     
    </p>
  </div>
</template>

<script>
import SignupForm from "../components/SignupForm.vue";
import LoginForm from "../components/LoginForm.vue";
import { ref } from "@vue/reactivity";
import { useRouter }  from 'vue-router'
export default {
  components: { SignupForm, LoginForm },
  setup() {
    const showLogin = ref(true);
    const router = useRouter()


    const enterChat = () =>{
      router.push({name: 'Chatroom'})
    }

    return { showLogin, enterChat };
  },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
/* form styles */
.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}
.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.welcome button {
  margin: 20px auto;
}

.list{
  margin: 2vw;
  padding: 1vw;
  background: grey;
  border-radius: 20px;
  color:white;
  font-style: italic;
  font-size: 0.7rem
}
</style>