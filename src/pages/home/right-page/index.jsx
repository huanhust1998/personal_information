/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { IconAbout, IconContact, IconResume } from "../../../components/icons";
import About from "./about";
import Resume from "./resume";
import Contact from "./contact";

const RightPage = () => {
  const [tab, setTab] = useState("ABOUT");

  return (
    <div className="w-[600px] h-[600px] gap-5 flex flex-col justify-start items-end">
      <div className="w-[300px] h-[100px] bg-white rounded-2xl p-4 flex gap-4">
        <div
          className={`${
            tab === "ABOUT" ? "bg-pink-700 " : "bg-gray-200"
          } w-20 h-full flex flex-col items-center justify-center rounded-lg hover:cursor-pointer`}
          onClick={() => setTab("ABOUT")}
        >
          <IconAbout color={tab === "ABOUT" ? "#fff" : "#323442"} />
          <span
            className={`font-medium text-12 ${
              tab === "ABOUT" ? "text-white" : "text-grey-1000"
            }`}
          >
            About
          </span>
        </div>
        <div
          className={`${
            tab === "RESUME" ? "bg-pink-700 " : "bg-gray-200"
          } w-20 h-full flex flex-col items-center justify-center rounded-lg hover:cursor-pointer`}
          onClick={() => setTab("RESUME")}
        >
          <IconResume color={tab === "RESUME" ? "#fff" : "#323442"} />
          <span
            className={`font-medium text-12 ${
              tab === "RESUME" ? "text-white" : "text-grey-1000"
            }`}
          >
            Resume
          </span>
        </div>
        <div
          className={`${
            tab === "CONTACT" ? "bg-pink-700 " : "bg-gray-200"
          } w-20 h-full flex flex-col items-center justify-center rounded-lg hover:cursor-pointer`}
          onClick={() => setTab("CONTACT")}
        >
          <IconContact color={tab === "CONTACT" ? "#fff" : "#323442"} />
          <span
            className={`font-medium text-12 ${
              tab === "CONTACT" ? "text-white" : "text-grey-1000"
            }`}
          >
            Contact
          </span>
        </div>
      </div>

      {tab === "ABOUT" && <About />}
      {tab === "RESUME" && <Resume />}
      {tab === "CONTACT" && <Contact />}
    </div>
  );
};

export default RightPage;
