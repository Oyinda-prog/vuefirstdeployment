import { createRouter,createWebHistory } from "vue-router";
import HelloWorld from '../components/HelloWorld.vue'
import SignUp from '../components/SignUp.vue'
import ReactionGame from '../components/ReactionGame.vue'
import PageNotFound from '../components/PageNotFound.vue'
import UsersComponent from '../components/UsersComponent.vue'
import UserDetails from '../components/UserDetails.vue'
const routes=[
    {
        path:'/',
        component:HelloWorld,
        name:"Home"
    },
    {
        path:'/signup',
        component:SignUp,
        name:"Signup"
    },
    {
        path:'/reaction',
        component:ReactionGame,
        name:"Game"
    }, 
    {
        path:"/users",
        component:UsersComponent,
        name:'Users'
    },
    {
        path:'/users/:id',
        component:UserDetails,
        name:"Details"

    },
  {
    path: '/:pathMatch(.*)*',
   component:PageNotFound,
   name:"wildcard"
   },

]
const router=createRouter({
    history:createWebHistory(),
    routes
});
export default router
 