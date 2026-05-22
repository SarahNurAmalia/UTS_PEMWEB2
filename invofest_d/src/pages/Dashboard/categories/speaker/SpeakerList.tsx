import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../../services/api";

interface Speaker {
  id: number;
  name: string;
  role: string; // ✅ ganti bio → role
  image: string; // ✅ tambah image
}

export default function SpeakerList() {
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [loading, setLoading] = useState(true);

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [role, setRole] = useState(""); // ✅ ganti bio → role
  const [image, setImage] = useState(""); // ✅ tambah image
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  // GET DATA
  const fetchSpeakers = async () => {
    try {
      const response = await api.get("/speaker");
      setSpeakers(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSpeakers();
  }, []);

  // OPEN MODAL EDIT
  const openEdit = (item: Speaker) => {
    setSelectedId(item.id);
    setName(item.name);
    setRole(item.role || ""); // ✅
    setImage(item.image || ""); // ✅
    setError("");
    setShowModal(true);
  };

  // CLOSE MODAL
  const closeModal = () => {
    setShowModal(false);
    setName("");
    setRole("");
    setImage("");
    setError("");
  };

  // UPDATE
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Nama speaker tidak boleh kosong.");
      return;
    }

    setSaving(true);
    try {
      await api.put(`/speaker/${selectedId}`, { name, role, image }); // ✅
      alert("Speaker berhasil diupdate!");
      closeModal();
      fetchSpeakers();
    } catch (error: any) {
      setError(error?.response?.data?.message || "Gagal update. Coba lagi.");
    } finally {
      setSaving(false);
    }
  };

  // DELETE
  const deleteSpeaker = async (id: number) => {
    if (!window.confirm("Yakin ingin menghapus speaker ini?")) return;
    try {
      await api.delete(`/speaker/${id}`);
      alert("Speaker berhasil dihapus!");
      fetchSpeakers();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-md">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-[#852e4e]">Speaker List</h1>
        {/* ✅ Fix: tambah / di depan */}
        <Link
          to="/dashboard/speaker/create"
          className="bg-[#852e4e] hover:bg-[#6b2340] text-white px-4 py-2 rounded-lg transition-colors"
        >
          + Create Speaker
        </Link>
      </div>

      {/* LIST */}
      {loading ? (
        <p className="text-center text-gray-400 py-8">Loading...</p>
      ) : speakers.length === 0 ? (
        <p className="text-center text-gray-400 py-8">
          Belum ada speaker. Silakan buat baru!
        </p>
      ) : (
        <div className="space-y-4">
          {speakers.map((item) => (
            <div
              key={item.id}
              className="bg-[#fff5f8] border border-[#f3c9d7] rounded-xl p-5 flex justify-between items-center"
            >
              <div className="flex items-center gap-4">
                {/* ✅ Tampilkan foto */}
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                )}
                <div>
                  <h2 className="text-lg font-semibold text-[#852e4e]">
                    {item.name}
                  </h2>
                  <p className="text-sm text-gray-500">{item.role}</p> {/* ✅ */}
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => openEdit(item)}
                  className="bg-[#852e4e] hover:bg-[#6b2340] text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteSpeaker(item.id)}
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
                Edit Speaker
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
                  Nama Speaker
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Masukkan nama speaker..."
                  className="w-full border border-[#f3c9d7] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#852e4e]"
                  autoFocus
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Role
                </label>
                <input
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="Contoh: Frontend Developer..."
                  className="w-full border border-[#f3c9d7] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#852e4e]"
                />
              </div>
              {/* ✅ Field image */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  URL Foto
                </label>
                <input
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="https://i.pravatar.cc/300?img=1"
                  className="w-full border border-[#f3c9d7] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#852e4e]"
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}

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