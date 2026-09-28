import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedBooks from "../components/FeaturedBooks";
import WorkSection from "../components/WorkSection";
import WhySection from "../components/WhySection";
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Categories/>
        <FeaturedBooks/>
        <WorkSection/>
        <WhySection/>
      </main>
      <footer className="footer">
      </footer>
    </>
  )
}
