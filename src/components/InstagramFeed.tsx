import React, { useEffect, useState, createElement } from 'react';
import { Instagram } from 'lucide-react';
import { InstagramEmbed } from './InstagramEmbed';
export function InstagramFeed() {
  const [embedsLoaded, setEmbedsLoaded] = useState(false);
  useEffect(() => {
    // Load Instagram embed script if not already loaded
    if (!window.instgrm) {
      const script = document.createElement('script');
      script.async = true;
      script.src = '//www.instagram.com/embed.js';
      script.onload = () => {
        if (window.instgrm) {
          window.instgrm.Embeds.process();
          setEmbedsLoaded(true);
        }
      };
      document.body.appendChild(script);
    } else {
      window.instgrm.Embeds.process();
      setEmbedsLoaded(true);
    }
  }, []);
  // Real Instagram posts from Damata Barbershop
  const instagramPosts = [{
    id: 'post1',
    url: 'https://www.instagram.com/p/DHKXCFmpnzd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    image: "/haircut.jpg",
    caption: 'Perfect haircut for the summer! #barbershop #summerstyle'
  }, {
    id: 'post2',
    url: 'https://www.instagram.com/p/DHhWsViJzWW/',
    image: "/haircut_2B_beard.jpg",
    caption: 'Haircut and beard trim combo. Looking fresh! #beardgang'
  }];
  return <section id="instagram" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#231F20]">
            Follow Us On Instagram
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Check out our latest work and follow us for inspiration, promotions,
            and behind-the-scenes content.
          </p>
          <div className="w-24 h-1 bg-[#FFD400] mx-auto mt-4"></div>
          <a href="https://www.instagram.com/damatabarbershop/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#C13584] font-medium mt-4 hover:underline">
            <Instagram size={20} className="mr-2 text-[#C13584]" />
            @damatabarbershop
          </a>
        </div>
        {/* Instagram Embeds */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {instagramPosts.map(post => <div key={post.id} className="flex justify-center">
              <InstagramEmbed url={post.url} caption={post.caption} maxWidth={540} hideCaption={false} containerClassName="w-full" />
            </div>)}
        </div>
        <div className="text-center mt-12">
          <a href="https://www.instagram.com/damatabarbershop/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#833AB4] via-[#C13584] to-[#F77737] text-white py-3 px-8 rounded-full font-semibold inline-flex items-center transition-all duration-300 hover:shadow-lg">
            <Instagram size={20} className="mr-2" />
            Follow Us on Instagram
          </a>
          <p className="text-gray-500 mt-4 text-sm">
            See more of our work and stay updated with our latest styles and
            promotions
          </p>
        </div>
      </div>
    </section>;
}