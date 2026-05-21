import React from "react";

interface NavLinkProps {
  label: string;
  href: string;
  icon?: React.ReactNode;
  isActive?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({
  label,
  href,
  icon,
  isActive = false,
}) => {
  return (
    <a
      href={href}
      className={`
        flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
        transition-all duration-200
        ${
          isActive
            ? "bg-pink-100 text-pink-600 shadow-sm"
            : "text-gray-600 hover:bg-gray-100 hover:text-pink-600"
        }
      `}
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      <span>{label}</span>
    </a>
  );
};

export default NavLink;