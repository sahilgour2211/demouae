import ContactUS from "../pages/ContactUS";
import Home from "../pages/Home";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "contact-us",
    element: <ContactUS />,
  },
];
