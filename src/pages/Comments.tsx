import Aside from "@/components/Aside";
import Data from "@/components/Data";
import Header from "@/components/Header";
import { BiUser } from "react-icons/bi";
import { BiShowAlt } from "react-icons/bi";
import { HiPencil } from "react-icons/hi";

type Props = {
  name?: string;
};

const ShowButton = () => (
  <button className="flex items-center text-primary">
    <BiShowAlt className="text-2xl " />
    <p className="ml-2 font-[600] text-sm">SHOW</p>
  </button>
);
const EditButton = () => (
  <button className="flex items-center text-primary">
    <HiPencil className="text-2xl " />
    <p className="ml-2  font-[600] text-sm">EDIT</p>
  </button>
);
const data = [
  {
    id: 1,
    userIcon: (
      <BiUser className="bg-gray-300 text-3xl rounded-full p-2 h-10 w-10" />
    ),
    username: "Alex Smith",
    date: "02/08/2012",
    info: "Queen, tossing her head through the wood. 'If it had lost something; and she felt sure it.",
    about: "About",
    aboutData: "Minimaae vero omnis odito fficius aut",
    showButton: <ShowButton />,
    editButton: <EditButton />,
  },
  {
    id: 2,
    userIcon: (
      <BiUser className="bg-gray-300 text-3xl rounded-full p-2 h-10 w-10" />
    ),
    username: "Kiley Pouros",
    date: "08/08/2012",
    info: "White Rabbit: it was indeed: she was out of the ground--and I should frighten them out of its right paw round, 'lives a March Hare. 'Sixteenth,'.",
    about: "About",
    aboutData: "A voluptas eius eveniet ut commodi dolor",
    showButton: <ShowButton />,
    editButton: <EditButton />,
  },
  {
    id: 3,
    userIcon: (
      <BiUser className="bg-gray-300 text-3xl rounded-full p-2 h-10 w-10" />
    ),
    username: "Justina Hegmann",
    date: "02/08/2012",
    info: "I'm not Ada,' she said, 'and see whether it's marked poison or.",
    about: "About",
    aboutData: "Perspiciatis adipisci vero qui ipsam iure porro",
    showButton: <ShowButton />,
    editButton: <EditButton />,
  },
  {
    id: 4,
    userIcon: (
      <BiUser className="bg-gray-300 text-3xl rounded-full p-2 h-10 w-10" />
    ),
    username: "Ms. Brionna Smitham MD",
    date: "24/09/2014",
    info: "Dormouse. 'Fourteenth of March, I think I can say.' This was such a noise inside, no one else seemed inclined.",
    about: "About",
    aboutData: "Minima ea vero omnis odit officiis aut",
    showButton: <ShowButton />,
    editButton: <EditButton />,
  },
  {
    id: 5,
    userIcon: (
      <BiUser className="bg-gray-300 text-3xl rounded-full p-2 h-10 w-10" />
    ),
    username: "Edmond Schulist",
    date: "24/09/2014",
    info: "I thought to tell me your history, you know,' the Hatter and the happy summer days. THE.",
    about: "About",
    aboutData:
      "Accusantium qui nihil voluptatum quia voluptas maxime ab similique",
    showButton: <ShowButton />,
    editButton: <EditButton />,
  },
  {
    id: 6,
    userIcon: <BiUser className="bg-gray-300 h-10 w-10 p-2 rounded-full" />,
    username: "Danny Greenholt",
    date: "09/08/2012",
    info: "Duchess asked, with another hedgehog, which seemed to be lost: away went Alice after it, never once considering how in the other. In the very tones of.",
    about: "About",
    aboutData: "Minima ea vero omnis odit officiis aut",
    showButton: <ShowButton />,
    editButton: <EditButton />,
  },
];

const Comments = ({ name }: Props) => (
  <>
    <div className="p-5 lg:grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-5 hidden">
      {data.map(
        ({
          userIcon,
          username,
          date,
          info,
          about,
          aboutData,
          showButton,
          editButton,
        }) => (
          <div className="p-7 bg-white shadow-lg">
            <div className="flex items-center gap-2">
              {userIcon}
              <div>
                {username}
                <p className="text-gray-500 text-sm">{date}</p>
              </div>
            </div>
            <div className="mt-10 pr-10">{info}</div>
            <div className="flex  mt-10">
              {about}
              <p className="ml-3 text-[#4c61da]">{aboutData}</p>
            </div>
            <div className="flex justify-end items-end mt-10 gap-5">
              {editButton}
              {showButton}
            </div>
          </div>
        )
      )}
    </div>
    {/* Mobile View */}
    <div className="p-5 space-y-8 lg:hidden block ">
      {data.map(({ userIcon, username, info, date }) => (
        <div className="flex items-start">
          {userIcon}
          <div className="flex flex-col ml-5 w-full">
            <div className="flex justify-between">
              {username}
              <p className="text-md text-gray-800"> {date}</p>
            </div>
            <p className="text-gray-500 mt-1">{info}</p>
          </div>
        </div>
      ))}
    </div>
  </>
);
export default Comments;
