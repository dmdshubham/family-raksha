import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    // Auto-open popup after 10 seconds
    const timer = setTimeout(() => {
      const hasSubmitted = sessionStorage.getItem('enquirySubmitted');
      if (!hasSubmitted) {
        setIsPopupOpen(true);
        sessionStorage.setItem('autoPopupShown', 'true');
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const openEnquiryPopup = () => {
    setIsPopupOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeEnquiryPopup = () => {
    setIsPopupOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = {
      name: e.target.full_name.value.trim(),
      email: e.target.email.value.trim(),
      phone: e.target.phone.value.trim()
    };

    const messageDiv = document.getElementById('footer-form-message');

    if (!formData.name || !formData.phone) {
      messageDiv.innerHTML = '<span style="color: #dc3545;">Please enter your name and phone number.</span>';
      return;
    }

    const submitBtn = document.getElementById('footer-submit-btn');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';
    messageDiv.innerHTML = '';

    // Simulate API call (replace with actual API)
    setTimeout(() => {
      messageDiv.innerHTML = '<span style="color: #28a745; font-weight: 600;">✓ Thank you! We will contact you shortly.</span>';
      sessionStorage.setItem('enquirySubmitted', 'true');
      e.target.reset();
      
      setTimeout(() => {
        closeEnquiryPopup();
        messageDiv.innerHTML = '';
      }, 2000);

      submitBtn.disabled = false;
      submitBtn.textContent = 'Enquire Now!';
    }, 1000);
  };

  return (
    <>
      {/* Footer */}
      <footer className="site-footer style-4" id="footer" style={{ backgroundImage: 'url(/assets/images/bg22.webp)', backgroundSize: 'cover' }}>
        <div className="footer-top">
          <div className="container">
            <div className="wrapper-inner">
              <div className="row align-items-center">
                <div className="col-xl-12 col-md-12 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.1s">
                  {/* Footer top content can go here */}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                <h5 className="footer-title">ABOUT US</h5>
                <p>Welcome to FamilyRaksha.com, your one-stop destination for all your insurance needs. We are a leading insurance web aggregator, specializing in providing comprehensive and tailor-made insurance solutions to protect you and your family's future.</p>
              </div>

              <div className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.3s">
                <div className="widget widget_getintuch">
                  <h5 className="footer-title">Contact Us</h5>
                  <ul>
                    <li>
                      <i className="fa fa-map-marker"></i>
                      <span>Harrydutt street, 100 P, Sector 41, Gurugram, Haryana 122001</span>
                    </li>
                    <li>
                      <i className="fa fa-phone"></i>
                      <span><a href="tel:+917014363916">+91 70143 63916</a></span>
                    </li>
                    <li>
                      <i className="fa fa-envelope"></i>
                      <span><a href="mailto:contact@familyraksha.com">contact@familyraksha.com</a></span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.5s">
                <div className="widget widget_services style-1">
                  <h5 className="footer-title">Insurance Plans</h5>
                  <ul>
                    <li><Link to="/term-life-insurance">Term Life Insurance</Link></li>
                    <li><Link to="/investment-plans">Investment Plans</Link></li>
                    <li><Link to="/health-insurance">Health Insurance</Link></li>
                    {/* <li><Link to="/term-women-insurance">Term (Women) Insurance</Link></li> */}
                  </ul>
                </div>
              </div>
              
              <div className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
                <div className="widget widget_services style-1">
                  <h5 className="footer-title">Other Links</h5>
                  <ul>
                    <li><Link to="/about-us">About US</Link></li>
                    <li><a href="#faq">FAQ</a></li>
                    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                    <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
                    <li><Link to="/grievance-redressal">Grievance Redressal</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8 text-left">
                <div className="copyright-text">
                  <p>Copyright © 2024 DYS FamilyRaksha Insurance web aggregators Private Limited. All rights reserved.</p>
                </div>
              </div>
              <div className="col-md-4 text-left">
                <div className="dlab-social-icon">
                  <ul>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer End */}
      <button className="scroltop icon-up" type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <i className="fa fa-arrow-up"></i>
      </button>

      {/* WhatsApp Button */}
      <a href="https://api.whatsapp.com/send?phone=%20+919236097624&text=Hi!%20I%20am%20looking%20to%20buy%20health%20insurance.%20Can%20you%20help%20me%20familyraksha.com%20team?"
         className="whatsapp-button" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i> Chat Us
      </a>

      {/* Enquire Now Floating Button */}
      <button className="enquire-button" type="button" onClick={openEnquiryPopup}>
        <i className="fas fa-file-alt"></i> Enquire Now
      </button>

      {/* Enquiry Popup Modal */}
      <div id="enquiry-popup" className={`enquiry-popup-overlay ${isPopupOpen ? 'active' : ''}`}>
        <div className="enquiry-popup-content">
          <button className="popup-close" onClick={closeEnquiryPopup}>&times;</button>
          <h3>Buying health insurance for?</h3>
          <form id="footer-enquiry-form" className="enquiry-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" id="footer-name" name="full_name" placeholder="Full Name *" required />
            </div>
            <div className="form-group">
              <input type="tel" id="footer-phone" name="phone" placeholder="Phone Number *" required pattern="[0-9]{10,15}" />
            </div>
            <div className="form-group">
              <input type="email" id="footer-email" name="email" placeholder="Email Id (Optional)" />
            </div>
            <button type="submit" className="btn-submit" id="footer-submit-btn">Enquire Now!</button>
            <div id="footer-form-message" style={{ marginTop: '15px', fontSize: '14px', textAlign: 'center' }}></div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Footer;
