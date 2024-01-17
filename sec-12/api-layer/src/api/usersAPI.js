import api from "./api";

const URLS = { fetchUserUrl: "users" };

export const fetchUser = () => {
  return api.get(URLS.fetchUserUrl, {
    baseURL: "https://jsonplaceholder.typicode.com/",
  });
};
