/* ============================================================================
   PROJECTS DATA – Video Gallery Content
   ============================================================================
   This file contains ALL data for the Video Showcase / Technical Deep-Dive
   section. Each project entry feeds into a VideoCard component.

   ── HOW TO EDIT ──────────────────────────────────────────────────────────
   1. To change a video:      Update the `videoUrl` field with your video URL
                               (YouTube embed, Vimeo, or direct .mp4 link).
   2. To change a thumbnail:  Update the `thumbnail` field with an image path.
   3. To change text:         Edit `title`, `subtitle`, `challenge`,
                               `solution`, and `outcome` fields.
   4. To add a new project:   Copy an existing object, change the `id`, and
                               fill in your content.
   5. To remove a project:    Delete the entire object from the array.
   6. Tags:                   Array of short tech keywords shown as badges.

   ── VIDEO URL FORMATS SUPPORTED ──────────────────────────────────────────
   • YouTube embed:   "https://www.youtube.com/embed/VIDEO_ID"
   • Vimeo embed:     "https://player.vimeo.com/video/VIDEO_ID"
   • Direct MP4:      "/videos/my-video.mp4"  (place in /public/videos/)
   • Leave as null:   Shows a styled placeholder with a play icon.
   ============================================================================ */

const projectsData = [
  {
    // ── PROJECT 1: 3D Roulette Simulation ──────────────────────────────────
    // This showcases the deterministic physics simulation built for a
    // slot-gaming roulette product using C# trigonometry and custom math.
    id: "roulette-3d",
    title: "3D Roulette Simulation",
    subtitle: "Deterministic Ball Dynamics & C# Trigonometry",
    tags: ["C#", "Unity", "Physics", "Trigonometry", "Deterministic Sim"],

    // ── Replace this with your actual video URL or leave null ──
    videoUrl: "/Videos/RouletteGame.mp4",
    forceMute: true,
    // ── Replace this with a thumbnail image path if desired ──
    thumbnail: null,

    challenge:
      "Building a physically accurate roulette simulation where the ball must land on a pre-determined pocket every single time, regardless of frame rate or device performance. Traditional physics engines introduce non-determinism through floating-point drift and variable timesteps, making them unsuitable for regulated gaming outcomes.",

    solution:
      "Implemented a fully custom deterministic ball dynamics system using parametric equations and C# trigonometry (Sin, Cos, Atan2). The ball's trajectory is computed as a spiral decay curve with precise angular velocity damping, bypassing Unity's built-in physics entirely. Fixed-point arithmetic ensures identical results across all platforms. The simulation factors in wheel rotation speed, ball deceleration coefficients, and deflector collisions — all driven by a seed-based RNG for reproducibility.",

    outcome:
      "Achieved 100% deterministic outcomes across 10,000+ test runs on multiple devices. The simulation passed all regulatory compliance checks for fair gaming, and the visual fidelity was praised by the product team as 'indistinguishable from a real roulette table.' Shipped to production with zero post-launch physics bugs.",
  },

  {
    // ── PROJECT 2: DoodleJump – Game Loop Architecture ──────────────────
    // Covers the design patterns behind Hypercasual game systems,
    // focusing on structured feedback loops and economy design.
    id: "DoodleJump",
    title: "Doodle Jump Ripoff",
    subtitle: "Jump. Bounce. Tilt. Repeat.",
    tags: ["2D", "Hypercasual", "Platformer", "C#", "Unity", "Action"],

    // ── Replace this with your actual video URL or leave null ──
    videoUrl: "/Videos/DoodleJump.mp4",

    // ── Replace this with a thumbnail image path if desired ──
    thumbnail: null,

    challenge:
      "Managing infinite vertical level generation without Garbage Collection spikes or memory leaks on constrained hardware",

    solution:
      "Architected a procedural system utilizing Object Pooling and View-Frustum Culling. Optimized collision logic using Physics2D Raycasting for precise differentiation between bounce, spike, and static platform behaviors.",

    outcome:
      "Delivered a high-performance, zero-allocation game loop with a stable memory profile.",
  },

  {
    // ── PROJECT 3: Performance Optimization ────────────────────────────────
    // Details Object Pooling, Scriptable Object patterns, and how
    // memory leaks were reduced from 500MB to 2MB.
    id: "SpaceShooter",
    title: "Space Shooter",
    subtitle: "Dodge and find the only safe space",
    tags: ["2D", "Arcade", "Physics 2D", "Profiling", "C#"],

    // ── Replace this with your actual video URL or leave null ──
    videoUrl: "/Videos/SpaceShip.mp4",

    // ── Replace this with a thumbnail image path if desired ──
    thumbnail: null,

    challenge:
      "Managing high-density obstacle instantiation and synchronous lane-based spawning logic while ensuring frame-perfect input responsiveness.",

    solution:
      "Developed a Lane-Manager utilizing Modulo arithmetic for discrete positioning and Physics2D OverlapArea for optimized proximity detection.",

    outcome:
      "Achieved deterministic movement and ultra-low CPU overhead with zero input latency.",
  },
  {
    // ── PROJECT 4: DroneGame ────────────────────────────────
    // Details Object Pooling, Scriptable Object patterns, and how
    // memory leaks were reduced from 500MB to 2MB.
    id: "DroneGame",
    title: "Drone Scape",
    subtitle: "Deterministic Lane-Based Obstacle Evasion",
    tags: ["2D", "Input System", "Limited time", "Follow Architecture"],

    // ── Replace this with your actual video URL or leave null ──
    videoUrl: "/Videos/Dronescape.mp4",

    // ── Replace this with a thumbnail image path if desired ──
    thumbnail: null,

    challenge:
      "Synchronizing high-density obstacle spawning with frame-perfect input responsiveness while maintaining a low memory footprint and Implementing sophisticated AI steering behaviors and environmental interaction logic under a strict 24-hour deadline.",

    solution:
      "Authored predictive tracking using Vector3 math and Quaternion.Slerp for smooth trajectories. Leveraged Layer-based Collision filtering to facilitate efficient environmental redirection mechanics.",

    outcome:
      "Successfully integrated complex environmental kill triggers with performance-optimized AI steering logic.",
  },
  {
    // ── PROJECT 5: CarGame ────────────────────────────────
    // Details Object Pooling, Scriptable Object patterns, and how
    // memory leaks were reduced from 500MB to 2MB.
    id: "CarGame",
    title: "Zombie car escape",
    subtitle: "High-speed vehicular survival.",
    tags: ["2D", "Input System", "Limited time", "Follow Architecture"],

    // ── Replace this with your actual video URL or leave null ──
    videoUrl: "/Videos/CarGame.mp4",

    // ── Replace this with a thumbnail image path if desired ──
    thumbnail: null,

    challenge:
      "Implementing realistic vehicle handling and a dynamic camera system that maintains stability during chaotic, high-speed lateral movement.",

    solution:
      "Developed a custom Arcade Vehicle Controller using Rigidbody torque and Raycast suspension. Utilized Cinemachine with procedural Euler angle offsets to create a velocity-sensitive camera tilt effect.",

    outcome:
      "Achieved a polished, immersive driving experience with responsive physics-based collisions and a seamless Real-time HUD for distance tracking.",
  },
    {
    // ── PROJECT 6: Endless runner ────────────────────────────────
    // Details Object Pooling, Scriptable Object patterns, and how
    // memory leaks were reduced from 500MB to 2MB.
    id: "EndlessRunner",
    title: "Surreal Non-Euclidean Endless Runner",
    subtitle: "Portal-based surreal survival.",

    tags: ["3D", "Shaders", "Object Pooling", "C#", "Procedural Generation"],

    // ── Replace this with your actual video URL or leave null ──
    videoUrl: "/Videos/EndlessRunner.mp4",

    // ── Replace this with a thumbnail image path if desired ──
    thumbnail: null,

    challenge:
      "Synchronizing GPU-driven world deformation with complex skeletal animation states without causing CPU-bound frame stutters",

    solution:
      "Authored a Vertex-Displacement Shader for environmental warping and utilized Layered Animator Controllers with Blend Trees for seamless character-state transitions.",

    outcome:
      "Achieved a performant, high-fidelity experience with optimized draw calls and a robust, modular animation architecture.",
  },
  {
    // ── PROJECT 7: Blender ────────────────────────────────
    // Details Object Pooling, Scriptable Object patterns, and how
    // memory leaks were reduced from 500MB to 2MB.
    id: "Blender",
    title: "Donuts and its sweet sweet shader",
    subtitle: "PEngine-ready 3D asset pipeline.",

    tags: ["3D Modeling", "Blender", "UV Mapping", "Proceduralism", "Lighting"],

    // ── Replace this with your actual video URL or leave null ──
    videoUrl: "/Videos/Blender.mp4",

    // ── Replace this with a thumbnail image path if desired ──
    thumbnail: null,

    challenge:
      "Achieving high-fidelity texturing and realistic asset distribution while maintaining efficient, engine-ready topology.",

    solution:
      "Utilized UV Unwrapping for optimized texture density and Geometry Nodes for procedural scattering. Configured Three-Point Lighting and keyframed cinematic camera sequences.",

    outcome:
      "Produced professional-grade assets optimized for seamless integration into Unity's Universal Render Pipeline (URP), with a focus on modularity and performance.",
  },
   {
    // ── PROJECT 9: React ────────────────────────────────
    // Details Object Pooling, Scriptable Object patterns, and how
    // memory leaks were reduced from 500MB to 2MB.
    id: "React",
    title: "Interactive React Components",
    subtitle: "RESTful API-driven UI",

    tags: ["React", "REST API", "Asynchronous Programming", "State Management", "UI/UX"],

    // ── Replace this with your actual video URL or leave null ──
    videoUrl: "/Videos/React.mp4",

    // ── Replace this with a thumbnail image path if desired ──
    thumbnail: null,

    challenge:
      "Managing asynchronous data states and ensuring robust UI feedback for invalid or null API queries.",

    solution:
      "Integrated a RESTful API utilizing React Hooks for state-driven updates. Implemented conditional rendering for input validation and error-state handling.",

    outcome:
      "Developed a responsive SPA with optimized data-binding and graceful error-handling logic.",
  },
];

export default projectsData;
