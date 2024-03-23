import LeftPage from "./left-page";
import RightPage from "./right-page";

const HomePage = () => {
  return (
    <div className="w-[900px] h-full flex items-center gap-10">
      <LeftPage />
      <RightPage />
    </div>
  );
};
export default HomePage;
