import React from "react";
import Nav from "../routes/Nav";

type Props = {
  onMenuClick?: () => void;
};

const Header = ({ onMenuClick }: Props) => (
  <div className="border-b-2">
    <Nav onMenuClick={onMenuClick} />
  </div>
);

export default Header;
