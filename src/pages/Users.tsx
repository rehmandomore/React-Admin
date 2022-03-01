import React from "react";
import UsersAside from "../components/Users/UsersAside";
import UsersTable from "../components/Users/UsersTable";

const Users = () => {
  return (
    <div className="p-5 flex gap-5">
      <UsersTable />
      <UsersAside />
    </div>
  );
};

export default Users;
