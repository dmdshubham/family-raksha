import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TermsConditions = () => {
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
            <h1>Terms & Conditions</h1>
            <nav aria-label="breadcrumb" className="breadcrumb-row">
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Terms & Conditions</li>
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
                    <li><Link to="/terms-conditions" className="active">Terms & Conditions</Link></li>
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
                  Welcome to DYS FamilyRaksha Insurance web aggregators Private Limited. These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to be bound by these terms.
                </p>

                <h2 className="m-b20">About Our Services</h2>
                <p className="m-b30">
                  DYS FamilyRaksha Insurance web aggregators Private Limited is registered as an Insurance Web Aggregator with Registration No. 030, Registration Code No. IRDAI/INT/WBA/79/2023 Dated 07/02/2024, Valid till 06/02/2027, License category - web aggregator (Life & General). We provide a platform to compare and purchase insurance products from various insurance companies.
                </p>

                <h2 className="m-b20">Use of Website</h2>
                <p className="m-b10">
                  By using our website, you agree to:
                </p>
                <ul className="list-check primary m-b30">
                  <li>Provide accurate and complete information when requested</li>
                  <li>Not use the website for any unlawful purpose</li>
                  <li>Not interfere with the proper functioning of the website</li>
                  <li>Not attempt to gain unauthorized access to any portion of the website</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>

                <h2 className="m-b20">Product Information</h2>
                <p className="m-b30">
                  The information about insurance products displayed on our website is provided by the respective insurance companies. While we strive to ensure accuracy, we do not guarantee that all information is complete or current. We recommend reading the policy documents carefully before making any purchase decision.
                </p>

                <h2 className="m-b20">No Warranty</h2>
                <p className="m-b30">
                  Our website and services are provided "as is" without any warranties of any kind. We do not warrant that our website will be uninterrupted, error-free, or free of viruses or other harmful components.
                </p>

                <h2 className="m-b20">Limitation of Liability</h2>
                <p className="m-b30">
                  To the maximum extent permitted by law, DYS FamilyRaksha Insurance web aggregators Private Limited shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our website or services.
                </p>

                <h2 className="m-b20">Intellectual Property</h2>
                <p className="m-b30">
                  All content on our website, including text, graphics, logos, images, and software, is the property of DYS FamilyRaksha Insurance web aggregators Private Limited or its licensors and is protected by copyright and other intellectual property laws.
                </p>

                <h2 className="m-b20">Changes to Terms</h2>
                <p className="m-b30">
                  We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website. Your continued use of the website after such changes constitutes your acceptance of the new terms.
                </p>

                <h2 className="m-b20">Contact Information</h2>
                <p className="m-b10">
                  If you have any questions about these Terms and Conditions, please contact us at:
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

export default TermsConditions;
