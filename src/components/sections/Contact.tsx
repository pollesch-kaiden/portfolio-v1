import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Download,
  Code,
  Palette,
  Server,
  Database,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";

const technologies = [
  { name: "React", icon: Code, category: "Frontend" },
  { name: "TypeScript", icon: Code, category: "Frontend" },
  { name: "Tailwind CSS", icon: Palette, category: "Styling" },
  { name: "Node.js", icon: Server, category: "Backend" },
  { name: "Vite", icon: Code, category: "Build Tool" },
  { name: "Lucide & Simple Icons", icon: Palette, category: "Icons" },
];

interface ContactProps {
  onResumeClick: () => void;
}

export default function Contact({ onResumeClick }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="min-h-screen py-20">
      <div className="w-full">
        <h2
          id="contact-heading"
          className="text-3xl md:text-4xl font-bold light-text mb-[3px]"
        >
          Contact
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-8 opacity-50 pointer-events-none">
          {/* Disabled Contact Form */}
          <Card className="bg-card">
            <CardHeader>
              <CardTitle>Get In Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                      disabled
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled
                  />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    disabled
                  />
                </div>
                <Button type="submit" className="w-full" disabled>
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information + Resume */}
          <div className="space-y-6">
            <Card className="bg-card">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>kaidenpollesch@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+1 (920) 896-2631</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Ripon, WI</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardHeader>
                <CardTitle>Resume</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Download my resume to learn more about my experience and
                  qualifications.
                </p>
                <Button onClick={onResumeClick} className="w-full" disabled>
                  <Download className="h-4 w-4 mr-2" />
                  View & Download Resume
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Deprecated Site Notice */}
        <Card className="bg-card mb-8 border-yellow-500/30">
          <CardContent className="py-5">
            <div className="text-center">
              <p className="font-semibold text-foreground mb-1">
                This site is deprecated
              </p>

              <p className="text-sm text-muted-foreground">
                This contact form is no longer active. This is the first version
                of this website and is no longer maintained. Please visit{" "}
                <a
                    href="https://kaidenpollesch.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium hover:underline"
                >
                  kaidenpollesch.com
                </a>{" "}
                for updated information.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Technologies */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle>Technologies Used for This Website</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {technologies.map((tech) => {
                const IconComponent = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-accent/50"
                  >
                    <IconComponent className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">{tech.name}</p>
                      <p className="text-xs text-foreground/70">
                        {tech.category}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
