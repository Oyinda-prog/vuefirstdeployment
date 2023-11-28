<template>
  <div class="mx-auto bg-success text-light px-5 py-5 my-2" v-if="showBlock" @click="stopTimer">Block</div>
</template>

<script>
export default {
props:[
    'divDelay'
],
data(){
return {
    showBlock:false,
    reactionTime:null,
    timer:null
}
},
methods:{
startTimer(){
 this.timer=setInterval(() => {
  this.reactionTime+=2;
}, 2);
},

stopTimer(){
clearInterval(this.timer);
// console.log(this.reactionTime);
this.$emit('result',this.reactionTime);
}
},

mounted(){
 setTimeout(() => {
    // console.log('hello');
    this.showBlock=true
 }, this.divDelay);
 this.startTimer();
}}
</script>

<style>

</style>