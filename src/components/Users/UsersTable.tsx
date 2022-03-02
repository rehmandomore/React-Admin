import React, { useState } from "react";
import { GoSearch } from "react-icons/go";

const usersData = [
  {
    input: <input type="checkbox" className="rounded-sm" />,
    id: 1,
    name: "Annamarie Mayer",
    role: "user",
  },
  {
    input: <input type="checkbox" className="rounded-sm" />,
    id: 2,
    name: "Breanna Gibson",
    role: "user",
  },
  {
    input: <input type="checkbox" className="rounded-sm" />,
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
      <table className="bg-white rounded-md shadow-sm w-full h-48">
        <thead>
          <tr>
            <td className="w-[10%]"></td>
            <td className="w-[25%] py-2">id</td>
            <td className="w-[30%]">Name</td>
            <td className="w-[30%]">Role</td>
          </tr>
        </thead>
        <tbody>
          {foundUsers && foundUsers.length > 0
            ? foundUsers.map((user) => (
                <tr key={user.id} className="divide-y-2">
                  <td className="w-[10%] px-5 border-t-2 border-b-2">
                    {user.input}
                  </td>
                  <td className="w-[10%]">{user.id}</td>
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
