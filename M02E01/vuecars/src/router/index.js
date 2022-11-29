import { createRouter, createWebHistory } from 'vue-router';

import BrandsList from '@/views/BrandsList.vue';
import Brand from '@/views/Brand.vue';
import AddBrand from '@/views/AddBrand.vue';
import Login from '@/views/Login.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			alias: '/list',
			name: 'BrandsList',
			component: BrandsList,
		},
		{
			path: '/brand/:id',
			name: 'Brand',
			component: Brand,
		},
		{
			path: '/add-brand',
			name: 'AddBrand',
			component: AddBrand,
			beforeEnter(to, from, next) {
				const isAuthenticated = localStorage.getItem('isAuthenticated');

				if (isAuthenticated) {
					next();
				} else {
					next({ name: 'Login' });
				}
			},
		},
		{
			path: '/login',
			name: 'Login',
			component: Login,
		},
	],
});

export default router;

