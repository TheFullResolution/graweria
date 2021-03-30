import Typography from 'typography';
import wordpress2015Theme from 'typography-theme-wordpress-2015'

export const typography = new Typography({
  ...wordpress2015Theme,
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  overrideThemeStyles: () => ({
    'h1,h2,h3': {
      marginTop: rhythm(1),
    },
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
});

export const { scale, rhythm, options } = typography;
export default typography;
