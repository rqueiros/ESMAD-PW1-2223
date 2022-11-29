<template>
	<div>
		<b-card :title="selectedBrand.name" :img-src="selectedBrand.logo" img-alt="Image" img-top tag="article" style="max-width: 20rem" class="mb-2 mx-auto text-center">
			<b-card-text> Foundation year: {{ selectedBrand.year }} </b-card-text>

			<b-button variant="primary" @click="$router.go(-1)">Go back</b-button>
		</b-card>
	</div>
</template>

<script>
	export default {
		name: 'Brand',
		data() {
			return {
				brands: [],
			};
		},
		created() {
			this.brands = JSON.parse(localStorage.getItem('brands'));
		},
		computed: {
			selectedBrand() {
				return this.brands.find((brand) => brand.id == this.$route.params.id);
			},
		},
	};
</script>

<style lang="scss" scoped></style>

