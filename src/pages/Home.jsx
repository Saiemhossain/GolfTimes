import ContactSection from "../components/header/ContactSection";
import About from "../components/home/About";
import BlogSection from "../components/home/BlogSection";
import Hero from "../components/home/Hero";
import ServiceSection from "../components/home/ServiceSection";



export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <BlogSection />
      <ServiceSection />
      <ContactSection />
     
    </div>
  )
}
