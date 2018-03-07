<template>
  <div>
    <h2>about</h2>
    <hr></hr>
    <p>{{Scontent}}</p>
    <router-link to="/" tag="li"><a href="/">app</a></router-link>
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
