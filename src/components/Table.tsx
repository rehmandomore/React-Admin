import React, { useState } from "react";
import { TiTickOutline } from "react-icons/ti";
import { HiPencil } from "react-icons/hi";
import { BiShowAlt } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";
import { GoSearch } from "react-icons/go";

const TiTick = () => (
  <div className="flex flex-col group cursor-pointer w-min">
    <TiTickOutline className="text-2xl text-primary" />
    <div className="tooltip">Yes</div>
  </div>
);
const Cancel = () => (
  <div className="flex flex-col group cursor-pointer w-min">
    <MdOutlineCancel className="text-2xl text-red-600" />
    <div className="tooltip">No</div>
  </div>
);

const EditButton = () => (
  <button className="flex items-center text-primary">
    <HiPencil className="text-2xl" />
    <p className="ml-2 font-semibold text-sm">EDIT</p>
  </button>
);

const ShowButton = () => (
  <button className="flex items-center text-primary">
    <BiShowAlt className="text-2xl" />
    <p className="ml-2 font-semibold text-sm">SHOW</p>
  </button>
);

const USERS = [
  {
    id: 1,
    Title: "Fusce massa lorem, pulvinar a posuere ut, accumsan ac nisi",
    Published_at: "01/12/2012",
    Com: <TiTick />,
    Views: 222,
    Editbutton: <EditButton />,
    Showbutton: <ShowButton />,
  },
  {
    id: 2,
    Title: "Qui tempore rerum et voluptates",
    Published_at: "07/11/2012",
    Com: <TiTick />,
    Views: 719,
    Editbutton: <EditButton />,
    Showbutton: <ShowButton />,
  },
  {
    id: 3,
    Title: "Omnis voluptate enim similique est possimus",
    Published_at: "22/10/2012",
    Com: <TiTick />,
    Views: 294,
    Editbutton: <EditButton />,
    Showbutton: <ShowButton />,
  },
  {
    id: 4,
    Title: "Totam vel quasi a odio et nihil",
    Published_at: "19/10/2012",
    Com: <TiTick />,
    Views: 721,
    Editbutton: <EditButton />,
    Showbutton: <ShowButton />,
  },
  {
    id: 5,
    Title: "A voluptas eius eveniet ut commodi dolor",
    Published_at: "16/10/2012",
    Com: <TiTick />,
    Views: 143,
    Editbutton: <EditButton />,
    Showbutton: <ShowButton />,
  },
  {
    id: 6,
    Title: "Culpa possimus quibusdam nostrum enim tempore rerum odit excepturi",
    Published_at: "10/06/2012",
    Com: <Cancel />,
    Views: 557,
    Editbutton: <EditButton />,
    Showbutton: <ShowButton />,
  },
  {
    id: 7,
    Title: "Illum veritatis corrupti exercitationem sed velit",
    Published_at: "16/10/2012",
    Com: <TiTick />,
    Views: 133,
    Editbutton: <EditButton />,
    Showbutton: <ShowButton />,
  },
  {
    id: 8,
    Title: "Minima ea vero omnis odit officiis aut",
    Published_at: "02/10/2012",
    Views: 208,
    Editbutton: <EditButton />,
    Showbutton: <ShowButton />,
  },
  {
    id: 9,
    Title: "Maiores et itaque aut perspiciatis",
    Published_at: "29/09/2012",
    Com: <Cancel />,
    Views: 685,
    Editbutton: <EditButton />,
    Showbutton: <ShowButton />,
  },
  {
    id: 10,
    Title: "Sint dignissimos in architecto aut",
    Published_at: "05/09/2012",
    Com: <TiTick />,
    Views: 563,
    Editbutton: <EditButton />,
    Showbutton: <ShowButton />,
  },
  {
    id: 11,
    Title: "Perspiciatis adipisci vero qui ipsam iure porro",
    Published_at: "12/08/2012",
    Com: <TiTick />,
    Views: 467,
    Editbutton: <EditButton />,
    Showbutton: <ShowButton />,
  },
  {
    id: 12,
    Title: "Accusantium qui nihil voluptatum quia voluptas maxime ab similique",
    Published_at: "08/08/2012",
    Com: <TiTick />,
    Views: 143,
    Editbutton: <EditButton />,
    Showbutton: <ShowButton />,
  },
  {
    id: 13,
    Title: "Sed quo et et fugiat modi",
    Published_at: "11/05/2012",
    Com: <TiTick />,
    Views: 557,
    Editbutton: <EditButton />,
    Showbutton: <ShowButton />,
  },
];

const Table = () => {
  const [name, setName] = useState("");

  const [foundUsers, setFoundUsers] = useState(USERS);

  const filter = (e: any) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = USERS.filter((user) => {
        return user.Title.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(USERS);
    }
    setName(keyword);
  };
  return (
    <div className="p-5 space-y-5">
      <div className="bg-gray-200 w-56 flex items-center rounded-lg">
        <input
          type="search"
          value={name}
          onChange={filter}
          className="border-0 bg-gray-200 p-3 rounded-lg"
          placeholder="Search...."
        />
        <GoSearch />
      </div>
      <table className="bg-white lg:block hidden rounded-md shadow-sm p-2">
        <thead>
          <tr className="text-left">
            <th className="w-[5%] p-3">Id</th>
            <th className="w-[50%]">Title</th>
            <th className="w-[15%]">Published at</th>
            <th className="w-[10%]">Com.</th>
            <th className="w-[10%]">Views</th>
          </tr>
        </thead>
        <tbody>
          {foundUsers && foundUsers.length > 0
            ? foundUsers.map((user) => (
                <tr className="divide-y-2" key={user.id}>
                  <td className="w-[5%] p-3 px-4 text-primary font-medium border-t-2">
                    {user.id}
                  </td>
                  <td className="w-[50%]">{user.Title}</td>
                  <td className="w-[15%] italic">{user.Published_at}</td>
                  <td className="w-[10%]">{user.Com}</td>
                  <td className="w-[10%]">{user.Views}</td>
                  <td className="w-[5%]">{user.Editbutton}</td>
                  <td className="w-[5%] px-5">{user.Showbutton}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
      {/* Mobile View */}
      <div className="block lg:hidden bg-white p-2 rounded-lg shadow-sm">
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            <div className="bg-white p-3" key={user.id}>
              <div className="flex md:justify-between justify-start md:flex-row flex-col">
                {user.Title}
                <p className="text-gray-600 md:ml-0 ml-auto">
                  {user.Published_at}
                </p>
              </div>
              <p className="text-gray-600 md:-mt-0 -mt-5 text-sm">
                {user.Views} views
              </p>
            </div>
          ))
        ) : (
          <h1 className="p-2 text-2xl">No results found!</h1>
        )}
      </div>
    </div>
  );
};

export default Table;
