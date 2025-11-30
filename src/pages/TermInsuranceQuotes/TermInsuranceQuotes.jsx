import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './TermInsuranceQuotes.css';

const TermInsuranceQuotes = () => {
  const location = useLocation();
  const formData = location.state || {};

  // Mock data - replace with actual API call
  const quotes = [
    {
      id: 1,
      partnerLogo: '/assets/images/partners/bajaj.svg',
      title: 'Bajaj Allianz Life eTouch',
      lifeCover: '₹50 Lakhs',
      coverageTill: '65 Years',
      claimSettled: 98.03,
      insurerLink: 'https://www.bajajallianzlife.com',
      knowYourPlan: '<h4>Know Your Plan</h4><p>Bajaj Allianz Life eTouch is a pure term insurance plan that provides comprehensive life cover at affordable premiums.</p>',
      inbuiltBenefit: '<h4>Inbuilt Benefits</h4><ul><li>Terminal Illness Benefit</li><li>Accidental Death Benefit</li></ul>',
      riderBenefit: '<h4>Rider Benefits</h4><ul><li>Accidental Total & Permanent Disability Rider</li><li>Critical Illness Rider</li></ul>',
      planBrochure: 'https://www.bajajallianzlife.com/content/dam/bagicgov/life-insurance-online/term-insurance-plans/etouch/brochure.pdf'
    },
    {
      id: 2,
      partnerLogo: '/assets/images/partners/care.svg',
      title: 'Care Life Term Plan',
      lifeCover: '₹1 Crore',
      coverageTill: '70 Years',
      claimSettled: 97.5,
      insurerLink: 'https://www.careinsurance.com',
      knowYourPlan: '<h4>Know Your Plan</h4><p>Care Life Term Plan offers high coverage with flexible premium payment options.</p>',
      inbuiltBenefit: '<h4>Inbuilt Benefits</h4><ul><li>Life Coverage</li><li>Income Benefit Option</li></ul>',
      riderBenefit: '<h4>Rider Benefits</h4><ul><li>Accidental Death Benefit</li><li>Waiver of Premium</li></ul>',
      planBrochure: '#'
    },
    {
      id: 3,
      partnerLogo: '/assets/images/partners/star.svg',
      title: 'Star Life Smart Protect',
      lifeCover: '₹75 Lakhs',
      coverageTill: '75 Years',
      claimSettled: 96.8,
      insurerLink: 'https://www.starhealth.in',
      knowYourPlan: '<h4>Know Your Plan</h4><p>Star Life Smart Protect provides comprehensive life protection with tax benefits.</p>',
      inbuiltBenefit: '<h4>Inbuilt Benefits</h4><ul><li>Death Benefit</li><li>Maturity Benefit Option</li></ul>',
      riderBenefit: '<h4>Rider Benefits</h4><ul><li>Critical Illness Rider</li><li>Premium Waiver Rider</li></ul>',
      planBrochure: '#'
    }
  ];

  const [modalData, setModalData] = useState(null);

  const openModal = (quote) => {
    setModalData(quote);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div className="page-content bg-white">
      <div className="banner-four" style={{ backgroundImage: 'url(/assets/images/bg2.webp)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-md-4">
              <aside className="side-bar sticky-top">
                <div className="quotes-nav m-b40">
                  <div className="why-buy-widget">
                    <h2 className="widget-title">WHY BUY FROM FAMILYRAKSHA?</h2>
                    <ul className="benefits-list">
                      <li>Provides Financial Security</li>
                      <li>Affordable Option</li>
                      <li>Customizable Policies</li>
                      <li>Tax Benefits</li>
                      <li>Peace of Mind</li>
                      <li>Protection for Your Business</li>
                      <li>Coverage Against Critical Illnesses.</li>
                    </ul>
                    <p className="help-text">We help you compare and guide you to buy directly from insurers.</p>
                  </div>
                </div>
              </aside>
            </div>
            <div className="col-xl-8 col-md-8 policy-listing">
              <div className="dlab-content">
                {quotes.map((quote, index) => (
                  <div key={quote.id} className="quotes-list">
                    <div className="row align-items-center mb-10">
                      <div className="col-md-3 col-lg-3 col-xl-3 text-center">
                        <div className="rounded">
                          <img src={quote.partnerLogo} alt={quote.title} />
                        </div>
                        <div className="policy-detail">
                          <span className="name">{quote.title}</span>
                        </div>
                      </div>
                      <div className="col-md-2 col-lg-3 col-xl-2 text-center">
                        <span className="box-heading">Life Cover</span>
                        <span className="limit life_cover">{quote.lifeCover}</span>
                      </div>
                      <div className="col-md-2 col-lg-2 col-xl-2 text-center">
                        <span className="box-heading">Coverage till</span>
                        <span className="limit coverage_till">{quote.coverageTill}</span>
                      </div>
                      <div className="col-md-2 col-lg-2 col-xl-2 text-center">
                        <span className="box-heading">Claim settled</span>
                        <span className="limit">{quote.claimSettled}%</span>
                      </div>
                      <div className="col-md-3 col-lg-3 col-xl-3 text-center">
                        <a className="btn btn-primary gradient" href={quote.insurerLink} target="_blank" rel="noopener noreferrer">
                          CHECK YOUR PREMIUM
                        </a>
                      </div>
                    </div>
                    <div className="row important_links_section">
                      <div className="col-md-6 col-lg-6 col-xl-6 p-0">
                        <div className="important_links">
                          <div className="links_list">
                            {(quote.knowYourPlan || quote.inbuiltBenefit || quote.riderBenefit) && (
                              <>
                                <a href="#" onClick={(e) => { e.preventDefault(); openModal(quote); }} data-bs-toggle="modal" data-bs-target={`#planModal-${index}`}>
                                  Know Your Plan
                                </a>
                                {quote.planBrochure && quote.planBrochure !== '#' && <span className="separator"> | </span>}
                              </>
                            )}
                            {quote.planBrochure && quote.planBrochure !== '#' && (
                              <a href={quote.planBrochure} target="_blank" rel="noopener noreferrer">Plan Brochure</a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalData && (
        <div className="modal fade show" id="planModal" tabIndex="-1" aria-labelledby="planModalLabel" aria-hidden="false" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} onClick={closeModal}>
          <div className="modal-dialog modal-lg" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header">
                <div className="insurer-logo">
                  <img src={modalData.partnerLogo} alt={modalData.title} />
                </div>
                <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="details-tabs">
                  <ul className="nav nav-tabs m-b40" id="myTab" role="tablist">
                    {modalData.knowYourPlan && (
                      <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab">
                          Know your Plan
                        </button>
                      </li>
                    )}
                    {modalData.inbuiltBenefit && (
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab">
                          Inbuilt Benefit
                        </button>
                      </li>
                    )}
                    {modalData.riderBenefit && (
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab">
                          Rider Benefit
                        </button>
                      </li>
                    )}
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel">
                      <div className="wpb_wrapper" dangerouslySetInnerHTML={{ __html: modalData.knowYourPlan }} />
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel">
                      <div className="wpb_wrapper" dangerouslySetInnerHTML={{ __html: modalData.inbuiltBenefit }} />
                    </div>
                    <div className="tab-pane fade" id="contact" role="tabpanel">
                      <div className="wpb_wrapper" dangerouslySetInnerHTML={{ __html: modalData.riderBenefit }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TermInsuranceQuotes;

