import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: [
      'Source Sans Pro:400',
      'Indie Flower',
      'Gloria Hallelujah',
      'Kalam',
      'sans-serif',
    ],
  },
})

const theme = {
  colors: {
    devLogo: '#FC6264',
    mainBackground: '#FFF',
    crimson: '#A51C30',
  },
  fonts: {
    primary: {
      family: 'Gloria Hallelujah, sans-serif',
      weight: 700,
    },
  },
}

export default theme
