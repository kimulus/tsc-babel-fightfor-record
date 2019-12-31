module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript',
  ],
  plugins: [
    ["@babel/proposal-class-properties", {loose: false}],
    "@babel/proposal-object-rest-spread"
  ]
}