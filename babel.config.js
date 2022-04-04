module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src/'],
        alias: {
          '@app': './src',
          '@core': './src/core',
          '@news': './src/modules/news',
          '@settings': './src/modules/settings',
        },
      },
    ],
  ],

};

