import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

const TempleEvents = () => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Countdown to Sri Rama Navami (example date)
    const targetDate = new Date('2024-04-17T06:00:00').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const upcomingEvents = [
    {
      title: "Sri Rama Navami Celebration",
      titleTelugu: "శ్రీరామ నవమి ఉత్సవం",
      date: "April 17, 2024",
      time: "6:00 AM - 10:00 PM",
      description: "Grand celebration of Lord Rama's birth with special poojas, bhajans, and prasadam distribution",
      isSpecial: true
    },
    {
      title: "Monthly Satyanarayana Pooja",
      titleTelugu: "మాసిక సత్యనారాయణ పూజ",
      date: "Every Full Moon",
      time: "6:30 PM - 8:30 PM",
      description: "Monthly Satyanarayana Vratam for peace and prosperity"
    },
    {
      title: "Annadanam Seva",
      titleTelugu: "అన్నదాన సేవ",
      date: "Every Saturday",
      time: "12:00 PM - 2:00 PM",
      description: "Free meal service for all devotees as part of seva"
    },
    {
      title: "Hanuman Chalisa Recitation",
      titleTelugu: "హనుమాన్ చాలీసా పారాయణం",
      date: "Every Tuesday",
      time: "7:00 PM - 8:00 PM",
      description: "Group recitation of Hanuman Chalisa with aarti"
    }
  ];

  return (
    <section id="events" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-divine-saffron/20 text-divine-saffron border-divine-saffron/30">
            కార్యక్రమాలు | Upcoming Events
          </Badge>
          <h2 className="font-temple-english text-4xl font-bold text-foreground mb-4">
            Sacred Festivals & Celebrations
          </h2>
          <p className="font-temple-telugu text-lg text-divine-saffron">
            దైవిక ఉత్సవాలు మరియు పర్వదినాలు
          </p>
        </div>

        {/* Weekly Temple Schedule */}
        <div className="mb-16">
          <Card className="p-8 border-sacred-gold/30">
            <h3 className="font-temple-english text-2xl font-bold text-temple-maroon mb-4 text-center">
              Weekly Temple Schedule
            </h3>
            <p className="font-temple-telugu text-lg text-divine-saffron mb-8 text-center">
              వారపు దేవాలయ కార్యక్రమాలు
            </p>
            
            <div className="grid lg:grid-cols-7 md:grid-cols-3 sm:grid-cols-2 gap-4">
              {[
                { 
                  day: "Monday", 
                  dayTelugu: "సోమవారం", 
                  events: ["6:00 AM - Mangala Aarti", "6:00 PM - Sandhya Aarti"],
                  special: "Lord Shiva Pooja",
                  icon: "🔱"
                },
                { 
                  day: "Tuesday", 
                  dayTelugu: "మంగళవారం", 
                  events: ["6:00 AM - Mangala Aarti", "7:00 PM - Hanuman Chalisa"],
                  special: "Hanuman Seva",
                  icon: "🐒"
                },
                { 
                  day: "Wednesday", 
                  dayTelugu: "బుధవారం", 
                  events: ["6:00 AM - Mangala Aarti", "6:00 PM - Sandhya Aarti"],
                  special: "Ganesha Pooja",
                  icon: "🐘"
                },
                { 
                  day: "Thursday", 
                  dayTelugu: "గురువారం", 
                  events: ["6:00 AM - Mangala Aarti", "6:00 PM - Vishnu Sahasranamam"],
                  special: "Guru Pooja",
                  icon: "📿"
                },
                { 
                  day: "Friday", 
                  dayTelugu: "శుక్రవారం", 
                  events: ["6:00 AM - Mangala Aarti", "6:00 PM - Devi Pooja"],
                  special: "Devi Seva",
                  icon: "🌺"
                },
                { 
                  day: "Saturday", 
                  dayTelugu: "శనివారం", 
                  events: ["6:00 AM - Mangala Aarti", "12:00 PM - Annadanam"],
                  special: "Annadanam Seva",
                  icon: "🍽️"
                },
                { 
                  day: "Sunday", 
                  dayTelugu: "ఆదివారం", 
                  events: ["6:00 AM - Mangala Aarti", "6:00 PM - Sundara Kanda"],
                  special: "Rama Pooja",
                  icon: "🏹"
                }
              ].map((item, index) => (
                <div key={index} className="bg-divine-saffron/5 rounded-lg p-4 border border-sacred-gold/20 hover:shadow-divine-glow transition-all duration-300">
                  <div className="text-center mb-3">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="font-bold text-temple-maroon">{item.day}</div>
                    <div className="font-temple-telugu text-sm text-divine-saffron">{item.dayTelugu}</div>
                  </div>
                  <div className="space-y-2">
                    {item.events.map((event, idx) => (
                      <div key={idx} className="text-xs text-foreground/70 text-center">
                        {event}
                      </div>
                    ))}
                    <div className="text-xs font-semibold text-divine-saffron text-center mt-2 pt-2 border-t border-sacred-gold/20">
                      {item.special}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Countdown to Sri Rama Navami */}
        <Card className="p-8 mb-12 border-sacred-gold/30 bg-temple-gradient-subtle">
          <div className="text-center">
            <h3 className="font-temple-english text-2xl font-bold text-temple-maroon mb-2">
              Sri Rama Navami Countdown
            </h3>
            <p className="font-temple-telugu text-lg text-divine-saffron mb-6">
              శ్రీరామ నవమి వరకు మిగిలిన సమయం
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { label: "Days", labelTelugu: "రోజులు", value: countdown.days },
                { label: "Hours", labelTelugu: "గంటలు", value: countdown.hours },
                { label: "Minutes", labelTelugu: "నిమిషాలు", value: countdown.minutes },
                { label: "Seconds", labelTelugu: "సెకండ్లు", value: countdown.seconds }
              ].map((item) => (
                <div key={item.label} className="bg-card p-4 rounded-lg border border-sacred-gold/30">
                  <div className="text-3xl font-bold text-divine-saffron mb-2">{item.value}</div>
                  <div className="text-sm text-foreground/70">{item.label}</div>
                  <div className="text-xs font-temple-telugu text-divine-saffron/70">{item.labelTelugu}</div>
                </div>
              ))}
            </div>

            <Button className="bg-temple-gradient hover:shadow-divine-glow">
              Register for Celebrations | ఉత్సవాలకు నమోదు
            </Button>
          </div>
        </Card>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {upcomingEvents.map((event, index) => (
            <Card 
              key={index} 
              className={`p-6 border-sacred-gold/30 hover:shadow-divine-glow transition-all duration-300 ${
                event.isSpecial ? 'ring-2 ring-divine-saffron/30 bg-divine-saffron/5' : ''
              }`}
            >
              {event.isSpecial && (
                <Badge className="mb-4 bg-temple-maroon text-white">
                  🎉 Special Festival | ప్రత్యేక పర్వదినం
                </Badge>
              )}
              
              <div className="mb-4">
                <h3 className="font-temple-english text-xl font-semibold text-temple-maroon mb-1">
                  {event.title}
                </h3>
                <p className="font-temple-telugu text-lg text-divine-saffron">
                  {event.titleTelugu}
                </p>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-3 text-sm text-foreground/70">
                  <Calendar className="w-4 h-4 text-divine-saffron" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-foreground/70">
                  <Clock className="w-4 h-4 text-divine-saffron" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-foreground/70">
                  <MapPin className="w-4 h-4 text-divine-saffron" />
                  <span>Temple Premises</span>
                </div>
              </div>

              <p className="text-foreground/80 leading-relaxed mb-4">
                {event.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-divine-saffron">
                  <Users className="w-4 h-4" />
                  <span>All devotees welcome</span>
                </div>
                <Button variant="outline" size="sm" className="border-divine-saffron text-divine-saffron hover:bg-divine-saffron/10">
                  Details
                </Button>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TempleEvents;