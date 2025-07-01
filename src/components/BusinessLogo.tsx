
import { Link } from "react-router-dom";

const BusinessLogo = ({ className = "" }: { className?: string }) => {
  return (
    <Link to="/" className={`flex items-center justify-center ${className}`}>
      <img 
        src="/lovable-uploads/12.png" 
        alt="Business Logo" 
        className="w-8 h-8 cursor-pointer hover:opacity-80 transition-opacity" 
      />
    </Link>
  );
};

export default BusinessLogo;
