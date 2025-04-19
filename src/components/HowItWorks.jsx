import React from 'react';
import appScreen1 from '../assets/app-screen-1.png';
import appScreen2 from '../assets/app-screen-2.png';
import appScreen3 from '../assets/app-screen-3.png';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Tell us what you like (and what not)',
      description: 'Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!',
      img: appScreen1,
      imgAlt: 'iPhone app preferences selection screen'
    },
    {
      number: '02',
      title: 'Approve your weekly meal plan',
      description: 'Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes',
      img: appScreen2,
      imgAlt: 'iPhone app meal approving plan screen',
      reverse: true
    },
    {
      number: '03',
      title: 'Receive meals at convenient time',
      description: 'Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!',
      img: appScreen3,
      imgAlt: 'iPhone app delivery screen'
    }
  ];

  return (
    <section className="py-24" id="how">
      <div className="max-w-[120rem] mx-auto px-12">
        <span className="block text-[#cf711f] text-2xl font-medium uppercase tracking-wider mb-6">
          How it works
        </span>
        <h2 className="text-[4.4rem] font-bold leading-[1.2] tracking-tight text-gray-900 mb-24">
          Your daily dose of health in 3 simple steps
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-y-24">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12 items-center ${step.reverse ? 'md:[&>div:first-child]:order-2' : ''}`}
            >
              {/* Text Content */}
              <div>
                <p className="text-[8.6rem] font-semibold text-gray-200 mb-6">
                  {step.number}
                </p>
                <h3 className="text-[3rem] font-bold leading-[1.2] text-gray-900 mb-6">
                  {step.title}
                </h3>
                <p className="text-[1.8rem] leading-[1.8]">
                  {step.description}
                </p>
              </div>

              {/* Image */}
              <div className="relative flex justify-center items-center">
                {/* Background circles */}
                <div className="absolute w-[60%] pb-[60%] rounded-full bg-[#fdf2e9] -z-10"></div>
                <div className="absolute w-[45%] pb-[45%] rounded-full bg-[#fae5d3] -z-[5]"></div>
                
                {/* App screenshot */}
                <img 
                  src={step.img} 
                  alt={step.imgAlt} 
                  className="w-[35%]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;