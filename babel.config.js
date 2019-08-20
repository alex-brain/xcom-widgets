module.exports = api => {
  const presets = [
    [
      '@babel/preset-env',
      {
        modules: false,
        exclude: ['transform-typeof-symbol'],
        targets: api.env() === 'development' ? ['last 5 Chrome versions'] : ['last 5 versions', 'IE 11'],
      },
    ],
    ['@babel/preset-react'],
    ['@babel/preset-typescript'],
  ];
  const plugins = [
    ['babel-plugin-transform-typescript-metadata'],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-object-rest-spread'],
    ['@babel/plugin-transform-runtime'],
  ];

  if (api.env() === 'test') {
    plugins.push(['@babel/plugin-transform-modules-commonjs']);
  }

  return { presets, plugins };
};
