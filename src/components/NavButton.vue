<template>
  <div>
		<router-link id="navButton" :to=routerdir>{{ text }}</router-link>
  </div>
</template>

<script>
	export default {
		props: ['text', 'routerdir'],
		data: function () {
			return {
			}
		},
	}
</script>

<style>

#navButton {
	font-weight: bold;
	text-decoration: none;

	border: 2px solid var(--fg);
	background-color: var(--bg);
	padding: 0.5em 0.5em;
}

#navButton.router-link-exact-active {
	background-color: var(--fg);
	color: var(--bg);
}

</style>
