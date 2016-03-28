var Vue = require('vue');

var alert = Vue.extend({
	props: ['type'],
	computed: {
		alertClasses: function() {
			return {
				'alert-success': this.type === 'success',
				'alert-warning': this.type === 'warning',
				'alert-danger': this.type === 'error'
			}
		}
	},
	data: function() {
		return {
			show: true,
			showBtn: true
		};
	}
});

export default alert;