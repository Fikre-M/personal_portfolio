export type Project {
  id: string;
  title: string;
  problem: string;
  solution: string;
  impact: string;
  tags: string[];
  type: "personal" | "professional" | "open-source";
  year: number;
  demo?: string;
  github?: string;
  image: string;
  metrics: {
    lighthouse?: number;
    coverage?: number;
    bundleSize?: string;
  };
}
