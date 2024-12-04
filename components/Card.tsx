"use client";

import { useState } from "react";

interface CardProps {
  title: string;
  content: string;
}

export default function Card({ title, content }: CardProps) {
  const [likes, setLikes] = useState(0);

  return (
    <div className="bg-blue-100 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">{title}</h2>
        <p className="text-gray-600 mb-6">{content}</p>
        <button
          onClick={() => setLikes(likes + 1)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full transition-colors duration-300"
        >
          Like ({likes})
        </button>
      </div>
    </div>
  );
}
