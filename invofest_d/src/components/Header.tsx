import React, { useState } from "react";
import { Home,  Users, Menu, X, Trophy, Laptop, Mic, UserCircle } from "lucide-react";
import { NavLink } from "react-router-dom";

type MenuItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const menuItems: MenuItem[] = [
  { label: "Beranda", href: "/", icon: <Home size={18} /> },
  { label: "Competition", href: "/competition", icon: <Trophy size={18} /> },
  { label: "Seminar", href: "/seminar", icon: <Users size={18} /> },
  { label: "Workshop", href: "/workshop", icon: <Laptop size={18} /> },
  { label: "Talkshow", href: "/talkshow", icon: <Mic size={18} /> },
  { label: "", href: "/login", icon: <UserCircle size={18} /> },
];

const Header: React.FC = () => {
  const [active, setActive] = useState<string>("#hero");
  const [isOpen, setIsOpen] = useState<boolean>(false);


  const activeStyle = "text-[#852e4e]";
const defaultStyle = "text-slate-600 hover:text-[#852e4e]";

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        
        <div className="flex items-center gap-2">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png"
            alt="logo"
            className="h-12"
          />
        </div>

        
        <nav className="hidden md:flex items-center gap-4">
          {menuItems.map((item) => (
            <NavLink to={item.href} className={({ isActive }) => 
            `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
        transition-all duration-200 ${isActive ? activeStyle : defaultStyle}`}>
              
              {item.icon && <span className="w-5 h-5">{item.icon}</span>}
              <span>{item.label}
              </span>

            </NavLink>
          ))}
        </nav>

        
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col gap-3">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => {
                setActive(item.href);
                setIsOpen(false);
              }}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition ${
                active === item.href
                  ? "bg-[#F5E9EF] text-[#852e4e] font-medium"
                  : "text-gray-600 hover:bg-gray-100 hover:text-[#852e4e]"
              }`}
            >
              {item.icon}
              {item.label}
            </a>
          ))}

          
          <button className="mt-2 bg-[#852e4e] text-white px-4 py-2 rounded-lg hover:bg-[#6f2641] transition">
          Daftar
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;