import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Advantages } from '../components/Advantages';
import { Testimonials } from '../components/Testimonials';
import { Blogs } from '../components/Blogs';
import { Faqs } from '../components/Faqs';
import { Footer } from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Services />
      <Advantages />
      <Testimonials />
      <Blogs />
      <Faqs />
      <Footer />
    </div>
  );
};

export default Index;
