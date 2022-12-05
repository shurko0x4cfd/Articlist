
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
// import { flowPlugin, esbuildFlowPlugin } from '@bunchtogether/vite-plugin-flow';

const babelOptions = {
	babel: {
		"presets": [
			"@babel/preset-flow"]
	}
}

export default defineConfig({
	// optimizeDeps: { esbuildOptions: { plugins: [esbuildFlowPlugin()] }},
	plugins: [/* flowPlugin(), */ solidPlugin(babelOptions)],
	server: {
		port: 3000,
	},
	build: {
		target: 'esnext',
	},
});
