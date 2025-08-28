import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="relative text-white mt-16">
      {/* Top Divider Shape */}
      {/* Top Divider Shape */}

      {/* Footer Content */}
      <div className="px-6 pt-20 pb-10 bg-black relative z-10">
        <div className="absolute -top-[1px] left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="w-full rotate-180"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z"
              className="fill-white"
            ></path>
          </svg>
        </div>
        {/* 4 Column Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-10">
          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>About Us</li>
              <li>Our Work</li>
              <li>Partners</li>
              <li>Life at Rishabh</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Artificial Intelligence</li>
              <li>Application Engineering</li>
              <li>Cloud</li>
              <li>Data & Analytics</li>
              <li>Digital Engineering</li>
              <li>Microsoft Technology Services</li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Industries</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Adtech</li>
              <li>Digital Manufacturing</li>
              <li>Fintech</li>
              <li>Healthtech</li>
              <li>Logistics and SCM</li>
              <li>Retail</li>
            </ul>
          </div>

          {/* Insights */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Insights</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Blogs</li>
              <li>Case Studies</li>
              <li>Press Releases</li>
              <li>White Papers</li>
              <li>Webinars</li>
            </ul>
          </div>
        </div>

        {/* Reviews & Logos Section */}
        <div className="mt-12 bg-gray-100 text-black rounded-lg p-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
              alt="Rishabh Logo"
              className="h-10"
            />
          </div>
          <div className="flex items-center gap-3 text-red-500">
            <span>⭐⭐⭐⭐⭐</span>
            <p className="text-sm">25 REVIEWS</p>
          </div>
          <div className="flex items-center gap-2 text-yellow-500">
            <span>⭐⭐⭐⭐⭐</span>
            <p className="text-sm text-black">GoodFirms</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-xl" />
            <span className="text-gray-400">sales@rishabhsoft.com</span>
          </div>
          <div className="text-gray-400 text-center md:text-left space-y-1 text-sm">
            <p>US Toll Free: +1-877-RISHABH</p>
            <p>US: +1-201-484-7302</p>
            <p>AU: +61 2 8311 1544</p>
            <p>UK: +44 207 031 8422</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400 text-sm">
          <p>Copyright © 2025 Rishabh Software. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">
              Terms of Use
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Cookie Policy
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-6 flex gap-4 justify-center md:justify-start">
          <a
            href="#"
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};
