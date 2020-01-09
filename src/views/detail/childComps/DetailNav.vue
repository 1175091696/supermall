<template>
	<div id="DetailNav">
		<NavBar>
			<div slot="center">详情页</div>
		</NavBar>
	</div>
	
</template>

<script>
import NavBar from "components/common/navbar/navBar"
export default {
	name: 'DetailNav',
	data() {
		return {
			id: null
		}
	},
	components: {
		NavBar
	},
	created() {
		this.id = this.$route.params.id
	}

}
</script>