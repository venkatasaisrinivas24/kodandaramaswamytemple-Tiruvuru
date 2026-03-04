import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Facebook, Instagram, Youtube, Phone, Mail } from "lucide-react";

const TempleFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-temple-maroon text-white py-16 pb-24 md:pb-16">
      <div className="container mx-auto px-4 pr-20 md:pr-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Temple Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-sacred-gold rounded-full flex items-center justify-center">
                <span className="text-xl">🏹</span>
              </div>
              <div>
                <h3 className="font-temple-english text-lg font-bold">
                  Sri Kodanda Ramaswamy
                </h3>
                <p className="font-temple-telugu text-sm">కోదండరామస్వామి</p>
              </div>
            </div>
            <p className="text-sm text-white/80 leading-relaxed mb-4">
              A sacred temple dedicated to Lord Rama, serving devotees with divine 
              blessings and spiritual guidance for generations.
            </p>
            <p className="font-temple-telugu text-sm text-sacred-gold">
              "రామో విగ్రహవాన్ ధర్మః సాధుః సత్యపరాక్రమః"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-temple-english text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: "About Temple", href: "#about" },
                { name: "Daily Schedule", href: "#events" },
                { name: "Temple Management", href: "#management" },
                { name: "Gallery", href: "#gallery" },
                { name: "Contact Us", href: "#contact" }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-white/80 hover:text-sacred-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-temple-english text-lg font-semibold mb-4">
              Temple Services
            </h4>
            <p className="font-temple-telugu text-sm text-sacred-gold mb-2">సేవలు</p>
            <div className="space-y-2">
              {[
                "Daily Poojas",
                "Abhishekam",
                "Annadanam",
                "Special Events",
                "Wedding Services"
              ].map((service) => (
                <div key={service} className="text-sm text-white/80">{service}</div>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-temple-english text-lg font-semibold mb-4">Connect</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-sacred-gold" />
                <span className="text-sm">+91 8812 234567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-sacred-gold" />
                <span className="text-sm text-xs">info@kodandarama.org</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <p className="text-sm font-medium">Follow Us</p>
              <div className="flex space-x-3">
                <Button size="sm" variant="outline" className="border-sacred-gold text-sacred-gold hover:bg-sacred-gold hover:text-temple-maroon">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-sacred-gold text-sacred-gold hover:bg-sacred-gold hover:text-temple-maroon">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-sacred-gold text-sacred-gold hover:bg-sacred-gold hover:text-temple-maroon">
                  <Youtube className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8"></div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-3 gap-6 items-center">
          <div className="text-center md:text-left">
            <p className="text-sm text-white/70">
              © {currentYear} Sri Kodanda Ramaswamy Devalayam, Tiruvuru
            </p>
            <p className="font-temple-telugu text-xs text-sacred-gold">
              శ్రీ కోదండ రామస్వామి దేవాలయం, తిరువూరు
            </p>
          </div>

          <div className="text-center">
            <Card className="inline-flex items-center space-x-2 px-4 py-2 bg-sacred-gold/10 border-sacred-gold/30">
              <span className="text-sm">Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span className="text-sm">for devotees</span>
            </Card>
          </div>

          <div className="text-center md:text-right">
            <div className="space-y-1">
              <p className="text-xs text-white/60">Temple Trust Registered</p>
              <p className="text-xs text-sacred-gold">Seva | Bhakti | Dharma</p>
              <p className="font-temple-telugu text-xs text-white/60">సేవ | భక్తి | ధర్మ</p>
            </div>
          </div>
        </div>

        {/* Sacred Blessing */}
        <div className="text-center mt-8 pt-6 border-t border-white/20">
          <p className="font-temple-telugu text-lg text-sacred-gold mb-2">
            "సర్వే భవంతు సుఖినః సర్వే సంతు నిరామయాః"
          </p>
          <p className="text-sm text-white/70 font-temple-english italic">
            May all beings be happy and free from suffering
          </p>
        </div>
      </div>
    </footer>
  );
};

export default TempleFooter;