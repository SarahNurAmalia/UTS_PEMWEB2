import { useState } from "react";
import Button from "../components/ui/Button";

const RegisterEvent = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    event: "",
    ticket: "",
    note: "",
  });

  const [bgColor, setBgColor] = useState("bg-white");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    alert("Berhasil daftar event!");
    setBgColor("bg-green-50");
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${bgColor} px-4 transition-colors duration-300`}>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg space-y-5"
      >
        <h2 className="text-2xl font-semibold text-pink-600 text-center">
          Daftar Event
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Nama Lengkap"
          onChange={handleChange}
          className="w-full border p-3 rounded-lg focus:outline-pink-500"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full border p-3 rounded-lg focus:outline-pink-500"
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="No HP"
          onChange={handleChange}
          className="w-full border p-3 rounded-lg focus:outline-pink-500"
          required
        />

        <select
          name="event"
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          required
        >
          <option value="">Pilih Event</option>
          <option value="seminar">Seminar</option>
          <option value="workshop">Workshop</option>
          <option value="talkshow">Talkshow</option>
        </select>

        

        <textarea
          name="note"
          placeholder="Catatan (opsional)"
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <Button label="Daftar Sekarang" className="w-full" type="submit" />
      </form>
    </div>
  );
};

export default RegisterEvent;