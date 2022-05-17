module.exports = {
  purge: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
  ],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
