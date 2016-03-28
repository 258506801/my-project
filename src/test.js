var Vue = require('vue');

export default {
	data() {
			return {
				msg: 'Hello Vue!',
				raw_html: '<span>测试</span>',
				id: "1000",
				number: false,
				url: 'www.baidu.com',
				a: 1,
				isA: true,
				isB: true,
				classObject: {
					isA: true,
					isB: true
				},
				ok: false,
				object: {
					FirstName: 'John',
					LastName: 'Doe',
					Age: 30
				},
				selected: 'A',
				options: [{
					text: 'One',
					value: 'A'
				}, {
					text: 'Two',
					value: 'B'
				}, {
					text: 'Three',
					value: 'C'
				}]
			}
		},
		methods: {
			greeting: function() {
				return true;
			},
			doSomething: function() {
				alert();
			},
			greet: function() {
				console.log(this);
				console.log(event);
			},
			say: function(msg, e) {
				console.log(e);
			}
		},
		computed: {
			b: function() {
				return this.a + 1;
			}
		}
}