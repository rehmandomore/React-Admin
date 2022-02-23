import Aside from "@/components/Aside";
import Header from "@/components/Header";
import Table from "@/components/Table";
import React from "react";

type Props = {
  name?: string;
};

const Home = ({ name }: Props) => (
  <div>
    <Table />
  </div>
);
export default Home;
