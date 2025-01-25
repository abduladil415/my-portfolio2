import React, { useState, useEffect } from "react";
import {
  MemoryRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { FiLinkedin, FiMail, FiGlobe, FiArrowLeft } from "react-icons/fi";

// =========== PROJECT DATA ===========
const PROJECT_DATA = [
  {
    id: 1,
    title: "Multi-Finger Effector",
    intro: "Robotic hand with mechanical representations of hand, wrist, and elbow joints",
    description: [
      "Designed and fabricated a Multi-Finger Effector (MFE) capable of throwing a ball and moving in x-y plane with 120° freedom",
      "Conducted ANSYS simulations to determine stress distribution during dynamic operation",
      "Prototyped using Fused Deposition Modeling (FDM)",
      "Developed electrical schematics for hardware implementation"
    ],
    date: "10/2022 - 05/2023",
    images: [
      // point to your real images in the public folder
      "/images/MFE1.png",
      "/images/MFE2.png",
      "/images/MFE3.png",
      "/images/MFE4.png",
      "/images/MFE5.png",
      "/images/MFE6.png",
    ],
  },
  {
    id: 2,
    title: "Finite Element Analysis of Aircraft Wing Bracket",
    intro: "Auxiliary attachment bracket for aircraft wing",
    description: [
      "Designed custom bracket to maximize strength-weight ratio using FEA",
      "Achieved highest strength-weight ratio in class of ~100 students",
      "Implemented manufacturing-ready design for aircraft applications",
      "Conducted comprehensive material analysis for optimal performance"
    ],
    date: "01/2022 - 05/2022",
    images: [
      "/images/FEA1.png",
      "/images/FEA2.png",
      "/images/FEA3.png",
    ],
  },
  {
    id: 3,
    title: "Travel Desk Organizer",
    intro: "Portable utensil organizer with eco-friendly design",
    description: [
      "Prototyped using FDM 3D printing technology",
      "Reduced raw material waste by 20% through compact design",
      "Implemented frictional contact points for secure utensil storage",
      "Optimized for manufacturability and ease of assembly"
    ],
    date: "01/2022 - 05/2022",
    images: [
      "/images/TRAVEL DESK 1.png",
      "/images/TRAVEL DESK 2.jpg",
      "/images/TRAVEL DESK 3.png",
    ],
  },
  {
    id: 4,
    title: "Automated Soap Dispenser",
    intro: "Motion-activated dispensing system",
    description: [
      "Designed using PIR sensor and electronic timer system",
      "Programmed control software using C++",
      "Optimized pump mechanism for consistent soap dispensing",
      "Implemented low-power operation for battery efficiency"
    ],
    date: "01/2020 - 05/2020",
    images: [
      "/images/SOAP DISPENSER 1.png",
      "/images/SOAP DISPENSER 2.png",
    ],
  },
];

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 font-sans">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:projectId" element={<ProjectPage />} />
        </Routes>
      </div>
    </Router>
  );
}

// =========== HOME PAGE ===========
function HomePage() {
  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      {/* Hero Section */}
      <header className="text-center mb-16 relative overflow-hidden rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-700 text-white p-12 shadow-2xl">
        <div className="absolute inset-0 opacity-10 bg-grid-white/20" />
        <div className="relative z-10 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
            Abdulrahman Adil
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Mechanical Engineer | Product Development Specialist | Innovative Problem Solver
          </p>
          <div className="flex justify-center space-x-4">
            <SocialLink 
              href="https://www.linkedin.com/in/abduladil415/" 
              icon={<FiLinkedin />} 
              label="LinkedIn"
            />
            <SocialLink 
              href="mailto:abduladil415@gmail.com" 
              icon={<FiMail />} 
              label="Email"
            />
            <SocialLink 
              href="http://abdulrahmanadil.com" 
              icon={<FiGlobe />} 
              label="Website"
            />
          </div>
        </div>
      </header>

      {/* Education & Skills Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <SectionCard title="Education">
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 shadow-sm">
            <h3 className="font-semibold text-lg text-blue-800">University of Illinois at Chicago</h3>
            <p className="text-blue-600">B.S. Mechanical Engineering</p>
            <p className="text-sm text-blue-500">December 2023 | GPA: 3.56/4.00</p>
          </div>
        </SectionCard>

        <SectionCard title="Technical Expertise">
          <div className="grid grid-cols-2 gap-4">
            <SkillPill title="SolidWorks" />
            <SkillPill title="Siemens NX" />
            <SkillPill title="ANSYS" />
            <SkillPill title="FEA" />
            <SkillPill title="GD&T" />
            <SkillPill title="DFM" />
            <SkillPill title="Arduino" />
            <SkillPill title="MATLAB" />
          </div>
        </SectionCard>
      </div>

      {/* Professional Experience */}
      <SectionCard title="Professional Experience">
        <div className="relative pl-8 border-l-2 border-blue-100 space-y-12">
          <TimelineItem 
            title="Sustaining Engineer"
            company="Switcheraft Conxall"
            date="02/2024 - Present"
            highlights={[
              "Maintain and support existing products while assisting new deployments",
              "Implement product redesigns with technical drawings and cost analysis",
              "Conduct laboratory tests for quality assurance and compliance",
              "Develop customer projects from concept to production"
            ]}
          />
          <TimelineItem 
            title="R&D Engineering Intern"
            company="Panduit"
            date="05/2023 - 08/2023"
            highlights={[
              "Redesigned products using Siemens NX for DFM optimization",
              "Conducted thermal analysis using ANSYS for cooling systems",
              "Developed product integration strategies with existing lines",
              "Presented research findings to engineering leadership"
            ]}
          />
        </div>
      </SectionCard>

      {/* Projects Showcase */}
      <SectionCard title="Engineering Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECT_DATA.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </SectionCard>

      <footer className="mt-16 text-center text-sm text-blue-600/80">
        <p>© 2025 Abdulrahman Adil. All rights reserved.</p>
      </footer>
    </div>
  );
}

// =========== PROJECT PAGE ===========
function ProjectPage() {
  const { projectId } = useParams();
  const project = PROJECT_DATA.find(p => p.id === parseInt(projectId, 10));
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // Scroll to top when project changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]); // Trigger when project ID changes

  // Handle body overflow for image modal
  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedImageIndex]);

  if (!project) return <NotFound />;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link to="/" className="mb-8 inline-flex items-center text-blue-600 hover:text-blue-800 transition">
        <FiArrowLeft className="mr-2" /> Back to Portfolio
      </Link>

      {/* Project Details Section */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
        <div className="p-8 bg-gradient-to-b from-blue-50 to-white">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">{project.title}</h1>
          <div className="flex items-center text-blue-600 space-x-4 mb-6">
            <span className="px-3 py-1 bg-blue-100 rounded-full text-sm">{project.date}</span>
          </div>
          <ul className="space-y-4 mb-8">
            {project.description.map((point, index) => (
              <li key={index} className="flex items-start text-blue-700">
                <span className="text-blue-400 mr-2 mt-1">▹</span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-8">
          {project.images.map((url, i) => (
            <div 
              key={i} 
              className="relative group overflow-hidden rounded-xl cursor-pointer"
              onClick={() => setSelectedImageIndex(i)}
            >
              <img
                src={url}
                alt="Project visual"
                className="w-full h-64 object-cover transform transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 cursor-pointer"
          onClick={() => setSelectedImageIndex(null)}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={project.images[selectedImageIndex]}
              alt="Enlarged project visual"
              className="object-contain max-w-full max-h-full"
            />
            <button 
              className="absolute -top-8 right-0 text-white text-2xl hover:text-gray-300 transition"
              onClick={() => setSelectedImageIndex(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// =========== UI COMPONENTS ===========
function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300"
    >
      {React.cloneElement(icon, { className: "w-5 h-5" })}
      <span>{label}</span>
    </a>
  );
}

function SectionCard({ title, children, className }) {
  return (
    <div className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 ${className}`}>
      <h2 className="text-3xl font-bold text-blue-900 mb-6">{title}</h2>
      {children}
    </div>
  );
}

function SkillPill({ title }) {
  return (
    <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm text-center hover:bg-blue-200 transition">
      {title}
    </div>
  );
}

function TimelineItem({ title, company, date, highlights }) {
  return (
    <div className="relative pl-6">
      <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-2 border-2 border-white shadow" />
      <h3 className="text-xl font-semibold text-blue-900">{title}</h3>
      <p className="text-blue-600 font-medium">{company}</p>
      <p className="text-sm text-blue-500 mb-4">{date}</p>
      <ul className="space-y-2">
        {highlights.map((item, i) => (
          <li key={i} className="flex items-start text-blue-700">
            <span className="text-blue-400 mr-2">▹</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <Link
      to={`/project/${project.id}`}
      className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="h-48 bg-gradient-to-r from-blue-200 to-indigo-200">
        <img 
          src={project.images[0]} 
          alt={project.title}
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
        />
      </div>
      <div className="p-6 bg-white/90 backdrop-blur-sm">
        <h3 className="text-xl font-semibold text-blue-900 mb-2">
          {project.title}
        </h3>
        <p className="text-blue-600 line-clamp-2">{project.intro}</p>
        <div className="mt-4 flex items-center justify-between text-sm text-blue-500">
          <span>{project.date}</span>
          <span className="px-2 py-1 bg-blue-100 rounded-full">View Project →</span>
        </div>
      </div>
    </Link>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <h1 className="text-6xl font-bold text-blue-900 mb-4">404</h1>
      <p className="text-xl text-blue-700 mb-8">Project not found</p>
      <Link
        to="/"
        className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
      >
        <FiArrowLeft className="mr-2" /> Return to Portfolio
      </Link>
    </div>
  );
}

// =========== TEST SUITE ===========
function RunTests() {
  React.useEffect(() => {
    console.log("[TEST] Running verification checks...");
    
    // Verify project data
    if (PROJECT_DATA.length !== 4) {
      console.error(`[FAIL] Expected 4 projects, found ${PROJECT_DATA.length}`);
    } else {
      console.log("[PASS] Correct number of projects");
    }

    // Check unique IDs
    const ids = PROJECT_DATA.map(p => p.id);
    if (new Set(ids).size !== ids.length) {
      console.error("[FAIL] Duplicate project IDs detected");
    } else {
      console.log("[PASS] All project IDs are unique");
    }

    console.log("[TEST] Verification complete");
  }, []);

  return null;
}