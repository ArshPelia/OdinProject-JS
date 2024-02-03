// Router.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Cart from "./Cart";
import Home from "./Home";
import Nav from "./Nav"; // Import Nav component

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Nav /> {/* Render Nav for all routes */}
          <Home />
        </>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/cart",
      element: (
        <>
          <Nav /> {/* Render Nav for all routes */}
          <Cart />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
