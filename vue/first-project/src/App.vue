<template>
  <div id="app">
  <h1>{{title}}</h1>
   <!-- 不解析标签 -->
   <h1 v-text="title"></h1>
   <!-- 解析标签 -->
   <h2 v-html="title"></h2>
   <h2>循环</h2>
   <input v-model="val" @keyup.13="outInput" type="text" name="" value="" placeholder="">
   <ul>
     <li v-for="item in items" :class="[{finished:item.isfinished}]" >{{item.label}}</li>
   </ul>
    <ul>
     <li v-for="item in items" :class="[liClass1,liClass2]">{{item.label}}</li>
   </ul>
    <h2>加上事件</h2>
     <ul>
     <li v-for="item2 in items" :class="[{finished:item2.isfinished}]"  @click="toggleFinish(item2)">{{item2.label}}</li>
   </ul>
  </div>
</template>

<script>

export default {
   data:function () {
     return{
      title:"<b>这是title啦啦啦这是title啦啦啦</b>",
      items:[
      {
        label:"coding",
        isfinished:false
      },
      {
        label:"running",
        isfinished:true
      }

      ],
      liClass1:"class1",
      liClass2:"class2",
      val:"one"
     }
   },
   methods:{
    toggleFinish:function (item2) {
      item2.isfinished=!item2.isfinished;
    },
    outInput:function () {
      this.items.push({label:this.val});
      this.val="";
    }
   }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.finished{
  text-decoration: underline;
}
.nofinished{
  color:#f00;
}
</style>
