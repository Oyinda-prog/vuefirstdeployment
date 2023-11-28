<template>
    <img  alt="vue logo" src="../assets/logo.png">
    <h3>Reaction Timer Game</h3>
    <button class="btn btn-md w-50 bg-success text-light px-1" @click="startGame" :disabled="isPlaying">Play</button>
    <BlockComponent v-if="isPlaying" :divDelay="delay" :playing="isPlaying" @result="gameResult"/>
     <ResultsComponent :res="result"/> 

 
</template>

<script>
import BlockComponent from './BlockComponent.vue'
import ResultsComponent from './ResultsComponent.vue'


    export default {
        name: 'ReactionGame',
       
        
  components:{
   BlockComponent,
   ResultsComponent
  },
  data(){
    return{
        delay:null,
        isPlaying:false,
        result:null
    }
  },
  methods:{
    startGame(){
        this.isPlaying=true;
        this.delay=Math.random()*10000
    },
    gameResult(res){
    this.result=res
    console.log(this.result);
    }
  }
    }
</script>