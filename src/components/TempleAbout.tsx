import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import templeInterior from "@/assets/temple-hero.jpg";

const TempleAbout = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <div>
              <h2 className="text-lg text-muted-foreground mb-2">Welcome To</h2>
              <h3 className="font-temple-english text-3xl md:text-4xl font-bold text-destructive leading-tight">
                Sri Kodanda Ramaswamy Devalayam
              </h3>
              <div className="w-16 h-1 bg-destructive mt-4"></div>
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                One of the most remarkable aspects of the temple is its unique identity as a 
                trinity of divine energies. The temple houses three presiding deities{" "}
                <span className="text-destructive font-semibold">Sri Anjaneya Swami</span>,{" "}
                <span className="text-destructive font-semibold">Sri Rama & Sita</span> and{" "}
                <span className="text-destructive font-semibold">Lord Shiva</span>.
              </p>
              
              <p>
                Embark on a soul-enriching journey to the Kshetra, where you can immerse 
                yourself in the divine aura and discover the profound blessings and 
                transformative energies that grace its sacred precincts.
              </p>
            </div>
            
            <Button className="bg-destructive hover:bg-destructive/90 text-white">
              About Temple
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={templeInterior}
                alt="Temple Interior with Divine Deities"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TempleAbout;