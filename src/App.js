import "./App.css";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main";
import WatchPage from "./components/WatchPage";
import SearchPage from "./components/SearchPage";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Main />,
        },
        {
          path: "watch",
          element: <WatchPage />,
        },
        {
          path: "search",
          element: <SearchPage />,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
