<template>
 <div class="main">
   <div v-for="(item,index) in list" :key="index">
     <dl>
       <dt>
         <img :src="item.img" alt="">
       </dt>
       <dd>{{item.title}}</dd>
     </dl>
   </div>
 </div>
</template>

<script>
import axios from 'axios';
export default {
   data(){
     return {
       list:[]
     }
   },
   created(){
     this.getData()
   },
   methods:{
     getData(){
        axios.get("/getData").then(res=>{
          console.log(res)
          this.list=res.data.list;
        })
     }
   }
}

</script>
<style>
</style>