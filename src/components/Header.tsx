
import { Search, Download, Menu, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import BusinessLogo from "./BusinessLogo";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Menu className="w-4 h-4" />
            
            <span className="font-medium">Demo</span>
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              1 minute ago
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Download className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
