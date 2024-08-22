/** @type {import('tailwindcss').Config} */
export default {
	
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	],
	
	theme: {
		extend: {
			fontFamily: {
				"prompt": ["'Prompt'", 'sans-serif']
			}
		},
		backgroundImage: {
			"hero-font": "url('/src/assets/images/fondomym.webp')",
			"service-font": "url('/src/assets/images/back.svg')",
			"section-font": "url('/src/assets/images/back1.svg')"
		}
	},
	plugins: [
		require('tailwindcss-animated')
	],
}
