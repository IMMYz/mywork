<template>
  <div>
    <h1>User</h1>
    <div>我是user组件</div>
    <div>{{dynamicSegment}}</div>
  </div>
</template>

<script>
    export default {
      data(){
        return{
          dynamicSegment:''
        }
      },
      watch:{
        $route(to,from){
          // to表示的是你要去的那个组件，from表示的是你从哪个组件过来的，它们是两个对象，你可以把它打印出来，他们也有一个param属性
          console.log(to);
          console.log(from);
          this.dynamicSegment = to.params.id
        }
      }
    }
</script>

<style scoped>

</style>
