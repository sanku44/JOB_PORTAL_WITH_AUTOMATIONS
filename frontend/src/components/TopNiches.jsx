import React from "react";

const TopNiches = () => {
  const services = [
    {
      id: 1,
      service: "Software Development",
      description:
        "Innovative software development services to build, maintain, and upgrade applications, ensuring they meet the highest quality standards.",
    },
    {
      id: 2,
      service: "Web Development",
      description:
        "Comprehensive web development solutions from front-end design to back-end integration, delivering responsive and user-friendly websites.",
    },
    {
      id: 3,
      service: "Data Science",
      description:
        "Advanced data science services to analyze and interpret complex data, providing actionable insights and data-driven solutions.",
    },
    {
      id: 4,
      service: "Cloud Computing",
      description:
        "Reliable cloud computing services to manage, store, and process data efficiently, offering scalable and flexible cloud solutions.",
    },
    {
      id: 5,
      service: "DevOps",
      description:
        "DevOps services to streamline software development and operations, enhancing deployment efficiency and reducing time to market.",
    },
    {
      id: 6,
      service: "Mobile App Development",
      description:
        "Expert mobile app development for iOS and Android platforms, creating intuitive and engaging mobile experiences for your users.",
    },
  ];

  const aiFeatures = [
    {
      id: 1,
      feature: "AI-Based Resume Screening",
      description:
        "Automatically screen and rank resumes using AI to find the best candidates efficiently.",
    },
    {
      id: 2,
      feature: "Smart ATS Score Checker",
      description:
        "Analyze resumes and provide an ATS score to help job seekers optimize their resumes for applicant tracking systems.",
    },
    {
      id: 3,
      feature: "AI-Based Mock Interview",
      description:
        "Conduct mock interviews using AI to help candidates improve their communication and soft skills.",
    },
    {
      id: 4,
      feature: "AI-Based Coding Test",
      description:
        "AI-driven coding tests that evaluate a candidate's coding skills for various programming languages.",
    },
    {
      id: 5,
      feature: "AI-Based Resume Builder",
      description:
        "Generate professional and optimized resumes with the help of AI tailored to specific job roles.",
    },
  ];

  const otherWebsites = [
    {
      id: 1,
      name: "Lakshay Job Portal",
      description: "A one-stop solution for job seekers and HR teams, integrating various AI functionalities.",
      url: "https://lakshayjobportal.com",
    },
    {
      id: 2,
      name: "Tech Blog",
      description: "A platform for tech enthusiasts to share and read about the latest trends and developments in technology.",
      url: "https://techblog.com",
    },
    {
      id: 3,
      name: "Online Learning Hub",
      description: "An educational website offering courses in programming, AI, and more.",
      url: "https://onlinelearninghub.com",
    },
  ];

  return (
    <section className="services">
      <h3>Top Niches</h3>
      <div className="grid">
        {services.map((element) => (
          <div className="card" key={element.id}>
            <h4>{element.service}</h4>
            <p>{element.description}</p>
          </div>
        ))}
      </div>

      <h3>AI Features</h3>
      <div className="grid">
        {aiFeatures.map((element) => (
          <div className="card" key={element.id}>
            <h4>{element.feature}</h4>
            <p>{element.description}</p>
          </div>
        ))}
      </div>

      <h3>Our Other Websites</h3>
      <div className="grid">
        {otherWebsites.map((website) => (
          <div className="card" key={website.id}>
            <h4>
              <a href={website.url} target="_blank" rel="noopener noreferrer">
                {website.name}
              </a>
            </h4>
            <p>{website.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopNiches;
