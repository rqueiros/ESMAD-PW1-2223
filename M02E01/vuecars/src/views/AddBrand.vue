<template>
	<div>
		<h3>Add Brand</h3>
		<b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
			<b-form-group label="Name">
				<b-form-input v-model="form.name" type="text" required></b-form-input>
			</b-form-group>
			<b-form-group label="Logo">
				<b-form-input v-model="form.logo" type="url" required></b-form-input>
			</b-form-group>
			<b-form-group label="Year">
				<b-form-input v-model="form.year" type="number"></b-form-input>
			</b-form-group>
			<b-button type="submit" variant="primary">Submit</b-button>
			<b-button type="reset" variant="danger">Reset</b-button>
		</b-form>
	</div>
</template>

<script>
	export default {
		name: 'AddBrand',
		data() {
			return {
				form: {
					name: '',
					logo: '',
					year: null,
				},
			};
		},
		methods: {
			onReset() {
				// Reset our form values
				this.form.logo = '';
				this.form.name = '';
				this.form.year = null;
			},
			onSubmit() {
				const brands = JSON.parse(localStorage.getItem('brands'));

				const nextId = brands[brands.length - 1].id + 1;

				const newBrand = {
					id: nextId,
					name: this.form.name,
					logo: this.form.logo,
					year: this.form.year,
				};

				brands.push(newBrand);

				localStorage.setItem('brands', JSON.stringify(brands));

				alert('New brand added!');
				this.$router.push({ name: 'BrandsList' });
			},
		},
	};
</script>

<style lang="scss" scoped></style>

