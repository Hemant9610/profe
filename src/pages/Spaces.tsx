import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import BusinessLogo from "@/components/BusinessLogo";

const Spaces = () => {
  const skillCategories = [
    { name: "All", active: true },
    { name: "Technology", active: false },
    { name: "Management", active: false },
    { name: "SoftSkills", active: false },
    { name: "Life", active: false },
    { name: "Research", active: false },
  ];

  const advisorCards = [
    {
      icon: "🏠",
      iconBg: "bg-red-100",
      title: "YC Startup Advisor",
      description: "Get practical, YC-backend advice on starting and scaling a startup - just ask a question."
    },
    {
      icon: "📱",
      iconBg: "bg-gray-800",
      title: "YC Startup Advisor", 
      description: "Get practical, YC-backend advice on starting and scaling a startup - just ask a question."
    },
    {
      icon: "🔄",
      iconBg: "bg-green-100",
      title: "YC Startup Advisor",
      description: "Get practical, YC-backend advice on starting and scaling a startup - just ask a question."
    },
    {
      icon: "⚪",
      iconBg: "bg-gray-100",
      title: "YC Startup Advisor",
      description: "Get practical, YC-backend advice on starting and scaling a startup - just ask a question."
    },
    {
      icon: "🔴",
      iconBg: "bg-red-500",
      title: "YC Startup Advisor",
      description: "Get practical, YC-backend advice on starting and scaling a startup - just ask a question."
    },
    {
      icon: "🏠",
      iconBg: "bg-red-100",
      title: "YC Startup Advisor",
      description: "Get practical, YC-backend advice on starting and scaling a startup - just ask a question."
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with BusinessLogo */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <BusinessLogo className="w-10 h-10" />
          <div className="text-lg font-semibold text-gray-900">Spaces</div>
        </div>
      </header>

      <div className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Learn skills and improve for opportunities
            </h1>
            <p className="text-blue-600 underline cursor-pointer">
              Create a dedicated Space to help you organize sources, threads and collaboration around a specific topic
            </p>
          </div>

          {/* Create New Space Section */}
          <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Plus className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Create a new learn Space</h3>
                  <p className="text-gray-600">Add files, links, and instructions in a centralized knowledge hub</p>
                </div>
              </div>
              <Button className="bg-green-600 hover:bg-green-700 text-white px-6">
                Create
              </Button>
            </div>
          </div>

          {/* Browse Skills Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse Skills</h2>
            
            {/* Category Tabs */}
            <div className="flex gap-2 mb-6">
              {skillCategories.map((category) => (
                <Badge
                  key={category.name}
                  variant={category.active ? "default" : "secondary"}
                  className={`px-4 py-2 cursor-pointer ${
                    category.active 
                      ? "bg-green-100 text-green-800 hover:bg-green-200" 
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.name}
                </Badge>
              ))}
            </div>

            {/* Advisor Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advisorCards.map((card, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-xl ${card.iconBg}`}>
                        {card.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2">{card.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spaces;
