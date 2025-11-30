import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HealthInsurance = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: 'Male'
  });

  useEffect(() => {
    // Initialize WOW.js for animations
    if (typeof WOW !== 'undefined') {
      new WOW().init();
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Navigate to health insurance quotes page with form data
    navigate('/health-insurance-quotes', { state: formData });
  };

  const whyChoose = [
    {
      title: "Tax Savings",
      description: "Under Section 80D of the Income Tax Act, 1961, you can claim tax deductions for the premium paid towards your health insurance policy. For individuals below 60 years of age, the deduction limit is up to Rs. 25,000, while for senior citizens, it goes up to Rs. 50,000",
      image: "/assets/images/services/health/tax-saving.webp",
      colorClass: "bg-yellow shadow-yellow",
      delay: "0.1s"
    },
    {
      title: "Affordable Protection",
      description: "Our partners' Health Insurance policies are crafted to provide extensive coverage. From hospitalisation expenses to preventive care, we have you covered for all your healthcare needs.",
      image: "/assets/images/services/health/affordable-protection.webp",
      colorClass: "bg-red shadow-red",
      delay: "0.2s",
      active: true
    },
    {
      title: "Tailored Solutions",
      description: "Tailored health insurance offers family floater plans, covering the entire family under one sum insured, and individual plans, providing personalized coverage for each member based on their unique needs.",
      image: "/assets/images/services/health/tailored-solutions.webp",
      colorClass: "bg-green shadow-green",
      delay: "0.3s"
    },
    {
      title: "Network of Quality Healthcare Providers",
      description: "Health Insurance through Familyraksha has partnered with a vast network of hospitals and healthcare providers, giving you access to high-quality medical care whenever you need it.",
      image: "/assets/images/services/health/network-of-quality-health-care-providers.webp",
      colorClass: "bg-skyblue shadow-skyblue",
      delay: "0.4s"
    },
    {
      title: "Expert Guidance",
      description: "Our partners experienced insurance advisors are here to guide you through the process, helping you choose the right plan and answering all your questions.",
      image: "/assets/images/services/health/expert-guidance.webp",
      colorClass: "bg-orange shadow-orange",
      delay: "0.5s"
    },
    {
      title: "Competitive Premiums",
      description: "Quality healthcare shouldn't be a burden. Health Insurance through Familyraksha offers competitive premiums without compromising on coverage.",
      image: "/assets/images/services/health/competitive-premium.webp",
      colorClass: "bg-maroon shadow-maroon",
      delay: "0.6s"
    }
  ];

  const features = [
    {
      title: "Medical Expenses with Cashless Hospitalization",
      description: "Covers medical costs with direct insurer-hospital billing, reducing out-of-pocket expenses.",
      image: "/assets/images/services/health/Medical_Expenses.webp",
      colorClass: "text-red"
    },
    {
      title: "Pre and Post-Hospitalization Coverage",
      description: "Covers related medical costs before and after hospitalization, including tests and follow-up treatments.",
      image: "/assets/images/services/health/Pre_and_Post.webp",
      colorClass: "text-yellow"
    },
    {
      title: "Pre-existing Condition Coverage",
      description: "Covers existing conditions after a waiting period, ensuring necessary care for chronic illnesses.",
      image: "/assets/images/services/health/Pre_existing.webp",
      colorClass: "text-green"
    }
  ];

  return (
    <div className="fr-services page-content bg-white">
      {/* Hero Section with Form */}
      <div className="banner-four" style={{ backgroundImage: 'url(/assets/images/bg2.webp)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <div className="container banner-inner">
          <div className="row align-items-center">
            <div className="col-xl-7 col-md-7">
              <div className="banner-content">
                <h1 data-wow-delay="1s" data-wow-duration="3s" className="wow fadeInUp title m-b15">
                  Get Your Health Insurance
                </h1>
                <p data-wow-delay="1.5s" data-wow-duration="3s" className="wow fadeInUp description m-b20 pt-2">
                  At Familyraksha, we believe that your health is your most valuable asset. We're here to help you protect it and ensure that you and your loved ones have access to the best medical care, no matter what life brings your way. Our partners Health Insurance plans are designed to provide comprehensive coverage, giving you peace of mind and financial security during life's unexpected challenges.
                </p>
              </div>
            </div>
            <div className="col-xl-5 col-md-5">
              <div className="service-form">
                <form onSubmit={handleSubmit} className="dzForm">
                  <div className="dzFormMsg"></div>
                  <input type="hidden" name="dzToDo" value="Contact" />
                  
                 

                  <div className="form-group mb-3">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-control"
                      placeholder="Full Name *"
                      required
                    />
                  </div>

                  <div className="form-group mb-3">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-control"
                      placeholder="Email *"
                      required
                    />
                  </div>

                  <div className="form-group mb-3">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-control"
                      placeholder="Phone Number *"
                      required
                      pattern="[0-9]{10,15}"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <div className="input-group">
                      <label className="me-3">
                        <input 
                          type="radio" 
                          name="gender" 
                          value="Male" 
                          checked={formData.gender === 'Male'}
                          onChange={handleInputChange}
                          className="me-1"
                        />
                        Male
                      </label>
                      <label>
                        <input 
                          type="radio" 
                          name="gender" 
                          value="Female" 
                          checked={formData.gender === 'Female'}
                          onChange={handleInputChange}
                          className="me-1"
                        />
                        Female
                      </label>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary gradient w-100">
                    Get Free Quote
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Health Insurance */}
      <section className="content-inner why-choose-health bgl-primary" style={{ backgroundImage: 'url(/assets/images/bg1.webp)' }}>
        <div className="container">
          <div className="section-head style-4 text-center">
            <h6 className="sub-title">&nbsp;</h6>
            <h2 className="title">Why Choose Health Insurance?</h2>
          </div>
          <div className="row">
            {whyChoose.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay={item.delay}>
                <div className={`icon-bx-wraper style-1 box-hover text-center m-b30 ${item.active ? 'active' : ''}`}>
                  <div className={`icon-bx-md radius ${item.colorClass}`}>
                    <a href="javascript:void(0);" className="icon-cell">
                      <img src={item.image} alt={item.title} />
                    </a>
                  </div>
                  <div className="icon-content">
                    <h4 className="dlab-title">{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="content-inner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-7 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
              <div className="section-head style-1">
                <h6 className="sub-title">FEATURES</h6>
                <h2 className="title">Health Insurance</h2>
              </div>
              <div className="section-wraper-one">
                {features.map((feature, index) => (
                  <div key={index} className="icon-bx-wraper style-2 left m-b30">
                    <div className={`icon-bx-md radius bg-white ${feature.colorClass}`}>
                      <a href="javascript:void(0);" className="icon-cell">
                        <img src={feature.image} alt={feature.title} />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h4 className="dlab-title">{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xl-6 col-lg-5 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
              <div className="dlab-media cf-r-img">
                <img src="/assets/images/services/health/health-feature.webp" className="move-2" alt="Health Insurance Features" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthInsurance;
