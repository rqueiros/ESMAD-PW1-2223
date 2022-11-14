<template>
	<div>
		<h3>Login</h3>
		<b-form @submit.prevent="onSubmit">
			<b-form-group label="Username">
				<b-form-input v-model="form.username" type="text" required></b-form-input>
			</b-form-group>
			<b-form-group label="Password">
				<b-form-input v-model="form.password" type="password" required></b-form-input>
			</b-form-group>
			<b-button type="submit" variant="primary">Submit</b-button>
		</b-form>
	</div>
</template>

<script>
	export default {
		name: 'Login',
		data() {
			return {
				form: {
					username: '',
					password: '',
				},
			};
		},
		methods: {
			onSubmit() {
				if (this.form.username == 'admin' && this.form.password == 'PW1') {
					localStorage.setItem('isAuthenticated', true);
					this.$router.push({ name: 'BrandsList' });
				} else {
					alert('Wrong credentials!');
				}
			},
		},
	};
</script>

<style lang="scss" scoped></style>

