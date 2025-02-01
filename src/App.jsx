import React, { useState, useEffect } from "react";
import {
  MemoryRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { FiLinkedin, FiMail, FiArrowLeft, FiArrowRight, FiX } from "react-icons/fi";
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
        className="min-h-screen bg-white text-black font-sans"
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
    className="text-center mb-8 relative rounded bg-white text-black p-6 md:p-12 shadow-[8px_8px_0_black] border-4 border-black"
    initial={{ scale: 0.95 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.7 }}
  >
    <div className="relative z-10 space-y-4 md:space-y-6">
      <img
        src="/images/me.png"
        alt="Profile of Abdulrahman Adil"
        className="mx-auto w-24 h-24 md:w-36 md:h-36 object-cover rounded-full shadow-[4px_4px_0_black] border-4 border-black"
      />
      <h1 className="text-2xl md:text-4xl font-mono tracking-wide">Abdulrahman Adil</h1>
      <p className="text-base md:text-lg font-serif italic tracking-wider max-w-md md:max-w-2xl mx-auto">
        Mechanical Engineer | Product Development Specialist | Innovative Problem Solver
      </p>
      <div className="flex justify-center space-x-2 md:space-x-4">
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
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
    <SectionCard title="Education">
      <div className="bg-white rounded p-4 md:p-6 shadow-[4px_4px_0_black] border-4 border-black">
        <h3 className="font-mono text-lg md:text-xl">University of Illinois at Chicago</h3>
        <p className="font-serif text-base">B.S. Mechanical Engineering</p>
        <p className="text-sm">December 2023 | GPA: 3.56/4.00</p>
      </div>
    </SectionCard>
    <SectionCard title="Professional Skills">
      <div className="grid grid-cols-2 gap-2 sm:gap-4">
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
  <SectionCard title="Professional Experience" className="mb-8 md:mb-12">
    <div className="relative pl-4 md:pl-8 border-l-4 border-black space-y-4 md:space-y-8">
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
  <SectionCard title="Engineering Projects" className="mb-8 md:mb-12">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
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
);

// =========== HOME PAGE ===========
function HomePage() {
  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <HeroSection />
      <EducationSkills />
      <ProfessionalExperience />
      <ProjectsShowcase />

      <footer className="mt-8 md:mt-12 text-center text-xs md:text-sm">
        <p>© {new Date().getFullYear()} Abdulrahman Adil. All rights reserved.</p>
      </footer>
    </motion.div>
  );
}

// =========== PROJECT PAGE COMPONENTS ===========

const ProjectImageGrid = ({ images, setSelectedImageIndex }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
    {images.map((url, i) => (
      <div
        key={i}
        className="relative overflow-hidden rounded cursor-pointer transition border-4 border-black"
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

const ProjectImageModal = ({ project, selectedImageIndex, setSelectedImageIndex }) => {
  if (selectedImageIndex === null) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
      onClick={() => setSelectedImageIndex(null)}
    >
      <div
        className="relative max-w-4xl max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={project.images[selectedImageIndex]}
          alt={`Enlarged project visual ${selectedImageIndex + 1}`}
          className="object-contain max-w-full max-h-full border-4 border-black"
        />
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-white text-2xl md:text-3xl bg-black bg-opacity-50 rounded-full hover:bg-opacity-70 transition focus:outline-none"
          onClick={() => setSelectedImageIndex(null)}
        >
          <FiX />
        </button>
        {/* Previous Arrow */}
        {selectedImageIndex > 0 && (
          <button
            className="absolute left-4 top-1/2 w-8 h-8 md:w-10 md:h-10 transform -translate-y-1/2 flex items-center justify-center text-white text-2xl md:text-3xl bg-black bg-opacity-50 rounded-full hover:bg-opacity-70 transition focus:outline-none"
            onClick={() => setSelectedImageIndex(selectedImageIndex - 1)}
          >
            <FiArrowLeft />
          </button>
        )}
        {/* Next Arrow */}
        {selectedImageIndex < project.images.length - 1 && (
          <button
            className="absolute right-4 top-1/2 w-8 h-8 md:w-10 md:h-10 transform -translate-y-1/2 flex items-center justify-center text-white text-2xl md:text-3xl bg-black bg-opacity-50 rounded-full hover:bg-opacity-70 transition focus:outline-none"
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
    document.body.style.overflow = selectedImageIndex !== null ? "hidden" : "unset";
  }, [selectedImageIndex]);

  if (!project) return <NotFound />;

  return (
    <motion.div
      className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Link
        to="/"
        className="mb-4 md:mb-6 inline-flex items-center text-black hover:text-red-700 transition border-b-2 border-black focus:outline-none"
      >
        <FiArrowLeft className="mr-2" /> Back to Portfolio
      </Link>

      {/* Project Details */}
      <div className="bg-white rounded shadow-none overflow-hidden mb-4 md:mb-8 border-4 border-black">
        <div className="p-4 md:p-6">
          <h1 className="text-2xl md:text-4xl font-mono tracking-wide mb-4">{project.title}</h1>
          <div className="flex items-center space-x-2 md:space-x-4 mb-4">
            <span className="px-3 py-1 md:px-4 md:py-1 bg-red-700 text-white rounded-full text-xs md:text-sm font-mono">
              {project.date}
            </span>
          </div>
          <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6 font-serif">
            {project.description.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="text-red-700 mr-1 md:mr-2 font-bold">▹</span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Image Grid */}
        <div className="px-4 md:px-6 pb-4 md:pb-6">
          <ProjectImageGrid images={project.images} setSelectedImageIndex={setSelectedImageIndex} />
        </div>
      </div>

      {/* Image Modal */}
      <ProjectImageModal project={project} selectedImageIndex={selectedImageIndex} setSelectedImageIndex={setSelectedImageIndex} />
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
      className="flex items-center space-x-2 px-4 py-2 md:px-6 md:py-3 bg-white border-4 border-black rounded hover:bg-red-100 hover:text-red-700 transition duration-200 font-mono focus:outline-none"
    >
      {React.cloneElement(icon, { className: "w-5 h-5" })}
      <span className="text-xs md:text-sm">{label}</span>
    </a>
  );
}

function SectionCard({ title, children, className }) {
  return (
    <div className={`bg-white rounded shadow-none p-4 md:p-8 border-4 border-black ${className || ""}`}>
      <h2 className="text-xl md:text-3xl font-mono tracking-wide mb-4">{title}</h2>
      {children}
    </div>
  );
}

function SkillPill({ title }) {
  return (
    <div className="px-2 py-1 md:px-3 md:py-2 border-4 border-black rounded text-xs md:text-sm text-center font-mono tracking-wider">
      {title}
    </div>
  );
}

function TimelineItem({ title, company, date, highlights }) {
  return (
    <div className="relative pl-4 md:pl-8">
      <div className="absolute w-4 h-4 md:w-5 md:h-5 bg-red-700 rounded-full -left-2 md:-left-3 top-2 border-4 border-black" />
      <h3 className="text-lg md:text-xl font-mono tracking-wide">{title}</h3>
      <p className="font-serif text-base">{company}</p>
      <p className="text-xs md:text-sm mb-2 md:mb-4">{date}</p>
      <ul className="space-y-1 md:space-y-2 font-serif">
        {highlights.map((item, i) => (
          <li key={i} className="flex items-start">
            <span className="text-red-700 mr-1 md:mr-2 font-bold">▹</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ project }) {
  // Generate a random HSL color for the background gradient
  const getRandomHSL = (hueStart = 0, hueEnd = 360) => {
    const hue = Math.random() * (hueEnd - hueStart) + hueStart;
    const saturation = Math.random() * 40 + 60;
    const lightness = Math.random() * 30 + 40;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  const backgroundStyle = {
    backgroundImage: `linear-gradient(to bottom right, ${getRandomHSL()}, ${getRandomHSL()}, ${getRandomHSL()})`,
  };

  return (
    <Link
      to={`/project/${project.id}`}
      className="group block rounded bg-white shadow-[4px_4px_0_black] border-4 border-black overflow-hidden transition duration-200 focus:outline-none"
    >
      <div className="h-32 md:h-48 overflow-hidden transition-all duration-300" style={backgroundStyle}></div>
      <div className="p-4 md:p-6 bg-white">
        <h3 className="text-lg md:text-xl font-mono tracking-wide mb-2">{project.title}</h3>
        <p className="line-clamp-2 font-serif text-xs md:text-sm">{project.intro}</p>
        <div className="mt-2 md:mt-4 flex items-center justify-between text-xs md:text-sm">
          <span>{project.date}</span>
        </div>
      </div>
    </Link>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <h1 className="text-4xl md:text-6xl font-mono tracking-wide mb-4">404</h1>
      <p className="text-base md:text-xl font-serif mb-4">Project not found</p>
      <Link
        to="/"
        className="flex items-center px-4 py-2 md:px-6 md:py-3 bg-white border-4 border-black rounded hover:bg-gray-100 transition duration-200 font-mono focus:outline-none"
      >
        <FiArrowLeft className="mr-2" /> Return to Portfolio
      </Link>
    </div>
  );
}
