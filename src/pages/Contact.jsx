import React from 'react';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="contact py-16" id="contact">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-8 text-gray-800">Contact Me</h2>
                <div className="flex flex-col items-center space-y-6">

                    {/* Name */}
                    <div className="flex items-center space-x-4">
                        <FaEnvelope className="text-blue-500 text-2xl" />
                        <span className="text-gray-700 text-lg font-medium">Riris Iyut</span>
                    </div>

                    {/* Email */}
                    <div className="flex items-center space-x-4">
                        <FaEnvelope className="text-blue-500 text-2xl" />
                        <a href="mailto:ririsiyut03@gmail.com" className="text-gray-700 text-lg font-medium hover:underline">
                            ririsiyut03@gmail.com
                        </a>
                    </div>

                    {/* Phone Number */}
                    <div className="flex items-center space-x-4">
                        <FaPhone className="text-green-500 text-2xl" />
                        <span className="text-gray-700 text-lg font-medium">+62 822 1332 1301</span>
                    </div>

                    {/* GitHub */}
                    <div className="flex items-center space-x-4">
                        <FaGithub className="text-gray-800 text-2xl" />
                        <a href="https://github.com/rissrgr" target="_blank" rel="noopener noreferrer" className="text-gray-700 text-lg font-medium hover:underline">
                        github.com/rissrgr
                        </a>
                    </div>

                    {/* LinkedIn */}
                    <div className="flex items-center space-x-4">
                        <FaLinkedin className="text-blue-700 text-2xl" />
                        <a href="https://www.linkedin.com/in/ririsiyut" target="_blank" rel="noopener noreferrer" className="text-gray-700 text-lg font-medium hover:underline">
                        linkedin.com/in/ririsiyut
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
