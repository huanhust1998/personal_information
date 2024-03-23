import Header from "./header";
import Footer from "./footer";

// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
  return (
    <div className="w-screen h-screen px-10 overflow-y-auto flex justify-center items-center">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
