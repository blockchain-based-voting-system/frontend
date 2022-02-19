import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "../../axios";

type User = {
  id: number;
  name: string;
  citizenshipNumber: string;
  email: string;
};

const Users = () => {
  const navigate = useNavigate();

  const [users, setUser] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get("/users/all")
      .then((res) => setUser(res.data.users))
      .catch((error) => console.log({ error }));
  }, []);

  if (users.length === 0) return <div></div>;

  return (
    <div className="users-wrapper">
      {users.map((user, index) => (
        <div
          key={index}
          onClick={() => navigate(`/verify/${user.name}/${user.id}`)}
          className="user-wrapper"
        >
          {user.name}
        </div>
      ))}
    </div>
  );
};

export default Users;
