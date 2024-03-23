import { useState } from "react";
import {
  IconCalendar,
  IconEmail,
  IconLocation,
  IconPhone,
} from "../../../components/icons";

const LeftPage = () => {
  const [isCopy, setIsCopy] = useState(false);
  const [textCopy, setTextCopy] = useState("");

  const handleCopy = (text, isPhone) => {
    navigator.clipboard.writeText(text);
    setIsCopy(true);
    isPhone
      ? setTextCopy("Copy phone number successfully")
      : setTextCopy("Copy email address successfully");
    setTimeout(() => {
      setIsCopy(false);
    }, 2000);
  };
  return (
    <div className="w-[300px] bg-white h-[500px] rounded-xl shadow-xl hover:shadow-2xl duration-500 flex items-center justify-center flex-col px-5">
      <h1 className="font-bold text-24 text-grey-1000">Ninh Xuân Huấn</h1>
      <div className="flex justify-center items-center bg-grey-200 px-4 py-2 rounded-xl hover:bg-pink-800 duration-300 group">
        <p className="font-semibold text-14 text-grey-600 group-hover:text-grey-1000 duration-300">
          Fullstack Developer
        </p>
      </div>
      <div className="flex flex-col justify-center items-start bg-grey-100 p-5 rounded-xl w-full mt-10 mb-2 gap-2">
        <div
          className="flex items-center justify-center gap-2 hover:cursor-pointer"
          onClick={() => handleCopy("+84 0376382684", true)}
        >
          <button
            className="flex justify-center items-center bg-white p-2 rounded-lg h-full"
            type="button"
          >
            <IconPhone />
          </button>
          <div>
            <p className="text-12 font-semibold text-grey-600">Phone</p>
            <p className="text-14 text-grey-1000">(+84) 376382684</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 hover:cursor-pointer" onClick={() => handleCopy("huanhust1998@gmail.com")}>
          <button
            className="flex justify-center items-center bg-white p-2 rounded-lg h-full"
            type="button"
          >
            <IconEmail />
          </button>
          <div>
            <p className="text-12 font-semibold text-grey-600">Email</p>
            <p className="text-14 text-grey-1000">huanhust1998@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <button
            className="flex justify-center items-center bg-white p-2 rounded-lg h-full"
            type="button"
          >
            <IconLocation />
          </button>
          <div>
            <p className="text-12 font-semibold text-grey-600">Location</p>
            <p className="text-14 text-grey-1000">Ha Noi, Viet Nam</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <button
            className="flex justify-center items-center bg-white p-2 rounded-lg h-full"
            type="button"
          >
            <IconCalendar />
          </button>
          <div>
            <p className="text-12 font-semibold text-grey-600">Birthday</p>
            <p className="text-14 text-grey-1000">20 May 1998</p>
          </div>
        </div>
      </div>
      <p
        className={`${
          isCopy ? "opacity-100" : "opacity-0"
        } duration-500 font-bold text-14 text-pink-800`}
      >
        {textCopy} !!!
      </p>
    </div>
  );
};

export default LeftPage;
