<template>
	<div id="detail">
		<DetailNav></DetailNav>
	</div>
	
</template>

<script>
import DetailNav from "./childComps/DetailNav.vue"
export default {
	name: 'Detail',
	data() {
		return {
			id: null
		}
	},
	components: {
		DetailNav
	},
	created() {
		this.id = this.$route.params.id
	}

}
</script>