// import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
 function MyModel({ visible, onClose }) {
const clickOnClose = () => {
  onClose()
};
  if(!visible) return null;
  return (
    <div
     className="fixed h-[600px] w-[750px] inset-0  bg-opacity- bg-[#323232] color-white mt-32 rounded-sm items-center ml-[25%]">
      <div className="flex items-center h-12">
        <ul className="flex items-center">
          <li className="bg-[#323232]">
            {" "}
            <CiSearch className="h-8 w-6 items-center text-slate-100"/>{" "}
          </li>
          <li className="">
            {" "}
            <input className="bg-[#323232] h-10 w-64 text-xl ml-2" placeholder="Search in We are hiring! ..." type="" />{" "}
          </li>
          <li className="text-slate-100 flex jus"><button onClick={clickOnClose}><IoMdClose className="ml-96"/></button></li>
        </ul>
      </div>
    </div>
  );
}

export default MyModel;
