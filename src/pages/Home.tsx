import { useEffect, useRef } from "react";
import SEO from "@/components/SEO";
import TempleHeader from "@/components/TempleHeader";
import TempleHero from "@/components/TempleHero";
import TempleAbout from "@/components/TempleAbout";
import TempleGallery from "@/components/TempleGallery";
import DailyPoojaSchedule from "@/components/DailyPoojaSchedule";
import CommitteeChairman from "@/components/CommitteeChairman";
import TempleFooter from "@/components/TempleFooter";

const Home = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Start chanting audio automatically when home page loads
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Set volume to 30%
      audioRef.current.play().catch(() => {
        // Handle autoplay restrictions - most browsers block autoplay
        console.log("Autoplay blocked by browser");
      });
    }
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Sri Kodanda Ramaswamy Devalayam - Tiruvuru | కోదండ రామస్వామి దేవాలయం | Hindu Temple"
        description="Visit Sri Kodanda Ramaswamy Devalayam in Tiruvuru, Andhra Pradesh. Ancient Hindu temple dedicated to Lord Rama with daily poojas, special events, and spiritual programs. Experience divine darshan, participate in Rama Navami, Hanuman Jayanti celebrations. Temple timings: 6 AM - 8 PM daily."
        keywords="Kodanda Ramaswamy Temple Tiruvuru, Lord Rama Temple Andhra Pradesh, Hindu Temple Krishna District, Tiruvuru Temple Timings, Rama Darshan, Temple Pooja Schedule, Hanuman Temple, Religious Events, Temple Donations, Spiritual Center, Hindu Pilgrimage Site, కోదండ రామస్వామి దేవాలయం తిరువూరు, రామ దర్శనం, దేవాలయ పూజ సమయాలు"
        type="website"
      />
      
      {/* Hidden audio element for automatic chanting */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        style={{ display: 'none' }}
      >
        <source src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" type="audio/wav" />
        {/* Fallback for browsers that don't support the audio element */}
        Your browser does not support the audio element.
      </audio>
      
      <TempleHeader />
      <TempleHero />
      <TempleAbout />
      <TempleGallery />
      <DailyPoojaSchedule />
      <CommitteeChairman />
      <TempleFooter />
    </div>
  );
};

export default Home;