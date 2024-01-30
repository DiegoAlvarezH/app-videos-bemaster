import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./routes";

import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import { VideoFormPage } from "./pages/VideoFormPage";
import { LoginPage } from "./pages/LoginPage";
import { VideosPage } from "./pages/VideosPage";
import { VideoProvider } from "./context/videosContext";

function App() {
  return (
    <AuthProvider>
      <VideoProvider>
        <BrowserRouter>
          <main className="container content-container mx-auto px-10 md:px-0">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/videos" element={<VideosPage />} />
                <Route path="/add-video" element={<VideoFormPage />} />
                <Route path="/videos/:id" element={<VideoFormPage />} />
                <Route path="/profile" element={<h1>Profile</h1>} />
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </VideoProvider>
    </AuthProvider>
  );
}

export default App;
