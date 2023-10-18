<template>
	<div>
		<transition name="fade" mode="out-in"><router-view></router-view></transition>
	</div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'
export default class Empty extends Vue{}
</script>