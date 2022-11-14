<template>
	<RouterView />
</template>

<script>
	import { RouterView } from 'vue-router';
	export default {
		name: 'App',
		data() {
			return {
				brands: [
					{
						id: 1,
						name: 'Fiat',
						logo: 'https://w7.pngwing.com/pngs/380/959/png-transparent-fiat-automobiles-car-fiat-500-topolino-fiat-600-fiat-emblem-trademark-logo.png',
						year: 1890,
					},
					{
						id: 2,
						name: 'Peugeot',
						logo: 'https://logodownload.org/wp-content/uploads/2014/09/peugeot-logo-3-1.png',
						year: 1910,
					},
					{
						id: 3,
						name: 'Audi',
						logo: 'https://images-automais.autosport.pt/2017/02/audi-logo-e1489764746896-1024x629.png',
						year: 1930,
					},
				],
			};
		},
		created() {
			if (!localStorage.getItem('brands')) localStorage.setItem('brands', JSON.stringify(this.brands));
		},
	};
</script>

<style lang="scss" scoped></style>

