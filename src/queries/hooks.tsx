import { useInfiniteQuery } from "@tanstack/react-query";
import { getItems } from "./queries";

export const useGetItems = () => {
  return useInfiniteQuery({
    queryKey: ["items"],
    queryFn: getItems,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage.length ? allPages.length + 1 : undefined;
      return nextPage;
    },
  });
};
