<style scoped>

.top {
	display: flex;
	flex-flow: column nowrap;
	justify-content: space-between;
}

</style>

<template>
	<div id="top">
    <div class="title">
			<h1><span v-html="title"></span> </h1>
    </div>
		<br>
		<div class="about">
			{{ about }}
		</div>
		<div class="interests">
			<h2>interests</h2>
			<span v-html="interests"></span>
		</div>
		<div class="contact">
			<h2>contact</h2>
			<span v-html="contact"></span>
		</div>
	</div>
</template>

<script>
	export default {
		data: function () {
			return {
				title: 'Viviana<br>Maldonado<br>Estrada',
				about: 'Engineering physics undergraduate interested in basic reasearch, with a strong background in numerical analysis.',
				interests: 'basic research in physics<br>computational models<br>programming and Linux',
				contact: `vivianamaldes (at) gmail (dot) com<br><a href='https://linkedin.com/in/viviana-maldonado-estrada'>LinkedIn</a><br><br>Monterrey, Mexico`,
			}
		}
	}
</script>
