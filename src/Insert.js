var Vue = require('vue');

var insert = Vue.extend({
    data: function() {
        return {
            message: 'Hello Vue.js!'
        }
    },
    watch: {
        'message': {
            handler: function(val, oldVal) {
                console.log('new: %s, old: %s', val, oldVal)
            },
            deep: true
        }
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})
insert.message = 'pangjianhua';
export default insert;
