import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import ErrorPage from "./ErrorPage";
import Cart from "./Cart";

const Router = () =>{
    const router = createBrowserRouter([
        {
          path: "/",
          element: <App />,
          errorElement: <ErrorPage />,
        },
        {
          path: "cart",
          element: <Cart />,

        },
      ]);
    
      return <RouterProvider router={router} />;
}

export default Router