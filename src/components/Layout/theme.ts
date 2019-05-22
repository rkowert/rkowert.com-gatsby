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
    separator: '#ccc',
    text: {
      subdued: '#727779',
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
  stripedSections: {
    backgroundColor: '#ddd',
  },
  tagList: {
    tag: {
      backgroundColor: '#a353c4',
      color: 'white',
      hoverBackgroundColor: '#bf61e6',
    },
  },
};

const darkTheme: DefaultTheme = {
  ...lightTheme,
  body: {
    backgroundColor: '#111',
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
  rainbowHeaders: [
    { color: 'rgb(158, 93, 0)', from: '#fbb450', to: '#f89406' }, // 1 yellow
    { color: 'rgb(30, 103, 30)', from: '#74c474', to: '#46a546' }, // 2 green
    { color: 'rgb(115, 29, 56)', from: '#d9698c', to: '#c3325f' }, // 3 magenta
    { color: 'rgb(0, 102, 144)', from: '#30c0fb', to: '#049cdb' }, // 4 blue
    { color: 'rgb(77, 42, 115)', from: '#a178cd', to: '#7a43b6' }, // 5 purple
  ],
  socialMediaIcons: {
    backgroundColor: '#333',
    color: '#999',
    hoverBackgroundColor: '#3c3c3c',
  },
  stripedSections: {
    backgroundColor: '#222',
  },
  tagList: {
    tag: {
      ...lightTheme.tagList.tag,
      // backgroundColor: '#333',
      // color: '#999',
      // hoverBackgroundColor: '#555',
    },
  },
};

export { darkTheme, lightTheme };
