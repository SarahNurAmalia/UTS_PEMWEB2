import React from "react";

interface SpeakerCardProps {
  name: string;
  role: string;
  imageUrl: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({
  name,
  role,
  imageUrl,
}) => {
  return (
    <div className="group cursor-pointer flex flex-col items-center text-center transition-all duration-300">

      {/* IMAGE */}
      <div className="relative">
        <img
          src={imageUrl}
          alt={name}
          className="w-56 h-56 object-cover rounded-full border-4 border-white shadow-md group-hover:scale-105 transition duration-300"
        />

        {/* HOVER OVERLAY */}
        <div className="absolute inset-0 rounded-full bg-black/0 group-hover:bg-black/10 transition duration-300"></div>
      </div>

      {/* CONTENT */}
      <div className="mt-6 p-4 w-full max-w-xs rounded-xl bg-white shadow-md group-hover:shadow-xl transition duration-300">
        <h3 className="text-lg font-semibold text-gray-800">
          {name}
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          {role}
        </p>
      </div>
    </div>
  );
};

export default SpeakerCard;