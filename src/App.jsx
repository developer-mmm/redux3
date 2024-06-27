// react router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import { Home, Login, Register } from "./pages";

// layouts
import MainLayout from "./layouts/MainLayout";

// actions
import { action as LoginAction } from "./pages/Login";
import { action as RegisterAction } from "./pages/Register";
import { ProtectedRoutes } from "./components";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
      action: LoginAction,
    },
    {
      path: "/register",
      element: <Register />,
      action: RegisterAction,
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
