<template>
  <div>
    <button @click="add">+1</button>
    <button @click="decrement">-1</button>
    <input type="text" v-model="incrementValue">
    <button @click="incrementWithValue">increment</button>
    <div v-if="show">
      waiting
    </div>
  </div>
</template>

<script>
  import {mapActions} from "vuex"
  import {mapGetters} from "vuex"

  export default{
    data(){
    return{
      incrementValue:0
    }
    },
//    computed从state中获取初始状态
    computed:{
      show:function(){
        return this.$store.state.waiting
      },
//      countAnother:function(){ //获取getters
//        return this.$store.getters.countAnother
//      },
      ...mapGetters(["countAnother"])
    },
  methods:{
//    increment(){
//      this.$store.dispatch("increment")
//    },
//    decrement(){
//      this.$store.dispatch("decrement")
//    },
//    如果组件中的事件处理函数名字和action的名字是相同的，直接把事件处理函数名字放到一个组件中。
    ...mapActions(["decrement"]),
    ...mapActions({
      add:"increment"
    }),
    incrementWithValue(){
      //dispatch只能接受一个参数，需要传对象参数
      this.$store.dispatch("incrementWithValue",{value:this.incrementValue,anotherValue:this.countAnother})
    }
  }
}
</script>

<style scoped>
  button{
    width:100px;
    height:100px;
    font-size:30px;
  }
</style>
