import React from "react";

type Props = {
  name?: string;
};

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

const UsersTable = ({ name }: Props) => {
  return (
    <div className="w-full">
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
          {usersData.map(({ id, name, role, input }) => (
            <tr key={id} className="divide-y-2">
              <td className="w-[10%] px-5">{input}</td>
              <td className="w-[10%]">{id}</td>
              <td className="w-[40%]">{name}</td>
              <td className="w-[40%]">{role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
