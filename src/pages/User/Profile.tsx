import React, { useContext } from "react";
import { RouteProps } from "react-router";
import { AuthContext } from "../../contexts/Auth";

const Profile = (props: RouteProps) => {
  const authContext = useContext(AuthContext);
  return (
    <div>
      This is the profile page
      <button onClick={authContext.logout}>Logout</button>
    </div>
  );
};

export default Profile;
