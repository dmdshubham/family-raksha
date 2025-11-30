import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TermLifeInsurance = () => {
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
    // Navigate to term insurance quotes page with form data
    navigate('/term-insurance-quotes', { state: formData });
  };

  const whyChoose = [
    {
      title: "Transparent pricing",
      description: "Term Insurance through Family Raksha gets value for your money. We know exactly what you are paying for and can be confident that you are getting the coverage you need at a fair price.",
      image: "/assets/images/services/terms/transparent-pricing.webp",
      colorClass: "bg-yellow shadow-yellow",
      delay: "0.1s"
    },
    {
      title: "Affordable Protection",
      description: "Term Insurance policies through Family Raksha are cost-effective, providing high coverage at low premiums. You can ensure your family's well-being without straining your budget.",
      image: "/assets/images/services/terms/affordable-protection.webp",
      colorClass: "bg-red shadow-red",
      delay: "0.2s",
      active: true
    },
    {
      title: "Financial Security",
      description: "In the event of your unfortunate demise, Term Insurance through Family Raksha provides a lump-sum payout to your beneficiaries, ensuring that they are financially supported during a difficult time.",
      image: "/assets/images/services/terms/financial-security.webp",
      colorClass: "bg-green shadow-green",
      delay: "0.3s"
    },
    {
      title: "Customizable Plans",
      description: "Term Insurance through Family Raksha offers a range of term insurance plans that can be tailored to meet your specific needs. Whether you're looking for pure protection or additional benefits, we have you covered.",
      image: "/assets/images/services/terms/customizable-plans.webp",
      colorClass: "bg-skyblue shadow-skyblue",
      delay: "0.4s"
    },
    {
      title: "Flexible Policy Terms",
      description: "Choose the policy term that suits you, whether it's 10, 20, or 30 years. We ensure you have the flexibility to match your coverage to your different stages of life.",
      image: "/assets/images/services/terms/flexible-policy-terms.webp",
      colorClass: "bg-orange shadow-orange",
      delay: "0.5s"
    },
    {
      title: "No Medical Exam Options",
      description: "We understand that life is busy. That's why Term Insurance Through Family Raksha offers options that don't require a medical exam, making it easy to secure your family's future.",
      image: "/assets/images/services/terms/no-medical-exam-options.webp",
      colorClass: "bg-maroon shadow-maroon",
      delay: "0.6s"
    }
  ];

  const features = [
    {
      title: "Pure Term Insurance",
      description: "Term insurance plan provides a lump-sum payout to your beneficiaries in case of your untimely demise.",
      image: "/assets/images/services/terms/pure-term-insurance.webp",
      colorClass: "text-red"
    },
    {
      title: "Term Insurance with Riders",
      description: "Enhance your coverage with optional riders such as critical illness, accidental death, or disability benefits.",
      image: "/assets/images/services/terms/rider.webp",
      colorClass: "text-yellow"
    },
    {
      title: "Return of Premium Term Insurance",
      description: "Get back all the premiums paid if you outlive the policy term, combining protection and savings.",
      image: "/assets/images/services/terms/return-of-premium.webp",
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
                  Secure your loved ones future with Term Insurance
                </h1>
                <p data-wow-delay="1.5s" data-wow-duration="3s" className="wow fadeInUp description m-b20 pt-2">
                  At Family Raksha, we understand the true value of family and the importance of safeguarding your loved ones and your assets. We are your trusted partner in providing comprehensive insurance solutions that offer peace of mind and financial security. With us, you can focus on what truly matters, knowing that your family's future is in safe hands.
                </p>
              </div>
            </div>
            <div className="col-xl-5 col-md-5">
              <div className="service-form">
                <form onSubmit={handleSubmit} className="dzForm">
                  <div className="dzFormMsg"></div>
                  <input type="hidden" name="dzToDo" value="Contact" />
                  
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

                  <button type="submit" className="btn btn-primary gradient w-100">
                    Get Free Quote
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Term Insurance */}
      <section className="content-inner why-choose-terms bgl-primary" style={{ backgroundImage: 'url(/assets/images/bg1.webp)' }}>
        <div className="container">
          <div className="section-head style-4 text-center">
            <h6 className="sub-title">&nbsp;</h6>
            <h2 className="title">Why Choose Term Insurance?</h2>
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
                <h2 className="title">Term Insurance</h2>
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
                <img src="/assets/images/services/terms/feature-term-insurance.webp" className="move-2" alt="Term Insurance Features" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermLifeInsurance;
