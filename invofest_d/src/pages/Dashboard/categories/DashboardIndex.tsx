export default function DashboardIndex() {

    return (
        <div className="p-8 w-full bg-[#f8f5f6] min-h-screen">

            {/* TITLE */}
            <div className="mb-8">
                <h1 className="text-5xl font-bold text-[#852e4e]">
                    Dashboard
                </h1>

                <p className="text-slate-500 mt-2 text-lg">
                    Selamat datang di dashboard admin Invofest
                </p>
            </div>

            {/* CARD */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* CATEGORY */}
                <div className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition">

                    <h2 className="text-slate-500 text-lg">
                        Total Categories
                    </h2>

                    <p className="text-5xl font-bold text-[#852e4e] mt-4">
                        4
                    </p>

                </div>

                {/* SPEAKER */}
                <div className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition">

                    <h2 className="text-slate-500 text-lg">
                        Total Speakers
                    </h2>

                    <p className="text-5xl font-bold text-[#852e4e] mt-4">
                        10
                    </p>

                </div>

                {/* EVENT */}
                <div className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition">

                    <h2 className="text-slate-500 text-lg">
                        Total Events
                    </h2>

                    <p className="text-5xl font-bold text-[#852e4e] mt-4">
                        8
                    </p>

                </div>

            </div>

            {/* WELCOME CARD */}
            <div className="bg-white rounded-3xl shadow-md p-8 mt-8">

                <h2 className="text-3xl font-bold text-[#852e4e] mb-4">
                    Welcome Admin
                </h2>

                <p className="text-slate-600 leading-relaxed">
                    Kelola category, speaker, dan event Invofest
                    dengan mudah melalui dashboard admin ini.
                </p>

            </div>

        </div>
    );
}