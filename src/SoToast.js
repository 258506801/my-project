export default {
	props: {
		duration: {
			type: Number,
			default: 2000
		}
	},
	methods: {
		insert(message) {
			console.log(message);
			this.toasts.push(message);
		}
	},
	data() {
		return {
			toasts: []
		}
	}
}