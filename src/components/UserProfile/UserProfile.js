import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

const UserProfile = ({ token }) => {
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    if (token) {
      const decodedToken = jwt_decode(token);

      const name = decodedToken.sub;
      const role = decodedToken.roles;

      setUserName(name);
      setUserRole(role);
    }
  }, [token]);

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {userName}</p>
      <p>Role: {userRole}</p>
    </div>
  );
};

export default UserProfile;