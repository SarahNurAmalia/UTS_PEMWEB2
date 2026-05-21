import { Link } from "react-router-dom";
import Button from "../../../../components/ui/Button";

export default function EventList() {

    const events = [
        {
            nama: "UI/UX Competition",
            category: "Competition",
            lokasi: "Universitas Harkat Negeri",
            tanggal: "12 Mei 2026",
        },
        {
            nama: "AI Seminar",
            category: "Seminar",
            lokasi: "Kampus 1 (Mataram) Universitas Harkat Negeri",
            tanggal: "15 Mei 2026",
        },
        {
            nama: "Web Development Workshop",
            category: "Workshop",
            lokasi: "Lab Komputer",
            tanggal: "18 Mei 2026",
        },
    ];

    return (
        <div className="bg-white rounded-3xl shadow-lg p-8">

            {/* HEADER */}
            <div className="flex items-center justify-between mb-8">

                <h1 className="text-4xl font-bold text-[#852e4e]">
                    Event List
                </h1>

                <Link to="/dashboard/events/create">
                    <Button
                        label="Create Event"
                        variant="primary"
                        className="px-6 py-3"
                    />
                </Link>

            </div>

            {/* LIST EVENT */}
            <div className="space-y-4">

                {events.map((event, index) => (
                    <div
                        key={index}
                        className="border border-slate-200 rounded-2xl p-5 hover:shadow-md transition"
                    >

                        <h2 className="text-2xl font-semibold text-[#852e4e]">
                            {event.nama}
                        </h2>

                        <div className="mt-2 text-slate-600 space-y-1">
                            <p>
                                <span className="font-semibold">Category:</span>{" "}
                                {event.category}
                            </p>

                            <p>
                                <span className="font-semibold">Lokasi:</span>{" "}
                                {event.lokasi}
                            </p>

                            <p>
                                <span className="font-semibold">Tanggal:</span>{" "}
                                {event.tanggal}
                            </p>
                        </div>

                    </div>
                ))}

            </div>

        </div>
    );
}