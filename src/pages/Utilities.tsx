import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Code, Terminal, Package } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Utilities = () => {
  const utilities = [
    {
      id: 1,
      title: "BAAP-DataProcessor",
      category: "Data Processing",
      description: "Powerful Python library for data cleaning, transformation, and preprocessing with built-in AI capabilities.",
      useCases: [
        "Data cleaning and validation",
        "Feature engineering for ML models",
        "Automated data quality checks",
        "ETL pipeline creation"
      ],
      installation: "pip install baap-dataprocessor",
      codeExample: `from baap_dataprocessor import DataProcessor

# Initialize processor
processor = DataProcessor()

# Clean and transform data
clean_data = processor.clean(raw_data)
features = processor.extract_features(clean_data)`,
      version: "v2.1.3",
      downloads: "50K+",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "BAAP-MLUtils",
      category: "Machine Learning",
      description: "Comprehensive ML utilities library with pre-built models, evaluation metrics, and deployment tools.",
      useCases: [
        "Quick model prototyping",
        "Model evaluation and comparison",
        "Automated hyperparameter tuning",
        "Model deployment utilities"
      ],
      installation: "pip install baap-mlutils",
      codeExample: `from baap_mlutils import AutoML, ModelEvaluator

# Auto ML pipeline
automl = AutoML()
model = automl.fit(X_train, y_train)

# Evaluate model
evaluator = ModelEvaluator()
metrics = evaluator.evaluate(model, X_test, y_test)`,
      version: "v1.8.2",
      downloads: "75K+",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "BAAP-Vision",
      category: "Computer Vision",
      description: "Advanced computer vision library with pre-trained models for object detection, image classification, and more.",
      useCases: [
        "Object detection and tracking",
        "Image classification",
        "Face recognition systems",
        "Image preprocessing pipelines"
      ],
      installation: "pip install baap-vision",
      codeExample: `from baap_vision import ObjectDetector, ImageClassifier

# Object detection
detector = ObjectDetector('yolo-v8')
objects = detector.detect(image)

# Image classification
classifier = ImageClassifier('resnet-50')
predictions = classifier.predict(image)`,
      version: "v3.0.1",
      downloads: "30K+",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "BAAP-NLP",
      category: "Natural Language Processing",
      description: "Natural language processing toolkit with sentiment analysis, text classification, and language detection.",
      useCases: [
        "Sentiment analysis",
        "Text classification and clustering",
        "Language detection",
        "Named entity recognition"
      ],
      installation: "pip install baap-nlp",
      codeExample: `from baap_nlp import SentimentAnalyzer, TextClassifier

# Sentiment analysis
analyzer = SentimentAnalyzer()
sentiment = analyzer.analyze("Great product!")

# Text classification
classifier = TextClassifier()
category = classifier.classify(text)`,
      version: "v2.5.0",
      downloads: "40K+",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "BAAP-AutoDeploy",
      category: "Deployment",
      description: "Automated deployment toolkit for ML models with support for cloud platforms and containerization.",
      useCases: [
        "One-click model deployment",
        "Container orchestration",
        "API endpoint generation",
        "Model monitoring and logging"
      ],
      installation: "pip install baap-autodeploy",
      codeExample: `from baap_autodeploy import ModelDeployer

# Deploy model to cloud
deployer = ModelDeployer()
endpoint = deployer.deploy(
    model=trained_model,
    platform='aws',
    auto_scale=True
)`,
      version: "v1.3.0",
      downloads: "25K+",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "BAAP-WebScraper",
      category: "Web Scraping",
      description: "Intelligent web scraping library with anti-detection capabilities and automated data extraction.",
      useCases: [
        "E-commerce data extraction",
        "News and content aggregation",
        "Price monitoring",
        "Social media data collection"
      ],
      installation: "pip install baap-webscraper",
      codeExample: `from baap_webscraper import SmartScraper

# Initialize scraper
scraper = SmartScraper(
    use_proxy=True,
    anti_detection=True
)

# Extract data
data = scraper.extract(url, selectors)`,
      version: "v2.2.1",
      downloads: "60K+",
      githubUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Header */}
        <section className="py-12 bg-gradient-primary">
          <div className="container mx-auto px-4">
            <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Python Libraries & Tools
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Powerful Python libraries and utilities built by BAAP Company to accelerate your AI development workflow.
            </p>
          </div>
        </section>

        {/* Utilities Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {utilities.map((utility, index) => (
                <Card 
                  key={utility.id} 
                  className="hover:shadow-large transition-all duration-300 border-0 bg-gradient-card animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <Package className="w-8 h-8 text-primary" />
                        <div>
                          <CardTitle className="text-xl text-primary">{utility.title}</CardTitle>
                          <Badge variant="secondary" className="mt-1">{utility.category}</Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-primary/10 text-primary">{utility.version}</Badge>
                        <p className="text-xs text-muted-foreground mt-1">{utility.downloads} downloads</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{utility.description}</p>
                  </CardHeader>

                  <CardContent>
                    {/* Use Cases */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                        <Terminal className="w-4 h-4" />
                        Use Cases:
                      </h4>
                      <ul className="space-y-1">
                        {utility.useCases.map((useCase, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {useCase}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Installation */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-primary mb-3">Installation:</h4>
                      <div className="bg-muted/50 rounded-lg p-3 font-mono text-sm">
                        {utility.installation}
                      </div>
                    </div>

                    {/* Code Example */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                        <Code className="w-4 h-4" />
                        Quick Example:
                      </h4>
                      <div className="bg-muted/50 rounded-lg p-3 font-mono text-xs overflow-x-auto">
                        <pre className="text-muted-foreground whitespace-pre-wrap">{utility.codeExample}</pre>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button className="flex-1">
                        <Download className="w-4 h-4 mr-2" />
                        Install Now
                      </Button>
                      <Button variant="outline">
                        View Docs
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Utilities;