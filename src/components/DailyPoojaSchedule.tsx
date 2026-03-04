import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";

const DailyPoojaSchedule = () => {
  const poojaSchedule = [
    { time: "5:30 AM", ritual: "సుప్రభాతం | Suprabhatam", description: "దైనిక మంగళ ఆరతి" },
    { time: "6:00 AM", ritual: "అభిషేకం | Abhishekam", description: "ప్రధాన దేవత అభిషేకం" },
    { time: "8:00 AM", ritual: "కల్యాణోత్సవం | Kalyanotavam", description: "శుక్రవారాలు మాత్రమే" },
    { time: "12:00 PM", ritual: "మధ్యాహ్న ఆరతి | Midday Aarti", description: "భోగ నైవేద్యం" },
    { time: "6:00 PM", ritual: "సాయంత్ర ఆరతి | Evening Aarti", description: "దీప ఆరాధన" },
    { time: "8:00 PM", ritual: "రాత్రి ఆరతి | Night Aarti", description: "మంగళ ఆరతి" }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="font-temple-english text-3xl font-semibold text-foreground mb-4">
            Daily Pooja Schedule | దైనిక పూజా కార్యక్రమం
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join us for our daily worship rituals and experience the divine blessings
          </p>
        </div>
        
        <Card className="max-w-4xl mx-auto border-sacred-gold/30">
          <CardContent className="p-6">
            <div className="space-y-4">
              {poojaSchedule.map((pooja, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-muted/30 temple-card-hover">
                  <div className="flex items-center space-x-2 min-w-[100px]">
                    <Clock className="w-4 h-4 text-divine-saffron" />
                    <span className="font-semibold text-divine-saffron">{pooja.time}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-temple-english font-semibold">{pooja.ritual}</h4>
                    <p className="text-sm text-muted-foreground">{pooja.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DailyPoojaSchedule;