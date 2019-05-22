import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    body: {
      backgroundColor: string;
      color: string;
    };
    color: {
      link: {
        normal: string;
        hover: string;
      };
      separator: string;
      text: {
        subdued: string;
      };
    };
    cv: {
      main: {
        backgroundColor: string;
      };
    };
    header: {
      backgroundColor: string;
      boxShadowColor: string;
      logoFill: string;
      logoFill2: string;
      logoHoverFill?: string;
      logoHoverFill2?: string;
    };
    media: {
      expandedNav: string;
    };
    nav: {
      color: string;
    };
    noise: {
      backgroundColor: string;
    };
    rainbowHeaders: {
      color?: string;
      from?: string;
      to?: string;
    }[];
    socialMediaIcons: {
      backgroundColor: string;
      color: string;
      hoverBackgroundColor: string;
    };
    stripedSections: {
      backgroundColor: string;
    };
    tagList: {
      tag: {
        backgroundColor: string;
        color: string;
        hoverBackgroundColor: string;
      };
    };
  }
}

declare module '*.png' {
  const content: string;
  export default content;
}

interface SvgrComponent
  extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

declare module '*.svg' {
  const value: SvgrComponent;
  export default value;
}

// declare module '*.svg' {
//   const content: any;
//   export default content;
// }
