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
	background-color: #f3f3f3
}
.toasted-font {
	font-family: "Roboto", sans-serif;
}
.v-card__text, .v-card__title {
	word-break: normal !important;
}
</style>
