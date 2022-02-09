import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { AuthContext } from "../contexts/Auth";
import UserPage from "../pages/User/User";
import AdminPage from "../pages/Admin/Admin";
import ProfilePage from "../pages/User/Profile";

export default () => {
  const authContext = useContext(AuthContext);

  const getRoutes = (): JSX.Element => {
    if (authContext.loading) return <div>loading...</div>;

    if (authContext.authenticated) {
      // if the user is authenticated then

      if (authContext.isAdmin) {
        // if the user is admin
        return (
          <Routes>
            <Route path="/" element={<AdminPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        );
      } else {
        //  if the user in not admin
        return (
          <Routes>
            <Route path="/" element={<UserPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        );
      }
    } else {
      // if the user is not authenticated
      return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      );
    }
  };

  return getRoutes();
};
