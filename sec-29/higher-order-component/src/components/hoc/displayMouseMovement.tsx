import React, { MouseEventHandler } from "react";

export type DisplayMouseMoveProps = {
  x: number;
  y: number;
  onMouseMove: MouseEventHandler;
};

const DisplayMouseMovement = ({ x, y, onMouseMove }: DisplayMouseMoveProps) => {
  return (
    <div className="relative-container" onMouseMove={onMouseMove}>
      <section className="absolute-section">
        <p className="paragraph">
          <span className="bold-span">X</span>: {x}
        </p>
        <p className="paragraph">
          <span className="bold-span">Y</span>: {y}
        </p>
      </section>
    </div>
  );
};

export default DisplayMouseMovement;
