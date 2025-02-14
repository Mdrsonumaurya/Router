import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Info, Film, Phone, Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { path: "/", name: "Home", icon: <Home className="w-5 h-5" /> },
    { path: "/about", name: "About", icon: <Info className="w-5 h-5" /> },
    { path: "/moves", name: "Moves", icon: <Film className="w-5 h-5" /> },
    { path: "/contact", name: "Contact", icon: <Phone className="w-5 h-5" /> }
  ];

  return (
    <nav className="bg-white shadow-lg sticky z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0 flex items-center">
              <Home className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">Logo</span>
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                    isActive
                      ? "bg-indigo-100 text-indigo-700"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`
                }
              >
                <span className="mr-2">{item.icon}</span>
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? "bg-indigo-100 text-indigo-700"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                <span className="mr-2">{item.icon}</span>
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
