import { useState } from "react";
import {
  IconCalendar,
  IconDownload,
  IconEmail,
  IconLocation,
  IconPhone,
} from "../../../components/icons";
import { avatar } from "../../../assets/images";

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

  const handleDownloadCV = () => {
    const fileUrl = "src/assets/files/cv.docx"; // Đường dẫn của tệp tin bạn muốn tải xuống

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "NINH_XUAN_HUAN-FRONTEND_DEVELOP"; // Tên mà tệp tin sẽ được lưu lại sau khi tải xuống

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-[300px] bg-white h-[600px] rounded-xl drop-shadow-xl hover:shadow-2xl duration-500 flex items-center justify-center flex-col px-5 relative">
      <div className="absolute -top-[100px] drop-shadow-xl">
        <img src={avatar} alt="avt" className="rounded-md scale-75" />
      </div>
      <h1 className="font-bold text-24 text-grey-1000">Ninh Xuân Huấn</h1>
      <div className="flex justify-center items-center px-4 py-2 rounded-xl bg-pink-700">
        <p className="font-semibold text-14 text-white">Frontend Developer</p>
      </div>
      <div className="flex flex-col justify-center items-start bg-grey-200 p-5 rounded-xl w-full mt-10 mb-2 gap-2">
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
        <div
          className="flex items-center justify-center gap-2 hover:cursor-pointer"
          onClick={() => handleCopy("huanhust1998@gmail.com")}
        >
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
        } duration-500 font-medium text-14 text-pink-800`}
      >
        {textCopy} 😍 😍
      </p>

      <button className="flex items-center justify-center gap-1 bg-pink-700 px-4 py-2 rounded-xl absolute bottom-10" type="button" onClick={()=>handleDownloadCV()}>
        <div className="animate-bounce">
          <IconDownload color="#fff" />
        </div>
        <span className="text-14 text-white font-semibold">Download CV</span>
      </button>
    </div>
  );
};

export default LeftPage;
