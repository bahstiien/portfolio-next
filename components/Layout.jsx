import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, name }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer name={name} />
    </div>
  );
};

export default Layout;
