import React from 'react';
import Image from 'next/image';

const Footer = () => {
  const footerData = {
    sections: [
      {
        title: "Products",
        links: ["Shop all", "Skin care", "Face care", "Body care", "Hair care"]
      },
      {
        title: "Information",
        links: ["About us", "Blog", "Contact"]
      },
      {
        title: "More",
        links: ["Privacy policy", "Terms of service", "Shipping & returns"]
      }
    ],
    socials: [
      // এখানে আপনার ইমেজ পাথগুলো বসিয়ে দিন (যেমন: /icons/facebook.svg)
      { img: "/Facebook.png", link: "#", alt: "Facebook" },
      { img: "/Vector.png", link: "#", alt: "Instagram" },
      { img: "/Whatsapp.png", link: "#", alt: "WhatsApp" },
      { img: "/Youtube.png", link: "#", alt: "Youtube" }
    ]
  };

  return (
    <footer className="bg-[#6B7D27] text-white pt-16 pb-8 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Menu Columns */}
          {footerData.sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-200 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Subscribe to our newsletter</h3>
            <div className="relative flex items-center mb-8">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full py-4 px-6 rounded-full bg-white text-gray-800 focus:outline-none pr-32 text-sm"
              />
              <button className="absolute right-2 bg-[#55631F] hover:bg-[#445019] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all">
                Subscribe
              </button>
            </div>

            {/* Social Images */}
            <div className="flex gap-4">
              {footerData.socials.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.link} 
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform overflow-hidden p-2"
                >
                  <div className="relative w-full h-full">
                    <Image 
                      src={social.img} 
                      alt={social.alt} 
                      fill
                      className="object-contain"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

       {/* Divider & Copyright */}
        <div className="border-t border-white/20 pt-8 flex flex-col items-center relative">
          <p className="text-xs text-gray-200 mb-12 font-light tracking-wide">
            Copyright © 2026 Oranic. All Right Reserved
          </p>
          
          {/* Big Huge Text Logo - Updated to match design */}
          <div className="w-full overflow-hidden flex justify-center relative">
            <h1 className="text-[120px]  md:text-[220px] lg:text-[320px] font-bold leading-none tracking-tighter pointer-events-none select-none italic uppercase
              bg-gradient-to-b from-white via-white/80 to-transparent 
              bg-clip-text text-transparent">
              ORANIC
            </h1>

            {/* Bottom Glow/Shadow for extra smoothness */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#6B7D27] to-transparent z-10"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;