import React from 'react';

interface NewsAlertProps {
  title: string;
  date: string;
  description: string;
}

export default function NewsAlert({ title, date, description }: NewsAlertProps) {
  return (
    <div className="bg-gray-700 rounded-lg p-[1px]">
      <div className="bg-gray-800/95 rounded-lg p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-white w-2/3">{title}</h3>
          <span className="text-sm text-indigo-300 font-medium">{date}</span>
        </div>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
}