import { defer } from "react-router";
import delay from "../util/delay";

function loader() {
  return defer({ promise: delay("Fetched Data...", 1000) });
}
export default loader;
