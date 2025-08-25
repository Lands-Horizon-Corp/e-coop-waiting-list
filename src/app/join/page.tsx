"use client";

import { useState } from "react";
import { Building, CheckCircle, Star, TrendingUp, Users } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const Waitlist = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    memberCount: "",
    interests: "",
    hearAbout: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    toast(
      "We'll notify you as soon as we launch. Thank you for your interest!"
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <div className="to-background/0 via-background/0 from-primary/20 absolute right-0 -z-10 h-full w-full bg-radial-[ellipse_at_-20%_50%] to-10%" />
        <div className="to-background/0 via-background/0 from-primary/20 absolute right-0 -z-10 h-full w-full bg-radial-[ellipse_at_100%_50%] to-10%" />

        <div className="px-4 pt-20 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full">
              <CheckCircle className="h-10 w-10" />
            </div>
            <h1 className="text-foreground mb-4 text-3xl font-bold">
              You&apos;re on the list!
            </h1>
            <p className="text-muted-foreground mb-8">
              Thank you for joining our waitlist. We&apos;ll keep you updated on
              our progress and notify you as soon as we launch.
            </p>
            <div className="bg-card/50 border-border/50 mb-8 rounded-lg border p-6 backdrop-blur-sm">
              <h3 className="text-foreground mb-2 font-semibold">
                What happens next?
              </h3>
              <ul className="text-muted-foreground space-y-2 text-left">
                <li>• You&apos;ll receive a confirmation email shortly</li>
                <li>
                  • We&apos;ll share exclusive updates about our development
                  progress
                </li>
                <li>• You&apos;ll get early access when we launch</li>
                <li>• Special pricing for early adopters</li>
              </ul>
            </div>
            <Button
              className="bg-gradient-ocean text-primary-foreground shadow-ocean"
              onClick={() => (window.location.href = "/")}
            >
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-subtle min-h-screen">
      <div className="to-background/0 via-background/0 from-primary/20 absolute right-0 -z-10 h-full w-full bg-radial-[ellipse_at_-20%_50%] to-10%" />
      <div className="to-background/0 via-background/0 from-primary/20 absolute right-0 -z-10 h-full w-full bg-radial-[ellipse_at_100%_50%] to-10%" />

      <div className="px-4 pt-20 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-foreground mb-4 text-4xl font-bold">
              Join the <span className="text-primary">Waitlist</span>
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
              Be among the first to experience the future of cooperative digital
              banking and management.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Benefits Sidebar */}
            <div className="space-y-6">
              <Card className="border-0">
                <CardContent className="p-6">
                  <Star className="mb-4 h-6 w-6" />
                  <h3 className="mb-2 text-lg font-semibold">
                    Early Access Benefits
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• 30-day free trial</li>
                    <li>• Priority customer support</li>
                    <li>• Special launch pricing</li>
                    <li>• Exclusive training sessions</li>
                    <li>• Direct input on features</li>
                  </ul>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 rounded-lg p-2">
                    <Users className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold">5+</h4>
                    <p className="text-muted-foreground text-sm">
                      Cooperatives interested
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 rounded-lg p-2">
                    <Building className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold">50,000+</h4>
                    <p className="text-muted-foreground text-sm">
                      Members ready to join
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 rounded-lg p-2">
                    <TrendingUp className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold">
                      January 6, 2026
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Expected launch
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Waitlist Form */}
            <div className="lg:col-span-2">
              <Card className="bg-card/50 border-border/50 shadow-soft backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-foreground">
                    Join Our Waitlist
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
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
                        <Label htmlFor="email">Email Address *</Label>
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

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="organization">
                          Organization Name *
                        </Label>
                        <Input
                          id="organization"
                          name="organization"
                          placeholder="Your cooperative name"
                          value={formData.organization}
                          required
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="role">Your Role *</Label>
                        <Select
                          onValueChange={value =>
                            handleSelectChange("role", value)
                          }
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="president">
                              President/CEO
                            </SelectItem>
                            <SelectItem value="employee">
                              Private Employee
                            </SelectItem>
                            <SelectItem value="manager">
                              General Manager
                            </SelectItem>
                            <SelectItem value="treasurer">Treasurer</SelectItem>
                            <SelectItem value="secretary">Secretary</SelectItem>
                            <SelectItem value="board">Board Member</SelectItem>
                            <SelectItem value="staff">Staff Member</SelectItem>
                            <SelectItem value="member">
                              Cooperative Member
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="memberCount">Number of Members</Label>
                        <Select
                          onValueChange={value =>
                            handleSelectChange("memberCount", value)
                          }
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select member count" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-50">1-50 members</SelectItem>
                            <SelectItem value="51-200">
                              51-200 members
                            </SelectItem>
                            <SelectItem value="201-500">
                              201-500 members
                            </SelectItem>
                            <SelectItem value="501-1000">
                              501-1000 members
                            </SelectItem>
                            <SelectItem value="1000+">1000+ members</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="hearAbout">
                          How did you hear about us?
                        </Label>
                        <Select
                          onValueChange={value =>
                            handleSelectChange("hearAbout", value)
                          }
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select source" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="social">Social Media</SelectItem>
                            <SelectItem value="search">
                              Search Engine
                            </SelectItem>
                            <SelectItem value="referral">Referral</SelectItem>
                            <SelectItem value="conference">
                              Conference/Event
                            </SelectItem>
                            <SelectItem value="partner">
                              Partner Organization
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="interests">
                        What features interest you most?
                      </Label>
                      <Textarea
                        id="interests"
                        name="interests"
                        placeholder="Tell us about your specific needs and which features you're most excited about..."
                        rows={4}
                        value={formData.interests}
                        onChange={handleChange}
                      />
                    </div>

                    <Button className="w-full" type="submit" variant="default">
                      Join the Waitlist
                    </Button>

                    <p className="text-muted-foreground text-center text-xs">
                      By joining our waitlist, you agree to receive updates
                      about our platform. You can unsubscribe at any time.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
