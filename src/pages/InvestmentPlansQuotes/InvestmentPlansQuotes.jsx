import { useLocation } from 'react-router-dom';
import '../TermInsuranceQuotes/TermInsuranceQuotes.css';
import { investmentPlansQuotes } from '../../dummyData';

const InvestmentPlansQuotes = () => {
  const location = useLocation();
  const formData = location.state || {};

  // Mock data - replace with actual API call
  const quotes = [
    {
      id: 1,
      partnerLogo: '/assets/images/partners/bajaj.svg',
      title: 'Bajaj Allianz Goal Assure',
      pastPerformance: 8.5,
      insurerLink: 'https://www.bajajallianzlife.com',
      knowYourPlan: 'https://www.bajajallianzlife.com/goal-assure',
      planBrochure: 'https://www.bajajallianzlife.com/content/dam/bagicgov/goal-assure-brochure.pdf'
    },
    {
      id: 2,
      partnerLogo: '/assets/images/partners/aditya.svg',
      title: 'Aditya Birla Sun Life Wealth Assure',
      pastPerformance: 9.2,
      insurerLink: 'https://lifeinsurance.adityabirlacapital.com',
      knowYourPlan: '#',
      planBrochure: '#'
    },
    {
      id: 3,
      partnerLogo: '/assets/images/partners/niva.svg',
      title: 'Niva Bupa Invest Assure',
      pastPerformance: 7.8,
      insurerLink: 'https://www.nivabupa.com',
      knowYourPlan: '#',
      planBrochure: '#'
    }
  ];

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
                {investmentPlansQuotes.map((quote) => (
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
                      <div className="col-md-6 col-lg-6 col-xl-6 text-center">
                        <span className="box-heading">Past performance of the fund</span>
                        <span className="limit life_cover">{quote.pastPerformance}%</span>
                      </div>
                      <div className="col-md-3 col-lg-3 col-xl-3 text-center">
                        <a className="btn btn-primary gradient" href={quote.insurerLink} target="_blank" rel="noopener noreferrer">
                          CHECK YOUR PLAN
                        </a>
                      </div>
                    </div>
                    <div className="row important_links_section">
                      <div className="col-md-6 col-lg-6 col-xl-6 p-0">
                        <div className="important_links">
                          <div className="links_list">
                            {quote.knowYourPlan && quote.knowYourPlan !== '#' && (
                              <>
                                <a href={quote.knowYourPlan} target="_blank" rel="noopener noreferrer">Know Your Plan</a>
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
    </div>
  );
};

export default InvestmentPlansQuotes;

