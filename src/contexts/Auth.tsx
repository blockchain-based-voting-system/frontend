import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "../axios";

type ContextProps = {
  children: JSX.Element;
};

type User = {
  id: number;
  name: string;
  admin: boolean;
};

export const AuthContext = createContext({
  id: 0,
  name: "",
  isAdmin: false,
  authenticated: false,
  accessToken: "",
  loading: true,
  authenticate: (user: User, token: string, refreshToken: string) => {},
  logout: () => {},
});

export default (props: ContextProps): JSX.Element => {
  const navigate = useNavigate();

  const [authentication, setAuthentication] = useState({
    id: 0,
    name: "",
    isAdmin: false,
    authenticated: false,
    accessToken: "",
    loading: true,
  });

  const checkAuthentication = () => {
    const refreshToken = localStorage.getItem("rf");

    axios
      .post(
        "/auth/check",
        {},
        {
          headers: {
            refreshToken: refreshToken ? refreshToken : false,
          },
        }
      )
      .then((res) =>
        authenticate(
          res.data.user,
          res.data.accessToken,
          res.data.newRefreshToken,
          false
        )
      )
      .catch((error) => {
        console.log(error);
        setAuthentication({ ...authentication, loading: false });
      });
  };

  useEffect(() => {
    checkAuthentication();

    const interval = setInterval(checkAuthentication, 5 * 1000);

    return () => clearInterval(interval);
  }, []);

  const authenticate = (
    user: User,
    token: string,
    refreshToken: string,
    redirect: boolean = true
  ) => {
    localStorage.setItem("rf", refreshToken);

    setAuthentication({
      id: user.id,
      name: user.name,
      isAdmin: user.admin,
      authenticated: true,
      accessToken: token,
      loading: false,
    });

    if (redirect) navigate("/");
  };

  const logout = async () => {
    // await axios.post("/auth/logout");
    localStorage.removeItem("rf");

    setAuthentication({
      id: 0,
      name: "",
      isAdmin: false,
      authenticated: false,
      accessToken: "",
      loading: false,
    });

    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        id: authentication.id,
        name: authentication.name,
        isAdmin: authentication.isAdmin,
        authenticated: authentication.authenticated,
        accessToken: authentication.accessToken,
        loading: authentication.loading,
        authenticate,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
