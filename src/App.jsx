import React, { useState, useEffect } from "react";
import {
  MemoryRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { FiLinkedin, FiMail, FiArrowLeft } from "react-icons/fi";
import { motion } from "framer-motion";

// =========== PROJECT DATA ===========
const PROJECT_DATA = [
  {
    id: 1,
    title: "Multi-Finger Effector",
    intro:
      "Robotic hand with mechanical representations of hand, wrist, and elbow joints",
    description: [
      "Designed and fabricated a Multi-Finger Effector (MFE) capable of throwing a ball and moving in x-y plane with 120° freedom",
      "Conducted ANSYS simulations to determine stress distribution during operation",
      "Prototyped using Fused Deposition Modeling (FDM)",
    ],
    date: "10/2022 - 05/2023",
    images: [
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
      "Designed and fabricated a custom auxiliary bracket attachment for an aircraft wing that would maximize the strength to weight ratio through finite element analysis.",
      "Achieved the highest strength-weight ratio for the attachment bracket in an engineering class of around 100 students.",
    ],
    date: "01/2022 - 05/2022",
    images: ["/images/FEA1.png", "/images/FEA2.png", "/images/FEA3.png"],
  },
  {
    id: 3,
    title: "Travel Desk Organizer",
    intro: "Portable utensil organizer with eco-friendly design",
    description: [
      "Prototyped a portable travel organizer capable of holding client’s chosen utensils using FDM.",
      "Designed a compact travel organizer utilizing frictional contact points for improved efficiency."
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
      "Designed an automatic soap dispenser that uses a passive infrared sensor to dispense soap.",
      "Programmed software for the control system of the soap dispenser using C++.",
    ],
    date: "01/2020 - 05/2020",
    images: ["/images/SOAP DISPENSER 1.png", "/images/SOAP DISPENSER 2.png"],
  },
];

export default function App() {
  useEffect(() => {
    document.title = "Abdulrahman Adil";

    // Remove any existing favicon
    const existingFavicon = document.querySelector("link[rel='icon']");
    if (existingFavicon) {
      document.head.removeChild(existingFavicon);
    }

    // Create a new link element for the favicon
    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/png";
    // Update path to your 32x32 PNG favicon file:
    link.href = "/images/favicon-32x32.png";

    document.head.appendChild(link);
  }, []);

  return (
    <Router>
      <motion.div
        className="min-h-screen bg-[#f5f5f3] text-[#2b2b2b] font-sans"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:projectId" element={<ProjectPage />} />
        </Routes>
      </motion.div>
    </Router>
  );
}

// =========== HOME PAGE ===========
function HomePage() {
  return (
    <motion.div
      className="max-w-6xl mx-auto p-4 md:p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero Section */}
      <motion.header
        className="text-center mb-16 relative rounded-2xl bg-white text-black p-12 shadow-lg border border-gray-300"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="relative z-10 space-y-6">
          <img
            src="/images/me.png"  /* Replace yourNewProfile.jpg with the actual file name */
            alt="Profile"
            className="mx-auto w-36 h-36 object-cover rounded-full shadow-lg border-4 border-white"
          />
          <h1 className="text-4xl md:text-5xl font-extrabold text-red-700">
            Abdulrahman Adil
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Mechanical Engineer | Product Development Specialist | Innovative
            Problem Solver
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
          </div>
        </div>
      </motion.header>

      {/* Education & Skills Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <SectionCard title="Education">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <h3 className="font-semibold text-lg text-gray-800">
              University of Illinois at Chicago
            </h3>
            <p className="text-gray-600">B.S. Mechanical Engineering</p>
            <p className="text-sm text-gray-500">
              December 2023 | GPA: 3.56/4.00
            </p>
          </div>
        </SectionCard>

        <SectionCard title="Technical Expertise">
          <div className="grid grid-cols-2 gap-4">
            <SkillPill title="Computer-Aided Designs" />
            <SkillPill title="Microsoft Office" />
            <SkillPill title="Design for Manufacturing" />
            <SkillPill title="Injection Molding" />
            <SkillPill title="Leadership" />
            <SkillPill title="Detail Oriented" />
            <SkillPill title="Project Management" />
            <SkillPill title="Communication Skills" />
          </div>
        </SectionCard>
      </div>

      {/* Professional Experience */}
      <SectionCard title="Professional Experience">
        <div className="relative pl-8 border-l-2 border-gray-300 space-y-12">
          <TimelineItem
            title="Sustaining Engineer (Villa Park, IL)"
            company="Switchcraft Conxall"
            date="02/2024 - Present"
            highlights={[
              "Maintained and provided general support for existing products and assisted in deploying new ones",
              "Implemented product redesigns, including the creation of drawings, cost summaries, and tooling requests",
              "Conducted various laboratory tests and studies to ensure product quality and compliance with project requirements",
              "Developed customer projects from concept to production, including drawing and BOM creation, cost analysis, and manufacturing process procedures",
              "Interfaced with the manufacturing department to ensure the feasibility of customer projects and provide process improvement recommendations"
            ]}
          />
          <TimelineItem
            title="R&D Engineering Intern (Tinley Park, IL)"
            company="Panduit"
            date="05/2023 - 08/2023"
            highlights={[
              "Redesigned multiple signature products using Siemens NX to understand DFM and learned how to cost-efficiently design products to prepare them for injection molding",
              "Conducted preliminary research on a possible new product and presented my conclusions to my supervisor",
              "Developed preliminary product design schematics and researched their potential integration with existing products",
              "Designed a cooling strategy for our product, which included an initial cooling system schematic, then employed ANSYS for steady-state thermal analysis to ensure its effectiveness"
            ]}
          />
        </div>
      </SectionCard>

      {/* Projects Showcase */}
      <SectionCard title="Engineering Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECT_DATA.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </SectionCard>

      <footer className="mt-16 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Abdulrahman Adil. All rights reserved.</p>
      </footer>
    </motion.div>
  );
}

// =========== PROJECT PAGE ===========
function ProjectPage() {
  const { projectId } = useParams();
  const project = PROJECT_DATA.find((p) => p.id === parseInt(projectId, 10));
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedImageIndex]);

  if (!project) return <NotFound />;

  return (
    <motion.div
      className="max-w-4xl mx-auto px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Link
        to="/"
        className="mb-8 inline-flex items-center text-gray-700 hover:text-red-600 transition"
      >
        <FiArrowLeft className="mr-2" /> Back to Portfolio
      </Link>

      {/* Project Details */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
        <div className="p-8 bg-gradient-to-b from-[#fdfdfd] to-[#f4f4f4]">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {project.title}
          </h1>
          <div className="flex items-center text-gray-600 space-x-4 mb-6">
            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
              {project.date}
            </span>
          </div>
          <ul className="space-y-4 mb-8">
            {project.description.map((point, index) => (
              <li key={index} className="flex items-start text-gray-700">
                <span className="text-red-600 mr-2 mt-1">▹</span>
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
              className="relative group overflow-hidden rounded-xl cursor-pointer hover:shadow-lg transition-shadow duration-200"
              onClick={() => setSelectedImageIndex(i)}
            >
              <img
                src={url}
                alt="Project visual"
                loading="lazy"
                className="w-full h-64 object-cover transform transition duration-200 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
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
    </motion.div>
  );
}

// =========== UI COMPONENTS ===========
function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center space-x-2 px-6 py-3 bg-white/10 rounded-full hover:bg-red-100 hover:text-red-700 transition duration-200"
    >
      {React.cloneElement(icon, { className: "w-5 h-5" })}
      <span>{label}</span>
    </a>
  );
}

function SectionCard({ title, children, className }) {
  return (
    <div className={`bg-white rounded-2xl shadow-lg p-6 ${className ?? ""}`}>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">{title}</h2>
      {children}
    </div>
  );
}

function SkillPill({ title }) {
  return (
    <div className="bg-red-700 text-white px-4 py-2 rounded-full text-sm text-center font-medium">
      {title}
    </div>
  );
}

function TimelineItem({ title, company, date, highlights }) {
  return (
    <div className="relative pl-6">
      <div className="absolute w-4 h-4 bg-red-700 rounded-full -left-[9px] top-2 border-2 border-white shadow" />
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 font-medium">{company}</p>
      <p className="text-sm text-gray-500 mb-4">{date}</p>
      <ul className="space-y-2">
        {highlights.map((item, i) => (
          <li key={i} className="flex items-start text-gray-700">
            <span className="text-red-600 mr-2">▹</span>
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
      className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition duration-200"
    >
      <div className="h-48 bg-[#eaeaea] overflow-hidden">
        <img
          src={project.images[0]}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-200 transform group-hover:scale-105"
        />
      </div>
      <div className="p-6 bg-white">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-red-700 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-gray-600 line-clamp-2">{project.intro}</p>
        <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
          <span>{project.date}</span>
        </div>
      </div>
    </Link>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f5f5f3]">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-8">Project not found</p>
      <Link
        to="/"
        className="flex items-center px-6 py-3 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition duration-200"
      >
        <FiArrowLeft className="mr-2" /> Return to Portfolio
      </Link>
    </div>
  );
}
