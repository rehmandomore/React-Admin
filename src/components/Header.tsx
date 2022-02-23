import React from "react";
import Nav from "../routes/Nav";

type Props = {
  name?: string;
  onMenuClick?: () => void;
};

const Header = ({ name, onMenuClick }: Props) => (
  <div className="border-b-2">
    <Nav onMenuClick={onMenuClick} />
  </div>
);

export default Header;
