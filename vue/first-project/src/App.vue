<template>
  <div id="app">
   {{title}}
   <!-- 不解析标签 -->
   <h1 v-text="title"></h1>
   <!-- 解析标签 -->
   <h2 v-html="title"></h2>
   <ul>
     <li v-for="item in items" :class="[{finished:item.isfinished},{nofinished:item.isfinished}]" >{{item.label}}</li>
   </ul>
    <ul>
     <li v-for="item in items" :class="[liClass1,liClass2]">{{item.label}}</li>
   </ul>
  </div>
</template>

<script>

export default {
   data:function () {
     return{
      title:"<b>这是title啦啦啦</b>",
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
