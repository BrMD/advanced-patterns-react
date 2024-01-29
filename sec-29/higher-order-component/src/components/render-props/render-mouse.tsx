import React, { MouseEventHandler, useState } from "react";

type RenderMousePosition = {
  children: (props: { x: number; y: number }) => React.ReactNode;
};

export const RenderMousePosition = ({ children }: RenderMousePosition) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const updatePosition: MouseEventHandler = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };
  return (
    <div className="relative-container" onMouseMove={updatePosition}>
      {children({ x: position.x, y: position.y })}
    </div>
  );
};
