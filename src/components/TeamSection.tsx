import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail, Users } from "lucide-react";
import { Link } from "react-router-dom";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Anjali patel",
      role: "Head of AI Department",
      bio: "Head of AI Dept | Leading teams to build impactful AI systems.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://www.linkedin.com/in/anjali-patel-951172137/",
      github: "#",
      email: "arjun@baapcompany.com"
    },
    {
      name: "Rahul Wale",
      role: "AI Research Lead",
      bio: "AI Research Lead | 2 Yrs Experience | Leading AI Teams & Building Production-Ready Systems",
      image: "public/lovable-uploads/rahulwale.jpeg",
      linkedin: "#",
      github: "#",
      email: "priya@baapcompany.com"
    },
    {
      name: "Rushi Lodhe",
      role: "Agentic AI Specialist",
      bio: "Agentic AI Specialist (2 Yrs) | Building smart AI agents that automate real-world tasks.",
      image: "public/lovable-uploads/rushilodhe.jpeg",
      linkedin: "#",
      github: "#",
      email: "rahul@baapcompany.com"
    },
    {
      name: "Saish Jape",
      role: "AI/ML Engineer",
      bio: "AI/ML Engineer | 2 Yrs Experience | Building AI-Powered Solutions | Python, PyTorch, and ML/DL",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      github: "#",
      email: "sneha@baapcompany.com"
    },
    {
      name: "Sharad Waje",
      role: "Agentic AI Specialist",
      bio: "Agentic AI Specialist (2 Yrs) | Building smart AI agents that automate real-world tasks.",
      image: "public/lovable-uploads/sharadwaje.jpeg",
      linkedin: "www.linkedin.com/in/sharad-waje-59b0ab299",
      github: "https://github.com/sharad8855",
      email: "michael@baapcompany.com"
    },
    {
      name: "Sakshi Mali",
      role: "Data Scientist",
      bio: "Data Scientist | AI Agentic Developer | 2 years of experience | Building Scalable, Data-Driven Solutions.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://www.linkedin.com/in/sakshi-mali-00b363331/",
      github: "https://github.com/Saku-Mali0410",
      email: "sakshimali9037@gmail.com"
    },
    {
      name: "Ajinkya Wagh ",
      role: "AI Software Engineer",
      bio: "AI Developer | 3 Years AI Engineer Experience | Python & FastAPI Expert | Building Scalable Smart System",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://www.linkedin.com/in/ajinkya-wagh-5b64b0266/",
      github: "https://github.com/ajinkya9849",
      email: "david@baapcompany.com"
    },
    {
      name: "Maheshwari Suryavanshi",
      role: "AI Ethical Practitioner",
      bio: "Passionate about promoting responsible and ethical AI development. 3 years of experience in AI and ML",
      image: "public/lovable-uploads/mahisuryavanshi.jpg",
      linkedin: "https://www.linkedin.com/in/maheshwari-suryavanshi-00b363331/",
      github: "https://github.com/maheshwari-suryavanshi",
      email: "lisa@baapcompany.com"
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

        {/* View All Team Button */}
        <div className="mt-16 text-center animate-fade-in">
          <Link to="/team">
            <Button size="lg" className="px-8">
              <Users className="w-5 h-5 mr-2" />
              View All Team Members
            </Button>
          </Link>
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