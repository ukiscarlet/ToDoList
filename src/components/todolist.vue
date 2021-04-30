<template>
  <div class="pt-3">
    <v-row class="justify-center">
        <v-col cols="10" class="d-flex " style="align-items: baseline;">
            <v-text-field label="New Todo" outlined v-model="newItem" @keyup.enter="addItem"></v-text-field>
            <v-btn class="ma-1" larg color="primary" @click="addItem" style="height:54px"><v-icon>mdi-plus-box</v-icon></v-btn>
        </v-col>       
    </v-row>
    <transition-group name="fade" class="test">        
            <v-row class="justify-center" v-for="todo in ToDos" :key="todo.id">                
                <v-col cols="10">
                    <v-expand-x-transition>                        
                    <v-card v-show="todo.expand" class="d-flex  mx-auto pa-3 ma-2 text-center" style="align-items: center;background-color:#ffffff8c">
                    <v-checkbox v-model="score[todo.id]" ></v-checkbox>
                    <v-list-item-title class="headline mb-1" style="text-align: left;" :style="[score[todo.id]?checkStyle:{}]">{{todo.name}}</v-list-item-title>
                    <v-btn icon color="red" @click="deleteToDo(todo,todo.id);score[todo.expand]=false">
                        <v-icon>mdi-delete</v-icon>
                    </v-btn>
                    </v-card>
                    </v-expand-x-transition>
                </v-col>                
            </v-row>        
    </transition-group>
  </div>
</template>

<script>
import {fb} from'../firebase/fb'
export default({
    data(){
        return {
            ToDos:[],
            score:[],
            newItem:"",  
            expand: false,         
            checkStyle:{'text-decoration':'line-through'}
        }
    },
   methods:{
       async addItem(){
           if(this.newItem){
               console.log('test');
               await fb.firestore().collection("ToDos").add({name:this.newItem,expand:true});
               //await fb.firestore().collection("ToDos").add({name:this.newItem});
               this.newItem="";
           }
       },
       deleteToDo(object,id){
           console.log(object);
           fb.firestore().collection("ToDos").doc(id).delete();
       }
   },
//    created(){
//        this.ToDos=fb.firestore().collection("ToDos")
//    },
   firestore:{       
       ToDos:fb.firestore().collection("ToDos")
   }
});
</script>
