import React from "react";

type Props = {
  name?: string;
};

const Tags = ({ name }: Props) => (
  <div className="p-10">
    <h1>Hello From Tags</h1>
  </div>
);

export default Tags;
