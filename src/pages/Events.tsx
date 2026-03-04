import SEO from "@/components/SEO";
import TempleHeader from "@/components/TempleHeader";
import TempleEvents from "@/components/TempleEvents";
import TempleFooter from "@/components/TempleFooter";

const Events = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Temple Events & Festivals - Sri Kodanda Ramaswamy Temple | Rama Navami, Hanuman Jayanti"
        description="Upcoming religious events, festivals, and special poojas at Sri Kodanda Ramaswamy Temple Tiruvuru. Join us for Rama Navami, Hanuman Jayanti, monthly celebrations, and spiritual programs. Check event calendar and timings."
        keywords="Temple Events Tiruvuru, Rama Navami Celebrations, Hanuman Jayanti, Religious Festivals, Temple Festivals, Special Poojas, Spiritual Events, Hindu Festivals, Temple Calendar, Religious Ceremonies, దేవాలయ ఉత్సవాలు"
        url="https://kodandaramaswamy-tiruvuru.org/events"
        canonicalUrl="https://kodandaramaswamy-tiruvuru.org/events"
      />
      <TempleHeader />
      <div className="pt-20">
        <TempleEvents />
      </div>
      <TempleFooter />
    </div>
  );
};

export default Events;