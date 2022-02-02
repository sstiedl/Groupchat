
<template>
  <div class="container">
    <Navbar />
    <ChaWindow />
    <NewChatForm />
  </div>
</template>

<script>
import NewChatForm from '../components/NewChatForm.vue'
import ChaWindow from '../components/ChaWindow.vue'
import Navbar from '../components/Navbar.vue'
import getUser from '../composable/getUser'
import { watch } from 'vue'
import { useRouter } from 'vue-router'
export default {
  components: { Navbar, NewChatForm, ChaWindow },
  setup() {
    const router = useRouter()
    const { user } = getUser()
    // if the user value is ever null, redirect to welcome screen
    watch(user, () => {
      if (!user.value) {
        router.push({ name: 'Welcome' })
      }
    })
  }
}

</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}
nav p.email {
  font-size: 14px;
  color: #999;
}
</style>