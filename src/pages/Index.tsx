import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { Products } from '../components/Products';
import { Pricing } from '../components/Pricing';
import { Advantages } from '../components/Advantages';
import { Blogs } from '../components/Blogs';
import { Footer } from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Products />
      <Pricing />
      <Advantages />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Index;
