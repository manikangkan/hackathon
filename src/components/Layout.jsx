import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="hidden xl:block bg-custom-light">
        <Navbar />
        <main className="">{children}</main>
        <Footer />
      </div>
      <h2 className="xl:hidden grid place-content-center h-screen p-4">
        Hi there, this site isn't made mobile responsive yet, kindly visit the same in
        desktop mode, thanks for you understanding🥹
      </h2>
    </div>
  );
};

export default Layout;
