import heroImage from '../assets/hero.png';
import customer1 from '../assets/customer-1.jpg';
import customer2 from '../assets/customer-2.jpg';
import customer3 from '../assets/customer-3.jpg';
import customer4 from '../assets/customer-4.jpg';
import customer5 from '../assets/customer-5.jpg';
import customer6 from '../assets/customer-6.jpg';

export default function Hero() {
  return (
    <section className="bg-cream pt-[12rem] pb-[12rem] mt-[9.6rem]"> {/* Increased from pb-[9.6rem] to pb-[12rem] */}
      <div className="max-w-[130rem] mx-auto px-[3.2rem] grid grid-cols-1 md:grid-cols-2 gap-[9.6rem] items-center">
        <div>
          <h1 className="text-[5.2rem] font-bold leading-[1.2] tracking-[-0.5px] text-grayDark mb-[3.5rem]">
            A healthy meal delivered to your door, every single day
          </h1>
          <p className="text-[2.0rem] font-medium leading-[1.6] text-grayMedium mb-[4.5rem]">
            The smart 365-days-per-year food subscription that will make you
            eat healthy again. Tailored to your personal tastes and
            nutritional needs.
          </p>
          <div className="flex gap-[3.2rem] mb-[4.8rem]">
            <a 
              href="#cta" 
              className="text-[2.0rem] font-semibold px-[3.2rem] py-[1.6rem] rounded-[9px] bg-primary text-white hover:bg-primaryDark shadow-md transition-all duration-300"
            >
              Start eating well
            </a>
            <a 
              href="#how" 
              className="text-[2.0rem] font-semibold px-[3.2rem] py-[1.6rem] rounded-[9px] bg-white border-2 border-primary text-grayMedium hover:border-primaryDark hover:text-grayDark transition-all duration-300"
            >
              Learn more &darr;
            </a>
          </div>
          <div className="flex items-center gap-[1.6rem] mt-[8rem]">
            <div className="flex">
              {[customer1, customer2, customer3, customer4, customer5, customer6].map((img, index) => (
                <img 
                  key={index}
                  src={img} 
                  alt="Customer" 
                  className={`h-[4.8rem] w-[4.8rem] rounded-full border-[3px] border-cream ${index < 5 ? '-mr-[1.6rem]' : ''}`}
                />
              ))}
            </div>
            <p className="text-[1.8rem] font-semibold">
              <span className="text-primaryDark font-bold">250,000+</span> delivered meals last year!
            </p>
          </div>
        </div>
        <div>
          <img src={heroImage} className="w-full" alt="Woman enjoying food" />
        </div>
      </div>
    </section>
  );
}