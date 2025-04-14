import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const posts = [
   
];

function Posts() {
  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-mono font-bold">Posts</h1>
      <div className="space-y-8">
        {posts.map((post, index) => (
          <article 
            key={index} 
            className="border dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-3">{post.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
            <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <Calendar size={16} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <span>{post.readTime}</span>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              {post.tags.map((tag, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Posts;