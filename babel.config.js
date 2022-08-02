module.exports = api => {
    api.cache.using(() => process.env.NODE_ENV)

    const presets = [
		'@babel/preset-env',
        '@babel/preset-react',
		'@babel/preset-typescript'
    ]

	const plugins = [
		'@babel/plugin-proposal-optional-chaining'
	].filter(Boolean)

    return {
        presets,
		plugins,
    }
}
