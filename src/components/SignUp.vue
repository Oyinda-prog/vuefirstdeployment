<template>
  <h3>I am the signup component</h3>
  <form class="card mx-auto col-6 shadow-sm py-1 mt-3" @submit.prevent="handleSubmit">
    <div class="form-group mt-2">
     <label>Name</label>
     <input type="text" class="form-control" v-model.trim="v$.form.name.$model">
    </div>
    <div v-for="(error,index) in v$.form.name.$errors" :key="index">
      <span class="text-danger text-sm">{{ error.$message }}</span>
    </div>
<label for="">Job Description</label>
<select name="" id="" v-model="job"> 
    <option value="Developer">
      Developer
    </option>
    <option value="Teacher">
     Teacher
    </option>
    <option value="Instructor">
   Instructor
    </option>
</select>
{{ job }}
    <div class="form-group mt-2">
     <label>E-mail address</label>
     <input type="text" class="form-control" v-model.trim="v$.form.email.$model">
    </div>
    <div v-for="(error,index) in v$.form.email.$errors" :key="index">
      <span class="text-danger text-sm">{{ error.$message }}</span>
    </div>
    <div class="form-group mt-2">
     <label>Phone Number</label>
     <input type="text" class="form-control" v-model.trim="v$.form.phone_number.$model">
    </div>
    <div v-for="(error,index) in v$.form.phone_number.$errors" :key="index">
      <span class="text-danger text-sm">{{ error.$message }}</span>
    </div>
    <div class="form-group mt-2">
     <label>Password</label>
     <input type="text" class="form-control" v-model.trim="v$.form.password.$model">
    </div>
    <div v-for="(error,index) in v$.form.password.$errors" :key="index">
      <span class="text-danger text-sm">{{ error.$message }}</span>
    </div>
<div class="form-group mt-2">
   <input type="checkbox" v-model="check" > 
<label for="">Accept Terms and condition</label>
{{ check }}
</div>

<div class="form-group mt-2">
<label for="">Skills</label>
<small><i>Please press comma or enter after inputting each skills</i> </small>
<input type="text" class="form-control" v-model="tempSkill" @keyup="addSkill">
</div>
<div v-for="(skill,index) in skills" :key="skill">
     <span class="skill btn btn-md bg-info text-light" @click="del(index)"> <p>{{ skill}}</p></span>
</div>

    <div class="form-group mt-2">
      <button type="submit" :disabled="v$.form.$invalid || !check "  class="btn btn-md bg-info text-light text-center px-2">Create an account</button>
  <!-- <button type="submit" :disabled="!check" class="btn btn-md bg-info text-light text-center px-2">Create an account</button> -->
    </div>
  </form>
</template>

<script>
 import useValidate from '@vuelidate/core';
 import{required,minLength,maxLength,email} from '@vuelidate/validators'
export default {
 
mounted(){
    console.log("Signup has been mounted");
},
setup(){
return {v$:useValidate()}
},
data(){
  return{
    form:{
     name:'',
    email:'',
    phone_number:'',
    password:''
    },
    job:'',
    check:false,
    skills:[],
    tempSkill:''
  }
},
validations(){
 return{
  form:{
full_name:{required,max:maxLength(10),min:minLength(5)},
  email:{required,email},
  phone_number:{required},
  password:{required,min:minLength(5)}

 }
 }
},
methods:{
  handleSubmit(){
    if(this.v$.form.$invalid){
      console.log('form is invalid')
    }else{
      console.log('form submitted');
    }
  //  console.log(this.form);
    // console.log(this.v$.form.email.required);
  },
  addSkill(e){
    console.log(e);
    if(e.key==='Enter' && this.tempSkill){
   this.skills.push(this.tempSkill)
   this.tempSkill=''
    }
    if(e.key==="," && this.tempSkill){
       this.tempSkill=this.tempSkill.slice(0,-1)
       this.skills.push(this.tempSkill)
       this.tempSkill=''
      //  console.log(this.tempSkill);
    }
  },
  del(index){
    // console.log(index);
     this. skills.splice(index,1)
     console.log(this.skills);
  }
}
}
</script>

<style>

</style>