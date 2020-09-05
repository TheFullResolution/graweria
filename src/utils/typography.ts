import Typography from 'typography'
import stAnnesTheme from 'typography-theme-st-annes'

const typography = new Typography({
  ...stAnnesTheme,
  baseFontSize: '16px',
  baseLineHeight: 1.5,
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
