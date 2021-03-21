declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
