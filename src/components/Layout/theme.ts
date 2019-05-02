import { DefaultTheme } from 'styled-components';

const lightTheme: DefaultTheme = {
  body: {
    backgroundColor: 'white',
    color: 'rgba(0, 0, 0, 0.8)',
  },
  color: {
    link: {
      normal: '#a353c4',
      hover: '#bf61e6',
    },
    separator: '#e6e7e8',
    text: {
      subdued: '#a7a9ab',
    },
  },
  cv: {
    main: {
      backgroundColor: 'white',
    },
  },
  header: {
    backgroundColor: 'white',
    boxShadowColor: 'rgba(0, 0, 0, 0.2)',
    logoFill: '#404041',
    logoFill2: '#fff',
    logoHoverFill: '#a353c4',
    logoHoverFill2: '#e0b9f1',
  },
  media: {
    expandedNav: 'min-width: 60em',
  },
  nav: {
    color: '#404041',
  },
  noise: {
    backgroundColor: '#eee',
  },
  rainbowHeaders: [
    { from: '#fbb450', to: '#f89406' }, // 1 yellow
    { from: '#74c474', to: '#46a546' }, // 2 green
    { from: '#d9698c', to: '#c3325f' }, // 3 magenta
    { from: '#30c0fb', to: '#049cdb' }, // 4 blue
    { from: '#a178cd', to: '#7a43b6' }, // 5 purple
  ],
  socialMediaIcons: {
    backgroundColor: '#d1d2d4',
    color: 'white',
    hoverBackgroundColor: '#d1d2d5',
  },
};

const darkTheme: DefaultTheme = {
  ...lightTheme,
  body: {
    backgroundColor: '#222',
    color: 'rgba(255, 255, 255, 0.5)',
  },
  color: {
    ...lightTheme.color,
    separator: '#444',
  },
  cv: {
    main: {
      backgroundColor: '#222',
    },
  },
  header: {
    ...lightTheme.header,
    backgroundColor: '#333',
    boxShadowColor: 'rgba(0, 0, 0, 0.8)',
    logoFill: '#999',
    logoFill2: '#222',
  },
  nav: {
    color: '#999',
  },
  noise: {
    backgroundColor: '#333',
  },
  socialMediaIcons: {
    backgroundColor: '#333',
    color: '#999',
    hoverBackgroundColor: '#3c3c3c',
  },
};

export { darkTheme, lightTheme };
