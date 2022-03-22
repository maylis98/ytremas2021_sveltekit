import commonjs from '@rollup/plugin-commonjs';
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
// import adapter from '@sveltejs/adapter-static';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		
	},
	plugins: [commonjs()]
};

export default config;
