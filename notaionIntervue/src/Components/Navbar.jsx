import { CiSearch } from "react-icons/ci";
import { HiOutlineDuplicate } from "react-icons/hi";
import { HiOutlineEllipsisHorizontal } from "react-icons/hi2";
import { RiNotionFill } from "react-icons/ri";
import MyModel from "./MyModel";
import { useState } from "react";
function Navbar() {
  const [ShowMyModel, setShowMyModel] = useState(false);
  const clickOnClose = () => ShowMyModel(false)
  return (
    <>
      <div className="w-full flex items-center justify-between mx-auto text-center ">
        <div className="text-white p-1 ">We are hiring!</div>
        <ul className="flex p-2 gap-1 items-center  text-slate-100 ">
          <li className="p-2 hover:bg-[#323232] rounded-md text-lg font-bold">
            {" "}
            <button onClick={() => setShowMyModel(true)}>
              <CiSearch />
            </button>
          </li>
          <li className="p-2 hover:bg-[#323232] rounded-md text-lg text-slate-100 font-bold">
            {" "}
            <a href="">
              <HiOutlineDuplicate />
            </a>
          </li>
          <li className="p-2 hover:bg-[#323232] rounded-md text-lg text-slate-100">
            {" "}
            <button> <a href="">
              <HiOutlineEllipsisHorizontal />
            </a></button>
           
          </li>
          <p className=" flex text-white  hover:bg-[#323232] ">
            <li className="flex items-center text-gray p-1 border-[0.1px] rounded-md">
              Built with
              <RiNotionFill />
            </li>
          </p>
        </ul>
        <MyModel onClose={clickOnClose} visible={ShowMyModel}/>
      </div>
    </>
  );
}

export default Navbar;
