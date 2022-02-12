import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { AuthContext } from "../contexts/Auth";
import UserPage from "../pages/User/User";
import CreatePage from "../pages/Admin/Create";
import ProfilePage from "../pages/User/Profile";
import Default from "../layouts/Default";
import AdminPollsPage from "../pages/Admin/Polls";

export default () => {
  const authContext = useContext(AuthContext);

  const getRoutes = (): JSX.Element => {
    if (authContext.loading) return <div>loading...</div>;

    if (authContext.authenticated) {
      // if the user is authenticated then

      const adminMenu = [
        { name: "Create", link: "/" },
        { name: "Polls", link: "/polls" },
        { name: "Profile", link: "/profile" },
      ];

      const userMenu = [
        { name: "Polls", link: "/" },
        { name: "Profile", link: "/profile" },
      ];

      if (authContext.isAdmin) {
        // if the user is admin
        return (
          <Default menu={adminMenu}>
            <Routes>
              <Route path="/" element={<CreatePage />} />
              <Route path="/polls" element={<AdminPollsPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </Default>
        );
      } else {
        //  if the user in not admin
        return (
          <Default menu={userMenu}>
            <Routes>
              <Route path="/" element={<UserPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </Default>
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
