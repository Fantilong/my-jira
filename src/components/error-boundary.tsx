import React from "react";

type FallbackRender = (props: { error: Error | null }) => React.ReactElement;

// React.Component
// 第一个参数，在该组件中 想要的属性类型
// 第二个参数，在该组件中 state 想要的类型
export class ErrorBoundary extends React.Component<
  React.PropsWithChildren<{ fallbackRender: FallbackRender }>,
  { error: Error | null }
> {
  state = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    const { fallbackRender, children } = this.props;

    if (error) return fallbackRender({ error });
    return children;
  }
}

// const Test = () => {
//     return <ErrorBoundary fallbackRender={() => <Person />} ></ErrorBoundary>
// }

// const Person = () => (
//     <div>
//         <p>123</p>
//     </div>
// )
