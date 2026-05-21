import { Link } from "react-router-dom";
import Button from "../../../components/ui/Button";

export default function CategoryList() {

  const categories = [
    "Competition",
    "Seminar",
    "Workshop",
    "Talkshow",
  ];

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold text-[#852e4e]">
          Category List
        </h1>

        <Link to="/category/create">
          <Button
            label="Create Category"
            variant="primary"
          />
        </Link>

      </div>

      
      <div className="space-y-3">

        {categories.map((category, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 bg-slate-50"
          >
            {category}
          </div>
        ))}

      </div>

    </div>
  );
}