export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  industry: string;
  services: string[];
  year: number;
  liveUrl: string;
  challenge: string;
  process: string;
  outcome: string;
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "E-commerce Platform",
    description:
      "A fully responsive e-commerce website with cart functionality and payment integration.",
    imageUrl: "/placeholder.svg?height=600&width=800",
    industry: "Retail",
    services: ["Web Development", "UI/UX Design"],
    year: 2023,
    liveUrl: "https://example-ecommerce.com",
    challenge:
      "The client needed a modern, user-friendly e-commerce platform that could handle a large inventory and provide a seamless shopping experience across all devices.",
    process:
      "We began with extensive user research and wireframing, followed by iterative design sprints. The development phase involved building a robust backend with Node.js and a responsive frontend using React. We integrated Stripe for secure payments and implemented an intuitive admin dashboard for inventory management.",
    outcome:
      "The new e-commerce platform resulted in a 40% increase in mobile conversions and a 25% reduction in cart abandonment rates within the first three months of launch.",
    testimonial: {
      quote:
        "The new platform has transformed our online presence. It's not just visually appealing, but it's also incredibly easy for our customers to use.",
      author: "Jane Doe",
      position: "CEO, Fashion Retailer",
    },
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  {
    id: "project-2",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team features.",
    imageUrl: "/placeholder.svg?height=300&width=400",
    industry: "Software",
    services: ["Development", "Backend"],
    year: 2022,
    liveUrl: "https://example-task-manager.com",
    challenge:
      "The client needed a reliable and efficient task management app that could help teams collaborate effectively.",
    process:
      "We used Agile methodologies to develop the app, focusing on iterative development and continuous feedback. We used React Native for cross-platform compatibility and Node.js for the backend.",
    outcome:
      "The app improved team collaboration and task management efficiency by 30%.",
    gallery: ["/placeholder.svg?height=400&width=600"],
  },
  {
    id: "project-3",
    title: "Fitness Tracker",
    description:
      "A mobile-first fitness tracking app with workout plans and progress visualization.",
    imageUrl: "/placeholder.svg?height=300&width=400",
    industry: "Health & Fitness",
    services: ["Mobile Development", "UI/UX Design"],
    year: 2021,
    liveUrl: "https://example-fitness-tracker.com",
    challenge:
      "The client needed an app that would motivate users to stay active and track their progress.",
    process:
      "We focused on creating a user-friendly interface that would encourage users to track their workouts and set goals. We used React Native for development and integrated with various fitness APIs.",
    outcome: "The app increased user engagement by 20%.",
    gallery: ["/placeholder.svg?height=400&width=600"],
  },
  {
    id: "project-4",
    title: "Social Media Dashboard",
    description:
      "A dashboard for managing social media accounts and analyzing performance metrics.",
    imageUrl: "/placeholder.svg?height=300&width=400",
    industry: "Marketing",
    services: ["Web Development", "Data Analytics"],
    year: 2020,
    liveUrl: "https://example-social-dashboard.com",
    challenge:
      "The client needed a centralized platform to manage multiple social media accounts and track key performance indicators.",
    process:
      "We built a responsive dashboard that integrated with popular social media APIs and provided real-time analytics. We used React for the frontend and Node.js for the backend.",
    outcome: "The dashboard improved social media engagement by 25%.",
    gallery: ["/placeholder.svg?height=400&width=600"],
  },
  {
    id: "project-5",
    title: "Online Learning Platform",
    description:
      "An interactive e-learning platform with video lectures and quizzes.",
    imageUrl: "/placeholder.svg?height=300&width=400",
    industry: "Education",
    services: ["Web Development", "UI/UX Design"],
    year: 2019,
    liveUrl: "https://example-learning-platform.com",
    challenge:
      "The client needed an online platform that would provide engaging educational content and interactive quizzes.",
    process:
      "We designed a user-friendly interface with a focus on video content and interactive quizzes. We used React for the frontend and integrated with a video hosting service for seamless playback.",
    outcome: "The platform increased user retention by 35%.",
    gallery: ["/placeholder.svg?height=400&width=600"],
  },
];
