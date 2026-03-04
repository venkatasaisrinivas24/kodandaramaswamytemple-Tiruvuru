import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const TempleHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "గృహం | Home", href: "/" },
    { name: "కార్యక్రమాలు | Events", href: "/events" },
    { name: "గురించి | About", href: "/about" },
    { name: "నిర్వాహణ | Management", href: "/management" },
    { name: "గ్యాలరీ | Gallery", href: "/gallery" },
    { name: "సంప్రదింపు | Contact", href: "/contact" }
  ];

  return (
    <>
      {/* Floating Om Symbol */}
      <div className="fixed top-20 right-8 z-50 om-pulse">
        <div className="text-4xl text-divine-saffron opacity-70">🕉️</div>
      </div>

      {/* Floating Flowers Animation */}
      <div className="float-flower" style={{ left: '10%', animationDelay: '0s' }}>🌸</div>
      <div className="float-flower" style={{ left: '20%', animationDelay: '2s' }}>🌺</div>
      <div className="float-flower" style={{ left: '80%', animationDelay: '4s' }}>🌸</div>
      <div className="float-flower" style={{ left: '90%', animationDelay: '6s' }}>🌺</div>

      {/* Main Header */}
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-sacred-gold/30 z-40 temple-glow">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-temple-gradient rounded-full flex items-center justify-center temple-glow">
                <span className="text-2xl">🏹</span>
              </div>
              <div>
                <h1 className="font-temple-english text-xl font-bold text-foreground">
                  Sri Kodanda Ramaswamy Devalayam
                </h1>
                <p className="font-temple-telugu text-sm text-divine-saffron">
                  శ్రీ కోదండ రామస్వామి దేవాలయం - తిరువూరు
                </p>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  asChild
                  className="text-sm hover:bg-divine-saffron/10 hover:text-divine-saffron"
                >
                  <a href={item.href}>{item.name}</a>
                </Button>
              ))}
            </nav>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <Card className="mt-4 p-4 md:hidden border-sacred-gold/30">
              <nav className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Button
                    key={item.name}
                    variant="ghost"
                    asChild
                    className="justify-start text-sm hover:bg-divine-saffron/10 hover:text-divine-saffron"
                    onClick={() => setIsMenuOpen(false)}
                  >
                   <a href={item.href}>{item.name}</a>
                  </Button>
                ))}
              </nav>
            </Card>
          )}
        </div>
      </header>
    </>
  );
};

export default TempleHeader;