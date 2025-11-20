import HeroSection from './components/HeroSection';
import Services from './components/Services';
import FeatureProduct from './components/FeatureProduct';

const Home = () => {
  const data = { name: 'YourSweetNightmare' };
  return (
    <div>
      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />
    </div>
  );
};

export default Home;
