export type Item = {
  albumId: string;
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type CustomItem = {
  albumId: string;
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
  isFavorite: boolean;
};

export type FetchedData = {
  pageParams: Array<number>;
  pages: Array<Item>;
};

export const ROUTES = {
  DASHBOARD: "/",
  LIST_OF_ELEMENTS: "/list",
};
