import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function DashboardLayout() {
    const logout = useAuthStore((state) => state.logout);
    const navigate = useNavigate();

    // logic logout
    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <div className="flex min-h-screen">

            {/* SIDEBAR */}
            <div className="min-h-screen bg-[#852e4e] w-64 flex flex-col justify-between shadow-xl">

                {/* HEADER */}
                <div className="border-b border-[#a34d6b] py-6 px-4">
                    <h1 className="text-white text-2xl font-bold">
                        Invofest Dashboard
                    </h1>
                </div>

                {/* MENU */}
                <div className="flex-1 py-6">
                    <nav className="flex flex-col gap-2">

                        <Link
                            to="/dashboard"
                            className="p-4 text-white text-lg hover:bg-[#6f2641] transition duration-200 flex items-center gap-3"
                        >
                            Dashboard
                        </Link>

                        <Link
                            to="/dashboard/category"
                            className="p-4 text-white text-lg hover:bg-[#6f2641] transition duration-200 flex items-center gap-3"
                        >
                            Categories
                        </Link>

                        <Link
                            to="/dashboard/speaker"
                            className="p-4 text-white text-lg hover:bg-[#6f2641] transition duration-200 flex items-center gap-3"
                        >
                            Speakers
                        </Link>

                        <Link
                            to="/dashboard/events"
                            className="p-4 text-white text-lg hover:bg-[#6f2641] transition duration-200 flex items-center gap-3"
                        >
                            Events
                        </Link>

                        <Link
                            to="/dashboard/biodata"
                            className="p-4 text-white text-lg hover:bg-black transition ease-in duration-150 flex items-center gap-3"
                        >
                            Biodata
                        </Link>

                    </nav>
                </div>

                {/* LOGOUT */}
                <div className="p-4">
                    <button
                        onClick={handleLogout}
                        className="bg-[#6f2641] text-white p-3 rounded-lg w-full hover:bg-[#5b1f35] transition duration-200 cursor-pointer"
                    >
                        Logout
                    </button>
                </div>

            </div>

            {/* CONTENT */}
            <div className="flex-1 bg-[#f8f5f6] p-8">
                <Outlet />
            </div>

        </div>
    );
}