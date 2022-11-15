# project-bootstrap

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

<br>

## Bootstrap Vue 3

### 1. Install the following packages:

```sh
npm i bootstrap-vue@npm:@ankurk91/bootstrap-vue @vue/compat
```

and

```sh
npm i sass -D
```

<br>

### 2. Add/Change the following to your `main.js` file

#### 2.1. Change the import of `createApp`

-   Change this line:

```js
import { createApp } from 'vue';
```

-   to this:

```js
import Vue, { createApp } from '@vue/compat';
```

#### 2.2. Import BootstrapVue and its CSS

```js
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
```

For a full `main.js` example [Click here](https://github.com/rqueiros/ESMAD-PW1-2223/blob/main/project-bootstrap/src/main.js)

<br>

### 3. Add the following to your `vite.config.js` file:

Add the following to `resolve.alias`:

```js
vue: '@vue/compat',
```

Example:

```js
import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			// Add this line
			vue: '@vue/compat',
		},
	},
});
```

For a full `vite.config.js` example [Click here](https://github.com/rqueiros/ESMAD-PW1-2223/blob/main/project-bootstrap/vite.config.js)

