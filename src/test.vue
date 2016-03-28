<template>
	<span>Message: {{ msg }}</span>
	<span>Html:{{{raw_html}}}</span>
	<div id="item-{{ id }}"></div>
	<span>绑定表达式：{{number ? 'YES' : 'NO' }}</span>
	<p v-if="greeting">Hello!!!!</p>
	<a v-bind:href="url">ssss</a>
	<a v-on:click="doSomething">alert</a>
	<div id="example">
		a={{ a }}, b={{ b }}
	</div>
	<div class="static" :class="{ 'class-a': isA, 'class-b': isB }"></div>

	<div v-bind:class="classObject"></div>
	<h1 v-if="ok">Yes</h1>
	<h1 v-else>No</h1>
	<ul id="repeat-object" class="demo">
		<li v-for="value in object">
			{{ $key }} : {{ value }}
		</li>
	</ul>
	<div id="example">
		<button v-on:click="greet">Greet</button>
	</div>
	<div id="example-2">
		<button v-on:click="say('hi',$event)">Say Hi</button>
		<button v-on:click="say('what',$event)">Say What</button>
		<select v-model="selected">
			<option v-for="option in options" v-bind:value="option.value">
				{{ option.text }}
			</option>
		</select>
		<span>Selected: {{ selected }}</span>
	</div>
	<div id="demo" v-demo:hello.a.b="msg"></div>
</template>

<script src="./test.js"></script>
