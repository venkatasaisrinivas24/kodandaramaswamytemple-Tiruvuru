import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import templeHero from "@/assets/temple-hero.jpg";
import ramaDeity from "@/assets/rama-deity.jpg";

const TempleHero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={templeHero} 
          alt="Temple Hero" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-temple-gradient-subtle"></div>
      </div>

      {/* Animated Diyas */}
      <div className="absolute top-1/4 left-8 diya-flicker">
        <div className="w-6 h-6 bg-sacred-gold rounded-full"></div>
      </div>
      <div className="absolute top-1/3 right-8 diya-flicker" style={{ animationDelay: '1s' }}>
        <div className="w-6 h-6 bg-sacred-gold rounded-full"></div>
      </div>
      <div className="absolute bottom-1/4 left-12 diya-flicker" style={{ animationDelay: '2s' }}>
        <div className="w-6 h-6 bg-sacred-gold rounded-full"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <div className="mb-8">
              <h1 className="font-temple-telugu text-4xl md:text-6xl font-bold text-divine-saffron mb-4">
                శ్రీ కోదండ రామస్వామి దేవాలయం
              </h1>
              <h2 className="font-temple-english text-2xl md:text-4xl font-semibold text-temple-maroon mb-2">
                Sri Kodanda Ramaswamy Devalayam
              </h2>
              <p className="font-temple-english text-lg text-foreground/80">
                Tiruvuru - A Sacred Abode of Lord Sri Rama
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <p className="font-temple-telugu text-lg text-foreground/90">
                మర్యాదా పురుషోత్తమ శ్రీ రాముని దివ్య దర్శనం
              </p>
              <p className="font-temple-english text-foreground/80 leading-relaxed">
                Welcome to the divine sanctuary where devotees experience the eternal 
                blessings of Lord Sri Rama. A place of spiritual awakening and divine grace.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                size="lg" 
                className="bg-temple-gradient hover:shadow-divine-glow border-0 font-temple-english font-semibold"
              >
                दर्शन | Darshan Timings
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-divine-saffron text-divine-saffron hover:bg-divine-saffron/10 font-temple-english"
              >
                सेवा | Temple Services
              </Button>
            </div>
          </div>

          {/* Right Content - Deity Image */}
          <div className="flex justify-center">
            <Card className="p-8 bg-card/80 backdrop-blur-sm border-sacred-gold/30 temple-glow">
              <div className="text-center">
                <div className="mb-6">
                  <img 
                    src={ramaDeity} 
                    alt="Lord Rama Deity" 
                    className="w-64 h-80 object-cover rounded-lg mx-auto shadow-sacred-shadow"
                  />
                </div>
                <h3 className="font-temple-telugu text-xl font-semibold text-divine-saffron mb-2">
                  కోదండరామస్వామి
                </h3>
                <p className="font-temple-english text-sm text-foreground/70">
                  Divine Form of Lord Rama with His Sacred Bow
                </p>
                <div className="mt-4 p-3 bg-divine-saffron/10 rounded-lg">
                  <p className="font-temple-telugu text-sm text-temple-maroon">
                    "రామో విగ్రహవాన్ ధర్మః"
                  </p>
                  <p className="font-temple-english text-xs text-foreground/60 mt-1">
                    Rama is righteousness personified
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-divine-saffron rounded-full flex justify-center">
            <div className="w-1 h-3 bg-divine-saffron rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 opacity-30">
        <div className="text-6xl">🪷</div>
      </div>
      <div className="absolute bottom-20 right-20 opacity-30">
        <div className="text-6xl">🪷</div>
      </div>
    </section>
  );
};

export default TempleHero;