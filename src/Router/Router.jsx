import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import App from "../Pages/Dashboard/app/App";
import Dashboard from "../Pages/Dashboard/dashboard/Dashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
    },
    {
        path: "/",
        element: <Dashboard></Dashboard>,
        children: [
            { path: "app", element: <App /> },
            { path: "e-commerce", element: <App /> },
            { path: "analytics", element: <App /> },
            { path: "banking", element: <App /> },
            { path: "booking", element: <App /> },
            { path: "file", element: <App /> },
            { path: "user", element: <App /> },
            { path: "product", element: <App /> },
            { path: "order", element: <App /> },
            { path: "invoice", element: <App /> },
            { path: "blog", element: <App /> },
            { path: "job", element: <App /> },
            { path: "tour", element: <App /> },
            { path: "file-manager", element: <App /> },
            { path: "mail", element: <App /> },
            { path: "chat", element: <App /> },
            { path: "calendar", element: <App /> },
        ]
    }
]);