import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const WhatsAppFloat = () => {
  const [showPreview, setShowPreview] = useState(false);

  const handlePreviewClick = () => {
    console.log('WhatsApp preview button clicked, showPreview:', !showPreview);
    setShowPreview(true);
  };

  const handleDirectWhatsApp = () => {
    const phoneNumber = "+918978654332"; // Temple's WhatsApp number
    const message = "నమస్కారం! శ్రీ కోదండ రామస్వామి దేవాలయం గురించి మరింత తెలుసుకోవాలనుకుంటున్నాను. / Hello! I would like to know more about Sri Kodanda Ramaswamy Temple.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setShowPreview(false);
  };

  return (
    <>
      {/* WhatsApp Floating Button - Fixed Position */}
      <div 
        className="fixed bottom-[120px] right-[80px] md:bottom-[24px] md:right-[24px] z-[60]"
        style={{
          position: 'fixed'
        }}
      >
        <Button
          onClick={handlePreviewClick}
          className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-2xl hover:shadow-xl transition-all duration-300 temple-glow relative"
          size="sm"
        >
          <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
          <span className="sr-only">Contact via WhatsApp</span>
        </Button>
        
        {/* Pulse ring animation */}
        <div className="absolute inset-0 rounded-full bg-green-500/30 animate-ping pointer-events-none"></div>
      </div>

      {/* WhatsApp Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full mx-4 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 text-white relative">
              <button
                onClick={() => setShowPreview(false)}
                className="absolute top-3 right-3 text-white hover:bg-white/20 rounded-full p-1"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  🛕
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Temple Consultant</h3>
                  <div className="flex items-center gap-1 text-sm">
                    <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                    <span>Online now</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <div>
                <div className="text-2xl mb-2">👋</div>
                <h4 className="font-semibold text-gray-800 mb-2">Welcome to Sri Kodanda Ramaswamy Temple!</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We're here to help you with puja bookings, darshan timings, and temple services. How can we assist you today?
                </p>
              </div>

              <Button
                onClick={handleDirectWhatsApp}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-medium"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                📲 Start WhatsApp Chat
              </Button>
              
              <p className="text-center text-xs text-gray-500">
                Get instant response from our temple team
              </p>

              <div className="bg-saffron/10 rounded-xl p-4 space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <span>🙏</span>
                  <span className="font-medium text-gray-700">500+ Happy Devotees</span>
                </div>
                <p className="text-xs text-gray-600">Join our blessed community</p>
              </div>

              <div className="text-center text-xs text-gray-500 border-t pt-3">
                📌 Available 6 AM – 9 PM | Response within 2 minutes
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppFloat;