<template>
  <div>I am the users component</div>
  <!-- {{ $this.route.params.id }} -->
  <div v-for="user in users" :key="user.id">
    <router-link :to="/users/+user.id">
 <div class="card px-1 py-1 my-2 col-3">{{ user.name }}</div>
</router-link>
  </div>
</template>

<script>
export default {
data(){
    return{
        users:[
            {id:1,name:'Samuel Adebayo',username:'samloco'},
            {id:2,name:'Grace Ifeoluwa',username:'gracee'},
            {id:3,name:'Divine Blessed',username:'blessed_divine'},
            {id:4,name:'Toheeb Adekunle',username:'adekilekun'},
            {id:5,name:'Joyce Williams',username:'Joyer'},
          

        ]
       
    }
},
created(){
    localStorage.setItem('userDetails',JSON.stringify(this.users))
}
}
</script>

<style>

</style>