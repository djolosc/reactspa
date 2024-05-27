import axios from "axios";
import { Item } from "../types";

export const getItems = async ({ pageParam }: { pageParam: number }) => {
  const res = await axios.get<Array<Item>>(
    `https://jsonplaceholder.typicode.com/albums/1/photos?_page=${pageParam}&_limit=10`
  );
  return res.data;
};
