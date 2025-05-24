import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HomePg from "../pages/HomePg";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import AboutPg from "../pages/AboutPg";
import SJPage from "../pages/SJPage";
import SupportPg from "../pages/SupportPg";



function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePg /> },
      { path: "/aboutus", element: <AboutPg /> },
      { path: "/searshjob", element: <SJPage /> },
      { path: "/support", element: <SupportPg /> },
    ],
  },
]);

function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Router;
