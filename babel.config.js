module.exports = api => {
    api.cache.using(() => process.env.NODE_ENV)

    const presets = [
        '@babel/preset-react',
		'@babel/preset-typescript'
    ]

    return {
        presets
    }
}
