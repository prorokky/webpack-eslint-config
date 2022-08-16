declare module '*.less' {
	const resource: {[key: string]: string}
	export = resource
}

declare module '*.svg' {
	import React = require('react');

	export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>

	const url: string
	// eslint-disable-next-line import/no-default-export
	export default url
}
