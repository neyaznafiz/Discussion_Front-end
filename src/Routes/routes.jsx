import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Culture from "../Pages/Culture";
import Sports from "../Pages/Sports";
import Politics from "../Pages/Politics";
import Memes from "../Pages/Memes";
import Boxed from "../Pages/Boxed";
import Reviews from "../Pages/Reviews";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/culture",
        element: <Culture />,
      },
      {
        path: "/politics",
        element: <Politics />,
      },
      {
        path: "/memes",
        element: <Memes />,
      },
      {
        path: "/sports",
        element: <Sports />,
      },
      {
        path: "/boxed",
        element: <Boxed />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
    ],
  },
]);

export default routes;
