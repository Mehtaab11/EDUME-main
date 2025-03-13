import CallToAction from "../../components/students/CallToAction";
import Companies from "../../components/students/Companies";
import CoursesSection from "../../components/students/CoursesSection";
import Footer from "../../components/students/Footer";
import Hero from "../../components/students/Hero";
import Testimonials from "../../components/students/Testimonials";
const Home = () => {
  return (
    <div className="flex flex-col items-center text-center space-y-7 ">
      <Hero />
      <Companies />
      <CoursesSection />
      <Testimonials />
      <CallToAction />

      <Footer />
    </div>
  );
};

export default Home;
