import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Education from "@/components/education";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Services/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  );
}
