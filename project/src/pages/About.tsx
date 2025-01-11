import React from 'react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">About Me</h1>
      
      <div className="bg-white rounded-xl shadow-md p-8 space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Background</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium text-gray-900">Frontend</h3>
              <p className="text-gray-600">React, Vue, Angular</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium text-gray-900">Backend</h3>
              <p className="text-gray-600">Node.js, Python, Java</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium text-gray-900">Database</h3>
              <p className="text-gray-600">PostgreSQL, MongoDB</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Experience</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-indigo-500 pl-4">
              <h3 className="font-medium text-gray-900">Senior Developer</h3>
              <p className="text-gray-600">Tech Corp • 2020 - Present</p>
            </div>
            <div className="border-l-4 border-indigo-500 pl-4">
              <h3 className="font-medium text-gray-900">Full Stack Developer</h3>
              <p className="text-gray-600">Web Solutions Inc • 2018 - 2020</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}