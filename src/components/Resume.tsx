import React from 'react';
import { Download, FileText, Eye } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Resume</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Download my complete resume to learn more about my experience, education, and achievements
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-100 rounded-full">
              <FileText className="w-12 h-12 text-blue-600" />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Abhishek Mahindrakar - Resume
          </h3>
          <p className="text-gray-600 mb-8">
            Senior Software Engineer specializing in DevOps, SRE, and Infrastructure Engineering
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              <Download className="w-5 h-5 mr-2" />
              Download PDF
            </button>
            <button className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium">
              <Eye className="w-5 h-5 mr-2" />
              View Online
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-3">What's Included</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Professional Experience</li>
              <li>• Technical Skills</li>
              <li>• Education & Certifications</li>
              <li>• Key Achievements</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-3">Format</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• PDF Format</li>
              <li>• ATS-Friendly</li>
              <li>• Professional Layout</li>
              <li>• Updated Monthly</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-3">Contact Info</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Email Address</li>
              <li>• LinkedIn Profile</li>
              <li>• GitHub Portfolio</li>
              <li>• Professional Website</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Note:</strong> Please upload your resume file to the public folder and update the download links accordingly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resume;