import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "ab4309cb9emsh4b365af08ee72fbp1fbff1jsnc0067c6b86a3",
    },
  });

  return data;
};
