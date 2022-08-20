import axios from "axios";

const getUser = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getAvatar = async (user_name: string) => {
  try {
    const response = await axios.get(
      "https://avatars.dicebear.com/v2/avataaars/{{" +
        user_name +
        "}}.svg?options[mood][]=happy"
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export { getUser, getAvatar };
