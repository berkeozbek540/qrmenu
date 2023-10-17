import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./components/Root";
import Categories from "./components/Categories";
import Hot from "./components/Hot";
import Iced from "./components/Iced";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Categories /> },
      { path: "hot", element: <Hot /> },
      { path: "iced", element: <Iced /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
