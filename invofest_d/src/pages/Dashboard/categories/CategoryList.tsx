import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../services/api";

interface Category {
  id: number;
  name: string;
}

export default function CategoryList() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  // Modal Edit state
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  // GET DATA
  const fetchCategories = async () => {
    try {
      const response = await api.get("/category");
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // OPEN MODAL EDIT
  const openEdit = (item: Category) => {
    setSelectedId(item.id);
    setName(item.name);
    setError("");
    setShowModal(true);
  };

  // CLOSE MODAL
  const closeModal = () => {
    setShowModal(false);
    setName("");
    setError("");
  };

  // UPDATE
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Nama category tidak boleh kosong.");
      return;
    }

    setSaving(true);
    try {
      await api.put(`/category/${selectedId}`, { name });
      alert("Category berhasil diupdate!");
      closeModal();
      fetchCategories();
    } catch (error: any) {
      setError(error?.response?.data?.message || "Gagal update. Coba lagi.");
    } finally {
      setSaving(false);
    }
  };

  // DELETE
  const deleteCategory = async (id: number) => {
    if (!window.confirm("Yakin ingin menghapus category ini?")) return;
    try {
      await api.delete(`/category/${id}`);
      alert("Category berhasil dihapus!");
      fetchCategories();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-md">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-[#852e4e]">Category List</h1>
        {/* ✅ Create tetap ke halaman terpisah */}
        <Link
          to="/dashboard/category/create"
          className="bg-[#852e4e] hover:bg-[#6b2340] text-white px-4 py-2 rounded-lg transition-colors"
        >
          + Create Category
        </Link>
      </div>

      {/* LIST */}
      {loading ? (
        <p className="text-center text-gray-400 py-8">Loading...</p>
      ) : categories.length === 0 ? (
        <p className="text-center text-gray-400 py-8">
          Belum ada category. Silakan buat baru!
        </p>
      ) : (
        <div className="space-y-4">
          {categories.map((item) => (
            <div
              key={item.id}
              className="bg-[#fff5f8] border border-[#f3c9d7] rounded-xl p-5 flex justify-between items-center"
            >
              <h2 className="text-lg font-semibold text-[#852e4e]">
                {item.name}
              </h2>
              <div className="flex gap-3">
                {/* ✅ Edit pakai modal */}
                <button
                  onClick={() => openEdit(item)}
                  className="bg-[#852e4e] hover:bg-[#6b2340] text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Edit
                </button>
                {/* ✅ Delete langsung */}
                <button
                  onClick={() => deleteCategory(item.id)}
                  className="bg-[#852e4e] hover:bg-[#6b2340] text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* MODAL EDIT */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md mx-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#852e4e]">
                Edit Category
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleUpdate} className="space-y-4">
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
                  disabled={saving}
                  className="bg-[#852e4e] hover:bg-[#6b2340] text-white px-6 py-2 rounded-lg transition-colors disabled:opacity-50 flex-1"
                >
                  {saving ? "Menyimpan..." : "Update"}
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-lg transition-colors flex-1"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}