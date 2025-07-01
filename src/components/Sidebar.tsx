import { Home, Users, Settings, LogIn, UserPlus } from "lucide-react";

const navLinks = [
  { name: "Home", icon: Home, href: "#" },
  { name: "Network", icon: Users, href: "#" },
  { name: "Settings", icon: Settings, href: "#" },
];

const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen shadow-xl flex flex-col fixed left-0 top-0 bg-[rgba(243,243,237,0.85)] backdrop-blur-lg border-r border-gray-200">
      {/* Header section with logo and branding */}
      <div className="p-6 pb-2 flex flex-col items-center">
        <div className="flex w-full justify-center">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-100 shadow overflow-hidden">
            <img src="/12.png" alt="Business Logo" className="w-10 h-10 object-contain" />
          </div>
        </div>
        <div className="mt-3 text-center">
          <h1 className="text-lg font-bold text-gray-800 tracking-tight">CraftNet</h1>
          <span className="text-xs text-gray-500">Your Network, Enhanced</span>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <hr className="border-gray-200" />
      </div>

      {/* Navigation links */}
      <nav className="flex-1 px-4">
        <ul className="space-y-1 mt-2">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 font-medium hover:bg-green-100 hover:text-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 group"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5 text-green-400 group-hover:text-green-600 transition-colors" />
                <span>{link.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Spacer to push content to bottom */}
      <div className="flex-1" />

      {/* Divider above bottom section */}
      <div className="px-6 pt-2 pb-0">
        <hr className="border-gray-200" />
      </div>

      {/* Bottom section with description and buttons */}
      <div className="p-6 space-y-4">
        <div className="text-center">
          <p className="text-gray-600 text-sm leading-relaxed">
            Join for free to search your networks, connect with friends, create groups, and more.
          </p>
        </div>
        <div className="space-y-3">
          <button className="w-full bg-green-500 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400">
            <UserPlus className="w-5 h-5" /> Sign up
          </button>
          <button className="w-full bg-white text-gray-700 px-4 py-3 rounded-lg font-medium border border-gray-300 flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400">
            <LogIn className="w-5 h-5" /> Log in
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
  