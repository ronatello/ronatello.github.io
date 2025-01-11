import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

export default function ProjectCard({ id, title, description, image }: ProjectCardProps) {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-[1.02] border border-gray-700">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <img
            className="h-64 w-full object-cover"
            src={image}
            alt={title}
          />
        </div>
        <div className="flex-1 p-6">
          <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
          <p className="text-gray-300 mb-4">{description}</p>
          <Link
            to={`/project/${id}`}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-900 to-purple-900 text-white rounded-lg hover:from-indigo-800 hover:to-purple-800 transition-all"
          >
            View Details <ExternalLink className="ml-2" size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}