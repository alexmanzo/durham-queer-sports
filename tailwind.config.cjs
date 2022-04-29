const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				serif: 'Fraunces, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
			}
		}
	},

	plugins: [forms, typography]
};

module.exports = config;
