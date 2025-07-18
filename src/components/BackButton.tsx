import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface BackButtonProps {
  to?: string;
  label?: string;
  className?: string;
}

const BackButton = ({ to = "/", label = "Back to Home", className = "" }: BackButtonProps) => {
  return (
    <Link to={to} className={`inline-flex ${className}`}>
      <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10">
        <ArrowLeft className="w-4 h-4 mr-2" />
        {label}
      </Button>
    </Link>
  );
};

export default BackButton;