import React from "react";

type Props = {
  name?: string;
};

const UsersAside = ({ name }: Props) => {
  return (
    <div className="w-96 mt-16 lg:block hidden">
      <h2>App Users</h2>
      <p>
        Eiusmod adipisicing tempor duis qui. Ullamco aliqua tempor incididunt
        aliquip aliquip qui ad minim aliqua. Aute et magna quis pariatur irure
        sunt. Aliquip velit consequat dolore ullamco laborum voluptate
        cupidatat. Proident minim reprehenderit id dolore elit sit occaecat ad
        amet tempor esse occaecat enim. Laborum aliqua excepteur qui ipsum in
        dolor et cillum est.
      </p>
    </div>
  );
};

export default UsersAside;
