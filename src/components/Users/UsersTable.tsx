import React, { useState } from "react";
import { GoSearch } from "react-icons/go";

const usersData = [
  {
    id: 1,
    name: "Annamarie Mayer",
    role: "user",
  },
  {
    id: 2,
    name: "Breanna Gibson",
    role: "user",
  },
  {
    id: 3,
    name: "Logan Schowalter",
    role: "admin",
  },
];

const UsersTable = () => {
  const [name, setName] = useState("");

  const [foundUsers, setFoundUsers] = useState(usersData);

  const filter = (e: any) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = usersData.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(usersData);
    }
    setName(keyword);
  };
  return (
    <div className="w-full">
      <div className="bg-gray-200 w-56 flex items-center rounded-lg text-primary mb-5">
        <input
          type="search"
          value={name}
          onChange={filter}
          className="border-0 bg-gray-200 p-3 rounded-lg focus:placeholder:text-primary"
          placeholder="Search..."
        />
        <GoSearch />
      </div>
      <table className="bg-white rounded-md shadow-sm w-full">
        <thead>
          <tr className="h-12">
            <td className="w-[20%] px-5">id</td>
            <td className="w-[40%]">Name</td>
            <td className="w-[40%]">Role</td>
          </tr>
        </thead>
        <tbody>
          {foundUsers && foundUsers.length > 0
            ? foundUsers.map((user) => (
                <tr key={user.id} className="divide-y-2 h-12">
                  <td className="w-[20%] px-5 border-t-2">{user.id}</td>
                  <td className="w-[40%]">{user.name}</td>
                  <td className="w-[40%]">{user.role}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
