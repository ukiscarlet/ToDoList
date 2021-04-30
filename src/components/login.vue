<template>
<v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title>Login to Start</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                        <v-form>
                           <v-text-field                              
                              name="login"
                              label="Login"
                              type="email"
                              v-model="email"
                           ></v-text-field>
                           <v-text-field
                              id="password"                              
                              name="password"
                              label="Password"
                              type="password"
                              v-model="password"
                           ></v-text-field>
                        </v-form>
                     </v-card-text>
                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="login">Login</v-btn>
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
</template>

<script>
import {fb} from'../firebase/fb'
export default({
    data(){
        return {
           IsLogin:true,     
           email:'',
           password:''      
            //ToDos:[],
            //newItem:""
        }
    },
   methods:{
       async login(){
           await fb.auth().signInWithEmailAndPassword(this.email, this.password)
           .then(()=>{
               this.IsLogin=true;      
               //this.loginfn();         
               console.log('success');
           })
           .catch((error)=>{
             this.IsLogin=false;      
                console.log('error'+error.code);
           })
       },   
      //  async loginfn()
      //  {
      //     await fb.auth().((user)=>{
      //       fb.collection("ToDos").doc(user.uid);
      //     })
      //    this.$emit("emit-data",this.IsLogin);
         
      //  }   
   },
//    firestore:{
//        ToDos:db.collection("ToDos")
//    }
});
</script>
