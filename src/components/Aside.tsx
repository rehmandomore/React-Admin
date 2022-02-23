import React, { useEffect, useRef } from "react";
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
      className={`xl:w-72 lg:w-20 w-56 bg-white h-screen lg:relative absolute lg:shadow-none shadow-2xl  ${
        isVisible ? "hidden" : "block"
      }`}
    >
      <ul className="space-y-2 mt-5">
        <li className="group hover:bg-gray-300">
          <Link to="/" className="flex items-center w-full p-3 px-5">
            <AiTwotoneFile className="text-primary text-2xl mr-3 group-hover:scale-125 duration-500" />
            <p className="xl:block  lg:hidden block">Posts</p>
            <div className="-right-12 absolute text-white bg-primary p-1 w-16 rounded-lg xl:group-hover:hidden lg:group-hover:flex items-center hidden">
              <AiOutlineCaretLeft className="text-primary -left-[15px] text-2xl absolute" />
              <p className="ml-2">Posts</p>
            </div>
          </Link>
        </li>
        <li className="group  hover:bg-gray-300">
          <Link to="/Comments" className="flex items-center w-full p-3 px-5">
            <SiGooglemessages className="text-primary  text-2xl mr-3 group-hover:scale-125 duration-500" />
            <p className="xl:block lg:hidden block">Comments</p>
            <div className="-right-24 absolute text-white bg-primary p-1 w-28 rounded-lg xl:group-hover:hidden lg:group-hover:flex items-center hidden">
              <AiOutlineCaretLeft className="text-primary -left-[15px] text-2xl absolute" />
              <p className="ml-3">Comments</p>
            </div>
          </Link>
        </li>
        <li className="group  hover:bg-gray-300">
          <Link to="/Tags" className="flex items-center w-full p-3 px-5">
            <BsTagsFill className="text-primary  text-2xl mr-3 group-hover:scale-125 duration-500" />
            <p className="xl:block lg:hidden block">Tags</p>
            <div className="-right-12 absolute text-white bg-primary p-1 w-16 rounded-lg xl:group-hover:hidden lg:group-hover:flex items-center hidden">
              <AiOutlineCaretLeft className="text-primary -left-[15px] text-2xl absolute" />
              <p className="ml-3">Tags</p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Aside;
