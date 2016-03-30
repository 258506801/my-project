var Vue = require('vue');
Vue.component('child', {
    template: '#child-template',
    data: function() {
        return {
            msgparent: 'hello'
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
