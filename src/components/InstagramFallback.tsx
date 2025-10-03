import React from 'react';
import { Instagram, ExternalLink } from 'lucide-react';
interface InstagramPostProps {
  url: string;
  image: string;
  caption: string;
}
export function InstagramFallback({
  posts
}: {
  posts: InstagramPostProps[];
}) {
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      {posts.map((post, index) => <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
          <a href={post.url} target="_blank" rel="noopener noreferrer" className="block">
            <div className="p-4 flex items-center border-b">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#833AB4] via-[#E1306C] to-[#F77737] flex items-center justify-center">
                <Instagram size={20} className="text-white" />
              </div>
              <div className="ml-3">
                <p className="font-semibold">@damatabarbershop</p>
                <p className="text-xs text-gray-500">Damata Barbershop</p>
              </div>
            </div>
            <div className="aspect-square overflow-hidden">
              <img src={post.image} alt={post.caption} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <p className="text-sm mb-3">{post.caption}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">View on Instagram</span>
                <ExternalLink size={16} className="text-gray-500" />
              </div>
            </div>
          </a>
        </div>)}
    </div>;
}