import { useValueContext } from "../components/cart-context";

const Display = () => {
  const {
    state: { count },
  } = useValueContext();
  return <span className="span">{count}</span>;
};

export default Display;
