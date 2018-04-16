import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    count:20,
    waiting:false,
    anotherIncrement:5
  },
  mutations:{
    // INCREMENT(state){
    //   state.count++
    // },
    INCREMENT:state => state.count++,
    DECREMENT(state){
      state.count--
    },
    INCREMENT_WITH_VALUE(state,value){
      state.count = state.count + value + store.getters.countAnother;
    },
    SHOW_WAITING_MESSAGE(state){
      state.waiting = true;
    },
    HIDE_WAITING_MESSAGE(state){
      state.waiting = false;
    },
  },
  actions:{
    increment(context){
      context.commit("INCREMENT")
    },
    // decrement(context){
    //   context.commit("DECREMENT")
    // },
    // increment({commit}){
    //   commit("INCREMENT")
    // },
    decrement({commit}){
      commit("DECREMENT")
    },
    incrementWithValue({commit},value){
      commit("SHOW_WAITING_MESSAGE");
      console.log(value);
      let intValue = parseInt(value);
      if(isNaN(intValue)){
        alert("Not an Interger")
      }else{
      commit("HIDE_WAITING_MESSAGE");
      commit("INCREMENT_WITH_VALUE",intValue);
      }
    },
  },
  getters:{
    countAnother:function(state){
      return state.anotherIncrement+5;
    }
  }
})

export default store
