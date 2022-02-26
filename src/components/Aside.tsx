import React from "react";
import { AiTwotoneFile, AiOutlineCaretLeft } from "react-icons/ai";
import { SiGooglemessages } from "react-icons/si";
import { BsTagsFill } from "react-icons/bs";
import { Link } from "react-router-dom";

type Props = {
  isVisible?: boolean;
};

const Aside: React.FC<Props> = ({ isVisible }) => {
  return (
    <div
      className={`w-72 bg-white h-screen duration-700 lg:relative absolute lg:shadow-none shadow-2xl group-hover:-ml-72  ${
        isVisible ? "-ml-72" : "ml-0"
      }`}
    >
      <ul className="space-y-2 mt-5">
        <li className="group hover:bg-gray-300">
          <Link to="/" className="flex items-center w-full p-3 px-5">
            <AiTwotoneFile className="text-primary text-2xl mr-3 group-hover:scale-125 duration-500" />
            <p>Posts</p>
          </Link>
        </li>
        <li className={`group  hover:bg-gray-300 `}>
          <Link to="/Comments" className="flex items-center w-full p-3 px-5">
            <SiGooglemessages className="text-primary  text-2xl mr-3 group-hover:scale-125 duration-500" />
            <p>Comments</p>
          </Link>
        </li>
        <li className="group  hover:bg-gray-300">
          <Link to="/Tags" className="flex items-center w-full p-3 px-5">
            <BsTagsFill className="text-primary  text-2xl mr-3 group-hover:scale-125 duration-500" />
            <p>Tags</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Aside;
