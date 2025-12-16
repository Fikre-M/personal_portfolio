import type { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform Redesign",
    problem: "Legacy checkout had 68% cart abandonment with poor mobile UX.",
    solution:
      "Rebuilt with React + TypeScript, optimistic UI, 40% smaller bundle.",
    impact:
      "Cart abandonment to 32%, mobile conversion +156%, LCP 4.2s → 1.1s.",
    tags: ["React", "TypeScript", "Redux", "Tailwind"],
    type: "professional",
    year: 2024,
    demo: "https://example.com",
    github: "https://github.com",
    image: "https://via.placeholder.com/400x300/4f46e5/ffffff?text=E-Commerce",
    metrics: { lighthouse: 98, coverage: 85, bundleSize: "145KB" },
  },
  {
    id: "2",
    title: "Real-Time Analytics Dashboard",
    problem: "Needed real-time metrics for 10K+ users without backend changes.",
    solution: "WebSocket client, virtual scrolling, optimized React renders.",
    impact: "50K data points with <16ms render, 73% fewer API calls.",
    tags: ["React", "WebSocket", "D3.js", "Recharts"],
    type: "professional",
    year: 2024,
    demo: "https://example.com",
    github: "https://github.com",
    image: "https://via.placeholder.com/400x300/10b981/ffffff?text=Analytics",
    metrics: { lighthouse: 95, coverage: 78, bundleSize: "210KB" },
  },
  {
    id: "3",
    title: "Component Library System",
    problem: "Design inconsistency across 5 products, no shared components.",
    solution:
      "Monorepo with Storybook, published to npm, visual regression testing.",
    impact:
      "Adopted by 3 teams, 60% faster handoff, 40+ components at 95% coverage.",
    tags: ["React", "TypeScript", "Storybook", "Monorepo"],
    type: "open-source",
    year: 2023,
    github: "https://github.com",
    image: "https://via.placeholder.com/400x300/f59e0b/ffffff?text=Components",
    metrics: { lighthouse: 100, coverage: 95, bundleSize: "85KB" },
  },
  {
    id: "4",
    title: "Accessibility Audit Tool",
    problem: "Manual a11y testing was slow and inconsistent.",
    solution: "Chrome extension with axe-core, automated WCAG 2.1 checks.",
    impact: "Scanned 100+ pages, found 250+ issues, now in CI/CD pipeline.",
    tags: ["JavaScript", "Chrome API", "Accessibility", "Testing"],
    type: "personal",
    year: 2023,
    github: "https://github.com",
    image: "https://via.placeholder.com/400x300/06b6d4/ffffff?text=A11y+Tool",
    metrics: { lighthouse: 100, coverage: 82, bundleSize: "95KB" },
  },
];
