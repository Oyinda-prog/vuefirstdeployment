<template>

  <nav class="nav bg-dark">
    <a class=" " style="text-decoration: none; color: white;">
   <router-link to="/">Home|</router-link>
  </a>
  <a class="nav-link">
   <router-link to="/signup">SignUp|</router-link>
  </a>
  <a class="nav-link">
   <router-link to="/users">Users|</router-link>
  </a>
  <a  class="nav-link">
    <router-link :to="{name:'Game'}">Reaction Timer Game|</router-link>
  </a>
   
   <!-- <a class="nav-link text-white">Home|</a>
   <a href="/signup" class="nav-link text-white">Signup|</a>
   <a href="/reaction" class="nav-link text-white">ReactionTime Game|</a> -->
  </nav>
  <img alt="Vue logo" src="./assets/logo.png">
  <h2>Welcome to vue,{{ name }}</h2>
  <p>Age - {{ age }}</p>
  <button v-on:click="increaseAge">Increase</button>
  <button @click="decreaseAge">Decrease</button>
  <!-- Conditional statemants v-if, v-else,v-else-if -->
  <!-- <div v-if="false">Display me</div> -->
   <!-- <div v-if="true">Display me</div> -->
<div v-if="name=='Janet'">Display me</div>
<div v-else-if="name=='Dammy'">I am Dammy</div>
<div v-else>I am displaying</div>
<input type="text" v-model="userInput">
<button @click="display">Display</button>
<!-- v-show, changes the style to display none from display block while v-if entire removes it from the DOM, v-if is faster than v-show, if it only one condition, use v-show but use v-if when using it woth v-else and v-else-if  -->
 <div v-show="name=='Dammy'">I am V-show</div>
 <a href="https://edu.sqi.ng"></a>
 <a v-bind:href="url"></a>

 <!-- Event Handling -->
 <div class="p-5 text-center mx-auto bg-secondary  my-2" @mouseenter="handleEvent">mouseenter</div>
 <div class="p-5 text-center mx-auto bg-secondary  my-2" @mouseleave="handleEvent">mouseleave</div>
 <div class="p-5 text-center mx-auto bg-secondary  my-2" @dblclick="handleEvent">doubleclick</div>
 <div class="p-5 text-center mx-auto bg-secondary  my-2" @mousemove="handleMouseMove">{{ x }},{{ y }}</div>

 <!-- v-for -->
<div v-for="item in goods" :key="item.id" v-bind:class="{avaiableItems:item.available}" @click="changeColour(item.id)" >
<h3 >{{item.name}}</h3> 
<p>{{ item.price }}</p>
</div>


<div>COMPUTED PROPERTIES</div> 
<div v-for="good in availableGoods" :key="good.id">
  <h3 >{{good.name}}</h3> 
<p>{{ good.price }}</p>
</div>

<!--signup component-->
<button @click="mount=!mount">Mount</button>
<SignUp v-if="mount==true"/>
<ReactionGame></ReactionGame>
<router-view/>
</template>

<!-- V-For --> 

  
<!-- //nextweek, v4,mouses, -->
<!-- <p :class="name">I am a class</p> -->
<!-- Read up on router, practice -->

<script>
//import HelloWorld from './components/HelloWorld.vue'

import ReactionGame from './components/ReactionGame.vue';

import SignUp from './components/SignUp.vue'


export default {
  name: 'App',
  components: {
   // HelloWorld
   SignUp,
   ReactionGame
   
  },
  data(){
    return{
      name:"Dammy",
      age:9,
      userInput:78,
      x:0,
      y:0,
      goods:[{id:1, name:"T-shirt", price:3000, available:true,clicked: true },
    { id:2,name:"Gala", price:300, available:false },
    {
      name:"Bottle Water", price:100,id:3, available:true
    },
    {name:"Airpods", price:27000,id:4,available:false},
    ],
    url:"https://edu.sqi",
    mount:false
    
    }
  },
  methods:{
increaseAge(){
  this.age=this.age+2;
},decreaseAge(){
  this.age=this.age-1
},
display(){
console.log(this.userInput);
},
handleEvent(e){
console.log(e);
},
handleMouseMove(e){
this.x=e.offsetX;
this.y=e.offsetY;
},
changeColour(id){
let item=this.goods.find((good)=>good.id==id);
console.log(item);
item.available=!item.available
}
  },
  computed:{
    availableGoods(){
      return this.goods.filter((good)=>good.available)
    }
  }, 
  mounted(){
console.log("component mounted");
  },
}

</script>

<style>
.clicked {
   background-color:green; 
    
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.avaiableItems{
background-color:purple;
padding: 8px 10px;
text-align: center;
}

</style>
