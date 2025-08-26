import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Intro from "./pages/Intro";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Certifications from "./pages/Certifications";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail"; // ✅ import new detail page

export default function App() {
  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-900 via-slate-900 to-gray-900 text-white font-sans">
      <Router>
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-10 bg-opacity-90 backdrop-blur-md">
          <div className="max-w-5xl mx-auto">
            <Routes>
              <Route path="/" element={<Intro />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetail />} /> {/* ✅ new dynamic route */}
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>
      </Router>
    </div>
  );
}
