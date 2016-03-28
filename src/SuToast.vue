<template>

  <div id="container">
    <div class="{{toast.type || 'positive'}} toast" v-for="toast in toasts" transition="toast">
      <div class="header">
        {{toast.content}}
      </div>
    </div>
  </div>

</template>

<script src="./SoToast.js"></script>
<!--<style lang="sass" scoped>
	.toast-enter,
	.toast-leave {
		opacity: 0
	}
	
	#container {
		bottom: 5px;
		right: 5px;
		position: fixed;
		.toast {
			transition: opacity .8s ease;
			border: 1px solid;
			border-radius: 4px;
			padding: 1em;
			margin: 0.5em;
			&.info {
				border-color: blue;
				color: blue;
			}
			&.positive {
				border-color: green;
				color: green;
			}
			&.error {
				border-color: red;
				color: red;
			}
		}
	}
</style>-->