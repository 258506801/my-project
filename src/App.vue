<template>
  <div>
    <deep-component></deep-component>
    <su-toast v-ref:toast></su-toast>
  </div>
</template>

<script>
	import SuToast from './SuToast.vue'
	import DeepComponent from './DeeoComponent.vue'
	export default {
		components: {
			SuToast,
			DeepComponent
		},
		events: {
			toast(type) {
				this.$refs.toast.insert({
					content: `大法师的发${type}发生的发生的`,
					type: type
				})
			}
		}
	}
</script>

<style>
	button {
		font-size: 1rem;
		height: 2em
	}
</style>