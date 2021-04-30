<template>


  <v-app>
   
    <v-app-bar  v-if="IsLogin" app color="primary" dark>
      <div class="row justify-center">
        <div class="d-flex ">
          <div class="d-flex "><v-icon>mdi-calendar-edit</v-icon><h2 class="ml-1">TodoList</h2></div>
          <v-btn elevation="3" @click="logout()" style="background-color:#e63e32;position: absolute;right:10%">
                      <v-icon>mdi-account-arrow-right</v-icon> 登出
          </v-btn>
        </div>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content>
      <todolist v-if="IsLogin"/>
      <login @emit-data="login"  v-if="!IsLogin"/>
    </v-content>
    <v-main> </v-main>
     
  </v-app>

 
</template>

<script>
import todolist from './components/todolist.vue'
import login from './components/login.vue'
import {fb} from'./firebase/fb'
export default {
  name: "App",

  components: {
    todolist,
    login
  },

  data(){
    return {
      IsLogin:false,      
     }   
  },
  methods:{
    login(param)
    {
      this.IsLogin=param;
    },
    logout()
    {
      fb.auth().signOut()
           .then(()=>{
                this.IsLogin=false;
           })
           .catch((error)=>{            
                console.log('error'+error.code);
           })
     
    }
  },
   created(){
      // firebaseAuth.onAuthStateChanged((user) => {
      //   if (user) {
      //     this.user = user;
      //     this.isAuth = true;
      //   }
      // })
      console.log("Prepare login");
      fb.auth().onAuthStateChanged(user=>{
        if (user) {
        console.log("Prepare login success");
          this.IsLogin=true;
        } else {
          this.IsLogin=false;
        }
      });      
  },   
 
};
</script>

<style scoped>
  #app
  {
    background-color: black;
    background: url('~@/assets/background.jpg');
  }
</style>

