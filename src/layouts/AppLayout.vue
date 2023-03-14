<template>
  <div class="wrapper">
		<div class="container">
			<slot/>
		</div>
  </div>
</template>

<script>
export default {
  name: 'AppLayout',
}
</script>

<style lang="scss">
.wrapper {
  flex-grow: 1;
	padding: 10px 30px 20px 30px;
}

.container {
	max-width: 1920px;
	padding: 0 20px;
}
</style>