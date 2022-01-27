<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 40%;
  min-width: 400px;
  margin: auto;
  margin-bottom: 30px;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.outerBox {
  display: flex;
}
.innerBox {
  padding: 2px 30px;
  white-space: pre-wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
}
* {
  box-sizing: border-box;
}
</style>

<template>
    <div class="card">
	<div class="outerBox">
		<img style="object-fit: cover;" :src="imgSrc">
		<div class="innerBox">
			<h4>{{ title }}</h4> 
      <div><span v-html="text"></span></div> 
		</div>
	</div>
    </div>
</template>

<script>
	export default {
		props: ['text', 'title', 'imgSrc'],
		data: function () {
			return {
			}
		}
	}
</script>
