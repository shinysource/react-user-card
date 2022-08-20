import axios from "axios";

import { User } from "../types";

const getUser = () => {
  const response = axios.get("https://jsonplaceholder.typicode.com/users");
  return response;
};

const getAvatar = (user_name: string) => {
  const response = axios.get(
    "https://avatars.dicebear.com/v2/avataaars/{{" +
      user_name +
      "}}.svg?options[mood][]=happy"
  );
  return response;
};

export { getUser, getAvatar };
