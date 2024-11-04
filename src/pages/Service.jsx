import React from "react";

const services = [
  {
    icon: "fa-laptop-code",
    title: "Web Development",
    description: "Creating responsive and creative pages for digital products.",
    delay: "0s",
  },
  {
    icon: "fa-laptop",
    title: "UI/UX Design",
    description:
      "Conceptualizing, wireframing, and designing interfaces for websites and mobile applications.",
    delay: "0.2s",
  },
  {
    icon: "fa-laptop-code",
    title: "Software Quality Assurance",
    description:
      "Detail-oriented and focused on product quality, with experience in both manual and automated testing.",
    delay: "0.4s",
  },
  {
    icon: "fab fa-android",
    title: "Machine Learning",
    description:
      "Experienced in building predictive models, analyzing data, and implementing machine learning algorithms.",
    delay: "0.6s",
  },
];

const Service = () => {
  return (
    <div className="service py-10">
      <div className="container mx-auto ">
        <div className="section-header text-center mb-10">
          <p className="text-gray-700 text-lg font-semibold">What I do</p>
          <h2 className="text-3xl font-bold text-gray">
            Awesome Quality Services
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="shadow-xl service-item flex items-start space-x-4 p-6 text-white bg-slate-500 rounded-lg"
              style={{ animationDelay: service.delay }}
            >
              <div className="service-text">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-900">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
