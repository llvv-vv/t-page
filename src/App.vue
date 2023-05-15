<template>
	<a-button type="primary">primary</a-button>
	<a-button type="danger" class="m-l-8">danger</a-button>
	<!-- <a-button type="danger" style="margin-left: 4px;" class="">danger</a-button> -->
	<!-- <div>
		<a href="https://vitejs.dev" target="_blank">
			<img src="/vite.svg" class="logo" alt="Vite logo" />
		</a>
		<a href="https://vuejs.org/" target="_blank">
			<img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
		</a>
	</div> -->
	<!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
</script>

<style scoped lang="less">
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
	.div {
		color: red;
	}
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
