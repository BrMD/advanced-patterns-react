import { forwardRef, useImperativeHandle } from "react";
import { useRef, useState } from "react";

const CustomInput = (props, ref) => {
  const [value, setValue] = useState("");
  const inputRef = useRef();

  useImperativeHandle(
    ref,
    () => {
      return { value };
    },
    [value]
  );
  return (
    <>
      <input
        {...props}
        ref={inputRef}
        className="text-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

export const Input = forwardRef(CustomInput);
