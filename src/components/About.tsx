import React from 'react';
import { Code, Server, Shield } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm a passionate Senior Software Engineer at Tempus AI, where I focus on building and maintaining 
              robust infrastructure that supports cutting-edge healthcare technology solutions. With expertise 
              in DevOps, Site Reliability Engineering, and Infrastructure Engineering, I help teams deliver 
              reliable, scalable systems.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              My work involves designing cloud-native architectures, implementing CI/CD pipelines, monitoring 
              system performance, and ensuring high availability of critical healthcare applications. I'm 
              committed to bridging the gap between development and operations to create seamless, efficient workflows.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <Code className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">DevOps</h3>
                <p className="text-sm text-gray-600">Automation & CI/CD</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <Server className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Infrastructure</h3>
                <p className="text-sm text-gray-600">Cloud & On-Premise</p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <Shield className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">SRE</h3>
                <p className="text-sm text-gray-600">Reliability & Monitoring</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl flex items-center justify-center">
              <div className="text-6xl font-bold text-blue-600">AM</div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-full opacity-20"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-indigo-600 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;