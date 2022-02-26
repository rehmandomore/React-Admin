import React from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { useLocation } from "react-router-dom";

type Props = {
  name?: string;
  onMenuClick?: () => void;
};

const Nav = ({ onMenuClick, name }: Props) => {
  let [pageName, setPageName] = React.useState<string>("Posts");
  let location = useLocation();

  const displayPageName = () => {
    let name = location.pathname;

    if (name === "/") {
      setPageName("Posts");
    } else {
      let nameWithoutSlash = name.split("/").join(" ");
      setPageName(nameWithoutSlash);
    }
  };

  React.useEffect(() => {
    displayPageName();
  }, [location.pathname]);

  return (
    <>
      <div className="h-20 bg-white flex items-center">
        <button onClick={onMenuClick} className="group ml-5 ">
          <HiOutlineMenuAlt1 className="text-white bg-primary p-2 h-12 w-12  rounded-full" />
        </button>
        <h2 className="ml-5">{pageName}</h2>
      </div>
    </>
  );
};

export default Nav;
