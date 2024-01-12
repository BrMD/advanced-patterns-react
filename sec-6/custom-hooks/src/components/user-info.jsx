import { useUser } from "./user.hook";
import { useResource } from "./resource.hook";
import { useDataSource } from "./data-source-hook";
import axios from "axios";

const fetchFromServer = (resourceUrl) => async () => {
  const response = await axios.get(resourceUrl);
  return response.data;
};
const getFromLocalStorage = (key) => () => {
  return localStorage.getItem(key);
};

export const UserInfo = ({ userId }) => {
  // const user = useResource("/users/1");
  const user = useDataSource(fetchFromServer(`/users/${userId}`));
  const message = useDataSource(getFromLocalStorage("msg"));
  const { name, age, country, books } = user || {};
  return user ? (
    <>
      <h2>{name}</h2>
      <p>Age: {age} years</p>
      <p>Country: {country}</p>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book}> {book} </li>
        ))}
      </ul>
      <p>{message}</p>
    </>
  ) : (
    <h1>Loading...</h1>
  );
};
