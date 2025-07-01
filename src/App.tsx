import { About } from "./components/About";
import { Career } from "./components/Career";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";

export function App() {
  return (
    <>
      <div className="px-4 w-full max-w-[992px] mx-auto pt-14">
        <Navbar />
        <Hero />
        <About />
        <Career />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
