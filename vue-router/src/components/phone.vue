<template>
  <div>
    <p>{{msg}}</p>
    <router-view></router-view>
    <router-view name="a"></router-view>
    <router-view name="b"></router-view>
  </div>
</template>

<script>
    export default {
        data(){
          return{
            msg:'this is phone'
          }
        }
    }
</script>

