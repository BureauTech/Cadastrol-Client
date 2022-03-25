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
	background-color: #F3F3F3
}
.toasted-font {
	font-family: "Roboto", sans-serif;
}
.v-card__text, .v-card__title {
	word-break: normal !important;
}
</style>
