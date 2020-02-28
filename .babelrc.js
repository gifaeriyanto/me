module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'emotion',
      {
        autoLabel: process.env.NODE_ENV !== 'production',
        labelFormat: '[local]',
        cssPropOptimization: true,
      },
    ],
  ],
};
