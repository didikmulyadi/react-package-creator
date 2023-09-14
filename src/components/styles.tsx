import { Component } from "react";

function appendStyle(id: string, css: string) {
  if (!document.head.querySelector("#" + id)) {
    const node = document.createElement("style");
    node.textContent = css;
    node.type = "text/css";
    node.id = id;

    document.head.appendChild(node);
  }
}

interface IStyleInjectorProps {
  name: string;
  css: string;
}

export default class StyleInjector extends Component<IStyleInjectorProps> {
  componentDidMount() {
    appendStyle(this.props.name, this.props.css);
  }

  componentWillUnmount() {
    const node = document.getElementById(this.props.name);
    node?.parentNode?.removeChild(node);
  }

  render() {
    return null;
  }
}

export const lightboxStyles = () => `
  body {
    overflow: hidden;
  }
`;
