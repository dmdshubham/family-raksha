import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import TermLifeInsurance from './pages/TermLifeInsurance/TermLifeInsurance';
import InvestmentPlans from './pages/InvestmentPlans/InvestmentPlans';
import HealthInsurance from './pages/HealthInsurance/HealthInsurance';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions/TermsConditions';
import GrievanceRedressal from './pages/GrievanceRedressal/GrievanceRedressal';
import Blog from './pages/Blog/Blog';
import ContactUs from './pages/ContactUs/ContactUs';
import TermInsuranceQuotes from './pages/TermInsuranceQuotes/TermInsuranceQuotes';
import HealthInsuranceQuotes from './pages/HealthInsuranceQuotes/HealthInsuranceQuotes';
import InvestmentPlansQuotes from './pages/InvestmentPlansQuotes/InvestmentPlansQuotes';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/term-life-insurance" element={<TermLifeInsurance />} />
          <Route path="/investment-plans" element={<InvestmentPlans />} />
          <Route path="/health-insurance" element={<HealthInsurance />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/grievance-redressal" element={<GrievanceRedressal />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/term-insurance-quotes" element={<TermInsuranceQuotes />} />
          <Route path="/health-insurance-quotes" element={<HealthInsuranceQuotes />} />
          <Route path="/investment-plans-quotes" element={<InvestmentPlansQuotes />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
