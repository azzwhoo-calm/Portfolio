/* ============================================================================
   EXPERIENCE DATA – Career Timeline
   ============================================================================
   This file contains the chronological career progression data displayed
   in the Experience section's interactive timeline.

   ── HOW TO EDIT ──────────────────────────────────────────────────────────
   1. To change a role:         Edit the `role`, `company`, `period`, or
                                 `type` fields.
   2. To update descriptions:   Modify the `description` string.
   3. To change highlights:     Edit the `highlights` array (bullet points).
   4. To update tech stack:     Modify the `technologies` array (badge tags).
   5. To add a new role:        Copy an existing object, update all fields,
                                 and place it in chronological order.
   6. To remove a role:         Delete the entire object from the array.

   ── FIELD REFERENCE ──────────────────────────────────────────────────────
   id           Unique identifier string
   role         Job title
   company      Company name
   period       Date range (e.g., "Jan 2022 – Dec 2023")
   type         Employment type: "Full-time", "Internship", "Contract"
   description  1-2 sentence overview of the role's focus
   highlights   Array of achievement strings (shown as bullet points)
   technologies Array of tech/tool names (shown as badges)
   ============================================================================ */

const experienceData = [
  {
    // ── ROLE 4: Software Engineer (Current Role) ──────────────────────────
    // Current position. Focus on system design, cross-studio tooling,
    // and mentoring the next generation of engineers.
    id: "software-engineer",
    role: "Software Engineer",
    company: "Light & Wonder",
    period: "March 2026 – Present",
    type: "Full-time",
    bgImage: "/Photos/bg-1.jpeg",
    description:
      "Driving cross-studio technical initiatives, designing scalable game architectures, and leading performance optimization efforts across the global slot gaming portfolio.",
    highlights: [
      "Designed 'UK specific changes' and 'Featurette' loop frameworks used as studio reference architectures",
      "Led development of a generic approach via GDK integration into 12+ game titles globally",
      "Spearheaded the migration to a streaming asset pipeline, cutting initial load times by 40%",
      "Mentoring 4 junior engineers and conducting weekly tech talks on system design and optimization",
    ],
    technologies: [
      "C#",
      "Unity",
      "Editor Tools",
      "GDK Architecture",
      "Performance Engineering",
      "Mentoring",
      "Scale",
    ],
  },
  {
    // ── ROLE 3: Senior Associate Software Engineer ─────────────────────────
    // Promoted to senior associate. Led technical initiatives and
    // cross-team architecture discussions.
    id: "senior-associate",
    role: "Senior Associate Software Engineer",
    company: "Light & Wonder",
    period: "April 2025 – March 2026",
    type: "Full-time",
    bgImage: "/Photos/bg-2.jpeg",
    description:
      "Led performance engineering initiatives across the UK studio's game portfolio. Drove architectural decisions for new game frameworks and championed engineering best practices.",
    highlights: [
      "Architected a shared Scriptable Object-based configuration system adopted by 8+ game titles",
      "Reduced memory leak footprint from 500MB to 2MB through systematic profiling and pooling overhaul",
      "Designed and implemented the Multigame menu and progressive management systems for 20+ major slot titles",
      "Won 'Creator of the Year' award at UK Studios for technical innovation and impact",
    ],
    technologies: [
      "C#",
      "Unity",
      "Scriptable Objects",
      "Memory Profiler",
      "Custom Menu Systems",
      "GC Optimization",
    ],
  },
  {
    // ── ROLE 2: Associate Software Engineer ────────────────────────────────
    // First full-time role. Took ownership of feature modules and began
    // optimizing game performance.
    id: "associate",
    role: "Associate Software Engineer",
    company: "Light & Wonder",
    period: "August 2023 – March 2025",
    type: "Full-time",
    bgImage: "/Photos/bg-3.jpeg",
    description:
      "Transitioned to full-time, owning feature development for slot game titles across multiple platforms. Began specializing in rendering performance and memory optimization.",
    highlights: [
      "Delivered symbol animation systems for 5 shipped slot titles across mobile and cabinet platforms",
      "Identified and resolved a critical Jira Issues in vast areas like audio, animation, critical bugs and Statemachines",
      "Introduced Object Pooling patterns to the team's codebase, reducing GC spikes by 60%",
      "Added different cabinet and market supports to the first major title of the UK studio, which was a major milestone for the company",
    ],
    technologies: ["C#", "Unity", "Object Pooling", "Profiler", "Addressables" , "Jira" , "Statemachines"],
  },
  {
    // ── ROLE 1: Internship ─────────────────────────────────────────────────
    // Starting point at Light & Wonder. Focus on learning the slot gaming
    // tech stack and contributing to smaller feature work.
    id: "intern",
    role: "Intern – Game Developer",
    company: "Light & Wonder (formerly SG Gaming)",
    period: "Jan 2023 – May 2023",
    type: "Internship",
    bgImage: "/Photos/bg-4.jpeg",
    description:
      "Onboarded into the slot gaming ecosystem, gaining hands-on experience with proprietary game frameworks, C# development in Unity, and the regulatory requirements of certified gaming software.",
    highlights: [
      "Built UI components for 3 slot game prototypes using Unity's UGUI system",
      "Wrote automated test scripts for symbol animation sequences, reducing QA regression time by 30%",
      "Collaborated with artists to implement sprite sheet pipelines for reel-strip rendering",
      "Designed and developed 3d Roulette game from placing bets to spinning the wheel, which was a major milestone for the internship program",
    ],
    technologies: ["C#", "Unity", "UGUI", "Trignometry", "Designing"],
  }
];

export default experienceData;
