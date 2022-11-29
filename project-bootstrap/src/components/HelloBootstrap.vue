<template>
	<div class="container">
		<b-jumbotron header="Bootstrap-Vue" lead="Bootstrap v4 Components for Vue.js 2">
			<p>Now running on @vue/compat and Vue.js 3</p>
			<b-button variant="primary" @click="showModal"> Click me! </b-button>
		</b-jumbotron>
	</div>
</template>
<script>
	import { BIcon, BIconCamera } from 'bootstrap-vue';
	export default {
		methods: {
			showModal() {
				this.$bvModal.msgBoxOk('Modal from @vue/compat');
			},
		},
	};
</script>

