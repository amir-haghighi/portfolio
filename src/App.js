import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { NightModeProvider } from "./context/nightModeContext";
import { Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactMePage from "./pages/ContactMePage";
import { AlertProvider } from "./context/alertContext";
import AboutMePage from "./pages/AboutMePage";

function App() {
  return (
    <ChakraProvider>
      <NightModeProvider>
        <AlertProvider>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="projects" element={<ProjectsPage />} />
              <Route path="contact" element={<ContactMePage />} />
              <Route path="about" element={<AboutMePage />} />
            </Routes>
          </main>
          <Footer />
        </AlertProvider>
      </NightModeProvider>
    </ChakraProvider>
  );
}

export default App;
