import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { AuthContext } from "../contexts/Auth";
import UserPollsPage from "../pages/User/Polls";
import UserPollPage from "../pages/User/Poll";
import CreatePage from "../pages/Admin/Create";
import ProfilePage from "../pages/User/Profile";
import Default from "../layouts/Default";
import AdminPollsPage from "../pages/Admin/Polls";
import AdminPollPage from "../pages/Admin/Poll";
import AdminUsersPage from "../pages/Admin/Users";
import AdminVerifyPage from "../pages/Admin/Verify";

export default () => {
  const authContext = useContext(AuthContext);

  const getRoutes = (): JSX.Element => {
    if (authContext.loading) return <div>loading...</div>;

    if (authContext.authenticated) {
      // if the user is authenticated then

      const adminMenu = [
        { name: "Create", link: "/" },
        { name: "Polls", link: "/polls" },
        { name: "Verify Users", link: "/users" },
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
              <Route path="/poll/:id" element={<AdminPollPage />} />
              <Route path="/users" element={<AdminUsersPage />} />
              <Route path="/verify/:name/:id" element={<AdminVerifyPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </Default>
        );
      } else {
        //  if the user in not admin
        return (
          <Default menu={userMenu}>
            <Routes>
              <Route path="/" element={<UserPollsPage />} />
              <Route path="/poll/:id" element={<UserPollPage />} />
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
