import Vue from 'vue'
import App from './App.vue'
import List from './ListVue.vue'
import Insert from './Insert.vue'
import Alert from './alert.vue'
import Test from './test.vue'
import NewAlert from './new_alert.vue'
// import parent from './parent.vue'
// import child from './child.vue'

Vue.component('Insert', Insert);
Vue.component('List', List);
Vue.component('App', App);
Vue.component('alert', Alert);
Vue.component('Test', Test);
Vue.component('NewAlert', NewAlert);
// Vue.component('child', child);
// Vue.component('parent', parent);
Vue.component('child', {
    template: '#child-template',
    data: function() {
        return {
            msg: 'hello'
        }
    },
    methods: {
        notify: function() {
            if (this.msg.trim()) {
                this.$dispatch('child-msg', this.msg)
                this.msg = ''
            }
        }
    }
})

var parent = new Vue({
    el: '#events-example',
    data: {
        messages: []
    },
    // 在创建实例时 `events` 选项简单地调用 `$on`
    events: {
        'child-msg': function(msg) {
            // 事件回调内的 `this` 自动绑定到注册它的实例上
            console.log(this);
            this.messages.push(msg)
        }
    }
})

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

vm.a = 1000
setTimeout(function() {
    vm.a = 10000
}, 100);

Vue.nextTick(function() {
    // DOM 更新了
    console.log(this)
})

// 注册
Vue.directive('my-directive', {
    bind: function() {
        console.log('my');
    },
    update: function(ov, nv) {
        console.log(ov);
        console.log(nv);
    },
    unbind: function() {}
})


console.log(vm.$data);
console.log(vm.$el);

new Vue({
    el: 'body'
})
