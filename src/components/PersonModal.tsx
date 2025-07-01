 
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface Person {
  id: number;
  name: string;
  company: string;
  role: string;
  location: string;
  experience: string;
  specialties: string[];
  avatar: string;
}

interface PersonModalProps {
  person: Person | null;
  isOpen: boolean;
  onClose: () => void;
}

const PersonModal = ({ person, isOpen, onClose }: PersonModalProps) => {
  if (!person) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto p-0">
        <div className="relative bg-white rounded-lg">
          {/* Header Section */}
          <div className="p-8 border-b border-gray-100">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center text-2xl shadow-sm border-2 border-white">
                  {person.avatar}
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{person.name}</h1>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <span className="text-gray-400">🏢</span>
                    <span className="font-medium">{person.company}</span>
                  </div>
                  <p className="text-lg text-gray-700 mb-3">{person.role}</p>
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="text-gray-400">@</span>
                    <span className="text-blue-600">LinkedIn</span>
                  </div>
                </div>
              </div>
              <Button 
                variant="outline" 
                className="bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100"
              >
                Get an intro
              </Button>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            <div className="grid grid-cols-12 gap-8">
              {/* Left Sidebar */}
              <div className="col-span-3 space-y-6">
                {/* Traits Section */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Traits</h3>
                  <div className="space-y-2">
                    <div className="bg-green-100 text-green-800 px-3 py-2 rounded-md text-sm font-medium">
                      Product design
                    </div>
                    <div className="bg-green-100 text-green-800 px-3 py-2 rounded-md text-sm font-medium">
                      SF
                    </div>
                    <div className="bg-gray-100 text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                      LA
                    </div>
                  </div>
                </div>

                {/* Mutuals Section */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Mutuals</h3>
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full border-2 border-white shadow-sm"></div>
                      <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-full border-2 border-white shadow-sm"></div>
                    </div>
                    <span className="text-sm text-gray-600">Your advisor</span>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="col-span-9 space-y-6">
                {/* Specialty Areas */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Specialty Areas: <span className="font-bold text-black">product innovation, design thinking,</span>
                    <span className="text-gray-600"> user centered design, user research, user experience, product design strategy</span>
                    <span className="text-gray-500"> (2022-01-Present)</span>
                  </h3>
                </div>

                {/* Role Description */}
                <div className="text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    <span className="font-medium">Product Strategy and Development Advisor</span> at <span className="font-medium">{person.company}</span>, a product design and engineering consultancy located in <span className="font-medium underline text-blue-600 cursor-pointer">{person.location}</span>
                  </p>
                  <p className="text-gray-600">—</p>
                </div>

                {/* Experience */}
                <div className="text-gray-700 leading-relaxed">
                  <p>{person.experience}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PersonModal;
