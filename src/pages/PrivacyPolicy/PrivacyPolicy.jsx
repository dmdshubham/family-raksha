import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
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
            <h1>Privacy Policy</h1>
            <nav aria-label="breadcrumb" className="breadcrumb-row">
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Privacy Policy</li>
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
                    <li><Link to="/privacy-policy" className="active">Privacy Policy</Link></li>
                    <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
                    <li><Link to="/grievance-redressal">Grievance Redressal</Link></li>
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
                <h2 className="m-b20">Introduction</h2>
                <p className="m-b30">
                  At DYS FamilyRaksha Insurance web aggregators Private Limited, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>

                <h2 className="m-b20">Information We Collect</h2>
                <p className="m-b10">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-check primary m-b30">
                  <li>Register on our website</li>
                  <li>Fill out a form or request information</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Purchase insurance products through our platform</li>
                  <li>Contact us for customer support</li>
                </ul>

                <h2 className="m-b20">How We Use Your Information</h2>
                <p className="m-b10">
                  We use the information we collect in the following ways:
                </p>
                <ul className="list-check primary m-b30">
                  <li>To provide, operate, and maintain our services</li>
                  <li>To process your insurance applications and requests</li>
                  <li>To send you information about products and services</li>
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To improve our website and services</li>
                  <li>To comply with legal and regulatory requirements</li>
                </ul>

                <h2 className="m-b20">Information Sharing</h2>
                <p className="m-b30">
                  Visitors are hereby informed that their information submitted on the website may be shared with our partner insurance companies for the purpose of providing you with insurance quotes and processing your applications. We do not sell your personal information to third parties.
                </p>

                <h2 className="m-b20">Data Security</h2>
                <p className="m-b30">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
                </p>

                <h2 className="m-b20">Your Rights</h2>
                <p className="m-b10">
                  You have the right to:
                </p>
                <ul className="list-check primary m-b30">
                  <li>Access and receive a copy of your personal information</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Lodge a complaint with a supervisory authority</li>
                </ul>

                <h2 className="m-b20">Contact Us</h2>
                <p className="m-b10">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="icon-bx-wraper style-13 left m-b30">
                  <div className="icon-content">
                    <p className="m-b5"><strong>DYS FamilyRaksha Insurance web aggregators Private Limited</strong></p>
                    <p className="m-b5">Corporate office: Building No.- 100P, Sector 41, Gurgaon Haryana, India</p>
                    <p className="m-b5">Email: <a href="mailto:contact@familyraksha.com" className="text-primary">contact@familyraksha.com</a></p>
                    <p className="m-b5">Phone: <a href="tel:+917014363916" className="text-primary">+91 70143 63916</a></p>
                  </div>
                </div>

                <p className="text-muted">
                  <small>Last Updated: January 2024</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
