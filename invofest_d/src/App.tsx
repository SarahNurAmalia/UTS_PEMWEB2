import { BrowserRouter, Route, Routes } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Competition from "./pages/Competition";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RegisterEvent from "./pages/RegisterEvent";
import Seminar from "./pages/Seminar";
import Talkshow from "./pages/Talkshow";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Workshop from "./pages/Workshop";
import EventList from "./pages/Dashboard/categories/Events/EventList";
import CreateEvent from "./pages/Dashboard/categories/Events/CreateEvent";
import CreateCategory from "./pages/Dashboard/categories/CreateCategory";
import SpeakerList from "./pages/Dashboard/categories/speaker/SpeakerList";
import CreateSpeaker from "./pages/Dashboard/categories/speaker/CreateSpeaker";
import DashboardIndex from "./pages/Dashboard/categories/DashboardIndex";
import CategoryList from "./pages/Dashboard/categories/CategoryList";
import ProtectedRoute from "./routes/ProtectedRoute";
import DashboardLayout from "./layouts/DashboardLayout";
import Biodata from "./pages/Dashboard/biodata/Biodata";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing page */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Beranda />} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/seminar" element={<Seminar />} />
          <Route path="/talkshow" element={<Talkshow />} />
          <Route path="/workshop" element={<Workshop />} />
        </Route>

        {/* Auth page */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route path="/register-event" element={<RegisterEvent />} />

        {/* Dashboard - semua wajib pakai prefix /dashboard */}
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<DashboardIndex />} />

            {/* ✅ Category */}
            <Route path="/dashboard/category" element={<CategoryList />} />
            <Route path="/dashboard/category/create" element={<CreateCategory />} />

            {/* ✅ Event */}
            <Route path="/dashboard/events" element={<EventList />} />
            <Route path="/dashboard/events/create" element={<CreateEvent />} />

            {/* ✅ Speaker */}
            <Route path="/dashboard/speaker" element={<SpeakerList />} />
            <Route path="/dashboard/speaker/create" element={<CreateSpeaker />} />

            {/* ✅ Biodata */}
            <Route path="/dashboard/biodata" element={<Biodata />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;