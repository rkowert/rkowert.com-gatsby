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
