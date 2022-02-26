import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { HiPencil } from "react-icons/hi";

const EditButton = () => (
  <button className="flex items-center text-primary">
    <HiPencil className="text-2xl " />
    <p className="ml-2  font-[600] text-sm">EDIT</p>
  </button>
);

const Tags = () => {
  const [isOpen1, setIsOpen1] = useState(false);

  const handleFilterOpening1 = () => {
    setIsOpen1((isOpen1) => !isOpen1);
  };
  const [isOpen2, setIsOpen2] = useState(false);

  const handleFilterOpening2 = () => {
    setIsOpen2((isOpen2) => !isOpen2);
  };
  const [isOpen3, setIsOpen3] = useState(false);

  const handleFilterOpening3 = () => {
    setIsOpen3((isOpen3) => !isOpen3);
  };
  const [isOpen4, setIsOpen4] = useState(false);

  const handleFilterOpening4 = () => {
    setIsOpen4((isOpen4) => !isOpen4);
  };
  const [isOpen5, setIsOpen5] = useState(false);

  const handleFilterOpening5 = () => {
    setIsOpen5((isOpen5) => !isOpen5);
  };
  return (
    <div className="m-10 w-96 bg-white shadow-md rounded-lg p-2 space-y-2">
      <div className="Collapse-1 hover:bg-gray-100">
        <div className="p-3 flex justify-between">
          <button
            onClick={handleFilterOpening1}
            className="flex items-center w-full"
          >
            {!isOpen1 ? (
              <FiChevronDown className="text-3xl text-primary" />
            ) : (
              <FiChevronUp className="text-3xl text-gray-400" />
            )}

            <h3 className="text-lg ml-2">Sports</h3>
          </button>
          <EditButton />
        </div>
        <div>
          {isOpen1 && (
            <div className="p-3 bg-white pl-20">
              <div className="flex justify-between">
                <p>Parkour</p>
                <EditButton />
              </div>
              <div className="flex justify-between mt-5">
                <p>CrossFit</p>
                <EditButton />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="Collapse-2 hover:bg-gray-100">
        <div className="p-3 flex justify-between">
          <button
            onClick={handleFilterOpening2}
            className="flex items-center w-full"
          >
            {!isOpen2 ? (
              <FiChevronDown className="text-3xl text-primary" />
            ) : (
              <FiChevronUp className="text-3xl text-gray-400" />
            )}

            <h3 className="text-lg ml-2">Technology</h3>
          </button>
          <EditButton />
        </div>
        <div>
          {isOpen2 && (
            <div className="p-3 bg-white pl-20">
              <div className="flex justify-between">
                <p>Computing</p>
                <EditButton />
              </div>
              <div className="flex justify-between mt-5">
                <p>NanoScience</p>
                <EditButton />
              </div>
              <div className="flex justify-between mt-5">
                <p>Block Chain</p>
                <EditButton />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="Collapse-3 hover:bg-gray-100">
        <div className="p-3 flex justify-between">
          <button
            onClick={handleFilterOpening3}
            className="flex items-center w-full"
          >
            {!isOpen3 ? (
              <FiChevronDown className="text-3xl text-primary" />
            ) : (
              <FiChevronUp className="text-3xl text-gray-400" />
            )}

            <h3 className="text-lg ml-2">Code</h3>
          </button>
          <EditButton />
        </div>
        <div>
          {isOpen3 && (
            <div className="p-3 bg-white pl-20">
              <div className="flex justify-between">
                <p>Node</p>
                <EditButton />
              </div>
              <div className="flex justify-between mt-5">
                <p>React</p>
                <EditButton />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="Collapse-4 hover:bg-gray-100">
        <div className="p-3 flex justify-between">
          <button
            onClick={handleFilterOpening4}
            className="flex items-center w-full "
          >
            {!isOpen4 ? (
              <FiChevronDown className="text-3xl text-primary" />
            ) : (
              <FiChevronUp className="text-3xl text-gray-400" />
            )}

            <h3 className="text-lg ml-2">Photo</h3>
          </button>
          <EditButton />
        </div>
        <div>
          {isOpen4 && (
            <div className="p-3 bg-white pl-20">
              <div className="flex justify-between">
                <p>Nature</p>
                <EditButton />
              </div>
              <div className="flex justify-between mt-5">
                <p>People</p>
                <EditButton />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="Collapse-5 hover:bg-gray-100">
        <div className="p-3 flex justify-between">
          <button
            onClick={handleFilterOpening5}
            className="flex items-center w-full"
          >
            {!isOpen5 ? (
              <FiChevronDown className="text-3xl text-primary" />
            ) : (
              <FiChevronUp className="text-3xl text-gray-400" />
            )}

            <h3 className="text-lg ml-2">Music</h3>
          </button>
          <EditButton />
        </div>
        <div>
          {isOpen5 && (
            <div className="p-3 bg-white pl-20">
              <div className="flex justify-between">
                <p>Rap</p>
                <EditButton />
              </div>
              <div className="flex justify-between mt-5">
                <p>Rock</p>
                <EditButton />
              </div>
              <div className="flex justify-between mt-5">
                <p>World</p>
                <EditButton />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tags;
