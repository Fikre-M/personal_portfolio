import { useState, useMemo } from "react";
import { Search, Filter, ExternalLink, Code } from "lucide-react";
import { projectsData } from "../data/projects";

export const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projectsData.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return Array.from(tags).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => project.tags.includes(tag));
      const matchesType =
        selectedType === "all" || project.type === selectedType;
      return matchesSearch && matchesTags && matchesType;
    });
  }, [searchQuery, selectedTags, selectedType]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <section id="projects" className="container mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center mb-4">Featured Projects</h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
        Production-grade applications demonstrating technical expertise.
      </p>

      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex gap-4 mb-4">
          <div className="flex-1 relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-6 py-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center gap-2"
          >
            <Filter size={20} /> Filters
          </button>
        </div>

        {showFilters && (
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Project Type
              </label>
              <div className="flex flex-wrap gap-2">
                {["all", "professional", "personal", "open-source"].map(
                  (type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`px-4 py-2 rounded-lg ${
                        selectedType === type
                          ? "bg-indigo-600 text-white"
                          : "bg-white dark:bg-gray-700"
                      }`}
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                  )
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Technologies
              </label>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-3 py-1 rounded-full text-sm ${
                      selectedTags.includes(tag)
                        ? "bg-indigo-600 text-white"
                        : "bg-white dark:bg-gray-700"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <div className="flex justify-between mb-3">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <span className="text-xs px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 rounded">
                  {project.year}
                </span>
              </div>

              <div className="space-y-3 mb-4 text-sm">
                <div>
                  <span className="font-semibold">Problem:</span>
                  <p className="text-gray-600 dark:text-gray-400">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <span className="font-semibold">Solution:</span>
                  <p className="text-gray-600 dark:text-gray-400">
                    {project.solution}
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-green-600">Impact:</span>
                  <p className="text-gray-600 dark:text-gray-400">
                    {project.impact}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 text-xs text-gray-600 dark:text-gray-400 mb-4 pb-4 border-b">
                <span>Lighthouse: {project.metrics.lighthouse}</span>
                <span>Coverage: {project.metrics.coverage}%</span>
                <span>Size: {project.metrics.bundleSize}</span>
              </div>

              <div className="flex gap-3">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center justify-center gap-2 text-sm font-medium"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700 flex items-center justify-center gap-2 text-sm font-medium"
                  >
                    <Code size={16} /> Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
