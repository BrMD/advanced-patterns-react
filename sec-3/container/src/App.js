import { CurrentUserLoader } from "./components/current-user-loader";
import { DataSourceWithRender } from "./components/data-source-with-render";
import { ResourceLoader } from "./components/resource-loader";
import { UserLoader } from "./components/user-loader";
import { DataSource } from "./components/data-source";
import { BookInfo } from "./components/book-info";
import { UserInfo } from "./components/user-info";
import axios from "axios";

const getDataFromServer = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

const getDataFromLocalStorage = (key) => () => {
  return localStorage.getItem(key);
};

const Message = ({ msg }) => <h1>{msg}</h1>;

function App() {
  return (
    <>
      <DataSourceWithRender
        getData={async () => getDataFromServer("/users/3")}
        render={(resource) => <UserInfo user={resource} />}
      />
      <DataSource
        getData={() => getDataFromLocalStorage("test")}
        resourceName={"msg"}
      >
        <Message />
      </DataSource>
    </>
  );
}

export default App;
