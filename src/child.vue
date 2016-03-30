<!-- 子组件模板 -->
<template id="child-template">
    <input v-model="msg">
    <button v-on:click="notify">Dispatch Event</button>
</template>

<script src="./child.js"></script>
