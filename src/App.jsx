import React, { useState, useEffect } from "react";
import {
  MemoryRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import {
  FiLinkedin,
  FiMail,
  FiArrowLeft,
  FiArrowRight,
  FiX,
} from "react-icons/fi";
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
      "Designed a compact travel organizer utilizing frictional contact points for improved efficiency.",
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

function updateFavicon() {
  const existingFavicon = document.querySelector("link[rel='icon']");
  if (existingFavicon) {
    document.head.removeChild(existingFavicon);
  }
  const link = document.createElement("link");
  link.rel = "icon";
  link.type = "image/png";
  link.href = "/images/favicon-32x32.png";
  document.head.appendChild(link);
}

export default function App() {
  useEffect(() => {
    document.title = "Abdulrahman Adil";
    updateFavicon();
  }, []);

  return (
    <Router>
      <motion.div
        className="min-h-screen bg-background text-textPrimary font-sans" // Updated
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

// =========== HOME PAGE COMPONENTS ===========

const HeroSection = () => (
  <motion.header
    className="text-center rounded bg-card text-textPrimary p-8 shadow-xl border border-borderLight" // Updated
    initial={{ scale: 0.95 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.5 }} // Duration updated from 0.7 to 0.5
  >
    <div className="relative z-10 space-y-4 md:space-y-6">
      <img
        src="/images/me.png"
        alt="Profile of Abdulrahman Adil"
        className="mx-auto w-24 h-24 md:w-36 md:h-36 object-cover rounded-full shadow-lg border-2 border-borderDark" // Updated
      />
      <h1 className="text-3xl md:text-5xl font-mono tracking-wide text-textPrimary"> {/* Updated */}
        Abdulrahman Adil
      </h1>
      <p className="text-base md:text-lg font-sans italic tracking-wider max-w-md md:max-w-2xl mx-auto text-textSecondary"> {/* Typography Updated: font-serif to font-sans */}
        Mechanical Engineer | Product Development Specialist | Innovative Problem
        Solver
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
);

const EducationSkills = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <SectionCard title="Education">
      <div className="bg-card rounded p-6 shadow-lg border border-borderLight"> {/* Updated */}
        <h3 className="font-mono text-lg md:text-xl text-textPrimary"> {/* Updated */}
          University of Illinois at Chicago
        </h3>
        <p className="font-sans text-base text-textSecondary">B.S. Mechanical Engineering</p> {/* Typography Updated: font-serif to font-sans */}
        <p className="text-sm text-textSecondary">December 2023 | GPA: 3.56/4.00</p> {/* Updated */}
      </div>
    </SectionCard>
    <SectionCard title="Professional Skills">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <SkillPill title="Leadership" />
        <SkillPill title="Detail Oriented" />
        <SkillPill title="Project Management" />
        <SkillPill title="Communication Skills" />
        <SkillPill title="Microsoft Office" />
        <SkillPill title="Injection Molding" />
        <SkillPill title="Design for Manufacturing" />
        <SkillPill title="Computer-Aided Designs" />
      </div>
    </SectionCard>
  </div>
);

const ProfessionalExperience = () => (
  <SectionCard title="Professional Experience">
    <div className="relative pl-8 border-l-2 border-borderDark space-y-4"> {/* Updated */}
      <TimelineItem
        title="Sustaining Engineer (Villa Park, IL)"
        company="Switchcraft Conxall"
        date="02/2024 - Present"
        highlights={[
          "Maintained and provided general support for existing products and assisted in deploying new ones",
          "Implemented product redesigns, including the creation of drawings, cost summaries, and tooling requests",
          "Conducted various laboratory tests and studies to ensure product quality and compliance with project requirements",
          "Developed customer projects from concept to production, including drawing and BOM creation, cost analysis, and manufacturing process procedures",
          "Interfaced with the manufacturing department to ensure the feasibility of customer projects and provide process improvement recommendations",
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
          "Designed a cooling strategy for our product, which included an initial cooling system schematic, then employed ANSYS for steady-state thermal analysis to ensure its effectiveness",
        ]}
      />
    </div>
  </SectionCard>
);

const ProjectsShowcase = () => (
  <SectionCard title="Engineering Projects">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {PROJECT_DATA.map((project) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }} // Duration updated from 0.5 to 0.4
          viewport={{ once: true }}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </div>
  </SectionCard>
);

// =========== HOME PAGE ===========
function HomePage() {
  return (
    <motion.div
      className="max-w-6xl mx-auto p-8 space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }} // Duration updated from 0.8 to 0.6
    >
      <HeroSection />
      <EducationSkills />
      <ProfessionalExperience />
      <ProjectsShowcase />
      <footer className="text-center text-sm text-textSecondary"> {/* Updated */}
        <p>© {new Date().getFullYear()} Abdulrahman Adil. All rights reserved.</p>
      </footer>
    </motion.div>
  );
}

// =========== PROJECT PAGE COMPONENTS ===========
const ProjectImageGrid = ({ images, setSelectedImageIndex }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {images.map((url, i) => (
      <div
        key={i}
        className="relative overflow-hidden rounded cursor-pointer transition border-2 border-borderDark hover:border-primary aspect-square" // Added aspect-square
        onClick={() => setSelectedImageIndex(i)}
      >
        <img
          src={url}
          alt={`Project visual ${i + 1}`}
          loading="lazy"
          className="w-full h-full object-cover transition duration-200"
          style={{ aspectRatio: "auto" }}
        />
      </div>
    ))}
  </div>
);

const ProjectImageModal = ({
  project,
  selectedImageIndex,
  setSelectedImageIndex,
}) => {
  if (selectedImageIndex === null) return null;

  return (
    <div
      className="fixed inset-0 bg-slate-900/90 flex items-center justify-center z-50" // Updated backdrop
      onClick={() => setSelectedImageIndex(null)}
    >
      <div
        className="relative max-w-4xl max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={project.images[selectedImageIndex]}
          alt={`Enlarged project visual ${selectedImageIndex + 1}`}
          className="object-contain max-w-full max-h-full border-2 border-primary" // Updated border
        />
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white text-3xl bg-primary/75 rounded-full hover:bg-primary transition focus:outline-none" // Updated style
          onClick={() => setSelectedImageIndex(null)}
        >
          <FiX />
        </button>
        {/* Previous Arrow */}
        {selectedImageIndex > 0 && (
          <button
            className="absolute left-4 top-1/2 w-10 h-10 transform -translate-y-1/2 flex items-center justify-center text-white text-3xl bg-primary/75 rounded-full hover:bg-primary transition focus:outline-none" // Updated style
            onClick={() => setSelectedImageIndex(selectedImageIndex - 1)}
          >
            <FiArrowLeft />
          </button>
        )}
        {/* Next Arrow */}
        {selectedImageIndex < project.images.length - 1 && (
          <button
            className="absolute right-4 top-1/2 w-10 h-10 transform -translate-y-1/2 flex items-center justify-center text-white text-3xl bg-primary/75 rounded-full hover:bg-primary transition focus:outline-none" // Updated style
            onClick={() => setSelectedImageIndex(selectedImageIndex + 1)}
          >
            <FiArrowRight />
          </button>
        )}
      </div>
    </div>
  );
};

// =========== PROJECT PAGE ===========
function ProjectPage() {
  const { projectId } = useParams();
  const project = PROJECT_DATA.find((p) => p.id === parseInt(projectId, 10));
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    document.body.style.overflow =
      selectedImageIndex !== null ? "hidden" : "unset";
  }, [selectedImageIndex]);

  if (!project) return <NotFound />;

  return (
    <motion.div
      className="max-w-4xl mx-auto p-8 space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Link
        to="/"
        className="inline-flex items-center text-textPrimary hover:text-primary transition border-b-2 border-borderDark focus:outline-none focus:border-primary" // Updated
      >
        <FiArrowLeft className="mr-2" /> Back to Portfolio
      </Link>
      <div className="bg-card rounded overflow-hidden border border-borderLight shadow-lg"> {/* Updated */}
        <div className="p-6 md:p-8"> {/* Increased padding */}
          <h1 className="text-2xl md:text-4xl font-mono tracking-wide mb-2 text-textPrimary"> {/* Updated */}
            {project.title}
          </h1>
          <div className="flex items-center space-x-4 mb-4"> {/* Increased margin bottom */}
            <span className="px-4 py-1 bg-primary text-white rounded-full text-sm font-mono"> {/* Updated */}
              {project.date}
            </span>
          </div>
          <ul className="space-y-2 mb-4 font-sans text-textSecondary project-description"> {/* Typography Updated: font-serif to font-sans */}
            {project.description.map((point, index) => (
              <li key={index} className="flex items-start">
                {/* Span with icon is handled by project-description class in index.css */}
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-6 md:p-8"> {/* Increased padding */}
          <ProjectImageGrid
            images={project.images}
            setSelectedImageIndex={setSelectedImageIndex}
          />
        </div>
      </div>
      <ProjectImageModal
        project={project}
        selectedImageIndex={selectedImageIndex}
        setSelectedImageIndex={setSelectedImageIndex}
      />
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
      className="flex items-center space-x-2 px-6 py-3 bg-card border-2 border-borderDark rounded hover:bg-primary hover:text-white hover:border-primary transition duration-200 font-sans focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" // Typography Updated: font-mono to font-sans
    >
      {React.cloneElement(icon, { className: "w-5 h-5" })}
      <span className="text-sm">{label}</span>
    </a>
  );
}

function SectionCard({ title, children, className }) {
  return (
    <div className={`bg-card rounded p-8 border border-borderLight shadow-lg ${className || ""}`}> {/* Updated */}
      <h2 className="text-3xl font-mono tracking-wide mb-6 text-textPrimary">{title}</h2> {/* Updated, increased margin bottom */}
      {children}
    </div>
  );
}

function SkillPill({ title }) {
  return (
    <div
      className="px-3 py-2 border border-borderLight rounded text-sm text-center font-mono tracking-wider whitespace-normal break-words bg-background text-textSecondary hover:bg-borderLight transition" // Updated
    >
      {title}
    </div>
  );
}

function TimelineItem({ title, company, date, highlights }) {
  return (
    <div className="relative pl-8">
      <div className="absolute w-5 h-5 bg-primary rounded-full -left-2.5 top-1.5 border-4 border-background" /> {/* Updated color, border to match background for "floating" effect */}
      <h3 className="text-xl font-mono tracking-wide text-textPrimary">{title}</h3> {/* Updated */}
      <p className="font-sans text-base text-textSecondary">{company}</p> {/* Typography Updated: font-serif to font-sans */}
      <p className="text-sm mb-4 text-textSecondary font-mono">{date}</p> {/* Typography Updated: Ensured date is font-mono */}
      <ul className="space-y-2 font-sans text-textSecondary project-description"> {/* Typography Updated: font-serif to font-sans */}
        {highlights.map((item, i) => (
          <li key={i} className="flex items-start">
            {/* Span with icon is handled by project-description class in index.css */}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ project }) {
  // Removed random HSL gradient generation

  return (
    <Link
      to={`/project/${project.id}`}
      className="group block rounded bg-card shadow-lg border border-borderLight overflow-hidden transition duration-200 hover:shadow-xl hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" // Updated
    >
      <div
        className="h-32 md:h-48 overflow-hidden transition-all duration-300 bg-slate-200" // Changed from random gradient to bg-slate-200
        // style removed
      ></div>
      <div className="p-6 bg-card"> {/* Updated */}
        <h3 className="text-xl font-mono tracking-wide mb-2 text-textPrimary group-hover:text-primary transition"> {/* Updated */}
          {project.title}
        </h3>
        <p className="line-clamp-2 font-sans text-sm text-textSecondary">{project.intro}</p> {/* Typography Updated: font-serif to font-sans */}
        <div className="mt-4 flex items-center justify-between text-sm text-textSecondary"> {/* Updated */}
          <span className="font-mono">{project.date}</span> {/* Typography Updated: Ensured date is font-mono */}
        </div>
      </div>
    </Link>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-8 text-textPrimary"> {/* Updated */}
      <h1 className="text-6xl font-mono tracking-wide mb-4">404</h1>
      <p className="text-xl font-sans mb-4 text-textSecondary">Project not found</p> {/* Typography Updated: font-serif to font-sans */}
      <Link
        to="/"
        className="flex items-center px-6 py-3 bg-card border-2 border-borderDark rounded hover:bg-primary hover:text-white hover:border-primary transition duration-200 font-sans focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" // Typography Updated: font-mono to font-sans
      >
        <FiArrowLeft className="mr-2" /> Return to Portfolio
      </Link>
    </div>
  );
}
