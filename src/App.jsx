import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Intro from "./pages/Intro";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Certifications from "./pages/Certifications";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <div className="flex h-screen bg-slate-100 dark:bg-gradient-to-br dark:from-blue-900 dark:via-slate-900 dark:to-gray-900 text-gray-900 dark:text-white font-sans transition-colors duration-300">
        <Router>
          <Sidebar />
          <main className="flex-1 overflow-y-auto p-10">
            <div className="max-w-5xl mx-auto">
              <Routes>
                <Route path="/" element={<Intro />} />
                <Route path="/about" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/certifications" element={<Certifications />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:id" element={<ProjectDetail />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </main>
        </Router>
      </div>
    </ThemeProvider>
  );
}
