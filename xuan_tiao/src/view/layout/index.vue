<template>
 <div class="layout">
  
    <div class="header">
       <input type="text">
    </div>
    <div class="body">
    <router-view/>
    </div>
    <div class="footer">
        <div class="footer_item" v-for="(item,index) in list" :key="index" @click="toItem(item)">
            {{item.text}}
        </div>
    </div>
   </div>
 
</template>

<script>
export default {
   data(){
       return {
           list:[]
       }
   },
   created(){
       this.getList()
   },
   methods:{
       getList(){
           console.log(this.$router)
           this.list=this.$router.options.routes.filter(item=>item.name==='layout')[0].children;
       },
       toItem(item){
         this.$router.push(item.path)
       } 
   }   
}

</script>
<style>
.layout{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.header{
    height: 50px;
    background-color: palegoldenrod;
}
.body{
    flex: 1;
    overflow-y: auto;
}
.footer{
  line-height: 50px;
  background-color: palevioletred;
  display: flex;
  justify-content: space-around;
}
</style>