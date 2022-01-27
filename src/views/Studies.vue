<template>
	<div>
		<h2>studies</h2>
		<horCard
			v-for="(item, index) in contenido"
			v-bind:key="index"
			v-bind:leftText="item.left"
			v-bind:rightText="item.right"
		></horCard>
	</div>
</template>

<script>
	import HorizontalCard from '../components/HorizontalCard.vue'
	
	export default {
		data: function () {
			return {
				contenido: [
					{ left: '2019 - 2023', right: '<b>B.S. in Engineering Physics.</b> Tecnológico de Monterrey (Mexico).'},
					{ left: 'May 2021', right: 'Acknowledgement to students with best averages in the School of Engineering and Sciences at Tecnológico de Monterrey during 2020.' },
					{ left: '2016 - 2019', right: '<b>International Baccalaureate with Honorific Mention.</b> Prepa Tec Campus Eugenio Garza Lagüera (Mexico).'},
					{ left: '<b>Languages</b>', right: 'Spanish: Native\nEnglish: Pearson C2 / TOEFL 114\nFrench: B2\nGerman: B1\nJapanese: N4'},
				]
			}
		},
		components: {
			'horCard': HorizontalCard
		}
	}
</script>
