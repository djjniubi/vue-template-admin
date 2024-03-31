<template>
	<div>
		<div>测试导航1</div>
	</div>
</template>
<script lang="ts" setup>
import { onDeactivated } from 'vue';

onDeactivated(() => {
	console.log('onDeactivated测试导航1');
});
</script>
