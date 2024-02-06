import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/common/Layout";
import Homepages from "./components/home/Homepages";
import SinglePage from "./components/singlePage/SinglePage";
import About from "./components/about/About";
import Popular from "./components/popular/Popular";
import Program from "./components/program/Program";
import Organization from "./components/organization/Organization";
import Asrama from "./components/asrama/Asrama";
import Review from "./components/review/Review";
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepages />,
      },
      {
        path: "/news/:id",
        element: <SinglePage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/popular",
        element: <Popular />,
      },
      {
        path: "/program",
        element: <Program />,
      },
      {
        path: "/organization",
        element: <Organization />,
      },
      {
        path: "/asrama",
        element: <Asrama />,
      },
      {
        path: "/shop",
        element: <Review />,
      },
    ],
  },
]);

export default router;
