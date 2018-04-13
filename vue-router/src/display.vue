<template>
  <div>
    <h3>Count is {{count}}</h3>
    <p>组件自己的内部计算属性{{countAnother}}</p>
  </div>
</template>
<script>
  import {mapState} from "vuex"
  import {mapGetters} from "vuex"

export default{
  computed:{
//    countAnother:function(){
//      return this.$store.getters.countAnother;
//    },
    localComputed(){
      return this.count + 10
    },
    ...mapState({
      count:"count"
    }),
    ...mapGetters(["countAnother"])
  }
  }
</script>
<style scoped>
h3{
  font-size:30px
}
</style>
