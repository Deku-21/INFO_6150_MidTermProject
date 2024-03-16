import { useState } from "react";
import "./App.css";
import ProductList from "./features/product-list/components/ProductList";
import { Provider } from "react-redux";
import HomePage from "./complete-web-pages/HomePage";
import LogInPage from "./complete-web-pages/LogInPage";
import SignUpPage from "./complete-web-pages/SignUpPage";
import CartPage from "./complete-web-pages/CartPage";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import CheckoutPage from "./complete-web-pages/CheckoutPage";
import ProductDetailPage from "./complete-web-pages/ProductDetailPage";
import { store } from "./Store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
  {
    path: "/login",
    element: <LogInPage></LogInPage>,
  },
  {
    path: "/signup",
    element: <SignUpPage></SignUpPage>,
  },
  {
    path: "/cart",
    element: <CartPage></CartPage>,
  },
  {
    path: "/checkout",
    element: <CheckoutPage></CheckoutPage>,
  },
  {
    path: "/product-detail",
    element: <ProductDetailPage></ProductDetailPage>,
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <HomePage></HomePage> */}
      {/* <LogInPage></LogInPage> */}
      {/* <SignUpPage></SignUpPage>  */}
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
