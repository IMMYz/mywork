/**
 * Created by Yz on 2017/7/18.
 */
Vue.component('test-item',{
    props:['test'],
    template:'<li>{{test}}</li>'
});
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});
