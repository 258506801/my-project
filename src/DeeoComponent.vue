<template>
  <button class="ui button" @click="toast('positive')">Positive</button>
  <button class="ui button" @click="toast('info')">Info</button>
  <button class="ui button" @click="toast('error')">Error</button>
</template>

<script type="text/babel">
	export default { methods: { toast(type) { this.$dispatch('toast', type) } } }
</script>