import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InvestmentPlans = () => {
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
    // Navigate to investment plans quotes page with form data
    navigate('/investment-plans-quotes', { state: formData });
  };

  const advantages = [
    {
      title: "Wealth Accumulation",
      description: "Investment allows you to grow your wealth over time, potentially achieving higher returns than traditional term insurance.",
      image: "/assets/images/services/investment/wealth_accumulation.webp",
      colorClass: "bg-yellow shadow-yellow",
      delay: "0.1s"
    },
    {
      title: "Partial Withdrawals",
      description: "Some policies permit partial withdrawals or loans against the investment component in case of emergencies.",
      image: "/assets/images/services/investment/partial_withdrawals.webp",
      colorClass: "bg-red shadow-red",
      delay: "0.2s",
      active: true
    },
    {
      title: "Customization",
      description: "You can choose from different funds, aligning your investments with your risk tolerance and financial goals.",
      image: "/assets/images/services/investment/customization.webp",
      colorClass: "bg-green shadow-green",
      delay: "0.3s"
    },
    {
      title: "Tax Benefits",
      description: "Investment offers tax benefits, which can further enhance your savings.",
      image: "/assets/images/services/investment/tax_benefit.webp",
      colorClass: "bg-skyblue shadow-skyblue",
      delay: "0.4s"
    },
    {
      title: "Flexible premium",
      description: "You have the flexibility to adjust the premium amount and investment choices to align with your financial objectives.",
      image: "/assets/images/services/investment/flexible_premium.webp",
      colorClass: "bg-orange shadow-orange",
      delay: "0.5s"
    },
    {
      title: "Life cover",
      description: "Along with investment you will get a life cover against your Investment",
      image: "/assets/images/services/investment/life_cover.webp",
      colorClass: "bg-maroon shadow-maroon",
      delay: "0.6s"
    }
  ];

  const comparisonData = [
    {
      benefit: "Insurance Coverage",
      ulip: "ULIPs provide life insurance coverage along with investment benefits. This dual function ensures financial security for the policyholder's family in case of unforeseen events.",
      mutualFund: "Mutual funds, on the other hand, do not offer any insurance coverage."
    },
    {
      benefit: "Tax Benefits",
      ulip: "Premiums paid for ULIPs are eligible for tax deductions under Section 80C of the Income Tax Act. Additionally, the maturity proceeds from ULIPs are tax-free under Section 10(10D), provided certain conditions are met.",
      mutualFund: "Mutual funds only offer tax benefits under specific schemes like Equity Linked Savings Schemes (ELSS), and the capital gains from other mutual funds are taxable."
    },
    {
      benefit: "Fund Switching Flexibility",
      ulip: "ULIPs allow policyholders to switch between equity, debt, and balanced funds within the same plan. This feature helps in adapting to changing market conditions and personal risk tolerance without incurring any charges.",
      mutualFund: "Mutual fund investors might face exit loads and capital gains tax when switching between funds."
    },
    {
      benefit: "Lock-in Period",
      ulip: "ULIPs have a mandatory lock-in period of five years, which encourages long-term savings and financial discipline. This helps investors avoid the temptation of premature withdrawals, which can disrupt wealth accumulation.",
      mutualFund: "Mutual funds, except for ELSS, generally do not have a lock-in period, making it easier for investors to withdraw funds early and potentially miss out on long-term gains."
    },
    {
      benefit: "Cost Efficiency",
      ulip: "ULIPs have seen significant reduction in charges over the years, with many plans now offering competitive cost structures. The charges in ULIPs, including premium allocation, mortality, and fund management charges, have become more transparent and regulated, providing better value to investors.",
      mutualFund: "NA"
    },
    {
      benefit: "Goal-Based Planning",
      ulip: "ULIPs are well-suited for goal-based financial planning, such as retirement, children's education, or wealth creation. The combination of insurance and investment helps ensure that long-term goals are met, even in the case of the policyholder's untimely demise.",
      mutualFund: "Mutual funds, while effective for wealth creation, lack the integrated insurance component."
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
                  Secure your loved ones future with Investment plans
                </h1>
                <p data-wow-delay="1.5s" data-wow-duration="3s" className="wow fadeInUp description m-b20 pt-2">
                  Investment plans allocate resources into assets like stocks, bonds, and real estate to generate returns over time. They are crucial for future planning, including child education, marriage, and retirement. Adding a term plan offers an upper hand by providing financial protection and security alongside growth and savings.
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

      {/* Advantages of Investment */}
      <section className="content-inner bgl-primary" style={{ backgroundImage: 'url(/assets/images/bg17.webp)' }}>
        <div className="container">
          <div className="section-head style-4 text-center">
            <h2 className="title">Advantages of Investment</h2>
          </div>
          <div className="row">
            {advantages.map((item, index) => (
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

      {/* Comparison Table */}
      <section className="content-inner bg-white" style={{ backgroundImage: 'url(/assets/images/bg1.webp)', backgroundRepeat: 'no-repeat' }}>
        <div className="container">
          <div className="section-head style-4 text-center">
            <h2 className="title">Why choose investment over mutual fund</h2>
            <p>Unit Linked Insurance Plans (ULIPs) and mutual funds serve different financial objectives and investor needs. ULIPs, which combine life insurance and investment in a single product, offer several benefits that can make them more appealing compared to mutual funds.</p>
          </div>
          <div className="row">
            <div className="col-xl-12 col-md-12">
              <table>
                <thead>
                  <tr>
                    <th>Benefits</th>
                    <th>Investment Plan</th>
                    <th>Mutual Fund</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index}>
                      <td>{row.benefit}</td>
                      <td>{row.ulip}</td>
                      <td>{row.mutualFund}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Endowment Plan */}
      <section className="content-inner bgl-primary" style={{ backgroundImage: 'url(/assets/images/bg1.webp)', backgroundRepeat: 'no-repeat' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-md-12">
              <div className="dlab-team style-3 mb-5">
                <div className="dlab-media">
                  <img src="/assets/images/services/investment/endowment_plan.webp" alt="Endowment Plan" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div className="section-head style-1">
                <h3 className="title m-b20">Endowment Plan</h3>
                <p className="text m-b20">
                  Guaranteed savings plans are financial products that offer assured returns over a specified period. These plans invest in government bonds and corporate securities to ensure fixed returns, providing capital protection and predictable growth. Suitable for individuals with low-risk tolerance, they support long-term goals like child education, marriage, or retirement. Besides guaranteed returns, these plans often include life insurance coverage, offering financial security to beneficiaries in case of the policyholder's demise. Additionally, they provide tax benefits on both the investment and maturity proceeds. Guaranteed savings plans are ideal for those seeking stability and certainty in their financial planning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestmentPlans;
