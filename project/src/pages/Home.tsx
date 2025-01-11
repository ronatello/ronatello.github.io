import React from 'react';
import ProjectCard from '../components/ProjectCard';
import NewsAlert from '../components/NewsAlert';

export default function Home() {
  const projects = [
    {
      id: '1',
      title: 'Project Alpha',
      description: 'A revolutionary app that transforms how we interact with data. Built with cutting-edge technologies, this project showcases the perfect blend of functionality and user experience.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '2',
      title: 'Project Beta',
      description: 'An innovative solution for modern web development challenges. Leveraging the latest frameworks and best practices to deliver scalable and maintainable code.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'
    },

    {
      id: '3',
      title: 'Project Beta',
      description: 'An innovative solution for modern web development challenges. Leveraging the latest frameworks and best practices to deliver scalable and maintainable code.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '4',
      title: 'Project Beta',
      description: 'An innovative solution for modern web development challenges. Leveraging the latest frameworks and best practices to deliver scalable and maintainable code.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '5',
      title: 'Project Beta',
      description: 'An innovative solution for modern web development challenges. Leveraging the latest frameworks and best practices to deliver scalable and maintainable code.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const news = [
    {
      title: 'New Project Launch',
      date: 'March 15, 2024',
      description: 'Excited to announce the launch of my latest project!'
    },
    {
      title: 'Speaking at TechConf 2024',
      date: 'March 10, 2024',
      description: 'Join me at TechConf where I\'ll be discussing modern web architecture.'
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Main Content */}
      <div className="lg:col-span-3">
        <h2 className="text-2xl font-bold text-white mb-6">Featured Projects</h2>
        <div className="space-y-6">
          {projects.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>

      {/* Updates Container */}
      <div className="relative lg:ml-6 lg:mt-14 lg:w-96">
        <div className="sticky top-24">
          <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl p-[2px]">
            <div className="bg-gray-850 rounded-xl"> {/* 850 is not a valid option */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300 mb-6">
                  Latest Updates
                </h2>
                <div className="space-y-4">
                  {news.map((item, index) => (
                    <NewsAlert key={index} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}