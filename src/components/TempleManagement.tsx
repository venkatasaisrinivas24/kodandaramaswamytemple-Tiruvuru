import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, Clock, Heart } from "lucide-react";

const TempleManagement = () => {
  const trustMembers = [
    {
      name: "శ్రీ రామచంద్ర శర్మ",
      englishName: "Sri Ramachandra Sharma",
      position: "ట్రస్ట్ చైర్మన్ | Trust Chairman",
      phone: "+91 98765 43210",
      email: "chairman@kodandarama.org"
    },
    {
      name: "శ్రీ సీతారాం రెడ్డి",
      englishName: "Sri Sitaram Reddy", 
      position: "ట్రస్ట్ సెక్రటరీ | Trust Secretary",
      phone: "+91 98765 43211",
      email: "secretary@kodandarama.org"
    },
    {
      name: "శ్రీ హనుమంత శాస్త్రి",
      englishName: "Sri Hanumanta Sastri",
      position: "ట్రెజరర్ | Treasurer", 
      phone: "+91 98765 43212",
      email: "treasurer@kodandarama.org"
    }
  ];

  const priests = [
    {
      name: "శ్రీ వేంకటేశ్వర శర్మ",
      englishName: "Sri Venkateswara Sharma",
      position: "ప్రధాన పురోహితుడు | Head Priest",
      experience: "25 సంవత్సరాలు | 25 Years",
      specialization: "వేద పారాయణం, కల్యాణోత్సవాలు"
    },
    {
      name: "శ్రీ రాధాకృష్ణ దీక్షితులు", 
      englishName: "Sri Radhakrishna Dikshitulu",
      position: "అసిస్టెంట్ పురోహితుడు | Assistant Priest",
      experience: "15 సంవత్సరాలు | 15 Years", 
      specialization: "దైనిక పూజలు, అభిషేకాలు"
    }
  ];

  const poojaSchedule = [
    { time: "5:30 AM", ritual: "సుప్రభాతం | Suprabhatam", description: "దైనిక మంగళ ఆరతి" },
    { time: "6:00 AM", ritual: "అభిషేకం | Abhishekam", description: "ప్రధాన దేవత అభిషేకం" },
    { time: "8:00 AM", ritual: "కల్యాణోత్సవం | Kalyanotavam", description: "శుక్రవారాలు మాత్రమే" },
    { time: "12:00 PM", ritual: "మధ్యాహ్న ఆరతి | Midday Aarti", description: "భోగ నైవేద్యం" },
    { time: "6:00 PM", ritual: "సాయంత్ర ఆరతి | Evening Aarti", description: "దీప ఆరాధన" },
    { time: "8:00 PM", ritual: "రాత్రి ఆరతి | Night Aarti", description: "మంగళ ఆరతి" }
  ];

  return (
    <section id="management" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-temple-english text-4xl font-bold text-foreground mb-4">
            Temple Management
          </h2>
          <p className="font-temple-telugu text-xl text-divine-saffron mb-2">
            దేవాలయ నిర్వాహణ
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our dedicated team of trustees and priests who serve the temple with devotion and maintain the sacred traditions
          </p>
        </div>

        {/* Trust Board */}
        <div className="mb-16">
          <h3 className="font-temple-english text-2xl font-semibold text-foreground mb-8 text-center">
            Trust Board Members | ట్రస్ట్ బోర్డ్ సభ్యులు
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {trustMembers.map((member, index) => (
              <Card key={index} className="temple-card-hover border-sacred-gold/30">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-temple-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🙏</span>
                  </div>
                  <CardTitle className="font-temple-telugu text-lg">{member.name}</CardTitle>
                  <p className="font-temple-english text-sm text-muted-foreground">{member.englishName}</p>
                  <Badge variant="secondary" className="bg-divine-saffron/10 text-divine-saffron">
                    {member.position}
                  </Badge>
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  <div className="flex items-center justify-center space-x-2 text-sm">
                    <Phone className="w-4 h-4 text-divine-saffron" />
                    <span>{member.phone}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm">
                    <Mail className="w-4 h-4 text-divine-saffron" />
                    <span className="text-xs">{member.email}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Priests */}
        <div className="mb-16">
          <h3 className="font-temple-english text-2xl font-semibold text-foreground mb-8 text-center">
            Temple Priests | దేవాలయ పురోహితులు
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {priests.map((priest, index) => (
              <Card key={index} className="temple-card-hover border-sacred-gold/30">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-temple-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🕉️</span>
                  </div>
                  <CardTitle className="font-temple-telugu text-lg">{priest.name}</CardTitle>
                  <p className="font-temple-english text-sm text-muted-foreground">{priest.englishName}</p>
                  <Badge variant="secondary" className="bg-divine-saffron/10 text-divine-saffron">
                    {priest.position}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">అనుభవం | Experience</p>
                    <p className="font-semibold">{priest.experience}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">ప్రత్యేకత | Specialization</p>
                    <p className="font-temple-telugu text-sm">{priest.specialization}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Daily Pooja Schedule */}
        <div className="mb-16">
          <h3 className="font-temple-english text-2xl font-semibold text-foreground mb-8 text-center">
            Daily Pooja Schedule | దైనిక పూజా కార్యక్రమం
          </h3>
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

        {/* Donors List */}
        <div className="mb-16">
          <h3 className="font-temple-english text-2xl font-semibold text-foreground mb-8 text-center">
            Temple Donors | దేవాలయ దాతలు
          </h3>
          <Card className="max-w-6xl mx-auto border-sacred-gold/30">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: "శ్రీ రాజేశ్వర రెడ్డి", amount: "₹1,00,000", purpose: "అన్నదానం" },
                  { name: "శ్రీమతి లక్ష్మీ దేవి", amount: "₹50,000", purpose: "కల్యాణోత్సవం" },
                  { name: "శ్రీ వేంకటేశ్వర శర్మ", amount: "₹75,000", purpose: "దేవాలయ మరమ్మతులు" },
                  { name: "శ్రీ కృష్ణ మూర్తి", amount: "₹25,000", purpose: "దీప సేవ" },
                  { name: "శ్రీమతి సీతా రాం", amount: "₹30,000", purpose: "అన్నదానం" },
                  { name: "శ్రీ హనుమంత రాజు", amount: "₹40,000", purpose: "అభిషేకం" },
                  { name: "శ్రీ గోపాల కృష్ణ", amount: "₹20,000", purpose: "వస్త్రాలంకరణ" },
                  { name: "శ్రీమతి రాధిక", amount: "₹35,000", purpose: "ఫలహార సేవ" },
                  { name: "శ్రీ సురేష్ బాబు", amount: "₹60,000", purpose: "పుష్పాలంకరణ" }
                ].map((donor, index) => (
                  <div key={index} className="p-4 rounded-lg bg-muted/30 temple-card-hover border border-sacred-gold/20">
                    <div className="flex items-center space-x-3 mb-2">
                      <Heart className="w-5 h-5 text-divine-saffron" />
                      <h4 className="font-temple-telugu font-semibold text-foreground">{donor.name}</h4>
                    </div>
                    <div className="space-y-1">
                      <p className="text-lg font-bold text-divine-saffron">{donor.amount}</p>
                      <p className="text-sm text-muted-foreground">{donor.purpose}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-6">
                <Badge variant="secondary" className="bg-divine-saffron/10 text-divine-saffron">
                  మీ దానం కూడా ఇక్కడ ప్రదర్శించబడుతుంది | Your donation will also be displayed here
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Donation Details */}
        <div>
          <h3 className="font-temple-english text-2xl font-semibold text-foreground mb-8 text-center">
            Donation Information | దానం వివరాలు
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="temple-card-hover border-sacred-gold/30">
              <CardHeader className="text-center">
                <Heart className="w-12 h-12 text-divine-saffron mx-auto mb-4" />
                <CardTitle>అన్నదానం | Annadanam</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold text-divine-saffron mb-2">₹5,000</p>
                <p className="text-sm text-muted-foreground">For daily food seva to devotees</p>
              </CardContent>
            </Card>

            <Card className="temple-card-hover border-sacred-gold/30">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">🏹</div>
                <CardTitle>కల్యాణోত్సవం | Kalyanotavam</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold text-divine-saffron mb-2">₹11,000</p>
                <p className="text-sm text-muted-foreground">For special wedding ceremony</p>
              </CardContent>
            </Card>

            <Card className="temple-card-hover border-sacred-gold/30">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">🕉️</div>
                <CardTitle>సాధారణ దానం | General Donation</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold text-divine-saffron mb-2">Any Amount</p>
                <p className="text-sm text-muted-foreground">For temple maintenance</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <Card className="max-w-md mx-auto border-sacred-gold/30">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Bank Details | బ్యాంక్ వివరాలు</h4>
                <div className="space-y-2 text-sm">
                  <p><strong>Account Name:</strong> Sri Kodanda Ramaswamy Temple Trust</p>
                  <p><strong>Account No:</strong> 1234567890123456</p>
                  <p><strong>IFSC Code:</strong> SBIN0001234</p>
                  <p><strong>Bank:</strong> State Bank of India, Tiruvuru</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TempleManagement;