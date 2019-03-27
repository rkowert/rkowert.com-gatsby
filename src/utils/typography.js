import Typography from 'typography';
import theme from 'typography-theme-us-web-design-standards';

// import { OptionsType } from 'typography/src/Types';
// import gray from 'gray-percentage';

// const theme /*: OptionsType*/ = {
//   title: 'US Web Design Standards',
//   baseFontSize: '16px',
//   baseLineHeight: 1.53,
//   scale: 2.35,
//   googleFonts: [
//     {
//       name: 'Muli',
//       styles: ['700'],
//     },
//     {
//       name: 'Montserrat',
//       styles: ['400', '400i', '700'],
//     },
//   ],
//   headerFontFamily: ['Muli', 'sans-serif'],
//   bodyFontFamily: ['Montserrat', 'sans-serif'],
//   bodyColor: 'hsla(0,0%,0%,0.8)',
//   headerWeight: 700,
//   bodyWeight: 400,
//   boldWeight: 700,
//   overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
//     h1: scale(5 / 5),
//     h2: scale(3 / 5),
//     h3: scale(1 / 5),
//     h4: scale(0 / 5),
//     h5: scale(-1 / 8),
//     h6: {
//       ...scale(-2 / 8),
//       fontFamily: options.bodyFontFamily.join(','),
//       fontWeight: options.bodyWeight,
//       textTransform: 'uppercase',
//     },
//     blockquote: {
//       ...scale(1 / 4),
//       borderLeft: `${rhythm(1 / 6)} solid`,
//       borderColor: gray(93),
//       paddingTop: rhythm(1 / 3),
//       paddingBottom: rhythm(1 / 3),
//       paddingLeft: rhythm(2 / 3),
//       paddingRight: rhythm(2 / 3),
//     },
//     'blockquote > :last-child': {
//       marginBottom: 0,
//     },
//     'blockquote cite': {
//       ...adjustFontSizeTo(options.baseFontSize),
//       color: gray(54, 204),
//       fontWeight: options.bodyWeight,
//       fontStyle: 'normal',
//     },
//   }),
// };

theme.baseFontSize = '16px';
theme.bodyWeight = 300;
theme.googleFonts = [
  {
    name: 'Muli',
    styles: ['300', '300i', '700', '800'],
  },
  {
    name: 'Montserrat',
    styles: ['400', '400i', '700', '800'],
  },
];
theme.headerFontFamily = ['Muli', 'sans-serif'];
theme.bodyFontFamily = ['Muli', 'sans-serif'];
// theme.includeNormalize = false;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
theme.overrideThemeStyles = ({ rhythm }, options, styles) => ({
  h2: {
    borderBottom: '2px solid #e6e7e8',
    fontFamily: 'Montserrat',
  },
});

const typography = new Typography(theme);

export default typography;
