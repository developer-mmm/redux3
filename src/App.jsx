// react router dom
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

// pages
import { Home, Login, Register } from "./pages";

// layouts
import MainLayout from "./layouts/MainLayout";

// actions
import { action as LoginAction } from "./pages/Login";
import { action as RegisterAction } from "./pages/Register";
import { ProtectedRoutes } from "./components";

//redux
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { isAuthChange, login } from "./app/userSlice";

//firebase
import { auth } from "./firebase/firebiseConfig";
import { onAuthStateChanged } from "firebase/auth";


function App() {
  const { user, isAuthReady } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
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
      element: user ? <Navigate to="/" /> : <Login />,
      action: LoginAction,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
      action: RegisterAction,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(login(user))
      dispatch(isAuthChange())

    })
  }, [])

  return <>{ isAuthReady && <RouterProvider router={routes} />}</>; 
}

export default App;
