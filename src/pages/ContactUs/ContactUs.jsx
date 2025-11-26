import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    insuranceType: 'Term Insurance',
    message: ''
  });

  useEffect(() => {
    // Initialize WOW.js for animations
    if (typeof WOW !== 'undefined') {
      new WOW().init();
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      mobile: '',
      insuranceType: 'Term Insurance',
      message: ''
    });
  };

  return (
    <div className="page-content bg-white">
      {/* Breadcrumb */}
      <div className="dlab-bnr-inr overlay-gradient-dark text-center" style={{ backgroundImage: 'url(/assets/images/banner4.webp)' }}>
        <div className="container">
          <div className="dlab-bnr-inr-entry">
            <h1>Contact US</h1>
            <nav aria-label="breadcrumb" className="breadcrumb-row">
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Contact US</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Map & Contact Form */}
      <div className="content-inner-2" style={{ backgroundImage: 'url(/assets/images/background/bg2.webp)', backgroundRepeat: 'no-repeat', backgroundSize: '100%' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 m-b60">
              <div className="map-2">
                <div style={{ width: '100%' }}>
                  <iframe 
                    width="100%" 
                    height="400" 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight="0" 
                    marginWidth="0" 
                    src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Family%20Raksha%20Harrydutt%20street,%20100%20P,%20Sector%2041,%20Gurugram,%20Haryana%20122001+(Family%20Raksha)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    title="Family Raksha Location"
                  >
                  </iframe>
                </div>
              </div>
            </div>
            <div className="col-lg-6 m-b30 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
              {/* Contact Form */}
              <div className="dzFormMsg"></div>
              <form onSubmit={handleSubmit} className="dzForm">
                <input type="hidden" className="form-control" name="dzToDo" value="Contact" />
                <input type="hidden" className="form-control" name="reCaptchaEnable" value="0" />
                
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="input-group">
                      <input 
                        name="name" 
                        type="text" 
                        required 
                        className="form-control" 
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="input-group">
                      <input 
                        name="email" 
                        type="email" 
                        className="form-control" 
                        required 
                        placeholder="Your Email Address"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="input-group">
                      <input 
                        name="mobile" 
                        type="text" 
                        required 
                        className="form-control" 
                        placeholder="Phone"
                        value={formData.mobile}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="input-group">
                      <select 
                        name="insuranceType" 
                        className="form-control form-select"
                        value={formData.insuranceType}
                        onChange={handleChange}
                      >
                        <option value="Term Insurance">Term Insurance</option>
                        <option value="Investment Insurance">Investment Insurance</option>
                        <option value="Health Insurance">Health Insurance</option>
                        <option value="Women Term Insurance">Women Term Insurance</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="input-group">
                      <textarea 
                        name="message" 
                        rows="4" 
                        className="form-control" 
                        required 
                        placeholder="Your Message..."
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <button 
                      name="submit" 
                      type="submit" 
                      value="Submit" 
                      className="btn btn-primary gradient btn-block rounded-xl"
                    >
                      Enquire Now! <i className="fa fa-angle-right m-l10"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Boxes */}
      <div className="content-inner-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="icon-bx-wraper style-9 m-md-b60 center">
                <div className="icon-bx-sm radius gradient">
                  <a href="javascript:void(0);" className="icon-cell text-white">
                    <i className="las la-phone-volume"></i>
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">Call Now</h4>
                  <p>+91 70143 63916</p>
                  <p>&nbsp;</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="icon-bx-wraper style-9 m-md-b60 center">
                <div className="icon-bx-sm radius gradient">
                  <a href="javascript:void(0);" className="icon-cell text-white">
                    <i className="las la-map-marker"></i>
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">Location</h4>
                  <p>Harrydutt street, 100 P, Sector 41, Gurugram, Haryana 122001</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="icon-bx-wraper style-9 center">
                <div className="icon-bx-sm radius gradient">
                  <a href="javascript:void(0);" className="icon-cell text-white">
                    <i className="las la-envelope-open"></i>
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">Email Now</h4>
                  <p>contact@familyraksha.com</p>
                  <p>&nbsp;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

