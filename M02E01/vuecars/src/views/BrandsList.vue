<template>
	<div>
		<div class="d-flex flex-row justify-content-between mb-4">
			<h3>Brands List</h3>
			<b-button @click="$router.push({ name: 'AddBrand' })">Add brand</b-button>
		</div>

		<b-table striped sticky-header hover :items="brandsWithLink">
			<template #cell(link)="data">
				<RouterLink :to="{ name: 'Brand', params: { id: data.item.id } }">LINK</RouterLink>
			</template>
		</b-table>
	</div>
</template>

<script>
	import { RouterLink } from 'vue-router';
	export default {
		name: 'BrandsList',
		data() {
			return {
				brands: [],
			};
		},
		created() {
			this.brands = JSON.parse(localStorage.getItem('brands'));
		},
		computed: {
			brandsWithLink() {
				return this.brands.map((brand) => {
					return {
						...brand,
						link: '',
					};
				});
			},
		},
	};
</script>

<style lang="scss" scoped></style>

