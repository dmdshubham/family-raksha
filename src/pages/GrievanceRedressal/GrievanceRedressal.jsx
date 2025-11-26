import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const GrievanceRedressal = () => {
  useEffect(() => {
    // Initialize WOW.js for animations
    if (typeof WOW !== 'undefined') {
      new WOW().init();
    }
  }, []);

  return (
    <div className="page-content bg-white">
      {/* Breadcrumb */}
      <div className="dlab-bnr-inr overlay-gradient-dark text-center" style={{ backgroundImage: 'url(/assets/images/banner4.webp)' }}>
        <div className="container">
          <div className="dlab-bnr-inr-entry">
            <h1>Grievance Redressal</h1>
            <nav aria-label="breadcrumb" className="breadcrumb-row">
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Grievance Redressal</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="content-inner" style={{ backgroundImage: 'url(/assets/images/bg1.webp)' }}>
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-xl-4 col-lg-4 m-b30">
              <aside className="side-bar sticky-top">
                <div className="service_menu_nav m-b40">
                  <ul>
                    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                    <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
                    <li><Link to="/grievance-redressal" className="active">Grievance Redressal</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                  </ul>
                </div>
                <div className="widget_contact" style={{ backgroundImage: 'url(/assets/images/pattern/pattern5.webp)' }}>
                  <div className="widget-content">
                    <h4>Do you need any help?</h4>
                    <div className="phone-number"><a href="tel:+917014363916">+91 70143 63916</a></div>
                    <div className="email"><a href="mailto:contact@familyraksha.com">contact@familyraksha.com</a></div>
                    <div className="link-btn">
                      <Link to="/contact" className="btn btn-primary gradient">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </aside>
            </div>

            {/* Main Content */}
            <div className="col-xl-8 col-lg-8">
              <div className="dlab-content">
                {/* Level 1 */}
                <div className="m-b50">
                  <h2 className="m-b20">Level 1</h2>
                  <p className="m-b10">
                    For lack of a response or if the response provided does not meet your expectation, you can write to: <a href="mailto:contact@familyraksha.com" className="text-primary">contact@familyraksha.com</a>
                  </p>
                </div>

                {/* Level 3 - First */}
                <div className="m-b50">
                  <h2 className="m-b20">Level 3</h2>
                  <p className="m-b10">
                    In case, you are not satisfied with the decision/resolution of the above office, or have not received any response within 15 days, you may write to: <a href="mailto:cgo@familyraksha.com" className="text-primary">cgo@familyraksha.com</a>
                  </p>
                </div>

                {/* Level 3 - Ombudsman */}
                <div className="m-b50">
                  <h2 className="m-b20">Level 3</h2>
                  <p className="m-b10">
                    If your grievance is not resolved at the above escalation levels, you can approach the Insurance Ombudsman for next level redressal. Click below to find the Insurance Ombudsman contact list.
                  </p>
                  <a href="https://www.cioins.co.in/Ombudsman" target="_blank" rel="noopener noreferrer" className="text-primary">
                    https://www.cioins.co.in/Ombudsman
                  </a>
                </div>

                <div className="alert alert-primary m-t30">
                  <p className="m-b0">
                    <strong>Note:</strong> We are committed to addressing your concerns in a timely and fair manner. Your feedback helps us improve our services and better serve our customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GrievanceRedressal;
