import Typography from 'typography'
import oceanBeachTheme from 'typography-theme-ocean-beach'

const typography = new Typography({
  ...oceanBeachTheme,
  overrideThemeStyles: () => ({
    a: {
      color: 'inherit',
      textDecoration: 'none',
      background: 'none',
      textShadow: 'none',
    },
    'a:hover,a:active': {
      boxShadow: 'none',
      background: 'none',
      textShadow: 'none',
      textDecoration: 'none',
    },
  }),
})

export const { scale, rhythm, options } = typography
export default typography
