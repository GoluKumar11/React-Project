// import React from "react";
import { GrNotes } from "react-icons/gr";
function Main() {
  return (
    <div className="w-full h-auto flex items-center overflow-hidden ">
      <div className="text-white ">
        <div className="w-full h-auto">
          <img
            className=" flex bg-cover bg-no-repeat "
            src="./image/TwitterBanner-04.png"
            alt=""
          />
        </div>
        <div className=" h-[1500px] w-[100%] items-center ">
          <h1 className="ml-[27%] md:ml-hidden text-4xl font-bold  text-slate-300 mb-6 mt-6">
            We are hiring!
          </h1>
          <h4 className="ml-[27%] text-3xl items-center font-bold  text-slate-300 mb-3">
            About us
          </h4>
          <p className=" ml-[27%] text-slate-300 line-clamp-7 gap-4">
            [Intervue.io](http://intervue.io) is a tool to take tech interviews
            remotely. <br />
            The below video shows a small demo of the tool.
          </p>
          <video
            className=" w-[690px] h-[390px] bg-cover bg-no-repeat mt-6 ml-[27%] "
            controls
            autoPlay
            loop
            muted
          >
            <source
              className=""
              src="https://file.notion.so/f/f/783206d6-13fa-4dfa-8968-8d31f789faff/55df2265-9116-4ffb-be52-123d64127d48/intervue-video_(1).mp4?id=7c3af601-d288-4ee3-afc2-f51c343071c8&amp;table=block&amp;spaceId=783206d6-13fa-4dfa-8968-8d31f789faff&amp;expirationTimestamp=1713175200000&amp;signature=AZ8BpSD_C9Og2Tu_MPzou2Am-bFP4chd0kpUmyYhO8k"
            />
          </video>
          <div className="ml-[27%] gap-10 mt-6 text-slate-300">
            <h1>We are a SaaS based product company funded by:</h1>
            <ul className="list-disc ml-7 gap-[10px]">
              <li className="mt-2">
                Rohit Bansal, Co-founder of Snapdeal - India
              </li>
              <li className="mt-2">
                Kunal Bahl, Co-founder of Snapdeal - India
              </li>
              <li className="mt-2">Kunal Shah, Founder of Cred - India</li>
              <li className="mt-2">Kunal Shah, Founder of Cred - India</li>
              <li className="mt-2">Kunal Shah, Founder of Cred - India</li>
              <li className="mt-2">Ryan Hoover, Founder, Product Hunt - USA</li>
            </ul>
          </div>

          <div className="ml-[27%] gap-10 mt-6 text-slate-300">
            <h1 className="text-2xl font-normal mt-16 mb-4">
              Desired Profile Needed
            </h1>
            <h1>We have 6 full-time positions for the role of:</h1>
            <ul className="list-disc ml-7 gap-[10px]">
              <li className="mt-2">
                Sales Development Representative - 3, California
              </li>
              <li className="mt-2">Account Executive - 2, California</li>
              <li className="mt-2">
                Business/Operations Manager - 1, California
              </li>
            </ul>
          </div>

          <div className="ml-[27%] gap-10 mt-6 text-slate-300 ">
            <h1>Checkout the relevant details below</h1>
            <ul className=" ml-4 gap-[10px] font-bold">
              <li className="mt-2 underline flex items-center gap-2 text-bold">
                <GrNotes /> Sales Development Representative
              </li>
              <li className="mt-2 underline flex items-center gap-2">
                {" "}
                <GrNotes />
                Account Executive{" "}
              </li>
              <li className="mt-2 underline flex items-center gap-2">
                <GrNotes /> Business/Operations Manager
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
