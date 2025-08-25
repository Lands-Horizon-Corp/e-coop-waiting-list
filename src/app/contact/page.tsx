"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast("Thank you for contacting us. We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="px-4 pt-20 pb-16 sm:px-6 lg:px-8">
      <div className="to-background/0 via-background/0 from-primary/50 absolute right-0 -z-10 -mt-16 h-screen w-full bg-radial-[ellipse_at_100%_0%] to-100%" />
      <div className="to-background/0 via-background/0 from-primary/20 absolute right-0 -z-10 h-screen w-full bg-radial-[ellipse_at_0%_50%] to-100%" />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-foreground mb-4 text-4xl font-bold">
            Get in{" "}
            <span className="bg-gradient-ocean bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
            Have questions about our cooperative platform? We&apos;re here to
            help you succeed.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-foreground mb-6 text-2xl font-semibold">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <Mail className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold">Email</h3>
                    <p className="text-muted-foreground">
                      lands.horizon.corp@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <Phone className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold">Phone</h3>
                    <p className="text-muted-foreground">+63 991 617 1081</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <MapPin className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold">Address</h3>
                    <p className="text-muted-foreground">
                      San Jose Del Monte, Bulacan
                      <br />
                      Region III (Central Luzon)
                      <br />
                      Philippines
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-semibold">
                  Ready to Transform Your Cooperative?
                </h3>
                <p className="mb-4 text-white/90">
                  Join our platform and empower your community with cutting-edge
                  digital tools.
                </p>
                <Button className="ml-auto" variant="default">
                  Join Waitlist
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-card/50 border-border/50 shadow-soft backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-foreground">
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      placeholder="your.email@example.com"
                      type="email"
                      value={formData.email}
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What can we help you with?"
                    value={formData.subject}
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us more about your cooperative and how we can help..."
                    rows={10}
                    value={formData.message}
                    required
                    onChange={handleChange}
                  />
                </div>

                <Button className="w-full" type="submit">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-foreground mb-8 text-center text-2xl font-semibold">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                question: "How secure is the platform?",
                answer:
                  "We use bank-level encryption and security protocols to protect all cooperative and member data. Our platform is regularly audited and complies with international financial security standards.",
              },
              {
                question: "Can we integrate with existing systems?",
                answer:
                  "Yes! Our API allows seamless integration with your existing cooperative management systems, accounting software, and other third-party applications.",
              },
              {
                question: "What support do you provide?",
                answer:
                  "We offer comprehensive support including training sessions, dedicated customer support, help documentation, and ongoing technical assistance for all our cooperative partners.",
              },
              {
                question: "How much does it cost?",
                answer:
                  "Our pricing is designed to be affordable for cooperatives of all sizes. Contact us for a customized quote based on your specific needs and member count.",
              },
            ].map((faq, index) => (
              <Card
                className="bg-card/50 border-border/50 backdrop-blur-sm"
                key={index}
              >
                <CardContent className="p-6">
                  <h3 className="text-foreground mb-2 font-semibold">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
