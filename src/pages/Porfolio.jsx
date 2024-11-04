import React from 'react';
import Portfolio1 from '../assets/portfolio-1.jpg';
import Portfolio2 from '../assets/portfolio-2.jpg';
import Portfolio3 from '../assets/portfolio-3.png';
import Portfolio4 from '../assets/portfolio-4.png';

const Portfolio = () => {
  const portfolioItems = [
    {
      title: 'Dormitory Facility Damage Report',
      description: 'This project describes an application designed to report any damage to the facilities in the IT Del Female Dormitory.',
      image: Portfolio1,
      link: 'https://youtu.be/HwXhBKhicJY',
      delay: '0.0s',
    },
    {
      title: "Human Computer Interaction",
      description: 'A project that explains the redesign or redesign of the Del Institute of Technology library website with provisions in accordance with heuristic material.',
      image: Portfolio2,
      link: 'https://drive.google.com/file/d/133ig9NDCEjgPfdI8x7nTLfWfneoPO4he/view',
      delay: '0.2s',
    },
    {
      title: "FRK/FED - Software Project Management",
      description: "Website created by students of the Informatics Study Program at Del Institute of Technology, Class of 2021, as a project for the Software Project Management course. This website was created for campus lecturers and staff to fill out work plans and self-evaluate the work plans that have been carried out.",
      image: Portfolio3,
      link: 'https://github.com/boysitorus/FrontEnd-FRK',
      delay: '0.4s',
    },
    {
      title: 'Web-Based Application Development',
      description: 'The website created by students of the Informatics Study Program at Del Institute of Technology, Class of 2021, as a project for their Web Programming course. This website is used as a means of promotion and a way to introduce Del Institute of Technology to prospective new students.',
      image: Portfolio4,
      link: 'https://github.com/gabrielhtg/project-spmb-pabwe',
      delay: '0.6s',
    },
  ];

  return (
    <div className="portfolio py-20 bg-gray-100" id="portfolio">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-gray-500">My Portfolio</p>
          <h2 className="text-4xl font-bold text-gray-800">My Excellent Portfolio</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 max-w-xs sm:max-w-sm"
              style={{ animationDelay: item.delay }}
            >
              <div className="portfolio-wrap">
                <div className="portfolio-img">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-5">
                  <p className="text-gray-600 mb-3">{item.description}</p>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <a
                    className="text-blue-500 hover:text-blue-700"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
