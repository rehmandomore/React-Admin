import Table from "@/components/Table";
import logo from "@/assets/img/logo.svg";

type Props = {
  name?: string;
};

const Home = ({ name }: Props) => (
  <div>
    <Table />
  </div>
);
export default Home;
