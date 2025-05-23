import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 text-gray-800 border-t border-gray-200 pt-12 pb-4 relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-8">
          {/* Brand column */}
          <div>
            <h3 className="text-2xl font-bold mb-3 mt-3">Appdoers Template</h3>
            <p className="text-base mb-5">Integrative coaching for holistic personal growth and transformation. Supporting your journey to mind, body, and spirit alignment.</p>
            <div className="flex space-x-3 mt-2">
              <a href="#" className="text-gray-500 hover:text-blue-600"><span className="sr-only">Facebook</span><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg></a>
              <a href="#" className="text-gray-500 hover:text-pink-600"><span className="sr-only">Instagram</span><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" /></svg></a>
            </div>
          </div>
          
          {/* Quick Links column */}
          <div>
            <h3 className="text-xl font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
              <li><Link to="/programs" className="hover:text-blue-600">Programs</Link></li>
              <li><Link to="/events" className="hover:text-blue-600">Events</Link></li>
              <li><Link to="/testimonials" className="hover:text-blue-600">Success Stories</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
            </ul>
          </div>
          
          {/* Services column */}
          <div>
            <h3 className="text-xl font-bold mb-3">Programs</h3>
            <ul className="space-y-2">
              <li>Personal Coaching</li>
              <li>Group Workshops</li>
              <li>Retreats</li>
              <li>Mindfulness Training</li>
              <li>Life Transitions Support</li>
              <li>Couples Integration</li>
            </ul>
          </div>
          
          {/* Contact column */}
          <div>
            <h3 className="text-xl font-bold mb-3">Contact Us</h3>
            <ul className="space-y-2 text-base">
              <li className="flex items-center gap-2">
                <svg className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                New Plymouth, Taranaki, New Zealand
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" /><path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm0 0v1a4 4 0 01-8 0v-1m8 0H8" /></svg>
                +64 22 5060 870
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 8v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8" /></svg>
                <a href="mailto:contact@appdoers.co.nz" className="hover:underline">contact@appdoers.co.nz</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-200" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Appdoers logo and text bottom left */}
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Appdoers Logo" className="h-10 w-auto" />
          </div>
          {/* Copyright center */}
          <div className="text-center text-sm text-gray-500 flex-1">© {currentYear} Appdoers Template. All rights reserved.</div>
          {/* Website developed by bottom right */}
          <div className="text-right text-sm text-gray-500">Website developed by <a href="https://appdoers.co.nz" className="underline hover:text-blue-600">appdoers.co.nz</a></div>
        </div>
      </div>
      {/* Floating Powered by Appdoers Button */}
      <a
        href="https://appdoers.co.nz"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 bottom-6 right-6 flex items-center gap-2 bg-white rounded-full shadow-lg px-5 py-2 text-gray-700 font-medium text-lg hover:shadow-xl transition-all border border-gray-100"
        style={{ minWidth: 'fit-content' }}
      >
        <img src="/favicon.png" alt="Appdoers Logo" className="h-8 w-auto" />
        <span className="font-medium text-gray-700">Powered by Appdoers</span>
      </a>
    </footer>
  );
};

export default Footer;

