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
  size: 200%;
  justify-content: space-between;
  align-items: center;
  min-height: 150px;
}

.innerBox {
  padding: 10px 30px;
  white-space: pre-wrap;
  min-width: 30%;
}

.vBar {
  border-left: 1px solid LightGrey;
  height: 60px;
}

* {
  box-sizing: border-box;
}

</style>

<template>
    <div class="card">
	<div class="outerBox">
		<div class="innerBox">
			<span v-html="leftText"></span>
		</div>
		<div class="vBar"></div>
		<div class="innerBox">
			<span v-html="rightText"></span>
		</div>
	</div>
    </div>
</template>

<script>
	export default {
		props: ['leftText', 'rightText'],
		data: function () {
			return {
			}
		}
	}
</script>
