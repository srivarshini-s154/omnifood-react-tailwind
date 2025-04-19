import techcrunchLogo from '../assets/techcrunch.png';
import businessInsiderLogo from '../assets/business-insider.png';
import nytLogo from '../assets/the-new-york-times.png';
import forbesLogo from '../assets/forbes.png';
import usaTodayLogo from '../assets/usa-today.png';

const FeaturedIn = () => {
  const logos = [
    { src: techcrunchLogo, alt: "TechCrunch" },
    { src: businessInsiderLogo, alt: "Business Insider" }, 
    { src: nytLogo, alt: "The New York Times" },
    { src: forbesLogo, alt: "Forbes" },
    { src: usaTodayLogo, alt: "USA Today" }
  ];

  return (
    <div className="bg-white py-12 text-center">
      <h2 className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-8">
        AS FEATURED IN
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 px-4">
        {logos.map((logo, index) => (
          <img 
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="h-10 md:h-12 grayscale opacity-70 hover:opacity-100 transition-opacity duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedIn;