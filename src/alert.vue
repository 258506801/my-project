<template>
<div class="col-lg-3">
  <div :class="alertClasses" class="alert alert-dismissible"  v-show="show" role="alert">
    <slot name="alert"><strong>Default!</strong> Hello World~</slot>
    <button type="button" class="close"  @click="show = false" v-show="showBtn">
  		<span aria-hidden="true">&times;</span>
	</button>
  </div>
  </div>
</template>

<script src="./alert.js"></script>