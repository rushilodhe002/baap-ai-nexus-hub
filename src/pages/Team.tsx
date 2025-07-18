import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Github, Mail, MapPin, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const Team = () => {
  useScrollToTop();
  
  const allTeamMembers = [
    {
      name: "Arjun Sharma",
      role: "Founder & CEO",
      bio: "AI visionary with 8+ years in machine learning and business automation. Led multiple successful AI transformations.",
      fullBio: "Arjun is a seasoned entrepreneur and AI expert with over 8 years of experience in machine learning and business automation. He has led multiple successful AI transformation projects for Fortune 500 companies and has been featured in various tech publications for his innovative approach to AI implementation.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      github: "#",
      email: "arjun@baapcompany.com",
      location: "San Francisco, CA",
      joinedDate: "January 2020",
      expertise: ["Machine Learning", "Business Strategy", "Team Leadership", "AI Ethics"],
      achievements: ["Founded 3 successful AI startups", "Published 15+ research papers", "TEDx Speaker on AI Innovation"]
    },
    {
      name: "Priya Patel",
      role: "CTO & AI Research Lead",
      bio: "PhD in Computer Science, specializing in NLP and deep learning. Published researcher with 20+ patents.",
      fullBio: "Dr. Priya Patel holds a PhD in Computer Science from MIT and specializes in Natural Language Processing and deep learning. She has published over 50 research papers and holds 20+ patents in AI technologies. Her work has been instrumental in advancing conversational AI systems.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      github: "#",
      email: "priya@baapcompany.com",
      location: "Boston, MA",
      joinedDate: "March 2020",
      expertise: ["Natural Language Processing", "Deep Learning", "Research & Development", "Technical Architecture"],
      achievements: ["PhD from MIT", "20+ patents in AI", "50+ published research papers", "Google AI Research Award"]
    },
    {
      name: "Rahul Singh",
      role: "Lead Data Scientist",
      bio: "Expert in data analytics and machine learning with experience in fintech and healthcare AI solutions.",
      fullBio: "Rahul is a data science expert with extensive experience in fintech and healthcare AI solutions. He has built predictive models that have saved companies millions of dollars and improved patient outcomes in healthcare settings.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      github: "#",
      email: "rahul@baapcompany.com",
      location: "New York, NY",
      joinedDate: "June 2020",
      expertise: ["Data Science", "Predictive Modeling", "Healthcare AI", "Financial Analytics"],
      achievements: ["Kaggle Grandmaster", "Built ML models saving $10M+ annually", "Healthcare AI Innovation Award"]
    },
    {
      name: "Sneha Kumar",
      role: "Senior Full-Stack Developer",
      bio: "Full-stack expert specializing in React, Python, and cloud architecture. 6+ years building scalable applications.",
      fullBio: "Sneha is a full-stack development expert with 6+ years of experience building scalable web applications. She specializes in React, Python, and cloud architecture, and has been instrumental in building the technical infrastructure for several successful AI products.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      github: "#",
      email: "sneha@baapcompany.com",
      location: "Austin, TX",
      joinedDate: "September 2020",
      expertise: ["Full-Stack Development", "React", "Python", "Cloud Architecture", "DevOps"],
      achievements: ["AWS Certified Solutions Architect", "Open source contributor", "Built apps serving 1M+ users"]
    },
    {
      name: "Michael Chen",
      role: "AI/ML Engineer",
      bio: "Machine learning engineer with expertise in computer vision and neural networks. Former Google AI researcher.",
      fullBio: "Michael is a machine learning engineer with deep expertise in computer vision and neural networks. He previously worked as an AI researcher at Google, where he contributed to several breakthrough projects in computer vision and image recognition.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      github: "#",
      email: "michael@baapcompany.com",
      location: "Seattle, WA",
      joinedDate: "November 2020",
      expertise: ["Computer Vision", "Neural Networks", "TensorFlow", "PyTorch", "Model Optimization"],
      achievements: ["Former Google AI Researcher", "10+ computer vision patents", "CVPR best paper award"]
    },
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      bio: "Product strategy expert with 7+ years in AI product development. Led product launches at Microsoft and Amazon.",
      fullBio: "Sarah is a product strategy expert with over 7 years of experience in AI product development. She has led successful product launches at Microsoft and Amazon, and specializes in translating complex AI capabilities into user-friendly products.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      github: "#",
      email: "sarah@baapcompany.com",
      location: "San Francisco, CA",
      joinedDate: "February 2021",
      expertise: ["Product Strategy", "AI Product Development", "User Experience", "Market Research"],
      achievements: ["Former Microsoft & Amazon PM", "Launched 5+ successful AI products", "Product Innovation Award"]
    },
    {
      name: "David Rodriguez",
      role: "DevOps Engineer",
      bio: "Cloud infrastructure specialist with expertise in Kubernetes, Docker, and CI/CD. Ensures 99.9% uptime.",
      fullBio: "David is a cloud infrastructure specialist with extensive experience in Kubernetes, Docker, and CI/CD pipelines. He ensures our AI systems maintain 99.9% uptime and can scale to handle millions of requests per day.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      github: "#",
      email: "david@baapcompany.com",
      location: "Denver, CO",
      joinedDate: "April 2021",
      expertise: ["DevOps", "Kubernetes", "Docker", "CI/CD", "Cloud Infrastructure"],
      achievements: ["Certified Kubernetes Administrator", "99.9% uptime track record", "Cloud Security Specialist"]
    },
    {
      name: "Lisa Wang",
      role: "UX/UI Designer",
      bio: "Award-winning designer focused on creating intuitive AI interfaces. 5+ years in design thinking and user research.",
      fullBio: "Lisa is an award-winning UX/UI designer with 5+ years of experience in design thinking and user research. She specializes in creating intuitive interfaces for complex AI systems, making advanced technology accessible to everyday users.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      github: "#",
      email: "lisa@baapcompany.com",
      location: "Los Angeles, CA",
      joinedDate: "July 2021",
      expertise: ["UX/UI Design", "Design Thinking", "User Research", "Prototyping", "Accessibility"],
      achievements: ["Design Excellence Award", "Featured in Design Weekly", "Led UX for 10+ AI products"]
    },
    {
      name: "James Thompson",
      role: "Data Engineer",
      bio: "Big data specialist with expertise in Apache Spark and real-time data processing. Built pipelines processing TB+ data.",
      fullBio: "James is a big data specialist with expertise in Apache Spark and real-time data processing. He has built data pipelines that process terabytes of data daily, enabling real-time AI insights for our clients.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      github: "#",
      email: "james@baapcompany.com",
      location: "Chicago, IL",
      joinedDate: "October 2021",
      expertise: ["Data Engineering", "Apache Spark", "Real-time Processing", "ETL Pipelines", "Big Data"],
      achievements: ["Apache Spark Contributor", "Built pipelines processing 100TB+ daily", "Data Engineering Excellence Award"]
    },
    {
      name: "Emily Martinez",
      role: "Business Development Manager",
      bio: "Strategic partnerships and client relationship expert. 6+ years driving growth in AI and technology sectors.",
      fullBio: "Emily is a strategic partnerships and client relationship expert with 6+ years of experience driving growth in AI and technology sectors. She has been instrumental in establishing key partnerships and expanding our client base globally.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      github: "#",
      email: "emily@baapcompany.com",
      location: "Miami, FL",
      joinedDate: "January 2022",
      expertise: ["Business Development", "Strategic Partnerships", "Client Relations", "Market Expansion"],
      achievements: ["Closed $50M+ in partnerships", "Expanded to 15+ countries", "Business Excellence Award"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Header */}
        <section className="py-12 bg-gradient-primary">
          <div className="container mx-auto px-4">
            <BackButton className="mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Complete Team
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Meet all the talented individuals who make BAAP Company's AI innovations possible.
            </p>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {allTeamMembers.map((member, index) => (
                <Card 
                  key={member.name} 
                  className="group hover:shadow-large transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-card animate-scale-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardContent className="p-6">
                    {/* Profile image */}
                    <div className="relative mb-6">
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
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-primary mb-1 group-hover:text-primary-glow transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-sm font-medium text-primary/70 mb-2">
                        {member.role}
                      </p>
                      <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {member.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {member.joinedDate}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {member.fullBio}
                      </p>
                    </div>

                    {/* Expertise */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-primary mb-2">Expertise:</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.expertise.map((skill, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-primary mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {member.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <div className="w-1 h-1 bg-primary rounded-full mt-1.5 shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

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
          </div>
        </section>

        {/* Join team CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Join Our Growing Team
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for AI innovation and want to make a real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                View Open Positions
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                Submit Resume
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Team;