import React from "react";
import { createRoot } from "react-dom/client";
import { Test } from "./index";

const Demo = () => (
  <div>
    <h1>Demo of React Package Creator</h1>

    <Test />

    <h2>Further info</h2>

    <p>
      <a href="https://github.com/didikmulyadi/react-package-creator">Github</a>
    </p>
  </div>
);

const container = document.getElementById("root");
if (container) {
  new EventSource("/esbuild").addEventListener("change", () =>
    location.reload()
  );
  const root = createRoot(container);
  root.render(<Demo />);
}
