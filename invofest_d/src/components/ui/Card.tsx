import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div
      className={`
        group cursor-pointer bg-white p-6 rounded-2xl
        shadow-md hover:shadow-xl
        border border-gray-100
        transition-all duration-300
        hover:-translate-y-1
        ${className}
      `}
    >
      
      <div className="h-1 w-12 bg-pink-500 rounded mb-4 group-hover:w-16 transition-all duration-300"></div>

      
      {children}
    </div>
  );
};

export default Card;