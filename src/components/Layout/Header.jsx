import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Determine if header should be transparent
  const isTransparentHeader = location.pathname === '/' || 
                              location.pathname === '/term-life-insurance' || 
                              location.pathname === '/investment-plans' || 
                              location.pathname === '/health-insurance';

  const headerClass = isTransparentHeader ? 'header-transparent text-black' : '';

  return (
    <>
      {/* Header Top */}
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-end">
              <div className="dlab-social-icon">
                <ul>
                  <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
                  <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
                  <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className={`site-header header mo-left ${headerClass}`}>
        {/* Main Header */}
        <div className="sticky-header main-bar-wraper navbar-expand-lg">
          <div className="main-bar clearfix">
            <div className="container clearfix">
              
              {/* Website Logo */}
              <div className="logo-header logo-dark">
                <Link to="/"><img src="/assets/images/logo.webp" alt="Family Raksha Logo" /></Link>
              </div>

              {/* Nav Toggle Button */}
              <button 
                className={`navbar-toggler collapsed navicon justify-content-end ${isMobileMenuOpen ? '' : 'collapsed'}`}
                type="button" 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle navigation"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
              
              {/* Extra Nav */}
              <div className="extra-nav">
                <div className="extra-cell">
                  <Link to="/contact-us" className="btn btn-primary gradient rounded-xl">Contact Us <i className="fa fa-angle-right m-l10"></i></Link>
                </div>
              </div>
              
              {/* Header Nav */}
              <div className={`header-nav navbar-collapse justify-content-end ${isMobileMenuOpen ? 'show' : 'collapse'}`} id="navbarNavDropdown">
                <div className="logo-header logo-dark">
                  <Link to="/"><img src="/assets/images/logo.webp" alt="Family Raksha Logo" /></Link>
                </div>

                <ul className="nav navbar-nav navbar">
                  <li><Link to="/"><span>Home</span></Link></li>
                  <li><Link to="/about-us"><span>About Us</span></Link></li>
                  <li className="sub-menu-down">
                    <a href="javascript:void(0);"><span>Insurance plans</span></a>
                    <ul className="sub-menu">
                      <li><Link to="/term-life-insurance">Term Life Insurance</Link></li>
                      <li><Link to="/investment-plans">Investment Plans</Link></li>
                      <li><Link to="/health-insurance">Health Insurance</Link></li>
                      {/* <li><Link to="/term-women-insurance">Term (Women) Insurance</Link></li> */}
                    </ul>
                  </li>
                  <li><Link to="/blog"><span>Blog</span></Link></li>
                </ul>

                <div className="dlab-social-icon">
                  <ul>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Main Header End */}
      </header>
      {/* Header End */}
    </>
  );
};

export default Header;
