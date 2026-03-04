import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

const TempleContact = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormData>();
  const { toast } = useToast();

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Initialize EmailJS (you can set these values in a config)
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          to_email: 'info@kodandarama-tiruvuru.org',
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          subject: data.subject,
          message: data.message,
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      toast({
        title: "Message Sent Successfully! 🙏",
        description: "మీ సందేశం విజయవంతంగా పంపబడింది! We'll get back to you soon.",
      });
      
      reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Error Sending Message",
        description: "దయచేసి మళ్లీ ప్రయత్నించండి. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-divine-saffron/20 text-divine-saffron border-divine-saffron/30">
            సంప్రదింపు | Contact Us
          </Badge>
          <h2 className="font-temple-english text-4xl font-bold text-foreground mb-4">
            Connect with Divine Grace
          </h2>
          <p className="font-temple-telugu text-lg text-divine-saffron">
            దైవిక కృపను పొందుటకు మాతో సంప్రదించండి
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-6 border-sacred-gold/30 hover:shadow-divine-glow transition-all duration-300">
              <h3 className="font-temple-english text-xl font-semibold text-temple-maroon mb-6">
                Temple Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-divine-saffron mt-1" />
                  <div>
                    <p className="font-semibold">Temple Address</p>
                    <p className="text-foreground/70 text-sm">
                      Sri Kodanda Ramaswamy Temple<br />
                      Main Street, Tiruvuru<br />
                      West Godavari District<br />
                      Andhra Pradesh - 534101
                    </p>
                    <p className="font-temple-telugu text-sm text-divine-saffron mt-1">
                      తిరువూరు, పశ్చిమ గోదావరి జిల్లా
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-5 h-5 text-divine-saffron mt-1" />
                  <div>
                    <p className="font-semibold">Contact Numbers</p>
                    <p className="text-foreground/70 text-sm">
                      Temple Office: +91 8812 234567<br />
                      Head Priest: +91 9876 543210<br />
                      Emergency: +91 8812 234568
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 text-divine-saffron mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-foreground/70 text-sm">
                      info@kodandarama-tiruvuru.org<br />
                      donations@kodandarama-tiruvuru.org
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-5 h-5 text-divine-saffron mt-1" />
                  <div>
                    <p className="font-semibold">Temple Timings</p>
                    <p className="text-foreground/70 text-sm">
                      Morning: 5:30 AM - 12:00 PM<br />
                      Evening: 4:00 PM - 9:00 PM<br />
                      Special days: 5:30 AM - 10:00 PM
                    </p>
                    <p className="font-temple-telugu text-sm text-divine-saffron mt-1">
                      ప్రతిదినం దర్శనానికి తెరువబడుతుంది
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6 border-sacred-gold/30">
              <h3 className="font-temple-english text-xl font-semibold text-temple-maroon mb-4">
                Quick Actions
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <Button 
                  variant="outline" 
                  className="border-divine-saffron text-divine-saffron hover:bg-divine-saffron/10"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
                <Button 
                  variant="outline" 
                  className="border-divine-saffron text-divine-saffron hover:bg-divine-saffron/10"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
                <Button 
                  variant="outline" 
                  className="border-temple-maroon text-temple-maroon hover:bg-temple-maroon/10"
                >
                  📍 Directions
                </Button>
                <Button 
                  variant="outline" 
                  className="border-sacred-gold text-sacred-gold hover:bg-sacred-gold/10"
                >
                  💰 Donate
                </Button>
              </div>
            </Card>

            {/* Map Placeholder */}
            <Card className="p-6 border-sacred-gold/30">
              <h3 className="font-temple-english text-xl font-semibold text-temple-maroon mb-4">
                Temple Location
              </h3>
              <div className="bg-divine-saffron/10 h-48 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🗺️</div>
                  <p className="font-temple-english text-sm text-foreground/70">
                    Interactive map will be embedded here
                  </p>
                  <p className="font-temple-telugu text-xs text-divine-saffron mt-1">
                    గూగుల్ మ్యాప్స్ లింక్
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="p-6 border-sacred-gold/30">
              <h3 className="font-temple-english text-xl font-semibold text-temple-maroon mb-6">
                Send us a Message
              </h3>
              <p className="font-temple-telugu text-sm text-divine-saffron mb-6">
                మీ సందేశం లేదా సేవా అభ్యర్థనను పంపండి
              </p>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name | పేరు</label>
                    <Input 
                      {...register("name", { required: "Name is required" })}
                      placeholder="Your name" 
                      className="border-sacred-gold/30" 
                    />
                    {errors.name && (
                      <p className="text-destructive text-xs mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone | ఫోన్</label>
                    <Input 
                      {...register("phone", { required: "Phone number is required" })}
                      placeholder="+91 98765 43210" 
                      className="border-sacred-gold/30" 
                    />
                    {errors.phone && (
                      <p className="text-destructive text-xs mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Email | ఇమెయిల్</label>
                  <Input 
                    type="email" 
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address"
                      }
                    })}
                    placeholder="your@email.com" 
                    className="border-sacred-gold/30" 
                  />
                  {errors.email && (
                    <p className="text-destructive text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Subject | విषయం
                  </label>
                  <select 
                    {...register("subject", { required: "Subject is required" })}
                    className="w-full p-2 border border-sacred-gold/30 rounded-md bg-background"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry | సాధారణ విచారణ</option>
                    <option value="Seva Registration">Seva Registration | సేవా నమోదు</option>
                    <option value="Donation">Donation | దానం</option>
                    <option value="Event Booking">Event Booking | కార్యక్రమ బుకింగ్</option>
                    <option value="Other">Other | ఇతర</option>
                  </select>
                  {errors.subject && (
                    <p className="text-destructive text-xs mt-1">{errors.subject.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Message | సందేశం
                  </label>
                  <Textarea 
                    {...register("message", { required: "Message is required" })}
                    placeholder="Please share your message or requirements..."
                    rows={4}
                    className="border-sacred-gold/30"
                  />
                  {errors.message && (
                    <p className="text-destructive text-xs mt-1">{errors.message.message}</p>
                  )}
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-temple-gradient hover:shadow-divine-glow disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message | సందేశం పంపండి"}
                </Button>
              </form>
            </Card>

            {/* Seva Options */}
            <Card className="p-6 border-sacred-gold/30 mt-8">
              <h3 className="font-temple-english text-xl font-semibold text-temple-maroon mb-4">
                Temple Seva Options
              </h3>
              <p className="font-temple-telugu text-sm text-divine-saffron mb-4">
                దేవుని సేవకు అవకాశాలు
              </p>
              
              <div className="space-y-3">
                {[
                  { seva: "Abhishekam", price: "₹501", telugu: "అభిషేకం" },
                  { seva: "Sahasranama Archana", price: "₹251", telugu: "సహస్రనామ అర్చన" },
                  { seva: "Annadanam", price: "₹1001", telugu: "అన్నదానం" },
                  { seva: "Special Pooja", price: "₹2001", telugu: "ప్రత్యేక పూజ" },
                  { seva: "Vastra Seva", price: "₹751", telugu: "వస్త్ర సేవ" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-divine-saffron/5 rounded-lg">
                    <div>
                      <span className="font-medium">{item.seva}</span>
                      <span className="font-temple-telugu text-sm text-divine-saffron ml-2">
                        | {item.telugu}
                      </span>
                    </div>
                    <div className="text-temple-maroon font-semibold">{item.price}</div>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" className="w-full mt-4 border-divine-saffron text-divine-saffron hover:bg-divine-saffron/10">
                Book Seva Online | ఆన్‌లైన్ సేవా బుకింగ్
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TempleContact;