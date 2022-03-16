<template>
	<v-app class="d-flex">
		<router-view />
	</v-app>
</template>

<script>
export default {
    name: "App"
}
</script>
<style>
#app {
	background: linear-gradient(
		359.76deg,
		rgba(42, 100, 132, 0.8) 0.23%,
		rgba(196, 196, 196, 0) 99.82%
	);
}
.toasted-font {
	font-family: "Roboto", sans-serif;
}
.v-card__text, .v-card__title {
	word-break: normal !important;
}
</style>
