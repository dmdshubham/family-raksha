import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <div id="loading-area" className="loading-02"></div>
      <div className="page-wraper">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;

