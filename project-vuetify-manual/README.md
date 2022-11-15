# project-vuetify-manual

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

## Vuetify 3

### 1. Install the following packages:

```sh
npm i vuetify@3.0.1
```

### 2. Add/Change the following to your `main.js` file

#### 2.1. Add the following

```js
// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
	components,
	directives,
});
```

#### 2.2. Add `.use(vuetify)` to the `createApp` function

```js
createApp(App).use(vuetify).mount('#app');
```

For a full `main.js` example [Click here](https://github.com/rqueiros/ESMAD-PW1-2223/blob/main/project-vuetify-manual/src/main.js)
