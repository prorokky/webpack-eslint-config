module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
		'airbnb',
        'airbnb/hooks',
		'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:eslint-comments/recommended',
        'plugin:unicorn/recommended',
        'plugin:json/recommended',
        'prettier',
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
		project: ['./tsconfig.json'],
    },
    "plugins": [
        "@typescript-eslint",
		'simple-import-sort',
    ],
    "rules": {
        'unicorn/numeric-separators-style': 'off',
        'no-prototype-builtins': 'off',
        'import/prefer-default-export': 'off',
        'import/no-default-export': 'error',
		'semi': ['error', 'never'],
        'semi-spacing': 'warn',
        'semi-style': 'warn',
        'space-before-blocks': 'warn',
		'no-console': 'warn',
        'space-infix-ops': 'warn',
        'space-unary-ops': 'warn',
        'switch-colon-spacing': 'warn',
        'quote-props': ['warn', 'as-needed'],
        'no-negated-condition': 'off',
        'no-async-promise-executor': 'off',
        'no-underscore-dangle': 'off',
        'no-negated-condition': 'off',
        'no-param-reassign': [
            'error',
            {
                'props': true,
                'ignorePropertyModificationsFor': ['state']
            }
        ],
        'no-use-before-define': [
            'error',
            {
                'functions': false,
                'classes': true,
                'variables': true
            }
        ],
		"unicorn/filename-case": [
			"error",
			{
				"cases": {
					"camelCase": true,
					"pascalCase": true
				}
			}
		],
        'unicorn/prefer-module': 'off',
        'unicorn/prevent-abbreviations': 'off',
        'unicorn/no-array-for-each': 'off',
        'react/no-array-index-key': 'off',
        'indent': [
            2,
            'tab',
            {
                'SwitchCase': 1
            }
        ],
        'quotes': [
            'warn',
            'single',
            {
                'avoidEscape': true
            }
        ],
        'no-trailing-spaces': 'warn',
        'comma-dangle': ['warn', 'always-multiline'],
        'comma-spacing': [
            'warn',
            {
                'before': false,
                'after': true
            }
        ],
        'comma-style': ['warn', 'last'],
        'computed-property-spacing': ['warn', 'never'],
        'func-call-spacing': ['warn', 'never'],
        'key-spacing': ['warn'],
        'no-whitespace-before-property': ['warn'],
        'padding-line-between-statements': [
            'warn',
            {
                'blankLine': 'always',
                'prev': ['const', 'let', 'var'],
                'next': '*'
            },
            {
                'blankLine': 'always',
                'prev': '*',
                'next': 'return'
            },
            {
                'blankLine': 'any',
                'prev': ['const', 'let', 'var'],
                'next': ['const', 'let', 'var']
            }
        ],
        'complexity': ['warn', 50],
        'max-nested-callbacks': 'warn',
        "react/function-component-definition": [
            2,
            {
                "namedComponents": "arrow-function"
            }
        ],
        'jsx-a11y/interactive-supports-focus': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'react/jsx-indent': [2, 'tab'],
        'react/jsx-indent-props': [2, 'tab'],
        'react/jsx-curly-spacing': ['warn', {
            'when': 'always',
            'children': true
        }],
        'react/jsx-fragments': ['warn','element'],
        'react/static-property-placement': [
            'error',
            'static public field'
        ],
        'react/state-in-constructor': ['error', 'never'],
        'react/prop-types': 'off',
        'react/sort-comp': 'off',
        'react/require-default-props': 'off',
        'react/jsx-boolean-value': ['error', 'always'],
        'react/jsx-props-no-spreading': 'off',
        'react/prefer-stateless-function': 'off',
        'react/destructuring-assignment': 'off',
        'react/button-has-type': 'off',
        'react/jsx-filename-extension': [
            1,
            {
                'extensions': [
                    '.jsx',
                    '.tsx'
                ]
            }
        ],
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-use-before-define': [
            'error',
            {
                'functions': false,
                'classes': true,
                'variables': true
            }
        ],
        '@typescript-eslint/indent': [
            2,
            'tab',
            {
                'SwitchCase': 1,
                'ignoredNodes': [
                    'TSTypeParameterInstantiation'
                ]
            }
        ],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/array-type': [
            'warn',
            {
                'default': 'array-simple',
                'readonly': 'array-simple'
            }
        ],
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/member-delimiter-style': 'error',
        'import/no-unresolved': 'off',
        'import/no-commonjs': 'off',
        'import/extensions': 'off',
        'import/no-useless-path-segments': ['error', {
            'noUselessIndex': true
        }],
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        '@typescript-eslint/restrict-template-expressions': 'off'
    },
}
