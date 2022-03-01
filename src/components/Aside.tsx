import React from "react";
import { AiTwotoneFile, AiFillCaretLeft } from "react-icons/ai";
import { SiGooglemessages } from "react-icons/si";
import { BsTagsFill } from "react-icons/bs";
import { Link } from "react-router-dom";

type Props = {
  isVisible?: boolean;
};

const Aside = ({ isVisible }: Props) => {
  return (
    <div
      className={`w-72 bg-white h-screen duration-700 lg:relative absolute lg:shadow-none shadow-2xl group-hover:-ml-72  ${
        isVisible ? "w-20 lg:-ml-0 -ml-20" : "w-72"
      }`}
    >
      <ul className="space-y-3 mt-5">
        <li className="group hover:bg-gray-300 flex items-center">
          <Link to="/" className="flex items-center w-full p-3 px-5">
            <AiTwotoneFile className="text-primary text-2xl mr-3 group-hover:scale-125 duration-500" />
            <p className={`${isVisible ? "hidden" : "block"}`}>Posts</p>
          </Link>
          <div
            className={`absolute bg-primary rounded-md p-1 -right-12 w-16 hidden ${
              isVisible ? "group-hover:block" : "hidden"
            }`}
          >
            <AiFillCaretLeft className="absolute -left-4 text-2xl text-primary" />
            <p className="text-white ml-2">Posts</p>
          </div>
        </li>
        <li className="group hover:bg-gray-300 flex items-center">
          <Link to="/Comments" className="flex items-center w-full p-3 px-5">
            <SiGooglemessages className="text-primary  text-2xl mr-3 group-hover:scale-125 duration-500" />
            <p className={`${isVisible ? "hidden" : "block"}`}>Comments</p>
          </Link>
          <div
            className={`absolute  bg-primary rounded-md p-1 -right-24 w-28 hidden ${
              isVisible ? "group-hover:block" : "hidden"
            }`}
          >
            <AiFillCaretLeft className="absolute -left-4 text-2xl text-primary" />
            <p className="text-white ml-4">Comments</p>
          </div>
        </li>
        <li className="group hover:bg-gray-300 flex items-center">
          <Link to="/Tags" className="flex items-center w-full p-3 px-5">
            <BsTagsFill className="text-primary  text-2xl mr-3 group-hover:scale-125 duration-500" />
            <p className={`${isVisible ? "hidden" : "block"}`}>Tags</p>
          </Link>
          <div
            className={`absolute bg-primary rounded-md hidden p-1 -right-12 w-16 ${
              isVisible ? "group-hover:block" : "hidden"
            }`}
          >
            <AiFillCaretLeft className="absolute -left-4 text-2xl text-primary" />
            <p className="text-white ml-3">Tags</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Aside;
