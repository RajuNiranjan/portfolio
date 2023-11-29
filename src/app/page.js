import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import ProjectSection from "./components/ProjectSection";
import Skills from "./components/Skills";
import About from "./components/about";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] container mx-auto ">
      <Nav />
      <div className="container mx-auto px-12 py-4 mt-24">
        <Hero />
        <About />
        <ProjectSection />
        {/* <Skills /> */}
        <ContactMe />
        <Footer />
      </div>
    </main>
  );
}
