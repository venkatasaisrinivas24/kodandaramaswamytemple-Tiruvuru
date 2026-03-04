import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const CommitteeChairman = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full border-4 border-destructive overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-sacred-gold/20 to-divine-saffron/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-destructive rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">KL</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Committee Chairman</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="text-center md:text-left">
              <h3 className="font-temple-english text-3xl md:text-4xl font-bold text-destructive mb-2">
                Konda Lakshmaiah
              </h3>
              <p className="text-lg text-muted-foreground font-medium">Committee Chairman</p>
            </div>
            
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Currently all the pooja programs are being conducted under the leadership of{" "}
                <span className="font-semibold text-foreground">Konda Lakshmaiah Garu</span>, 
                the Committee Chairman of Temple.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Under his dedicated guidance and spiritual leadership, the temple continues 
                to serve the devotee community with devotion and maintains the sacred 
                traditions of our ancient heritage.
              </p>
            </div>
            
            <Button className="bg-destructive hover:bg-destructive/90 text-white">
              Know More
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitteeChairman;