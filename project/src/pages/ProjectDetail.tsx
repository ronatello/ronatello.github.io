import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function ProjectDetail() {
  const { id } = useParams();

  // This would typically fetch project data based on the ID
  const project = {
    title: 'Project Alpha',
    description: 'A revolutionary app that transforms how we interact with data.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    fullDescription: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
    `,
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    features: [
      'Real-time data processing',
      'Advanced analytics dashboard',
      'Secure authentication system',
      'RESTful API integration'
    ],
    github: 'https://github.com',
    demo: 'https://demo.com'
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link to="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-500 mb-8">
        <ArrowLeft className="mr-2" size={20} />
        Back to Projects
      </Link>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover"
        />
        
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900">{project.title}</h1>
          
          <p className="mt-4 text-gray-600">{project.fullDescription}</p>
          
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Key Features</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="mt-8 flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-600 hover:text-white transition-colors"
            >
              View Source
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}