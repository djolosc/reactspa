import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppProvider } from "./provider";
import { DashboardScreen, ErrorScreen, ListOfElementsScreen } from "./screens";
import "./App.scss";
import { ROUTES } from "./types";

const queryClient = new QueryClient();

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: ROUTES.DASHBOARD,
      element: <DashboardScreen />,
      errorElement: <ErrorScreen />,
    },
    {
      path: ROUTES.LIST_OF_ELEMENTS,
      element: <ListOfElementsScreen />,
    },
  ]);

  return <RouterProvider router={router} />;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <AppRouter />
      </AppProvider>
    </QueryClientProvider>
  );
};

export default App;
