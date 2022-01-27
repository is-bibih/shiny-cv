<template>
	<div>
		<h2>about me</h2>
		<card
			v-for="(item, index) in contenido"
			v-bind:key="index"
			v-bind:title="item.titulo"
			v-bind:text="item.texto"
			imgSrc="http://placekitten.com/g/200/200"
		></card>
	</div>
</template>

<script>
	import Card from '../components/Card.vue'
	
	export default {
		data: function () {
			return {
				contenido: [
					{ titulo: 'contact', texto: `vivianamaldes (at) gmail (dot) com<br><a href='https://linkedin.com/in/viviana-maldonado-estrada'>Linkedin</a><br><br>Monterrey, Mexico`},
					{ titulo: 'about me', texto: `Engineering physics undergraduate interested in basic reasearch, with a strong background in numerical analysis.`},
					{ titulo: 'interests', texto: `basic research in physics\n\ncomputational models\n\nprogramming and Linux`}
				]
			}
		},
		components: {
			'card': Card
		}
	}
</script>
