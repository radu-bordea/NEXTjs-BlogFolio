import AboutPreview from "@/components/AboutPreview";
import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <>
      <Hero name="Radu" />
      <FeaturedProjects/>
      <AboutPreview/>
    </>
  );
}
