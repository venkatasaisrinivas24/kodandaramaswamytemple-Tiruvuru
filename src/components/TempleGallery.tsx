import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import ramaDeity from "@/assets/rama-deity.jpg";
import templeHero from "@/assets/temple-hero.jpg";
import diyaLamps from "@/assets/diya-lamps.jpg";
import mandalaBg from "@/assets/mandala-bg.jpg";

const TempleGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      src: ramaDeity,
      title: "Lord Kodanda Rama",
      titleTelugu: "కోదండ రాముడు",
      description: "Sacred deity darshan"
    },
    {
      src: templeHero,
      title: "Temple Gopuram",
      titleTelugu: "దేవాలయ గోపురం",
      description: "Majestic temple architecture"
    },
    {
      src: diyaLamps,
      title: "Divine Diyas",
      titleTelugu: "దివ్య దీపాలు",
      description: "Festival lighting ceremony"
    },
    {
      src: mandalaBg,
      title: "Sacred Mandala",
      titleTelugu: "పవిత్ర మండల",
      description: "Traditional spiritual art"
    }
  ];

  const videos = [
    {
      title: "Morning Aarti",
      titleTelugu: "ప్రాతః కాల ఆరతి",
      thumbnail: diyaLamps,
      duration: "5:30"
    },
    {
      title: "Abhishekam Ceremony",
      titleTelugu: "అభిషేక కార్యక్రమం",
      thumbnail: ramaDeity,
      duration: "12:45"
    },
    {
      title: "Evening Bhajans",
      titleTelugu: "సాయంకాల భజనలు",
      thumbnail: templeHero,
      duration: "8:20"
    }
  ];

  const openLightbox = (src: string, index: number) => {
    setSelectedImage(src);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex].src);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex].src);
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-divine-saffron/20 text-divine-saffron border-divine-saffron/30">
            గ్యాలరీ | Sacred Gallery
          </Badge>
          <h2 className="font-temple-english text-4xl font-bold text-foreground mb-4">
            Divine Darshan & Moments
          </h2>
          <p className="font-temple-telugu text-lg text-divine-saffron">
            దైవిక దర్శనం మరియు పవిత్ర క్షణాలు
          </p>
        </div>

        {/* Photo Gallery */}
        <div className="mb-16">
          <h3 className="font-temple-english text-2xl font-semibold text-temple-maroon mb-8 text-center">
            Temple Photography
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <Card 
                key={index} 
                className="overflow-hidden cursor-pointer hover:shadow-divine-glow transition-all duration-300 border-sacred-gold/30"
                onClick={() => openLightbox(image.src, index)}
              >
                <div className="relative group">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-temple-maroon/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-2xl mb-2">🔍</div>
                      <p className="text-sm">View Larger</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-temple-english font-semibold text-temple-maroon mb-1">
                    {image.title}
                  </h4>
                  <p className="font-temple-telugu text-divine-saffron text-sm mb-2">
                    {image.titleTelugu}
                  </p>
                  <p className="text-foreground/70 text-xs">
                    {image.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Video Gallery */}
        <div className="mb-16">
          <h3 className="font-temple-english text-2xl font-semibold text-temple-maroon mb-8 text-center">
            Sacred Videos & Bhajans
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <Card key={index} className="overflow-hidden border-sacred-gold/30 hover:shadow-divine-glow transition-all duration-300">
                <div className="relative group cursor-pointer">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-temple-maroon/40 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 text-temple-maroon ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-temple-maroon/80 text-white px-2 py-1 rounded text-xs">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-temple-english font-semibold text-temple-maroon mb-1">
                    {video.title}
                  </h4>
                  <p className="font-temple-telugu text-divine-saffron text-sm">
                    {video.titleTelugu}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* 360° Virtual Tour */}
        <Card className="p-8 border-sacred-gold/30 bg-divine-saffron/5">
          <div className="text-center">
            <div className="w-20 h-20 bg-temple-gradient rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🛕</span>
            </div>
            <h3 className="font-temple-english text-2xl font-semibold text-temple-maroon mb-4">
              Virtual Temple Tour
            </h3>
            <p className="font-temple-telugu text-lg text-divine-saffron mb-4">
              వర్చువల్ దేవాలయ దర్శనం
            </p>
            <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
              Experience the divine presence of our temple from anywhere in the world. 
              Take a 360° virtual tour and feel the sacred vibrations of this holy space.
            </p>
            <Button className="bg-temple-gradient hover:shadow-divine-glow">
              Start Virtual Tour | వర్చువల్ టూర్ ప్రారంభించండి
            </Button>
          </div>
        </Card>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage} 
              alt="Gallery Image"
              className="max-w-full max-h-[80vh] object-contain"
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:bg-white/20"
            >
              <X className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default TempleGallery;