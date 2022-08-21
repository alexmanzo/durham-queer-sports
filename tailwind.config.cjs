const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				serif: 'VC Henrietta, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
				sans: '"Open SansVariable", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
			},
			colors: {
				indigo: {
					1: '#131620',
					2: '#15192d',
					3: '#192140',
					4: '#1c274f',
					DEFAULT: '#1f2c5c',
					6: '#22346e',
					7: '#273e89',
					8: '#2f4eb2',
					9: '#3e63dd',
					10: '#5373e7',
					11: '#849dff',
					12: '#eef1fd'
				}
			}
		}
	},

	plugins: [forms, typography]
};

module.exports = config;
