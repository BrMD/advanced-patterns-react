import React from "react";

export const createContext = <T extends {}>() => {
  const Context = React.createContext<T | undefined>(undefined);
  const useContext = () => {
    const colorContext = React.useContext(Context);
    if (colorContext === undefined) throw new Error("a value must be provided");
    return colorContext;
  };
  return [useContext, Context.Provider] as const;
};
