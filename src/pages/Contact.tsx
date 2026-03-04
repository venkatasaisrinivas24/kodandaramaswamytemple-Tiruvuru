import SEO from "@/components/SEO";
import TempleHeader from "@/components/TempleHeader";
import TempleContact from "@/components/TempleContact";
import TempleFooter from "@/components/TempleFooter";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Contact Us - Sri Kodanda Ramaswamy Temple | Address, Phone, Timings | Tiruvuru"
        description="Contact Sri Kodanda Ramaswamy Temple Tiruvuru. Get temple address, phone number, email, visiting hours, and directions. Reach us for pooja bookings, donations, and inquiries. Temple timings: 6 AM - 8 PM daily."
        keywords="Temple Contact, Kodanda Ramaswamy Temple Address, Temple Phone Number, Temple Timings, Temple Location, Directions to Temple, Temple Email, Contact Temple, Pooja Booking, Temple Donations, Tiruvuru Temple Contact, దేవాలయ సంప్రదింపు"
        url="https://kodandaramaswamy-tiruvuru.org/contact"
        canonicalUrl="https://kodandaramaswamy-tiruvuru.org/contact"
      />
      <TempleHeader />
      <div className="pt-20">
        <TempleContact />
      </div>
      <TempleFooter />
    </div>
  );
};

export default Contact;