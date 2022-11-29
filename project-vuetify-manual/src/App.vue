<template>
	<v-app>
		<v-main>
			<v-row align="center" align-content="center" justify="center">
				<HelloVuetify class="mt-10" />
			</v-row>
		</v-main>
	</v-app>
</template>

<script>
	import HelloVuetify from '@/components/HelloVuetify.vue';
	export default {
		name: 'App',
		components: {
			HelloVuetify,
		},
		setup() {},
	};
</script>

<style lang="scss" scoped></style>

