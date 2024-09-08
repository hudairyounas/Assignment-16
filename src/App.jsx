import AboutMe from "./components/AboutMe";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Works from "./components/Works";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Works />
      <Blogs />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
