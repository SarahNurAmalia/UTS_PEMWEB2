export default function Biodata() {

    return (

        <div>

            {/* TITLE */}
            <div className="mb-8">

                <h1 className="text-5xl font-bold text-[#852e4e]">
                    Biodata Mahasiswa
                </h1>

                <p className="text-gray-500 mt-3 text-lg">
                    Informasi pembuat website Invofest
                </p>

            </div>

            {/* CARD */}
            <div className="bg-[#f8eef2] rounded-3xl p-10 shadow-md">

                <div className="space-y-6">

                    <div>
                        <h1 className="text-[#852e4e]">
                            Nama
                        </h1>

                        <p className="text-3xl font-semibold text-[#852e4e]">
                            Sarah Nur Amalia
                        </p>
                    </div>

                    <div>
                        <h1 className="text-[#852e4e]">
                            NIM
                        </h1>

                        <p className="text-2xl font-medium text-[#852e4e]">
                            24090129
                        </p>
                    </div>

                    <div>
                        <h1 className="text-[#852e4e]">
                            Program Studi
                        </h1>

                        <p className="text-2xl font-medium text-[#852e4e]">
                            Teknik Informatika
                        </p>
                    </div>

                    <div>
                        <h1 className="text-[#852e4e]">
                            Kelas
                        </h1>

                        <p className="text-2xl font-medium text-[#852e4e]">
                            TI - 4D
                        </p>
                    </div>

                    <div>
                        <h1 className="text-[#852e4e]">
                            Mata Kuliah
                        </h1>

                        <p className="text-2xl font-medium text-[#852e4e]">
                            Pemrograman Web 2
                        </p>
                    </div>

                </div>

            </div>

        </div>
    );
}