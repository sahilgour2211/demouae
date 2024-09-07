import ContactUs from "../NewComponents/ContactUs";
import Home from "../pages/Home";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "contact",
    element: <ContactUs />,
  },
];
