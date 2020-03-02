module.exports = api => {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
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
