import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail, Users } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Arjun Sharma",
      role: "Founder & CEO",
      bio: "AI visionary with 8+ years in machine learning and business automation. Led multiple successful AI transformations.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      github: "#",
      email: "arjun@baapcompany.com"
    },
    {
      name: "Priya Patel",
      role: "CTO & AI Research Lead",
      bio: "PhD in Computer Science, specializing in NLP and deep learning. Published researcher with 20+ patents.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      github: "#",
      email: "priya@baapcompany.com"
    },
    {
      name: "Rahul Singh",
      role: "Lead Data Scientist",
      bio: "Expert in data analytics and machine learning with experience in fintech and healthcare AI solutions.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      github: "#",
      email: "rahul@baapcompany.com"
    },
    {
      name: "Sneha Kumar",
      role: "Senior Full-Stack Developer",
      bio: "Full-stack expert specializing in React, Python, and cloud architecture. 6+ years building scalable applications.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      github: "#",
      email: "sneha@baapcompany.com"
    }
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4 animate-fade-in">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">Our Team</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 animate-slide-in-left">
            Meet the Innovators
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-in-right">
            Our diverse team of AI experts, developers, and researchers is passionate about creating solutions that make a real difference.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={member.name} 
              className="group hover:shadow-large transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-card animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                {/* Profile image */}
                <div className="relative mb-4">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-primary/10 group-hover:ring-primary/20 transition-all duration-300">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full border-2 border-background"></div>
                </div>

                {/* Member info */}
                <h3 className="text-xl font-bold text-primary mb-1 group-hover:text-primary-glow transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-primary/70 mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {member.bio}
                </p>

                {/* Social links */}
                <div className="flex justify-center gap-3">
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="w-8 h-8 hover:bg-primary/10 hover:text-primary"
                  >
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="w-8 h-8 hover:bg-primary/10 hover:text-primary"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="w-8 h-8 hover:bg-primary/10 hover:text-primary"
                  >
                    <Mail className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company values */}
        <div className="mt-20 animate-fade-in">
          <h3 className="text-2xl font-bold text-primary text-center mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation First",
                description: "We push the boundaries of what's possible with AI, constantly exploring new technologies and methodologies.",
                icon: "🚀"
              },
              {
                title: "Client Success",
                description: "Your success is our success. We're committed to delivering solutions that drive real business value.",
                icon: "🎯"
              },
              {
                title: "Ethical AI",
                description: "We believe in responsible AI development that respects privacy, fairness, and transparency.",
                icon: "⚖️"
              }
            ].map((value, idx) => (
              <div key={idx} className="text-center p-6 bg-gradient-card rounded-lg">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-lg font-bold text-primary mb-3">{value.title}</h4>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Join team CTA */}
        <div className="mt-16 text-center bg-primary/5 rounded-lg p-8 animate-fade-in">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Join Our Growing Team
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            We're always looking for talented individuals who share our passion for AI innovation.
          </p>
          <Button variant="outline" size="lg">
            View Open Positions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;