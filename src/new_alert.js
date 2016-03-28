import coerceBoolean from './coerceBoolean.js'
export default {
	props: {
		type: {
			type: String
		},
		dismissable: {
			type: Boolean,
			coerce: coerceBoolean,
			default: false,
		},
		show: {
			type: Boolean,
			coerce: coerceBoolean,
			default: true,
			twoWay: true
		},
		duration: {
			type: Number,
			default: 0
		},
		width: {
			type: String
		},
		placement: {
			type: String
		}
	},
	watch: {
		show(val) {
			console.log(val);
			if (this._timeout) clearTimeout(this._timeout)
			if (val && Boolean(this.duration)) {
				this._timeout = setTimeout(() => this.show = false, this.duration)
			}
		}
	}
}