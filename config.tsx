import axios from "axios";

export const fetcher = (url: string) =>
  axios.get(url).then((response: { data: any }) => response.data);
