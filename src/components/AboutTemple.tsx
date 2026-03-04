import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import mandalaBg from "@/assets/mandala-bg.jpg";

const AboutTemple = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img src={mandalaBg} alt="Mandala Background" className="w-full h-full object-cover" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-divine-saffron/20 text-divine-saffron border-divine-saffron/30">
            దేవాలయ చరిత్ర | Temple History
          </Badge>
          <h2 className="font-temple-english text-4xl font-bold text-foreground mb-4">
            Sacred Legacy of Tiruvuru
          </h2>
          <p className="font-temple-telugu text-lg text-divine-saffron">
            శతాబ్దాలుగా భక్తుల హృదయాలలో వసిస్తున్న దివ్య క్షేత్రం
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Temple History */}
          <Card className="p-6 border-sacred-gold/30 hover:shadow-divine-glow transition-all duration-300">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-temple-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="font-temple-english text-xl font-semibold text-temple-maroon">
                Ancient Heritage
              </h3>
              <p className="font-temple-telugu text-sm text-divine-saffron">
                పురాతన వైభవం
              </p>
            </div>
            <p className="text-foreground/80 leading-relaxed text-sm">
              The Sri Kodanda Ramaswamy Temple at Tiruvuru stands as a testament 
              to centuries of devotion. Built with traditional Dravidian architecture, 
              this sacred shrine has been a beacon of spiritual light for countless devotees.
            </p>
            <div className="mt-4 p-3 bg-divine-saffron/10 rounded-lg">
              <p className="font-temple-telugu text-sm text-temple-maroon">
                "ఈ పవిత్ర క్షేత్రం అనేక కాలాలుగా భక్తుల మనసులను పవిత్రం చేస్తూ వచ్చింది"
              </p>
            </div>
          </Card>

          {/* Temple Significance */}
          <Card className="p-6 border-sacred-gold/30 hover:shadow-divine-glow transition-all duration-300">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-temple-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏹</span>
              </div>
              <h3 className="font-temple-english text-xl font-semibold text-temple-maroon">
                Lord Kodanda Rama
              </h3>
              <p className="font-temple-telugu text-sm text-divine-saffron">
                కోదండరాముని మహిమ
              </p>
            </div>
            <p className="text-foreground/80 leading-relaxed text-sm">
              The presiding deity, Lord Kodanda Rama, is depicted with His divine bow, 
              symbolizing protection of dharma. The sacred murti radiates divine energy, 
              blessing all who seek refuge in His compassionate presence.
            </p>
            <div className="mt-4 p-3 bg-divine-saffron/10 rounded-lg">
              <p className="font-temple-telugu text-sm text-temple-maroon">
                "కోదండ హస్తాయ నమః - ధర్మ రక్షణకు అవతరించిన రాముడు"
              </p>
            </div>
          </Card>

          {/* Sacred Rituals */}
          <Card className="p-6 border-sacred-gold/30 hover:shadow-divine-glow transition-all duration-300 md:col-span-2 lg:col-span-1">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-temple-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🪔</span>
              </div>
              <h3 className="font-temple-english text-xl font-semibold text-temple-maroon">
                Sacred Rituals
              </h3>
              <p className="font-temple-telugu text-sm text-divine-saffron">
                పవిత్రమైన కర్మకాండలు
              </p>
            </div>
            <p className="text-foreground/80 leading-relaxed text-sm">
              Daily poojas, abhishekams, and arati ceremonies create an atmosphere 
              of divine bliss. The temple follows traditional Agama protocols, 
              ensuring every ritual maintains its sacred authenticity.
            </p>
            <div className="mt-4 p-3 bg-divine-saffron/10 rounded-lg">
              <p className="font-temple-telugu text-sm text-temple-maroon">
                "నిత్య పూజలతో దేవుని కృపార్థం చేసుకుంటున్న భక్త సమాజం"
              </p>
            </div>
          </Card>
        </div>

        {/* Architecture Details */}
        <div className="mt-16">
          <Card className="p-8 border-sacred-gold/30 bg-card/80 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-temple-english text-2xl font-semibold text-temple-maroon mb-4">
                  Temple Architecture
                </h3>
                <p className="font-temple-telugu text-lg text-divine-saffron mb-4">
                  దేవాలయ వాస్తు శిల్పం
                </p>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  The temple showcases exquisite Dravidian architecture with intricate 
                  stone carvings depicting scenes from the Ramayana. The gopuram stands 
                  majestically, adorned with colorful sculptures of divine beings and 
                  celestial motifs.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-divine-saffron rounded-full"></div>
                    <span className="text-sm">Rajagopuram with traditional kalashas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-divine-saffron rounded-full"></div>
                    <span className="text-sm">Intricately carved pillars and mandapas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-divine-saffron rounded-full"></div>
                    <span className="text-sm">Sacred sanctum with divine vibrations</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-divine-saffron/10 p-8 rounded-lg">
                  <div className="text-6xl mb-4">🛕</div>
                  <p className="font-temple-telugu text-lg text-temple-maroon">
                    దేవాలయ దర్శనం
                  </p>
                  <p className="font-temple-english text-sm text-foreground/70 mt-2">
                    Experience the divine darshan in this sacred architectural marvel
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutTemple;