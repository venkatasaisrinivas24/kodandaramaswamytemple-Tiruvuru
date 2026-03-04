import SEO from "@/components/SEO";
import TempleHeader from "@/components/TempleHeader";
import TempleGallery from "@/components/TempleGallery";
import TempleFooter from "@/components/TempleFooter";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Temple Photo Gallery - Sri Kodanda Ramaswamy Temple Images | Tiruvuru"
        description="View beautiful photos and images of Sri Kodanda Ramaswamy Temple Tiruvuru. Explore deity photos, temple architecture, festival celebrations, and spiritual moments captured at our sacred temple."
        keywords="Temple Photos, Kodanda Ramaswamy Images, Temple Gallery, Deity Photos, Temple Architecture Photos, Festival Images, Religious Photos, Temple Pictures, Tiruvuru Temple Gallery, దేవాలయ ఫోటోలు"
        url="https://kodandaramaswamy-tiruvuru.org/gallery"
        canonicalUrl="https://kodandaramaswamy-tiruvuru.org/gallery"
      />
      <TempleHeader />
      <div className="pt-20">
        <TempleGallery />
      </div>
      <TempleFooter />
    </div>
  );
};

export default Gallery;