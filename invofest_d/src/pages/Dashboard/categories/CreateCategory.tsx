import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";

export default function CreateCategory() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Nama category tidak boleh kosong.");
      return;
    }

    setLoading(true);
    try {
      await api.post("/category", { name });
      alert("Category berhasil ditambahkan!");
      navigate("/dashboard/category"); // ✅ balik ke list
    } catch (error: any) {
      console.error("ERROR:", error);
      setError(
        error?.response?.data?.message || "Gagal menyimpan. Coba lagi."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-md mt-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#852e4e]">Create Category</h1>
        <button
          onClick={() => navigate("/dashboard/category")}
          className="text-gray-400 hover:text-gray-600 text-sm"
        >
          ← Kembali ke List
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Masukkan nama category..."
            className="w-full border border-[#f3c9d7] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#852e4e]"
            autoFocus
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            disabled={loading}
            className="bg-[#852e4e] hover:bg-[#6b2340] text-white px-6 py-2 rounded-lg transition-colors disabled:opacity-50"
          >
            {loading ? "Menyimpan..." : "Save Category"}
          </button>
          <button
            type="button"
            onClick={() => navigate("/dashboard/category")}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-lg transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}