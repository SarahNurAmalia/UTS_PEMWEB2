import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../../services/api";

export default function CreateEvent() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [dateEvent, setDateEvent] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [speakerId, setSpeakerId] = useState("");
  const [categories, setCategories] = useState<any[]>([]);
  const [speakers, setSpeakers] = useState<any[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api.get("/category").then((res) => setCategories(res.data));
    api.get("/speaker").then((res) => setSpeakers(res.data));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name || !dateEvent || !location || !categoryId || !speakerId) {
      setError("Semua field wajib diisi.");
      return;
    }

    setLoading(true);
    try {
      await api.post("/events", { // ✅ /events
        name,
        dateEvent,
        location,
        description,
        categoryId: Number(categoryId),
        speakerId: Number(speakerId),
      });
      alert("Event berhasil ditambahkan!");
      navigate("/dashboard/events");
    } catch (error: any) {
      setError(error?.response?.data?.message || "Gagal menyimpan. Coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-md mt-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#852e4e]">Create Event</h1>
        <button
          onClick={() => navigate("/dashboard/events")}
          className="text-gray-400 hover:text-gray-600 text-sm"
        >
          ← Kembali ke List
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nama Event</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}
            placeholder="Masukkan nama event..."
            className="w-full border border-[#f3c9d7] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#852e4e]" autoFocus />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Event</label>
          <input type="date" value={dateEvent} onChange={(e) => setDateEvent(e.target.value)}
            className="w-full border border-[#f3c9d7] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#852e4e]" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Lokasi</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)}
            placeholder="Masukkan lokasi event..."
            className="w-full border border-[#f3c9d7] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#852e4e]" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)}
            placeholder="Deskripsi event..." rows={3}
            className="w-full border border-[#f3c9d7] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#852e4e]" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
          <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)}
            className="w-full border border-[#f3c9d7] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#852e4e]">
            <option value="">-- Pilih Kategori --</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Speaker</label>
          <select value={speakerId} onChange={(e) => setSpeakerId(e.target.value)}
            className="w-full border border-[#f3c9d7] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#852e4e]">
            <option value="">-- Pilih Speaker --</option>
            {speakers.map((s) => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div className="flex gap-3 pt-2">
          <button type="submit" disabled={loading}
            className="bg-[#852e4e] hover:bg-[#6b2340] text-white px-6 py-2 rounded-lg transition-colors disabled:opacity-50">
            {loading ? "Menyimpan..." : "Save Event"}
          </button>
          <button type="button" onClick={() => navigate("/dashboard/events")}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-lg transition-colors">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}