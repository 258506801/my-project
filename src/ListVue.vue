<template>
	<div id="ListVue">
		<ul>
			<li v-for="todo in todos">
				{{ todo.text }}
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				todos: [{
					text: 'Learn JavaScript'
				}, {
					text: 'Learn Vue.js'
				}, {
					text: 'Build Something Awesome'
				}]
			}
		}
	}
</script>
