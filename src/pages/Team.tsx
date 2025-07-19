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
      name: "Anjali patel",
      role: "Head of AI Department",
      bio: "AI visionary with 2+ years in machine learning and business automation. Led multiple successful AI transformations.",
      fullBio: "Anjali is a seasoned entrepreneur and AI expert with over 8 years of experience in machine learning and business automation. He has led multiple successful AI transformation projects for Fortune 500 companies and has been featured in various tech publications for his innovative approach to AI implementation.",
      image: "./../public/lovable-uploads/anjali.jpeg",
      linkedin: "https://www.linkedin.com/in/anjali-patel-951172137/ ",
      github: "#",
      email: "anjali@baapcompany.com",
      location: "Sangamner, Maharashtra",
      joinedDate: "july 2024",
      expertise: [" AI Engineer", "Generative AI", "Enthusiast in Machine Learning", "Deep Learning" , "NLP"],
      working: ["management"]
    },
    {
      name: "Rahul Wale",
      role: "AI Research Lead",
      bio: "PhD in Computer Science, specializing in NLP and deep learning. Published researcher with 20+ patents.",
      fullBio: "AI Research Lead with 2 years of experience.Leading teams to design and deploy scalable AI systems.Expert in LLM pipelines, fine-tuning, and agentic AI.Turning research into real-world business impact",
      image: "public/lovable-uploads/rahulwale.jpeg",
      linkedin: "https://www.linkedin.com/in/maheshwari-suryavanshi-00b363331/",
      github: "https://github.com/maheshwari-suryavanshi",
      email: "rahul@baapcompany.com",
      location: "Sangamner, Maharashtra",
      joinedDate: "july 2023",
      expertise: ["Natural Language Processing", "ML & DL", "Research & Development", "Technical Architecture" ,"Team Management"],
      working: ["manage all project"]
    },
    {
      name: "Sahil Wable",
      role: "AI/ML Engineer",
      bio: "Product strategy expert with 7+ years in AI product development. Led product launches at Microsoft and Amazon.",
      fullBio: "As an AI/ML Engineer, you design, build, and deploy machine learning models to solve real-world problems and drive business value. You work on the entire ML pipeline, including data collection, preprocessing, feature engineering, model training, evaluation, and deployment into production environments",
      image: "public/lovable-uploads/sahilwable.jpeg",
      linkedin: "#",
      github: "#",
      email: "Sahil@baapcompany.com",
      location: "Sangamner, Maharashtra",
      joinedDate: "july 2023",
      expertise: ["ML & DL", "Computer Vision", "TensorFlow", "PyTorch", "sklearn"],
      working: ["Chat bot builder" , "FarmerX"]
    },
    {
      name: "Rushikesh Ubhedal",
      role: "Data Scientist",
      bio: "Cloud infrastructure specialist with expertise in Kubernetes, Docker, and CI/CD. Ensures 99.9% uptime.",
      fullBio: "As a Data Scientist, you analyze complex data to extract actionable insights, build predictive models, and support data-driven decision-making within the organization. You use statistical methods and machine learning techniques to solve business problems, communicating findings clearly to stakeholders.",
      image: "public/lovable-uploads/rushiubhedal.jpeg",
      linkedin: "#",
      github: "#",
      email: "Rushikesh@baapcompany.com",
      location: "Denver, CO",
      joinedDate: "April 2021",
      expertise: ["DevOps", "Kubernetes", "Docker", "CI/CD", "Cloud Infrastructure"],
      working: ["Reporting AI" , "FarmerX"]
    },
    {
      name: "Jay Bhikule",
      role: "AI/ML Engineer",
      bio: "Award-winning designer focused on creating intuitive AI interfaces. 5+ years in design thinking and user research.",
      fullBio: "As a Data Scientist, you analyze complex data to extract actionable insights, build predictive models, and support data-driven decision-making within the organization. You use statistical methods and machine learning techniques to solve business problems, communicating findings clearly to stakeholders.",
      image: "public/lovable-uploads/jaybhekule.jpeg",
      linkedin: "#",
      github: "#",
      email: "jay@baapcompany.com",
      location: "Sangamner, Maharashtra",
      joinedDate: "july 2023",
      expertise: ["ML & DL", "Computer Vision", "TensorFlow", "PyTorch", "sklearn"],
      working: ["FarmerX"]
    },
    {
      name: "Ashutosh Gadekar",
      role: "Data Engineer",
      bio: "Big data specialist with expertise in Apache Spark and real-time data processing. Built pipelines processing TB+ data.",
      fullBio: "Ashutosh is a big data specialist with expertise in Apache Spark and real-time data processing. He has built data pipelines that process terabytes of data daily, enabling real-time AI insights for our clients.",
      image: "public/lovable-uploads/ashutosh.jpeg",
      linkedin: "#",
      github: "#",
      email: "ashutosh@baapcompany.com",
      location: "Sangamner, Maharashtra",
      joinedDate: "july 2023",
      expertise: ["Data Engineering", "Apache Spark", "Real-time Processing", "Big Data"],
      working: ["Reporting AI"]
    },
    {
      name: "Saurav Rajput",
      role: "Gen AI",
      bio: "Machine learning engineer with expertise in computer vision and neural networks. Former Google AI researcher.",
      fullBio: "As an AI/ML Engineer, you design, build, and deploy machine learning models to solve real-world problems and drive business value. You work on the entire ML pipeline, including data collection, preprocessing, feature engineering, model training, evaluation, and deployment into production environments",
      image: "./../public/lovable-uploads/saurav.jpeg",
      linkedin: "#",
      github: "#",
      email: "saurav@baapcompany.com",
      location: "Sangamner, Maharashtra",
      joinedDate: "july 2023",
      expertise: ["Generative AI", "ML & Deep Learning", "LLM", "Langchain", "RAG"],
      working: ["Chat bot builder"]
    },
    {
      name: "Prathamesh Kasab",
      role: "Data Scientist",
      bio: "Product strategy expert with 7+ years in AI product development. Led product launches at Microsoft and Amazon.",
      fullBio: "Ashutosh is a big data specialist with expertise in Apache Spark and real-time data processing. He has built data pipelines that process terabytes of data daily, enabling real-time AI insights for our clients",
      image: "public/lovable-uploads/prathamesh.jpeg",
      linkedin: "#",
      github: "#",
      email: "Prathamesh@baapcompany.com",
      location: "Sangamner, Maharashtra",
      joinedDate: "july 2023",
      expertise: ["Data Engineering", "Apache Spark", "Real-time Processing", "Big Data"],
      working: ["Reporting AI"]
    },
    {
      name: "Shrawani Kale",
      role: "NLP Engineer",
      bio: "Cloud infrastructure specialist with expertise in Kubernetes, Docker, and CI/CD. Ensures 99.9% uptime.",
      fullBio: "As an NLP Engineer, you build and deploy language-based AI systems that understand, process, and generate human language. You work with text data, design NLP pipelines, fine-tune language models, and create solutions like chatbots, text summarizers, and information extraction systems to solve real-world problems.",
      image: "./../public/lovable-uploads/shravani.jpg",
      linkedin: "#",
      github: "#",
      email: "Shrawani@baapcompany.com",
      location: "sangamner , Maharashtra",
      joinedDate: "july 2023",
      expertise: ["Tokenization", "Transformer models", "Prompt engineering for LLMs", "NLTK",],
      working: ["chat bot builder"]
    },
    {
      name: "Jagdish Pagar",
      role: "Data AI Software Developer ",
      bio: "Big data specialist with expertise in Apache Spark and real-time data processing. Built pipelines processing TB+ data.",
      fullBio: "Jagdish is a big data specialist with expertise in Apache Spark and real-time data processing. He has built data pipelines that process terabytes of data daily, enabling real-time AI insights for our clients.",
      image: "public/lovable-uploads/jadishpagar.jpg",
      linkedin: "https://www.linkedin.com/in/jagdish-pagar/",
      github: "#",
      email: "Jagdish@baapcompany.com",
      location: "Sangamner, Maharashtra",
      joinedDate: "july 2023",
      expertise: ["DL & ML", "AI Software Developer", "Data Analyst", "LLM"],
      working: ["Chat bot builder"]
    },{
      name: "Darshan Pulate",
      role: "Aspiring Data Scientist",
      bio: "Award-winning designer focused on creating intuitive AI interfaces. 5+ years in design thinking and user research.",
      fullBio: "Aspiring Data Scientist with a strong foundation in Python, statistics, and machine learning, eager to turn data into actionable insights. Skilled in data cleaning, analysis, and visualization, and learning to build predictive models to solve real-world problems. Passionate about using data to drive smarter decisions and business impact.",
      image: "public/lovable-uploads/darshanpulate.jpg",
      linkedin: "#",
      github: "#",
      email: "Darshan@baapcompany.com",
      location: "Sangamner, Maharashtra",
      joinedDate: "july 2024",
      expertise: ["AI & Data Science Enthusias", "Power BI", "Building Scalable ML Systems"],
      working: []
    },
    {
      name: "Siddharth Talekar ",
      role: "AI Engineer",
      bio: "Big data specialist with expertise in Apache Spark and real-time data processing. Built pipelines processing TB+ data.",
      fullBio: "AI Engineer skilled in designing, building, and deploying scalable AI systems that solve real-world problems. Experienced in machine learning, deep learning, and LLM pipelines, turning data into impactful solutions. Passionate about aligning AI technology with business needs for measurable results.",
      image: "public/lovable-uploads/siddharthtalekar.jpg",
      linkedin: "#",
      github: "#",
      email: "Siddharth@baapcompany.com",
      location: "Sangamner, Maharashtra",
      joinedDate: "july 2023",
      expertise: ["Data Science", "AI Software Enginee", "LLMs", "AI Dev"],
      working: ["Smart farmer"]
    },
    {
      name: "Rehan Khan",
      role: "Ml & Stats | AI Engineer",
      bio: "Strategic partnerships and client relationship expert. 6+ years driving growth in AI and technology sectors.",
      fullBio: "Probing AI to explore how ML and stats work together to drive innovation, uncovering the intricacies of algorithmic decision-making, and revealing the powerful synergies that emerge when machine learning models are fueled by robust statistical analysis.",
      image: "public/lovable-uploads/user.png",
      linkedin: "https://www.linkedin.com/in/rehan-khan-554225321",
      github: "#",
      email: "rehan@baapcompany.com",
      location: "Sangamner, Maharashtra",
      joinedDate: "july 2023",
      expertise: ["ML & DL", "Business Development", "statistics", "langchain", "sklearn"],
      working: ["Smart farmer"]
    },
    {
      name: "Soham Gagare",
      role: "AI Engineer",
      bio: "Big data specialist with expertise in Apache Spark and real-time data processing. Built pipelines processing TB+ data.",
      fullBio: "soham is a big data specialist with expertise in Apache Spark and real-time data processing. He has built data pipelines that process terabytes of data daily, enabling real-time AI insights for our clients.",
      image: "public/lovable-uploads/sohamgagare.jpeg",
      linkedin: "https://www.linkedin.com/in/soham-gagare/",
      github: "#",
      email: "Soham@baapcompany.com",
      location: "Sangamner, Maharashtra",
      joinedDate: "july 2023",
      expertise: ["Data Science", "AI Software Enginee", "LLMs", "AI Dev"],
      working: ["Smart farmer"]
    },
    {
      name: "Kunal Gangarde",
      role: "Gen AI Engineer",
      bio: "Strategic partnerships and client relationship expert. 6+ years driving growth in AI and technology sectors.",
      fullBio: "Gen AI Engineer specializing in building and deploying generative AI systems using LLMs and diffusion models. Skilled in prompt engineering, fine-tuning, and integrating GenAI into real-world applications. Focused on creating scalable, impactful AI solutions that drive business innovation.",
      image: "public/lovable-uploads/kunal.jpg",
      linkedin: "https://www.linkedin.com/in/rehan-khan-554225321",
      github: "#",
      email: "Kunal@baapcompany.com",
      location: "Sangamner, Maharashtra",
      joinedDate: "july 2024",
      expertise: ["Data Science", "AI Software Enginee", "LLMs", "AI Dev"],
      working: ["Smart farmer"]
    },
    {
      name: "Aditya Ambre",
      role: "Gen AI Engineer",
      bio: "Strategic partnerships and client relationship expert. 6+ years driving growth in AI and technology sectors.",
      fullBio: "Gen AI Engineer specializing in building and deploying generative AI systems using LLMs and diffusion models. Skilled in prompt engineering, fine-tuning, and integrating GenAI into real-world applications. Focused on creating scalable, impactful AI solutions that drive business innovation.",
      image: "public/lovable-uploads/adityaambre.jpg",
      linkedin: "https://www.linkedin.com/in/rehan-khan-554225321",
      github: "#",
      email: "aditya@baapcompany.com",
      location: "Sangamner, Maharashtra",
      joinedDate: "july 2023",
      expertise: ["Data Science", "AI Software Enginee", "LLMs", "AI Dev"],
      working: ["Smart farmer"]
    }, 
    {
      name: "Aditya Pawar",
      role: "AI Engineer",
      bio: "Big data specialist with expertise in Apache Spark and real-time data processing. Built pipelines processing TB+ data.",
      fullBio: "AI Software Engineer skilled in designing and deploying AI-powered applications. Combines software engineering with machine learning to build scalable, production-ready systems. Focused on delivering practical AI solutions that drive business value.",
      image: "public/lovable-uploads/adityapawar.jpeg",
      linkedin: "https://www.linkedin.com/in/aditya-pawar/",
      github: "#",
      email: "Aditya@baapcompany.com",
      location: "Sangamner, Maharashtra",
      joinedDate: "july 2022",
      expertise: ["AI Dev", "Python & FastAPI", "Developing Intelligent", "Scalable Systems"],
      working: []
    },  
    {
      name: "Masira Shaikh",
      role: "AI Software Engineer",
      bio: "Strategic partnerships and client relationship expert. 6+ years driving growth in AI and technology sectors.",
      fullBio: "AI Software Engineer skilled in designing and deploying AI-powered applications. Combines software engineering with machine learning to build scalable, production-ready systems. Focused on delivering practical AI solutions that drive business value.",
      image: "public/lovable-uploads/masira.jpeg",
      linkedin: "https://www.linkedin.com/in/rehan-khan-554225321",
      github: "#",
      email: "Masira@baapcompany.com",
      location: "Sangamner, Maharashtra",
      joinedDate: "july 2022",
      expertise: ["Data Science", "AI Software Enginee", "LLMs", "AI Dev"],
      working: ["Reporting AI"]
    },
    {
      name: "Dhiraj Gaikwad",
      role: "AI Software Engineer",
      bio: "Strategic partnerships and client relationship expert. 6+ years driving growth in AI and technology sectors.",
      fullBio: "AI Software Engineer skilled in designing and deploying AI-powered applications. Combines software engineering with machine learning to build scalable, production-ready systems. Focused on delivering practical AI solutions that drive business value.",
      image: "public/lovable-uploads/Dhiraj-Gaikwad.jpeg",
      linkedin: "https://www.linkedin.com/in/rehan-khan-554225321",
      github: "#",
      email: "dhiraj@baapcompany.com",
      location: "Sangamner, Maharashtra",
      joinedDate: "july 2022",
      expertise: ["AI Dev", "Python & FastAPI", "Developing Intelligent", "Scalable Systems"],
      working: []
    },
    {
      name: "Abhishek Ghotekar ",
      role: "AI Software Engineer",
      bio: "Strategic partnerships and client relationship expert. 6+ years driving growth in AI and technology sectors.",
      fullBio: "AI Software Engineer skilled in designing and deploying AI-powered applications. Combines software engineering with machine learning to build scalable, production-ready systems. Focused on delivering practical AI solutions that drive business value.",
      image: "public/lovable-uploads/abhishek.jpg",
      linkedin: "https://www.linkedin.com/in/rehan-khan-554225321",
      github: "#",
      email: "Abhishek@baapcompany.com",
      location: "Sangamner, Maharashtra",
      joinedDate: "july 2022",
      expertise: ["AI Dev", "Python & FastAPI", "Developing Intelligent", "Scalable Systems"],
      working: ["FarmerX"]
    },
    {
      name: "Maheshwari Suryavanshi",
      role: "AI Ethical Practitioner",
      bio: "Award-winning designer focused on creating intuitive AI interfaces. 5+ years in design thinking and user research.",
      fullBio: "Passionate about promoting responsible and ethical AI development. Skilled in identifying potential biases, ensuring transparency, and aligning AI solutions with fairness and privacy standards. Focused on building trustworthy AI systems that prioritize human values and social impact. Committed to continuous learning in AI governance and ethical frameworks",
      image: "public/lovable-uploads/mahisuryavanshi.jpg",
      linkedin: "#",
      github: "#",
      email: "Maheshwari@baapcompany.com",
      location: "Sangamner, Maharashtra",
      joinedDate: "july 2023",
      expertise: ["Risk AssessmentBias ", "Continual Learning & Monitoring", "Detection & Mitigation", "Ethical Frameworks & Principles"],
      working: ["Digital parbhani"]
    },
    {
      name: "Sakshi Mali",
      role: "Data Scientist",
      bio: "Big data specialist with expertise in Apache Spark and real-time data processing. Built pipelines processing TB+ data.",
      fullBio: "Sakshi is a big data specialist with expertise in Apache Spark and real-time data processing. He has built data pipelines that process terabytes of data daily, enabling real-time AI insights for our clients.",
      image: "public/lovable-uploads/sakshimali.jpg",
      linkedin: "#",
      github: "#",
      email: "sakshi@baapcompany.com",
      location: "Sangamner, Maharashtra",
      joinedDate: "july 2023",
      expertise: ["Data Engineering", "Apache Spark", "Real-time Processing", "DL & ML", "LLM"],
      working: ["Digital parbhani"]
    },
    {
      name: "Rushikesh Lodhe",
      role: "Agentic AI Specialist",
      bio: "Expert in data analytics and machine learning with experience in fintech and healthcare AI solutions.",
      fullBio: "Agentic AI Specialist with 2 years of experience building, orchestrating, and deploying agent-based AI systems that automate workflows and solve complex real-world problems efficiently.",
      image: "public/lovable-uploads/rushilodhe.jpeg",
      linkedin: "#",
      github: "#",
      email: "Rushikesh@baapcompany.com",
      location: "New York, NY",
      joinedDate: "June 2020",
      expertise: ["ML & DL", "LLMs", "Langchain", "transformer"],
      working: ["Digital parbhani" , "kissan ai"]
    },
    {
      name: "Sharad Waje",
      role: "Agentic AI Specialist",
      bio: "Full-stack expert specializing in React, Python, and cloud architecture. 6+ years building scalable applications.",
      fullBio: "Agentic AI Specialist with 2 years of experience building, orchestrating, and deploying agent-based AI systems that automate workflows and solve complex real-world problems efficiently.",
      image: "public/lovable-uploads/sharadwaje.jpeg",
      linkedin: "#",
      github: "#",
      email: "Sharad@baapcompany.com",
      location: "Sangamner, Maharashtra",
      joinedDate: "july 2023",
      expertise: ["ML & DL", "LLMs", "Langchain", "transformer"],
      working: ["Digital parbhani" , "FarmerX"]
    },
    {
      name: "Saish Jape",
      role: "AI/ML Engineer",
      bio: "Machine learning engineer with expertise in computer vision and neural networks. Former Google AI researcher.",
      fullBio: "As an AI/ML Engineer, you design, build, and deploy machine learning models to solve real-world problems and drive business value. You work on the entire ML pipeline, including data collection, preprocessing, feature engineering, model training, evaluation, and deployment into production environments",
      image: "./../public/lovable-uploads/saish-jape-photo.jpg",
      linkedin: "#",
      github: "#",
      email: "Saish@baapcompany.com",
      location: "Sangamner, Maharashtra",
      joinedDate: "july 2023",
      expertise: ["ML & DL", "Computer Vision", "TensorFlow", "PyTorch", "sklearn"],
      working: ["Chat bot builder" ]
    },
    {
      name: "Ajinkya Wagh ",
      role: "AI Software Engineer ",
      bio: "Strategic partnerships and client relationship expert. 6+ years driving growth in AI and technology sectors.",
      fullBio: "AI Software Engineer skilled in designing and deploying AI-powered applications. Combines software engineering with machine learning to build scalable, production-ready systems. Focused on delivering practical AI solutions that drive business value.",
      image: "./../public/lovable-uploads/ajinkya-wagh.jpeg",
      linkedin: "https://www.linkedin.com/in/rehan-khan-554225321",
      github: "#",
      email: "Ajinkya@baapcompany.com",
      location: "Sangamner, Maharashtra",
      joinedDate: "july 2022",
      expertise: ["AI Dev", "Python & FastAPI Pro", "Building Smart Systems That Scale", "DL & ML"],
      working: ["Chat bot builder"]
    },
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

                    {/* working */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-primary mb-2">working:</h4>
                      <ul className="space-y-1">
                        {member.working.map((achievement, idx) => (
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