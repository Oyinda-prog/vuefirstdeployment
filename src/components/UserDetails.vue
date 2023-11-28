<template>
  <h1>I am the userdetail page</h1>
  {{ this.$route.params.id }}
  <button class="btn btn-md bg-dark text-light px-2" @click="goToHome()">Ge to home</button>
</template>

<script>
export default {
methods:{
    goToHome(){
        this.$router.push('/')
    }
}
}
</script>

<style>

</style>