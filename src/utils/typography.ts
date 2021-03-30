import Typography from 'typography';
import wordpress2015Theme from 'typography-theme-wordpress-2015';

export const typography = new Typography({
  ...wordpress2015Theme,
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  overrideThemeStyles: ({ rhythm }) => ({
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

export const getGoogleFontLink = (typography: Typography) => {
  let fontsStr = '';

  if (typography.options.googleFonts) {
    const fonts = typography.options.googleFonts.map((font) => {
      let str = '';
      str += font.name.split(' ').join('+');
      str += ':';
      str += font.styles.join(',');

      return str;
    });

    fontsStr = fonts.join('|');

    if (fontsStr) {
      return fontsStr;
    }
  }
  return null;
};
