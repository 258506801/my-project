import Vue from 'vue'
import App from './App.vue'
import List from './ListVue.vue'
import Insert from './Insert.vue'
import Alert from './alert.vue'
import Test from './test.vue'
import NewAlert from './new_alert.vue'

Vue.component('Insert', Insert);
Vue.component('List', List);
Vue.component('App', App);
Vue.component('alert', Alert);
Vue.component('Test', Test);
Vue.component('NewAlert', NewAlert);

var data = {
    a: 1,
    c: '123123'
}
var vm = new Vue({
    el: '#apps',
    data: data,
    watch: {
        'a': function(val, oldVal) {
            console.log('new: %s, old: %s', val, oldVal)
        },
        'c': {
            handler: function(val, oldVal) {
                console.log('new: %s, old: %s', val, oldVal)
            },
            deep: true
        }
    }
})

vm.a = 100
setTimeout(function() {
    vm.a = 1000
}, 1000);

console.log(vm.$data);
console.log(vm.$el);

new Vue({
    el: 'body'
})
