<template>
  <div>
    <h2>home</h2>
    <hr></hr>
    <p>{{Scontent}}</p>
    <router-view></router-view>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        Scontent:'This is Scontent'
      }
    }
  }
</script>
