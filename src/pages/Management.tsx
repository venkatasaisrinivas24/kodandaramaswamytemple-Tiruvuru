import SEO from "@/components/SEO";
import TempleHeader from "@/components/TempleHeader";
import TempleManagement from "@/components/TempleManagement";
import TempleFooter from "@/components/TempleFooter";

const Management = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Temple Management & Committee - Sri Kodanda Ramaswamy Temple | Tiruvuru"
        description="Meet the temple management committee and trustees of Sri Kodanda Ramaswamy Devalayam Tiruvuru. Learn about temple administration, committee members, and their dedication to serving devotees."
        keywords="Temple Management, Temple Committee, Temple Trustees, Temple Administration, Committee Members, Temple Board, Temple Trust, Religious Leadership, Temple Governance, దేవాలయ నిర్వహణ"
        url="https://kodandaramaswamy-tiruvuru.org/management"
        canonicalUrl="https://kodandaramaswamy-tiruvuru.org/management"
      />
      <TempleHeader />
      <div className="pt-20">
        <TempleManagement />
      </div>
      <TempleFooter />
    </div>
  );
};

export default Management;