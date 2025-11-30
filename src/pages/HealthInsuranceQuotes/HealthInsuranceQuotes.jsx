import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../TermInsuranceQuotes/TermInsuranceQuotes.css';

const HealthInsuranceQuotes = () => {
  const location = useLocation();
  const formData = location.state || {};

  // Mock data - replace with actual API call
  const quotes = [
    {
      id: 1,
      partnerLogo: '/assets/images/partners/care.svg',
      title: 'Care Supreme',
      healthCover: '₹10 Lakhs',
      coverFor: 'Individual + Spouse',
      claimsPaid: 92.5,
      insurerLink: 'https://www.careinsurance.com',
      knowYourPlan: '<h4>Know Your Plan</h4><p>Care Supreme offers comprehensive health coverage with no room rent capping and unlimited restoration of sum insured.</p>',
      planBrochure: 'https://www.careinsurance.com/brochure.pdf',
      policyWordings: '#',
      cashlessHospitalsLink: '#'
    },
    {
      id: 2,
      partnerLogo: '/assets/images/partners/star.svg',
      title: 'Star Comprehensive Insurance',
      healthCover: '₹5 Lakhs',
      coverFor: 'Family Floater',
      claimsPaid: 94.2,
      insurerLink: 'https://www.starhealth.in',
      knowYourPlan: '<h4>Know Your Plan</h4><p>Star Comprehensive Insurance provides extensive medical coverage with cashless facility at network hospitals.</p>',
      planBrochure: '#',
      policyWordings: '#',
      cashlessHospitalsLink: '#'
    },
    {
      id: 3,
      partnerLogo: '/assets/images/partners/manipal.svg',
      title: 'Manipal Cigna ProHealth Plus',
      healthCover: '₹15 Lakhs',
      coverFor: 'Individual',
      claimsPaid: 95.8,
      insurerLink: 'https://www.manipalcigna.com',
      knowYourPlan: '<h4>Know Your Plan</h4><p>Manipal Cigna ProHealth Plus offers worldwide coverage with unlimited automatic recharge of sum insured.</p>',
      planBrochure: '#',
      policyWordings: '#',
      cashlessHospitalsLink: '#'
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
                        <span className="box-heading">Health cover</span>
                        <span className="limit life_cover">{quote.healthCover}</span>
                      </div>
                      <div className="col-md-2 col-lg-2 col-xl-2 text-center">
                        <span className="box-heading">Cover For</span>
                        <span className="limit coverage_till">{quote.coverFor}</span>
                      </div>
                      <div className="col-md-2 col-lg-2 col-xl-2 text-center">
                        <span className="box-heading">Claims paid(3months)</span>
                        <span className="limit">{quote.claimsPaid}%</span>
                      </div>
                      <div className="col-md-3 col-lg-3 col-xl-3 text-center">
                        <a className="btn btn-primary gradient" href={quote.insurerLink} target="_blank" rel="noopener noreferrer">
                          CHECK YOUR PLAN
                        </a>
                      </div>
                    </div>
                    <div className="row important_links_section">
                      <div className="col-md-12 col-lg-12 col-xl-12 p-0">
                        <div className="important_links">
                          <div className="links_list">
                            {quote.knowYourPlan && (
                              <>
                                <a href="#" onClick={(e) => { e.preventDefault(); openModal(quote); }} data-bs-toggle="modal" data-bs-target={`#planModal-${index}`}>
                                  Know Your Plan
                                </a>
                                {(quote.planBrochure !== '#' || quote.policyWordings !== '#' || quote.cashlessHospitalsLink !== '#') && <span className="separator"> | </span>}
                              </>
                            )}
                            {quote.planBrochure && quote.planBrochure !== '#' && (
                              <>
                                <a href={quote.planBrochure} target="_blank" rel="noopener noreferrer">Plan Brochure</a>
                                {(quote.policyWordings !== '#' || quote.cashlessHospitalsLink !== '#') && <span className="separator"> | </span>}
                              </>
                            )}
                            {quote.policyWordings && quote.policyWordings !== '#' && (
                              <>
                                <a href={quote.policyWordings} target="_blank" rel="noopener noreferrer">Policy Wordings</a>
                                {quote.cashlessHospitalsLink !== '#' && <span className="separator"> | </span>}
                              </>
                            )}
                            {quote.cashlessHospitalsLink && quote.cashlessHospitalsLink !== '#' && (
                              <a href={quote.cashlessHospitalsLink} target="_blank" rel="noopener noreferrer">CashLess Hospitals</a>
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
                  <div className="tab-content">
                    <div className="tab-pane fade show active" role="tabpanel">
                      <div className="wpb_wrapper" dangerouslySetInnerHTML={{ __html: modalData.knowYourPlan }} />
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

export default HealthInsuranceQuotes;

