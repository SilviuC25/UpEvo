import HeroSectionOne from '@/components/HeroSectionOne';
import AboutPreviewSection from '@/components/AboutPreviewSection';
import ServicesSection from '@/components/ServicesSection';
import BlogSection from '@/components/BlogSection';
import PortfolioPreview from '@/components/PortfolioPreview';

export default function Home() {
  return (
    <main className="">
      <HeroSectionOne />
      <AboutPreviewSection />
      <ServicesSection />
      <BlogSection />
      <PortfolioPreview />
    </main>
  );
}
