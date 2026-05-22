import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../../services/api";

interface Event {
  id: number;
  name: string;
  dateEvent: string;
  location: string;
  description: string;
  categoryId: number;
  speakerId: number;
  category: { name: string };
  speaker: { name: string };
}

export default function EventList() {
  const [events, setEvents] = useState<Event[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [speakers, setSpeakers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [dateEvent, setDateEvent] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [speakerId, setSpeakerId] = useState("");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  // GET DATA
  const fetchAll = async () => {
    try {
      const [evRes, catRes, spkRes] = await Promise.all([
        api.get("/events"),       // ✅ /events
        api.get("/category"),
        api.get("/speaker"),
      ]);
      setEvents(evRes.data);
      setCategories(catRes.data);
      setSpeakers(spkRes.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  // OPEN MODAL EDIT
  const openEdit = (item: Event) => {
    setSelectedId(item.id);
    setName(item.name);
    setDateEvent(item.dateEvent?.split("T")[0] || "");
    setLocation(item.location);
    setDescription(item.description || "");
    setCategoryId(String(item.categoryId));
    setSpeakerId(String(item.speakerId));
    setError("");
    setShowModal(true);
  };

  // CLOSE MODAL
  const closeModal = () => {
    setShowModal(false);
    setError("");
  };

  // UPDATE
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name || !dateEvent || !location || !categoryId || !speakerId) {
      setError("Semua field wajib diisi.");
      return;
    }

    setSaving(true);
    try {
      await api.put(`/events/${selectedId}`, { // ✅ /events
        name,
        dateEvent,
        location,
        description,
        categoryId: Number(categoryId),
        speakerId: Number(speakerId),
      });
      alert("Event berhasil diupdate!");
      closeModal();
      fetchAll();
    } catch (error: any) {
      setError(error?.response?.data?.message || "Gagal update. Coba lagi.");
    } finally {
      setSaving(false);
    }
  };

  // DELETE
  const deleteEvent = async (id: number) => {
    if (!window.confirm("Yakin ingin menghapus event ini?")) return;
    try {
      await api.delete(`/events/${id}`); // ✅ /events
      alert("Event berhasil dihapus!");
      fetchAll();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-md">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-[#852e4e]">Event List</h1>
        <Link to="/dashboard/events/create"
          className="bg-[#852e4e] hover:bg-[#6b2340] text-white px-4 py-2 rounded-lg transition-colors">
          + Create Event
        </Link>
      </div>

      {/* LIST */}
      {loading ? (
        <p className="text-center text-gray-400 py-8">Loading...</p>
      ) : events.length === 0 ? (
        <p className="text-center text-gray-400 py-8">
          Belum ada event. Silakan buat baru!
        </p>
      ) : (
        <div className="space-y-4">
          {events.map((item) => (
            <div key={item.id}
              className="bg-[#fff5f8] border border-[#f3c9d7] rounded-xl p-5 flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold text-[#852e4e]">{item.name}</h2>
                <p className="text-sm text-gray-500">
                  📅 {new Date(item.dateEvent).toLocaleDateString("id-ID")}
                </p>
                <p className="text-sm text-gray-500">📍 {item.location}</p>
                <p className="text-sm text-gray-500">
                  🏷️ {item.category?.name} &nbsp;|&nbsp; 🎤 {item.speaker?.name}
                </p>
                {item.description && (
                  <p className="text-sm text-gray-400 mt-1">{item.description}</p>
                )}
              </div>
              <div className="flex gap-3">
                <button onClick={() => openEdit(item)}
                  className="bg-[#852e4e] hover:bg-[#6b2340] text-white px-4 py-2 rounded-lg transition-colors">
                  Edit
                </button>
                <button onClick={() => deleteEvent(item.id)}
                  className="bg-[#852e4e] hover:bg-[#6b2340] text-white px-4 py-2 rounded-lg transition-colors">
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
          <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#852e4e]">Edit Event</h2>
              <button onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold">✕</button>
            </div>

            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nama Event</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                  className="w-full border border-[#f3c9d7] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#852e4e]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Event</label>
                <input type="date" value={dateEvent} onChange={(e) => setDateEvent(e.target.value)}
                  className="w-full border border-[#f3c9d7] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#852e4e]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Lokasi</label>
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)}
                  className="w-full border border-[#f3c9d7] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#852e4e]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)}
                  rows={3} className="w-full border border-[#f3c9d7] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#852e4e]" />
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
                <button type="submit" disabled={saving}
                  className="bg-[#852e4e] hover:bg-[#6b2340] text-white px-6 py-2 rounded-lg transition-colors disabled:opacity-50 flex-1">
                  {saving ? "Menyimpan..." : "Update"}
                </button>
                <button type="button" onClick={closeModal}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-lg transition-colors flex-1">
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