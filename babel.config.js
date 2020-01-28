module.exports = api => {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            src: './src',
            test: './tests',
            underscore: 'lodash',
          },
        },
      ],
    ],
  };
};
