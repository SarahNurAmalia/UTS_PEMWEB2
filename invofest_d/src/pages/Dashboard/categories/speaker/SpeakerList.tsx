import { Link } from "react-router-dom";
import Button from "../../../../components/ui/Button";

export default function SpeakerList() {

    const speakers = [
        {
            nama: "Sowam Habibi",
            role: "UI/UX Designer"
        },
        {
            nama: "Sarah Wijaya",
            role: "Frontend Developer"
        },
        {
            nama: "Dery Agung Triyadi",
            role: "AI Engineer"
        }
    ];

    return (
        <div className="bg-white rounded-3xl shadow-lg p-8">

            {/* HEADER */}
            <div className="flex items-center justify-between mb-8">

                <h1 className="text-4xl font-bold text-[#852e4e]">
                    Speaker List
                </h1>

                <Link to="/dashboard/speaker/create">
                    <Button
                        label="Create Speaker"
                        variant="primary"
                        className="px-6 py-3"
                    />
                </Link>

            </div>

            {/* LIST */}
            <div className="space-y-4">

                {speakers.map((speaker, index) => (
                    <div
                        key={index}
                        className="border border-slate-200 rounded-2xl p-5 hover:shadow-md transition"
                    >
                        <h2 className="text-2xl font-semibold text-[#852e4e]">
                            {speaker.nama}
                        </h2>

                        <p className="text-slate-600 mt-1">
                            {speaker.role}
                        </p>
                    </div>
                ))}

            </div>

        </div>
    );
}