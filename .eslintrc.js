eslintConfig = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: [
		'simple-import-sort',
	],
	parserOptions: {
		project: ['./tsconfig.json'],
	},
	extends: [
		'airbnb',
		'airbnb/hooks',
		'prettier'
	],
	env: {
		browser: true,
		es2021: true,
	},
	rules: {
		'indent': [
			2,
			'tab',
			{
				'SwitchCase': 1
			}
		]
	},
}

module.exports = eslintConfig
