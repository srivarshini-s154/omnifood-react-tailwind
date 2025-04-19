import { useEffect, useState } from 'react';
import omnifoodLogo from "../assets/omnifood-logo.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 h-[9.6rem] transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-md' 
        : 'bg-cream'
    }`}>
      <div className="w-full max-w-[120rem] mx-auto px-[4.8rem] h-full flex items-center">
        {/* Logo - FORCE to far left */}
        <a href="#" className="absolute left-[4.8rem]">
          <img className="h-[2.2rem]" src={omnifoodLogo} alt="Omnifood" />
        </a>

        {/* Navigation - FORCE to far right */}
        <nav className="absolute right-[4.8rem]">
          <ul className="flex gap-[4.8rem] items-center list-none">
            <li><a href="#how" className="text-[1.8rem] font-medium text-grayDark hover:text-primaryDark transition-colors duration-300">How it works</a></li>
            <li><a href="#meals" className="text-[1.8rem] font-medium text-grayDark hover:text-primaryDark transition-colors duration-300">Meals</a></li>
            <li><a href="#testimonials" className="text-[1.8rem] font-medium text-grayDark hover:text-primaryDark transition-colors duration-300">Testimonials</a></li>
            <li><a href="#pricing" className="text-[1.8rem] font-medium text-grayDark hover:text-primaryDark transition-colors duration-300">Pricing</a></li>
            <li>
              <a 
                href="#cta" 
                className="text-[1.8rem] font-medium px-[3.2rem] py-[1.6rem] rounded-[9px] bg-primary text-white hover:bg-primaryDark hover:translate-y-[-1px] hover:shadow-[0_4px_8px_rgba(0,0,0,0.1)] shadow-[0_2px_4px_rgba(0,0,0,0.1)] transition-all duration-300"
              >
                Try for free
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
