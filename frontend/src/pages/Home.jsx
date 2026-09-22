import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedBooks from "../components/FeaturedBooks";
import WorkSection from "../components/WorkSection";
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Categories/>
        <FeaturedBooks/>
        <WorkSection/>
      </main>
      <footer className="footer">
      </footer>
    </>
  )
}
