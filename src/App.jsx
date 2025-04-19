import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedIn from './components/FeaturedIn';
import HowItWorks from './components/HowItWorks';


export default function App() {
  return (
    <div className="font-rubik text-grayMedium m-0">
      <Header />
      <Hero />
      <FeaturedIn />
      <HowItWorks />
    </div>
  );
}