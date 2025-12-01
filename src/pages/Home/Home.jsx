import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    // Initialize WOW.js for animations
    if (typeof WOW !== 'undefined') {
      new WOW().init();
    }

    // Initialize counter with a slight delay to ensure DOM is ready
    const initCounter = () => {
      if (typeof $ !== 'undefined' && typeof jQuery !== 'undefined') {
        // Check if counterUp plugin is loaded
        if ($.fn.counterUp) {
          // Destroy any existing counter instances first
          $('.counter').each(function() {
            $(this).removeData('counterup-nums');
          });
          
          // Initialize counter
          $('.counter').counterUp({
            delay: 10,
            time: 3000
          });
        }
      }
    };

    // Use setTimeout to ensure scripts are fully loaded
    const timer = setTimeout(() => {
      initCounter();
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="page-content bg-white">
      
      {/* Slider */}
      <div className="banner-four" style={{ backgroundImage: 'url(/assets/images/bg2.webp)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <div className="container banner-inner">
          <div className="row align-items-center">
            <div className="col-xl-7 col-md-7">
              <div className="banner-content ">
                <h6 data-wow-delay="0.5s" data-wow-duration="3s" className="wow fadeInUp sub-title pb-1 text-yellow">Secure Insurance Platform</h6>
                <h1 data-wow-delay="1s" data-wow-duration="3s" className="wow fadeInUp title m-b15">Protecting What<br/> Matters Most</h1>
                <p data-wow-delay="1.5s" data-wow-duration="3s" className="wow fadeInUp description m-b20 pt-2">At Family Raksha, we understand the true value of family and the importance of safeguarding your loved ones and your assets. We are your trusted partner in providing comprehensive insurance solutions that offer peace of mind and financial security. With us, you can focus on what truly matters, knowing that your family's future is in safe hands.</p>
                <ul className="m-b30">
                  <li className="wow fadeInUp" data-wow-delay="1.5s">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="9" cy="9" r="6" fill="currentColor"></circle>
                      <circle cx="9" cy="9" r="7.5" stroke="currentColor" strokeOpacity="0.3" strokeWidth="3"></circle>
                    </svg>
                    Provides Financial Security
                  </li>
                  <li className="wow fadeInUp" data-wow-delay="1.5s">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="9" cy="9" r="6" fill="currentColor"></circle>
                      <circle cx="9" cy="9" r="7.5" stroke="currentColor" strokeOpacity="0.3" strokeWidth="3"></circle>
                    </svg>
                    Tax Benefits
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-5 col-md-5">
              <div className="dz-media wow fadeIn" data-wow-delay="1s" data-wow-duration="3s">
                <svg width="679" height="680" viewBox="0 0 679 680" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_16_993)">
                    <path d="M169.962 120.407C185.63 60.8492 259.895 40.5862 303.64 83.9334L590.514 368.2C634.259 411.548 614.674 485.995 555.262 502.205L165.643 608.512C106.23 624.722 51.5496 570.538 67.217 510.98L169.962 120.407Z" fill="currentColor"></path>
                  </g>
                  <defs>
                    <filter id="filter0_d_16_993" x="0.501526" y="0.708908" width="677.75" height="678.711" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                      <feOffset dy="4"></feOffset>
                      <feGaussianBlur stdDeviation="32"></feGaussianBlur>
                      <feComposite in2="hardAlpha" operator="out"></feComposite>
                      <feColorMatrix type="matrix" values="0 0 0 0 0.45098 0 0 0 0 0.333333 0 0 0 0 0.968627 0 0 0 0.4 0"></feColorMatrix>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16_993"></feBlend>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16_993" result="shape"></feBlend>
                    </filter>
                    <linearGradient id="paint0_linear_16_993" x1="205.214" y1="-13.5979" x2="412.198" y2="745.011" gradientUnits="userSpaceOnUse">
                      <stop offset="1" stopColor="#7355F7"></stop>
                      <stop offset="1" stopColor="#1A008A"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <img src="/assets/images/main-banner/main-banner.webp" alt="Main Banner" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="content-inner bg-white" style={{ backgroundImage: 'url(/assets/images/bg17.webp)', backgroundSize: 'cover' }}>
        <div className="container">
          <div className="section-head style-4 text-center">
            <h6 className="sub-title">Insurance Plans</h6>
            <h2 className="title">Our Insurance Services</h2>
          </div>
          <div className="row">
            <div className="col-xl-3 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.1s">
              <div className="icon-bx-wraper style-10 box-hover text-center m-b30 active show">
                <div className="icon-bx">
                  <span className="icon-cell">
                    <img src="/assets/images/services/term-insurance.webp" alt="Term Life Insurance" />
                  </span>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title m-b15">Term Life Insurance</h4>
                  <p className="m-b20">Secure your loved ones future with Term Insurance through Family Raksha</p>
                  <Link to="/term-life-insurance" className="btn"><i className="fa fa-angle-right"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
              <div className="icon-bx-wraper style-10 box-hover text-center m-b30">
                <div className="icon-bx">
                  <span className="icon-cell">
                    <img src="/assets/images/services/investment-insurance.webp" alt="Investment Plans" />
                  </span>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title m-b15">Investment Plans</h4>
                  <p className="m-b20">Grow your wealth through Family Raksha's strategic investment plans.</p>
                  <Link to="/investment-plans" className="btn"><i className="fa fa-angle-right"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
              <div className="icon-bx-wraper style-10 box-hover text-center m-b30">
                <div className="icon-bx">
                  <span className="icon-cell">
                    <img src="/assets/images/services/health-insurance.webp" alt="Health Insurance" />
                  </span>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title m-b15">Health Insurance</h4>
                  <p className="m-b20">Quality health insurance for you and your family with <br/>Family Raksha</p>
                  <Link to="/health-insurance" className="btn"><i className="fa fa-angle-right"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
              <div className="icon-bx-wraper style-10 box-hover text-center m-b30">
                <div className="icon-bx">
                  <span className="icon-cell">
                    <img src="/assets/images/services/woman-term-insurance.webp" alt="Term (Women) Insurance" />
                  </span>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title m-b15">Term (Women) Insurance</h4>
                  <p className="m-b20">Secure your loved ones future with Term Insurance through Family Raksha</p>
                  {/* <Link to="/term-women-insurance" className="btn"><i className="fa fa-angle-right"></i></Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Counter */}
      <section className="content-inner bg-primary" style={{ backgroundImage: 'url(/assets/images/bg22.webp)', backgroundSize: 'cover' }}>
        <div className="container">
          <div className="section-head style-4 text-center wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.1s">
            <h2 className="title text-white">Our Milestones</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-5 col-sm-6 col-10">
              <div className="icon-bx-wraper style-11 left box-hover m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                <div className="icon-bx-sm radius">
                  <a href="javascript:void(0);" className="icon-cell">
                    <img src="/assets/images/icon/Satisfied-Clients.webp" alt="Satisfied Clients" />
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title mb-0"><span className="counter">2.5</span>k+</h4>
                  <p>Satisfied Clients</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-5 col-sm-6 col-10">
              <div className="icon-bx-wraper style-11 left box-hover m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                <div className="icon-bx-sm radius">
                  <a href="javascript:void(0);" className="icon-cell">
                    <img src="/assets/images/icon/Happy-Clients.webp" alt="Happy Clients" />
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title mb-0"><span className="counter">30</span>+</h4>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-5 col-sm-6 col-10">
              <div className="icon-bx-wraper style-11 left box-hover m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="1.5s">
                <div className="icon-bx-sm radius">
                  <a href="javascript:void(0);" className="icon-cell">
                    <img src="/assets/images/icon/Our-Partners.webp" alt="Our Partners" />
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title mb-0"><span className="counter">8</span></h4>
                  <p>Our Partners</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-5 col-sm-6 col-10">
              <div className="icon-bx-wraper style-11 left box-hover m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="2s">
                <div className="icon-bx-sm radius">
                  <a href="javascript:void(0);" className="icon-cell">
                    <img src="/assets/images/icon/Years-Completed.webp" alt="Years Completed" />
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title mb-0"><span className="counter">1</span>+</h4>
                  <p>Years Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature */}
      <section className="content-inner-2 bg-white" style={{ backgroundImage: 'url(/assets/images/bg20.webp)', backgroundSize: '100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
              <div className="section-head style-4 mb-0">
                <h6 className="sub-title">FamilyRaksha</h6>
                <h2 className="title font-w700">Why Choose</h2>
              </div>
              <div className="dz-content">
                <p className="m-b30">The company emphasises four key features: transparent pricing, excellent customer support, customizable policies, and a quick and easy application process. Our aim is to provide value for money and ensure that customers are confident they are getting the coverage they need at a fair price , Additionally, We provide a quick and easy online application process with minimal paperwork and hassle.</p>
                <Link to="/about-us" className="btn btn-primary gradient rounded-xl">LEARN MORE</Link>
              </div>
            </div>
            <div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
              <div className="icon-bx-wraper style-12 wow zoomIn" data-wow-delay="1s">
                <ul className="nav nav-tabs" style={{"--sr-total": 8}}>
                  <li className="nav-item" style={{"--sr-item":1}}>
                    <a className="nav-link" href="javascript:void(0);" data-bs-toggle="tab" data-bs-target="#service1">
                      <img src="/assets/images/icon/transparent-pricing.webp" alt="Transparent pricing" />
                    </a>
                  </li>
                  <li className="nav-item" style={{"--sr-item":2}}>
                    <a className="nav-link" href="javascript:void(0);" data-bs-toggle="tab" data-bs-target="#service2">
                      <img src="/assets/images/icon/family-centric-approach.webp" alt="Family-Centric Approach" />
                    </a>
                  </li>
                  <li className="nav-item active" style={{"--sr-item":3}}>
                    <a className="nav-link" href="javascript:void(0);" data-bs-toggle="tab" data-bs-target="#service3">
                      <img src="/assets/images/icon/comprehensive-coverage.webp" alt="Comprehensive Coverage" />
                    </a>
                  </li>
                  <li className="nav-item" style={{"--sr-item":4}}>
                    <a className="nav-link" href="javascript:void(0);" data-bs-toggle="tab" data-bs-target="#service4">
                      <img src="/assets/images/icon/trusted-expertise.webp" alt="Trusted Expertise" />
                    </a>
                  </li>
                  <li className="nav-item" style={{"--sr-item":5}}>
                    <a className="nav-link active" href="javascript:void(0);" data-bs-toggle="tab" data-bs-target="#service5">
                      <img src="/assets/images/icon/personalised-service.webp" alt="Personalised Service" />
                    </a>
                  </li>
                  <li className="nav-item" style={{"--sr-item":6}}>
                    <a className="nav-link" href="javascript:void(0);" data-bs-toggle="tab" data-bs-target="#service6">
                      <img src="/assets/images/icon/competitive-rates.webp" alt="Competitive Rates" />
                    </a>
                  </li>
                  <li className="nav-item" style={{"--sr-item":7}}>
                    <a className="nav-link" href="javascript:void(0);" data-bs-toggle="tab" data-bs-target="#service7">
                      <img src="/assets/images/icon/24into7.webp" alt="24x7 Support" />
                    </a>
                  </li>
                  <li className="nav-item" style={{"--sr-item":8}}>
                    <a className="nav-link" href="javascript:void(0);" data-bs-toggle="tab" data-bs-target="#service8">
                      <img src="/assets/images/icon/zero-commission.webp" alt="Zero commission" />
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane fade" id="service1">
                    <div className="icon-bx-wraper text-center">
                      <div className="icon-bx">
                        <img src="/assets/images/icon/transparent-pricing.webp" alt="Transparent pricing" />
                      </div>
                      <div className="icon-content">
                        <h4 className="dlab-title m-b15">Transparent pricing</h4>
                        <p className="m-b20 px-4">Term Insurance through Family Raksha gets value for your money. We know exactly what you are paying for and can be confident that you are getting the coverage you need at a fair price.</p>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="service2">
                    <div className="icon-bx-wraper text-center">
                      <div className="icon-bx">
                        <img src="/assets/images/icon/family-centric-approach.webp" alt="Family-Centric Approach" />
                      </div>
                      <div className="icon-content">
                        <h4 className="dlab-title m-b15">Family-Centric Approach</h4>
                        <p className="m-b20 px-4">We put your family first. Our Partners insurance plans are tailored to meet your unique needs, ensuring that you have the protection and coverage that&apos;s just right for you and your loved ones.</p>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade active show" id="service3">
                    <div className="icon-bx-wraper text-center">
                      <div className="icon-bx">
                        <img src="/assets/images/icon/comprehensive-coverage.webp" alt="Comprehensive Coverage" />
                      </div>
                      <div className="icon-content">
                        <h4 className="dlab-title m-b15">Comprehensive Coverage</h4>
                        <p className="m-b20 px-4">From life and health insurance to home and auto protection, Our Partners offer a wide range of insurance products to ensure every aspect of your life is secure.</p>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="service4">
                    <div className="icon-bx-wraper text-center">
                      <div className="icon-bx">
                        <img src="/assets/images/icon/trusted-expertise.webp" alt="Trusted Expertise" />
                      </div>
                      <div className="icon-content">
                        <h4 className="dlab-title m-b15">Trusted Expertise</h4>
                        <p className="m-b20 px-4">With extensive industry experience, our partners and team of expert advisors are dedicated to guiding you through the insurance landscape, ensuring you make informed and confident decisions.</p>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="service5">
                    <div className="icon-bx-wraper text-center">
                      <div className="icon-bx">
                        <img src="/assets/images/icon/personalised-service.webp" alt="Personalised Service" />
                      </div>
                      <div className="icon-content">
                        <h4 className="dlab-title m-b15">Personalised Service</h4>
                        <p className="m-b20 px-4">Your needs are unique, and we treat them as such. Our partners agents work closely with you to understand your individual situation and develop a personalised insurance plan that suits your requirements</p>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="service6">
                    <div className="icon-bx-wraper text-center">
                      <div className="icon-bx">
                        <img src="/assets/images/icon/competitive-rates.webp" alt="Competitive Rates" />
                      </div>
                      <div className="icon-content">
                        <h4 className="dlab-title m-b15">Competitive Rates</h4>
                        <p className="m-b20 px-4">We believe that quality insurance shouldn&apos;t break the bank. Familyraksha web aggregator offers competitive rates without compromising on coverage.</p>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="service7">
                    <div className="icon-bx-wraper text-center">
                      <div className="icon-bx">
                        <img src="/assets/images/icon/24into7.webp" alt="24x7 Support" />
                      </div>
                      <div className="icon-content">
                        <h4 className="dlab-title m-b15">24x7 Support</h4>
                        <p className="m-b20 px-4">Enjoy non-stop support for your insurance services with our 24/7 assistance. </p>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="service8">
                    <div className="icon-bx-wraper text-center">
                      <div className="icon-bx">
                        <img src="/assets/images/icon/zero-commission.webp" alt="Zero commission" />
                      </div>
                      <div className="icon-content">
                        <h4 className="dlab-title m-b15">Zero commission </h4>
                        <p className="m-b20 px-4">We help securing your future without any fees.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Will be added via component */}
      <section className="content-inner-1 testimonials-section" style={{ backgroundImage: 'url(/assets/images/bg10.webp)' }}>
        <div className="container">
          <div className="section-head style-4 text-center">
            <h6 className="sub-title">Testimonial</h6>
            <h2 className="title">What Our Clients Say&apos;s</h2>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.1s">
              <div className="testimonial-5">
                <div className="testimonial-detail m-b20">
                  <div className="testimonial-pic">
                    <h3 className="first-character">RM</h3>
                  </div>
                  <div className="clearfix">
                    <strong className="testimonial-name">Rohan Mehta</strong>
                    <ul className="testimonial-rating">
                      <li><img src="/assets/images/testimonials/Star1.webp" alt="star" /></li>
                      <li><img src="/assets/images/testimonials/Star1.webp" alt="star" /></li>
                      <li><img src="/assets/images/testimonials/Star1.webp" alt="star" /></li>
                      <li><img src="/assets/images/testimonials/Star1.webp" alt="star" /></li>
                      <li><img src="/assets/images/testimonials/Star1.webp" alt="star" /></li>
                    </ul>
                  </div>
                </div>
                <div className="testimonial-text">
                  <p>Recently purchased health insurance for a family member. Very good support was provided by the team. cleared all the doubts and explained all the features of the policy. Gave the plan that exactly fits my requirements.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
              <div className="testimonial-5">
                <div className="testimonial-detail m-b20">
                  <div className="testimonial-pic">
                    <h3 className="first-character">HB</h3>
                  </div>
                  <div className="clearfix">
                    <strong className="testimonial-name">HARDEEP BHARGAV</strong>
                    <ul className="testimonial-rating">
                      <li><img src="/assets/images/testimonials/Star1.webp" alt="star" /></li>
                      <li><img src="/assets/images/testimonials/Star1.webp" alt="star" /></li>
                      <li><img src="/assets/images/testimonials/Star1.webp" alt="star" /></li>
                      <li><img src="/assets/images/testimonials/Star1.webp" alt="star" /></li>
                      <li><img src="/assets/images/testimonials/Star1.webp" alt="star" /></li>
                    </ul>
                  </div>
                </div>
                <div className="testimonial-text">
                  <p>I&apos;m thrilled with my term insurance from family raksha, The process was smooth, their executive clear all my doubts. Customer support was exceptional, guiding me effortlessly. I feel secure with their comprehensive coverage. Highly recommend them for a hassle-free, trustworthy insurance experience.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
              <div className="testimonial-5">
                <div className="testimonial-detail m-b20">
                  <div className="testimonial-pic">
                    <h3 className="first-character">NT</h3>
                  </div>
                  <div className="clearfix">
                    <strong className="testimonial-name">Navneet Thapa</strong>
                    <ul className="testimonial-rating">
                      <li><img src="/assets/images/testimonials/Star1.webp" alt="star" /></li>
                      <li><img src="/assets/images/testimonials/Star1.webp" alt="star" /></li>
                      <li><img src="/assets/images/testimonials/Star1.webp" alt="star" /></li>
                      <li><img src="/assets/images/testimonials/Star1.webp" alt="star" /></li>
                      <li><img src="/assets/images/testimonials/Star1.webp" alt="star" /></li>
                    </ul>
                  </div>
                </div>
                <div className="testimonial-text">
                  <p>Had a great experience buying the insurance policy of my scooty particularly from Karan(advisor) he had a keen knowledge of the policy and guided me adequately for my insurance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Logo Section */}
      <section className="content-inner bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-2 col-md-3 col-sm-4 col-6 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.1s">
              <div className="clients-logo">
                <img src="/assets/images/partners/niva.svg" alt="Niva" />
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
              <div className="clients-logo">
                <img src="/assets/images/partners/aditya.svg" alt="Aditya Birla" />
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
              <div className="clients-logo">
                <img src="/assets/images/partners/care.svg" alt="Care" />
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
              <div className="clients-logo">
                <img src="/assets/images/partners/bajaj.svg" alt="Bajaj" />
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
              <div className="clients-logo">
                <img src="/assets/images/partners/helth.svg" alt="Health" />
              </div>
            </div>
            {/* <div className="col-lg-2 col-md-3 col-sm-4 col-6 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
              <div className="clients-logo">
                <img src="/assets/images/partners/manipal.svg" alt="Manipal" />
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.7s">
              <div className="clients-logo">
                <img src="/assets/images/partners/star.svg" alt="Star" />
              </div>
            </div> */}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
