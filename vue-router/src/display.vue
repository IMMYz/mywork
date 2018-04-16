<template>
  <div>
    <h3>Count is {{count}}</h3>
    <p>CountPlusLocalState is{{countPlusLocalState}}</p>
    <p>组件自己的内部计算属性{{countAnother}}</p>
  </div>
</template>
<script>
  import {mapState} from "vuex"
  import {mapGetters} from "vuex"

export default{
     data(){
      return{
        localCount:10
      }
    },
  computed:{
//    countAnother:function(){
//      return this.$store.getters.countAnother;
//    },
//    localComputed(){
//      return this.count + 10
//    },
    ...mapState({
      count:"count",
      countPlusLocalState(state){
        return state.count + this.localCount
      }
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
