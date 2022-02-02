<template>
  <nav v-if="user">
      <div>
          <p>hey there {{ user.displayName }}</p>
          <p class="email">currently logged in as {{ user.email }}</p>
      </div>
      <button @click="handleLogout">Logout</button>
  </nav>
</template>

<script>
import useLogout from '../composable/useLogout'
import getUser from '../composable/getUser'
export default {
    setup(){

        const { logout, error} = useLogout()
        const { user } = getUser()

        const handleLogout = async () =>{
            await logout()
            if(!error.value){
                console.log('user logged out')
            }
        }


        return { handleLogout, user}
    }

}
</script>

<style>

</style>