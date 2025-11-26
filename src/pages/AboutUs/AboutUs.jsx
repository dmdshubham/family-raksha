import { useEffect } from 'react';

const AboutUs = () => {
  useEffect(() => {
    // Initialize WOW.js for animations
    if (typeof WOW !== 'undefined') {
      new WOW().init();
    }
  }, []);

  const milestones = [
    {
      number: 1,
      title: "Our Mission",
      content: "At Family Raksha, our mission is to be the insurance company that families can rely on during life's uncertainties. We understand the importance of family and the deep emotional connection you share with your loved ones. Our primary goal is to offer insurance products and services that bring peace of mind and financial stability to you and your family.",
      align: "left"
    },
    {
      number: 2,
      title: "Our Vision",
      content: "We envision a world where every family can face life's challenges with confidence, knowing they have the support and protection they need. Through our dedication to excellence and customer-centric approach, we strive to become the leading choice for families seeking insurance solutions.",
      align: "right"
    },
    {
      number: 3,
      title: "Join Family Raksha Today",
      content: "We invite you to join our Family Raksha community and experience the peace of mind that comes from knowing your family's future is secure. Whether you are planning for your children's education, safeguarding your family's health, or preparing for any unforeseen circumstances, we are here to help you navigate life's journey with confidence.",
      align: "left"
    },
    {
      number: 4,
      title: "Protect your family",
      content: "Protecting your family is not just a responsibility; it's an expression of love. Let Family Raksha be your partner in protecting the ones you cherish the most. Get in touch with us today to explore our range of insurance solutions or to speak with our friendly team of experts.",
      align: "right"
    }
  ];

  const benefits = [
    "Provides Financial Security",
    "Affordable Option",
    "Customizable Policies",
    "Tax Benefits",
    "Peace of Mind",
    "Protection for Your Business",
    "Coverage Against Critical Illnesses"
  ];

  return (
    <div className="page-content bg-white">
      {/* Breadcrumb */}
      <div className="dlab-bnr-inr overlay-gradient-dark text-center" style={{ backgroundImage: 'url(/assets/images/banner4.webp)' }}>
        <div className="container">
          <div className="dlab-bnr-inr-entry">
            <h1>About US</h1>
            <nav aria-label="breadcrumb" className="breadcrumb-row">
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">About US</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* About Content Section */}
      <section className="content-inner about-wraper-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
              <div className="dz-media left">
                <img src="/assets/images/about-familyraksha.jpg" alt="About Familyraksha" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
              <div className="section-head style-4">
                <h2 className="title">About Familyraksha</h2>
                <p className="m-b30">Welcome to FamilyRaksha.com, your one-stop destination for all your insurance needs. We are a leading insurance web aggregator, specializing in providing comprehensive and tailor-made insurance solutions to protect you and your family's future. Our commitment to excellence, transparency, and customer-centric approach sets us apart as a trusted name in the insurance industry. In this article, we will introduce you to the world of FamilyRaksha.com and its offerings, showcasing why we are the best choice for term insurance, health insurance, and investment plans.</p>
              </div>
              <ul className="list-check primary m-b30">
                {benefits.map((benefit, index) => (
                  <li key={index}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="9" cy="9" r="6" fill="currentColor"></circle>
                      <circle cx="9" cy="9" r="7.5" stroke="currentColor" strokeOpacity="0.3" strokeWidth="3"></circle>
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* History Details - Timeline Section */}
      <section className="content-inner-2 bgl-primary">
        <div className="container">
          <div className="text-center time-line-start">
            <img src="/assets/images/startup.webp" alt="Startup" className="fa faa-horizontal animated" />
          </div>
          <div className="time-line clearfix">
            {/* Timeline Item 1 - Left */}
            <div className="line-left clearfix">
              <div className="line-left-box">
                <div className="line-content-box wow fadeInLeft" data-wow-duration="1.80s" data-wow-delay="0.25s">
                  <h4 className="title">{milestones[0].title}</h4>
                  <p>{milestones[0].content}</p>
                </div>
                <div className="line-num gradient">1</div>
              </div>
            </div>

            {/* Timeline Item 2 - Right */}
            <div className="line-right clearfix">
              <div className="line-right-box">
                <div className="line-content-box wow fadeInRight" data-wow-duration="1.80s" data-wow-delay="0.50s">
                  <h4 className="title">{milestones[1].title}</h4>
                  <p>{milestones[1].content}</p>
                </div>
                <div className="line-num gradient">2</div>
              </div>
            </div>

            {/* Timeline Item 3 - Left */}
            <div className="line-left clearfix">
              <div className="line-left-box">
                <div className="line-content-box wow fadeInLeft" data-wow-duration="1.80s" data-wow-delay="0.75s">
                  <h4 className="title">{milestones[2].title}</h4>
                  <p>{milestones[2].content}</p>
                </div>
                <div className="line-num gradient">3</div>
              </div>
            </div>

            {/* Timeline Item 4 - Right */}
            <div className="line-right clearfix">
              <div className="line-right-box">
                <div className="line-content-box wow fadeInRight" data-wow-duration="1.80s" data-wow-delay="1s">
                  <h4 className="title">{milestones[3].title}</h4>
                  <p>{milestones[3].content}</p>
                </div>
                <div className="line-num gradient">4</div>
              </div>
            </div>
          </div>
          <div className="text-center time-line-end">
            <img src="/assets/images/the-end.webp" alt="The End" />
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
