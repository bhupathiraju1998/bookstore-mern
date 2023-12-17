import React from "react";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle,BiShow } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";


const BookModal = ({ item, onClose }) => {
  return (
    <div
      onClick={onClose}
      className="fixed bg-black z-50 flex justify-center items-center bg-opacity-60 top-0 left-0 right-0"
    >
      <div
        className="w-[600px] max-w-full h-[400px] bg-white flex flex-col relative rounded-xl p-4"
        onClick={(event) => event.stopPropagation()}
      >
        <AiOutlineClose
          onClick={onClose}
          className="absolute right-6 top-6 text-3xl cursor-pointer text-red-600"
        />
        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
          {item.publishYear}
        </h2>
        <h4 className="my-2 text-gray-500">{item._id}</h4>
        <div className="flex justify-start items-center gapx-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="my-1">{item.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="my-1">{item.author}</h2>
        </div>
        <p className="mt-4">Anything u want to show</p>
        <p className="my-2">Random paragraph</p>
      </div>
    </div>
  );
};

export default BookModal;
