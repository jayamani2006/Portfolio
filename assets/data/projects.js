// ============================================
// EDIT YOUR CONTENT HERE — no need to touch HTML/CSS
// ============================================

const ROLES = [
  "Electrical Engineer",
  "Python Developer",
  "AI Builder",
  "UI/UX Designer",
  "Founder, JS SoftTools"
];

const TIMELINE = [
  { year: "2023", title: "Started B.E. — EEE", desc: "Knowledge Institute of Technology" },
  { year: "2024", title: "Java & MySQL foundations", desc: "Internships at Stack Queue Education" },
  { year: "2024", title: "First IoT build", desc: "Smart Food Safety Box — sensor-driven alerts" },
  { year: "2025", title: "JS SoftTools founded", desc: "Started building Windows desktop utilities" },
  { year: "2025", title: "Web Development — 1st Prize", desc: "WEB-BUZZ Challenge, Movie Ticket Booking project" },
  { year: "2026", title: "AI + Audio tooling", desc: "JS AI-EDU Mentor, JS SoundPad, JS AudioSwitch v2.0" },
  { year: "2026", title: "Now", desc: "Building JS TouchPad RepairTool + this dashboard" }
];

const PROJECTS = [
  {
    title: "JS PC Optimizer",
    category: "Desktop",
    tags: ["Python", "PyQt6"],
    difficulty: 5,
    desc: "17-module gaming & system optimization suite with live donut charts and neon dark UI.",
    completion: 100
  },
  {
    title: "JS TouchPad RepairTool",
    category: "Desktop",
    tags: ["Python", "PyQt6", "Windows Driver"],
    difficulty: 4,
    desc: "System tray app diagnosing and auto-fixing Lenovo touchpad Code 10 failures.",
    completion: 85
  },
  {
    title: "JS AudioSwitch v2.0",
    category: "Desktop",
    tags: ["Python", "pycaw", "VB-Audio"],
    difficulty: 3,
    desc: "One-click VB-Audio Virtual Cable routing toggle for gaming voice/music routing.",
    completion: 100
  },
  {
    title: "JS SoundPad",
    category: "Chrome Extension",
    tags: ["JavaScript", "VB-Audio", "Web Audio API"],
    difficulty: 4,
    desc: "Chrome extension routing MP3/MP4 playback through VB-Audio Cable with 5-band EQ.",
    completion: 100
  },
  {
    title: "JS LiveWallpaper",
    category: "Desktop",
    tags: ["Python", "libmpv", "WorkerW"],
    difficulty: 5,
    desc: "Live desktop wallpaper engine with CPU/RAM threshold switching.",
    completion: 100
  },
  {
    title: "JS AI-EDU Mentor",
    category: "AI",
    tags: ["Python", "AI Prompting"],
    difficulty: 4,
    desc: "AI-driven assistant combining user profiling, diary tracking, and task analysis.",
    completion: 100
  },
  {
    title: "Movie Ticket Booking Website",
    category: "Web",
    tags: ["HTML", "CSS", "JS", "MySQL"],
    difficulty: 3,
    desc: "Movie booking platform with SQL backend, ticket & snack booking, email billing.",
    completion: 100
  },
  {
    title: "Smart Food Safety Box",
    category: "IoT",
    tags: ["ESP32", "Sensors"],
    difficulty: 3,
    desc: "IoT-based food safety system with sensor-driven monitoring and automated alerts.",
    completion: 100
  },
  {
    title: "JS PC Control Application",
    category: "Automation",
    tags: ["Python", "Telegram Bot"],
    difficulty: 3,
    desc: "Remote PC control with Telegram bot integration and real-time status monitoring.",
    completion: 100
  },
  {
    title: "Mobile OS Animation",
    category: "UI/UX",
    tags: ["Figma"],
    difficulty: 3,
    desc: "High-fidelity mobile OS simulation with boot animation & fingerprint unlock.",
    completion: 100
  },
  {
    title: "MIC Amplification Chrome Extension",
    category: "Chrome Extension",
    tags: ["JavaScript", "Web Audio API"],
    difficulty: 3,
    desc: "Chrome extension mic amplifier and equalizer to boost input audio.",
    completion: 100
  },
  {
    title: "Stationary Shop Website",
    category: "Web",
    tags: ["Full Stack", "E-commerce"],
    difficulty: 4,
    desc: "Full-stack e-commerce platform for KALVINANBAN STATIONARY — ongoing.",
    completion: 60
  }
];

const AWARDS = [
  { medal: "🥇", title: "Web Development — WEB-BUZZ Challenge", place: "1st Prize", org: "Stack Queue Education" },
  { medal: "🥈", title: "Paper Presentation", place: "2nd Prize, National Level Symposium", org: "Gnanamani College of Technology" },
  { medal: "🥈", title: "Project Expo — AMBER'Z Association", place: "2nd Prize", org: "Knowledge Institute of Technology" },
  { medal: "🥈", title: "AI Contest — AI AIZEN Challenge", place: "2nd Prize", org: "Stack Queue Education" }
];
