import React from "react";
import { TiTickOutline } from "react-icons/ti";
import { HiPencil } from "react-icons/hi";
import { BiShowAlt } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";

type Props = {
  name?: string;
};
const EditButton = () => (
  <button className="flex items-center">
    <HiPencil className="text-2xl text-[#3E51B5]" />
    <p className="ml-2 text-[#3E51B5] font-[600] text-sm">EDIT</p>
  </button>
);

const ShowButton = () => (
  <button className="flex items-center">
    <BiShowAlt className="text-2xl text-[#3E51B5]" />
    <p className="ml-2 text-[#3E51B5] font-[600] text-sm">SHOW</p>
  </button>
);

const data = [
  {
    id: 1,
    Title: "Fusce massa lorem, pulvinar a posuere ut, accumsan ac nisi",
    Published_at: "01/12/2012",
    Com: <TiTickOutline className="text-2xl text-[#3E51B5]" />,
    Views: 222,
    Editbutton: <EditButton />,
    Showbutton: <ShowButton />,
  },
  {
    id: 2,
    Title: "Qui tempore rerum et voluptates",
    Published_at: "07/11/2012",
    Com: <TiTickOutline className="text-2xl text-[#3E51B5]" />,
    Views: 719,
    Editbutton: <EditButton />,
    Showbutton: <ShowButton />,
  },
  {
    id: 3,
    Title: "Omnis voluptate enim similique est possimus",
    Published_at: "22/10/2012",
    Com: <TiTickOutline className="text-2xl text-[#3E51B5]" />,
    Views: 294,
    Editbutton: <EditButton />,
    Showbutton: <ShowButton />,
  },
  {
    id: 4,
    Title: "Totam vel quasi a odio et nihil",
    Published_at: "19/10/2012",
    Com: <TiTickOutline className="text-2xl text-[#3E51B5]" />,
    Views: 721,
    Editbutton: <EditButton />,
    Showbutton: <ShowButton />,
  },
  {
    id: 5,
    Title: "A voluptas eius eveniet ut commodi dolor",
    Published_at: "16/10/2012",
    Com: <TiTickOutline className="text-2xl text-[#3E51B5]" />,
    Views: 143,
    Editbutton: <EditButton />,
    Showbutton: <ShowButton />,
  },
  {
    id: 6,
    Title: "Culpa possimus quibusdam nostrum enim tempore rerum odit excepturi",
    Published_at: "10/06/2012",
    Com: <MdOutlineCancel className="text-red-600 text-2xl" />,
    Views: 557,
    Editbutton: <EditButton />,
    Showbutton: <ShowButton />,
  },
  {
    id: 7,
    Title: "Illum veritatis corrupti exercitationem sed velit",
    Published_at: "16/10/2012",
    Com: <TiTickOutline className="text-2xl text-[#3E51B5]" />,
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
    Com: <MdOutlineCancel className="text-red-600 text-2xl" />,
    Views: 685,
    Editbutton: <EditButton />,
    Showbutton: <ShowButton />,
  },
  {
    id: 10,
    Title: "Sint dignissimos in architecto aut",
    Published_at: "05/09/2012",
    Com: <TiTickOutline className="text-[#3E51B5] text-2xl" />,
    Views: 563,
    Editbutton: <EditButton />,
    Showbutton: <ShowButton />,
  },
  {
    id: 11,
    Title: "Perspiciatis adipisci vero qui ipsam iure porro",
    Published_at: "12/08/2012",
    Com: <TiTickOutline className="text-[#3E51B5] text-2xl" />,
    Views: 467,
    Editbutton: <EditButton />,
    Showbutton: <ShowButton />,
  },
  {
    id: 12,
    Title: "Accusantium qui nihil voluptatum quia voluptas maxime ab similique",
    Published_at: "08/08/2012",
    Com: <TiTickOutline className="text-[#3E51B5] text-2xl" />,
    Views: 143,
    Editbutton: <EditButton />,
    Showbutton: <ShowButton />,
  },
  {
    id: 13,
    Title: "Sed quo et et fugiat modi",
    Published_at: "11/05/2012",
    Com: <TiTickOutline className="text-[#3E51B5] text-2xl" />,
    Views: 557,
    Editbutton: <EditButton />,
    Showbutton: <ShowButton />,
  },
];

const Table = ({ name }: Props) => (
  <div className="p-10">
    <table className="border-collapse space-y-10 bg-white w-full">
      <thead>
        <tr className="text-left">
          <th className="w-[5%] p-3">Id</th>
          <th className="w-[35%]">Title</th>
          <th className="w-[15%]">Published at</th>
          <th className="w-[10%]">Com.</th>
          <th className="w-[10%]">Views</th>
        </tr>
      </thead>
      <tbody>
        {data.map(
          ({ id, Title, Published_at, Com, Views, Editbutton, Showbutton }) => (
            <tr className="divide-y-2">
              <td className="w-[5%] p-3">{id}</td>
              <td className="w-[50%] truncate">{Title}</td>
              <td className="w-[7%]">{Published_at}</td>
              <td className="w-[7%]">{Com}</td>
              <td className="w-[7%]">{Views}</td>
              <td className="w-[7%]">{Editbutton}</td>
              <td className="w-[7%] px-5">{Showbutton}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  </div>
);

export default Table;
