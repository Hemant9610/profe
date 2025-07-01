import { useState } from "react";
import PersonModal from "./PersonModal";

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

const mockData: Person[] = [
  {
    id: 1,
    name: "Mike Strasser",
    company: "Think2Build LLC",
    role: "Product Strategy and Development Advisor",
    location: "San Francisco",
    experience: "Mike has over 27 years experience in product design and development and has worked at a variety of companies including Apple, IDEO, NASA, and BMW. Mike is on 87+ patents for various products",
    specialties: ["product innovation", "design thinking", "user centered design", "user research", "user experience", "product design strategy"],
    avatar: "👨‍💼"
  },
  {
    id: 2,
    name: "Mike Strasser", 
    company: "Think2Build LLC",
    role: "Product Strategy and Development Advisor",
    location: "San Francisco",
    experience: "Mike has over 27 years experience in product design and development and has worked at a variety of companies including Apple, IDEO, NASA, and BMW. Mike is on 87+ patents for various products",
    specialties: ["product innovation", "design thinking", "user centered design", "user research", "user experience", "product design strategy"],
    avatar: "👨‍💼"
  },
  {
    id: 3,
    name: "Mike Strasser",
    company: "Think2Build LLC", 
    role: "Product Strategy and Development Advisor",
    location: "San Francisco",
    experience: "Mike has over 27 years experience in product design and development and has worked at a variety of companies including Apple, IDEO, NASA, and BMW. Mike is on 87+ patents for various products",
    specialties: ["product innovation", "design thinking", "user centered design", "user research", "user experience", "product design strategy"],
    avatar: "👨‍💼"
  },
  {
    id: 4,
    name: "Mike Strasser",
    company: "Think2Build LLC",
    role: "Product Strategy and Development Advisor", 
    location: "San Francisco",
    experience: "Mike has over 27 years experience in product design and development and has worked at a variety of companies including Apple, IDEO, NASA, and BMW. Mike is on 87+ patents for various products",
    specialties: ["product innovation", "design thinking", "user centered design", "user research", "user experience", "product design strategy"],
    avatar: "👨‍💼"
  },
  {
    id: 5,
    name: "Mike Strasser",
    company: "Think2Build LLC",
    role: "Product Strategy and Development Advisor",
    location: "San Francisco", 
    experience: "Mike has over 27 years experience in product design and development and has worked at a variety of companies including Apple, IDEO, NASA, and BMW. Mike is on 87+ patents for various products",
    specialties: ["product innovation", "design thinking", "user centered design", "user research", "user experience", "product design strategy"],
    avatar: "👨‍💼"
  }
];

const ResultsTable = () => {
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePersonClick = (person: Person) => {
    setSelectedPerson(person);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPerson(null);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Enhanced Table Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="flex items-center py-4 px-6 border-b border-gray-100 text-sm font-semibold text-gray-700 bg-gray-50 rounded-t-lg">
            <div className="flex-1">Person</div>
            <div className="w-24 text-center">Mutuals</div>
          </div>

          {/* Enhanced Results */}
          <div className="divide-y divide-gray-100">
            {mockData.map((person, index) => (
              <div 
                key={person.id} 
                className="py-6 px-6 hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={() => handlePersonClick(person)}
              >
                <div className="flex gap-6">
                  {/* Enhanced Avatar Section */}
                  <div className="w-20 flex flex-col items-center gap-3">
                    <div className="w-14 h-14 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center text-xl shadow-sm border-2 border-white">
                      {person.avatar}
                    </div>
                  </div>

                  {/* Enhanced Main Content */}
                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className="font-bold text-lg text-gray-900 mb-2">{person.name}</h3>
                      <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                        <div className="flex items-center gap-1">
                          <span className="text-gray-400">🏢</span>
                          <span className="font-medium">{person.company}</span>
                        </div>
                        <span className="text-gray-300">•</span>
                        <span>{person.role}</span>
                        <span className="text-gray-300">•</span>
                        <div className="flex items-center gap-1">
                          <span className="text-gray-400">📍</span>
                          <span className="text-blue-600 underline hover:text-blue-800 cursor-pointer">{person.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 text-sm leading-relaxed">
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded">
                        <span className="text-blue-800 font-medium">Specialty Areas: </span>
                        <span className="text-blue-900">
                          {person.specialties.slice(0, 2).join(", ")}
                        </span>
                        <span className="text-blue-700">
                          , {person.specialties.slice(2).join(", ")} (2022-01-Present)
                        </span>
                      </div>

                      <div className="text-gray-700">
                        <span className="font-medium">Current Role:</span> Product Strategy and Development Advisor at {person.company}, a product design and engineering consultancy located in <span className="font-medium">{person.location}</span>
                      </div>

                      <div className="text-gray-700">
                        <span className="font-medium">Experience:</span> {person.experience}
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Mutuals Section */}
                  <div className="w-24 flex flex-col items-center gap-2 pt-3">
                    <div className="flex -space-x-1">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full border-2 border-white shadow-sm"></div>
                      <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-full border-2 border-white shadow-sm"></div>
                    </div>
                    <span className="text-xs text-gray-500 font-medium">2 mutual</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <PersonModal 
        person={selectedPerson}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default ResultsTable;
