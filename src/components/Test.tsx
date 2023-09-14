import React from "react";
import StyleInjector, { lightboxStyles } from "./styles";

export const Test = () => {
  return (
    <div>
      <StyleInjector name="__package-class-name__" css={lightboxStyles()} />
      Hello Test
    </div>
  );
};
