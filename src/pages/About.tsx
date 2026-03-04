import SEO from "@/components/SEO";
import TempleHeader from "@/components/TempleHeader";
import AboutTemple from "@/components/AboutTemple";
import TempleFooter from "@/components/TempleFooter";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="About Sri Kodanda Ramaswamy Temple - History & Significance | Tiruvuru"
        description="Learn about the rich history, spiritual significance, and divine heritage of Sri Kodanda Ramaswamy Devalayam in Tiruvuru. Discover the temple's architecture, deities, and religious importance in Andhra Pradesh."
        keywords="Kodanda Ramaswamy Temple History, Temple Significance, Lord Rama Temple Heritage, Tiruvuru Temple Story, Temple Architecture, Hindu Temple Andhra Pradesh, Religious Importance, Temple Deities, Spiritual Heritage"
        url="https://kodandaramaswamy-tiruvuru.org/about"
        canonicalUrl="https://kodandaramaswamy-tiruvuru.org/about"
      />
      <TempleHeader />
      <div className="pt-20">
        <AboutTemple />
      </div>
      <TempleFooter />
    </div>
  );
};

export default About;