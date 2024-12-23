import { Navigate, createBrowserRouter } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import Catalog from "../../features/catalog/Catalog";
import AboutPage from "../../features/about/AboutPage";
import ContactPage from "../../features/contact/ContactPage";
import ProductDetails from "../../features/catalog/ProductDetails";
import App from "../layout/App";
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";
import BasketPage from "../../features/basket/BasketPage";
import CheckoutPage from "../../features/Checkout/CheckoutPage";

export const router = createBrowserRouter([{
    path: "/",
    element: <App />,
    children: [
        {path: "", element: <HomePage />},
        {path: "catalog", element: <Catalog />},
        {path: "catalog/:id", element: <ProductDetails />},
        {path: "about", element: <AboutPage />},
        {path: "contact", element: <ContactPage />},
        {path: "server-error", element: <ServerError />},
        {path: "not-found", element: <NotFound />},
        {path: "basket", element: <BasketPage />},
        {path: "checkout", element: <CheckoutPage />},
        {path: "*", element: <Navigate replace to="/not-found" />},

    ]
}])