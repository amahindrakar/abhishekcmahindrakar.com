import React from 'react';
import { Cloud, Database, Settings, Monitor, GitBranch, Container } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Cloud Platforms',
      icon: <Cloud className="w-6 h-6" />,
      skills: ['AWS', 'Azure', 'Google Cloud', 'DigitalOcean'],
      color: 'blue'
    },
    {
      title: 'DevOps Tools',
      icon: <GitBranch className="w-6 h-6" />,
      skills: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'CircleCI'],
      color: 'green'
    },
    {
      title: 'Containerization',
      icon: <Container className="w-6 h-6" />,
      skills: ['Docker', 'Kubernetes', 'Helm', 'OpenShift'],
      color: 'purple'
    },
    {
      title: 'Infrastructure',
      icon: <Settings className="w-6 h-6" />,
      skills: ['Terraform', 'Ansible', 'CloudFormation', 'Pulumi'],
      color: 'orange'
    },
    {
      title: 'Monitoring',
      icon: <Monitor className="w-6 h-6" />,
      skills: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog'],
      color: 'red'
    },
    {
      title: 'Databases',
      icon: <Database className="w-6 h-6" />,
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'],
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-600 border-blue-200',
      green: 'bg-green-50 text-green-600 border-green-200',
      purple: 'bg-purple-50 text-purple-600 border-purple-200',
      orange: 'bg-orange-50 text-orange-600 border-orange-200',
      red: 'bg-red-50 text-red-600 border-red-200',
      indigo: 'bg-indigo-50 text-indigo-600 border-indigo-200'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building, deploying, and maintaining scalable infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`inline-flex p-3 rounded-lg mb-4 ${getColorClasses(category.color)}`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Programming Languages & Technologies</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Python', 'Go', 'Bash', 'JavaScript', 'YAML', 'JSON', 'Linux', 'Networking', 'Security'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white text-gray-700 rounded-lg shadow-sm font-medium hover:shadow-md transition-shadow"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;