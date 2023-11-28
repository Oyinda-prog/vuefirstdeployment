<template>
  <!-- <h3>I am the results component</h3> -->
  <!-- <div>{{ resultMessage }}</div> -->
  <div class="mx-auto shadow py-3 col-6" v-if="res">
 <div class=" text-center alert alert-success" v-if="res > 1000 && res<1200"><h1> You are <b>Very Fast</b>, you've done well and your score is {{res/1000  }} seconds</h1></div>
<div v-else-if="res >1200 && res<2000 " class="alert alert-success"><h1>You are <b>Fast</b> and your score is {{ res/1000  }} seconds</h1></div> 
  <div v-else-if="res>2000 && res<3000 " class=" text-center alert alert-warning"><h1>You are <b> Slow</b>, you can always do better and your score is {{ res/1000 }} seconds</h1></div>
    <div v-else-if="res>500 && res<1000 " class=" text-center alert alert-success"><h1>You are Very Very <b>Fast</b>, kudos to you and your score is {{res/1000  }} seconds</h1></div> 
    <div v-else-if="res>3000" class=" text-center alert alert-danger"><h1>You are <b>Very Slow</b>,you can do better next time  and your score is {{ res/1000 }} seconds</h1></div> 
<!-- <div v-else-if="res<1000">Yes</div> -->
</div>



 
</template>

<script>
export default {
    props:[
    'res'
],





}
</script>

<style>

</style>