<template>
	<div>
		<div>
			<h2>work experience</h2>
			<div>
				<horCard
					style="text-align:left"
					v-bind:key="index"
					leftText="Feb. 2020 ⁠– Aug. 2021"
					rightText="<b>Internship at Tec de Monterrey's Department of Computer Science.</b> <ul style='margin-top:-10px'> <li>Created assignments involving the Misty robot for their use in B.S. in Robotics and Digital Systems Engineering classes.</li> <li>Web development with Google Firebase and Dialogflow integration.</li> </ul>"
				></horCard>
			</div>
		</div>
		<div>
			<h2>academic experience</h2>
			<div :class="$style.twocols">
				<horCard
					style="text-align:left"
					v-for="(item, index) in contenido"
					v-bind:key="index"
					v-bind:leftText="item.left"
					v-bind:rightText="item.right"
				></horCard>
			</div>
		</div>
	</div>
</template>

<script>
	import HorizontalCard from '../components/HorizontalCard.vue'
	
	export default {
		data: function () {
			return {
				contenido: [
					{ left: 'Dec. 2020 ⁠– present', right: '<b>Research in structured light.</b> <ul style="margin-top:-10px"> <li>Literature review and computational simulations of Helmholtz-Gauss beams, accelerating parabolic beams, and polarization of vector beams.</li> </ul>'},
					{ left: 'May 2020 ⁠– present', right: '<b>Research in optical models of the human eye.</b> <ul style="margin-top:-10px"> <li>Literature review of mathematical models of the human eye.</li> <li>Computational simulations of the crystalline lens. </li> </ul>'},
					{ left: 'June 2021 ⁠– Aug. 2021', right: '<b>Volunteer in "Aprendamos Juntos".</b> <ul style="margin-top:-10px"> <li>Provided remote mathematics tutoring to high school students in the state of Nuevo León and created related materials. </li> </ul>'},
					{ left: 'Feb. 2021 ⁠– June 2021', right: '<b>Volunteer for the primary school CARA (Center for High Academic Performance) in Monterrey. </b> <ul style="margin-top:-10px"> <li>Compiled educational resources for their use by parents from the school. </li> </ul>'},
					{ left: 'Oct. 2020 ⁠– Dec. 2020', right: '<b>National Plasmonics and Metaphotonics Workshop. </b> <ul style="margin-top:-10px"> <li>Attended the virtual workshop organized by the CICESE (Monterrey Unit), UMSNH, and BUAP. </li> </ul>'},
					{ left: 'Aug. 2019 ⁠– Mar. 2020', right: '<b>Participation in the BrainVue research group. </b> <ul style="margin-top:-10px"> <li>Development of a chatbot to promote the group’s activity, which aims to improve psychomotricity treatments for children through the use of AI. </li> </ul>'},
				]
			}
		},
		components: {
			'horCard': HorizontalCard
		}
	}
</script>

<style type="text/css" module>
	.twocols{
		display: flex;
		flex-flow: column wrap;
		align-items: flex-start;
		height: 800px;
	}
</style>
