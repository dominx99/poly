module.exports = {
  theme: {
    extend: {},
    gradients: theme => ({
      'purple-blue': [theme('colors.purple.900'), theme('colors.blue.800')]
    })
  },
  variants: {
    gradients: ['responsive', 'hover']
  },
  plugins: [
    require('./plugins/gradients')
  ]
}
