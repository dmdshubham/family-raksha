import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  useEffect(() => {
    // Initialize WOW.js for animations
    if (typeof WOW !== 'undefined') {
      new WOW().init();
    }
  }, []);

  const blogPosts = [
    {
      title: "The Comprehensive Guide to Term Life Insurance: Protecting Your Loved Ones",
      excerpt: "Life is full of uncertainties, and one of the greatest responsibilities we have is to protect our loved ones even after we're gone. This is where Term Life Insurance comes into play. Term Life Insurance provides financial security for your family and ensures that their future is safeguarded in the event of your untimely demise.",
      date: "August 10, 2024",
      author: "Family Raksha Team",
      readTime: "6 minutes",
      timeAgo: "1 year ago",
      slug: "comprehensive-guide-term-life-insurance"
    },
    {
      title: "How Does Term Life Insurance Work?",
      excerpt: "Term life insurance is a type of life insurance policy that provides coverage for a specific period, or term, of time. It is designed to provide financial protection for your loved ones in the event of your untimely death. This article will guide you through the important aspects of term life insurance, helping you understand",
      date: "August 10, 2024",
      author: "Family Raksha Team",
      readTime: "7 minutes",
      timeAgo: "1 year ago",
      slug: "how-does-term-life-insurance-work"
    },
    {
      title: "What are the Different Types of Term Life Insurance Policies?",
      excerpt: "Welcome to our comprehensive guide on the different types of term life insurance policies. If you are considering purchasing life insurance to protect your loved ones' financial future, term life insurance is an excellent option to explore. Unlike whole life insurance, which covers you for your entire life. Term life insurance provides coverage for a",
      date: "August 10, 2024",
      author: "Family Raksha Team",
      readTime: "5 minutes",
      timeAgo: "1 year ago",
      slug: "different-types-term-life-insurance-policies"
    },
    {
      title: "How Insurance Agents Are Manipulating Customers for Early Closure of Sales",
      excerpt: "In the competitive world of insurance, agents often face pressure to meet sales targets and generate revenue for their companies. Unfortunately, some agents resort to manipulative tactics to persuade customers into making hasty decisions regarding insurance policies. This article sheds light on the unethical practices employed by certain insurance agents, highlighting the negative impact they",
      date: "August 10, 2024",
      author: "Family Raksha Team",
      readTime: "5 minutes",
      timeAgo: "1 year ago",
      slug: "insurance-agents-manipulating-customers"
    },
    {
      title: "Term Life Insurance for Non-Resident Indian (NRI)",
      excerpt: "In the wake of the COVID-19 pandemic, the world has seen significant changes in various sectors, including the insurance industry. Many non-resident Indians (NRIs) faced challenges in obtaining term insurance policies during the pandemic. However, the situation has now evolved, and several companies are offering term insurance policies to NRIs. Not only that, but some",
      date: "August 10, 2024",
      author: "Family Raksha Team",
      readTime: "5 minutes",
      timeAgo: "1 year ago",
      slug: "term-life-insurance-nri"
    },
    {
      title: "Term Insurance-Limited Pay Vs Regular Pay",
      excerpt: "Term insurance is a type of life insurance that provides coverage for a specified period, known as the \"term.\" There are two primary payment options for term insurance: Limited Pay and Regular Pay. Limited Pay Term Insurance: Limited Pay term insurance offers coverage for a specific period, but the premium payments are made for a",
      date: "August 10, 2024",
      author: "Family Raksha Team",
      readTime: "3 minutes",
      timeAgo: "1 year ago",
      slug: "term-insurance-limited-pay-vs-regular-pay"
    },
    {
      title: "Major Reasons for Claim Rejection",
      excerpt: "Claim rejection refers to the situation when an insurance company or another party responsible for processing claims refuses to pay or approve a claim submitted by an individual or entity seeking reimbursement or coverage for specific goods, services, or losses. Claim rejection can occur in various types of insurance, such as health insurance, auto insurance,",
      date: "August 10, 2024",
      author: "Family Raksha Team",
      readTime: "4 minutes",
      timeAgo: "1 year ago",
      slug: "major-reasons-claim-rejection"
    },
    {
      title: "Term Insurance Plans: Tips for Finding the Right Policy",
      excerpt: "Term insurance, also known as term life insurance, is a type of life insurance policy that provides coverage for a specified period, known as the \"term.\" If the insured person passes away during the term of the policy, a death benefit is paid out to the beneficiaries designated by the policyholder. Key Features of Term",
      date: "August 10, 2024",
      author: "Family Raksha Team",
      readTime: "5 minutes",
      timeAgo: "1 year ago",
      slug: "term-insurance-plans-tips"
    },
    {
      title: "Difference Between Term Insurance and Whole Life Insurance",
      excerpt: "When it comes to safeguarding our loved ones and securing their financial future, insurance plays a crucial role. Among the various types of insurance available, two popular options are term insurance and life insurance. Many people often wonder what sets these two apart and which one suits their needs best. In this article, we will",
      date: "August 10, 2024",
      author: "Family Raksha Team",
      readTime: "5 minutes",
      timeAgo: "1 year ago",
      slug: "difference-term-insurance-whole-life-insurance"
    },
    {
      title: "Understanding the Basics of Term Life Insurance: A Comprehensive Guide",
      excerpt: "Term life insurance is a type of life insurance that provides coverage for a specified period of time, known as the \"term.\" It is designed to offer financial protection to your beneficiaries in the event of your death during the policy term. This comprehensive guide will help you understand the basics of term life insurance,",
      date: "August 10, 2024",
      author: "Family Raksha Team",
      readTime: "4 minutes",
      timeAgo: "1 year ago",
      slug: "understanding-basics-term-life-insurance"
    }
  ];

  return (
    <div className="page-content bg-white">
      {/* Breadcrumb */}
      <div className="dlab-bnr-inr overlay-gradient-dark text-center" style={{ backgroundImage: 'url(/assets/images/banner4.webp)' }}>
        <div className="container">
          <div className="dlab-bnr-inr-entry">
            <h1>Blogs</h1>
            <nav aria-label="breadcrumb" className="breadcrumb-row">
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Blogs</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Blog Listing */}
      <section className="content-inner-2" style={{ backgroundImage: 'url(/assets/images/bg2.webp)', backgroundPosition: 'center' }}>
        <div className="container">
          <div className="row" id="masonry">
            {blogPosts.map((post, index) => (
              <div key={index} className="card-container col-lg-6 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                <div className="dlab-blog style-2 m-b50">
                  <div className="dlab-media rounded-md">
                    <Link to={`/blog/${post.slug}`}>
                      <img src="/assets/images/blog/blog-placeholder.webp" alt={post.title} />
                    </Link>
                  </div>
                  <div className="dlab-info">
                    <h4 className="dlab-title">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h4>
                    <p className="m-b20">{post.excerpt} […]</p>
                    <div className="dlab-meta mb-0">
                      <ul>
                        <li className="post-date">{post.date}</li>
                        <li className="post-author">
                          <i className="las la-user-circle"></i> By{' '}
                          <Link to="#">{post.author}</Link>
                        </li>
                        <li>{post.readTime}</li>
                        <li>
                          <i className="las la-calendar"></i>
                          {post.timeAgo}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

