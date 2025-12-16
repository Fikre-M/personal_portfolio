export const Skills = () => (
  <section className="bg-gray-50 dark:bg-gray-800 py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">
        Skills & Expertise
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div>
          <h3 className="font-bold text-lg mb-4 text-indigo-600">
            Core Technologies
          </h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li>• React / Next.js</li>
            <li>• TypeScript / JavaScript</li>
            <li>• State Management</li>
            <li>• Performance Optimization</li>
            <li>• Web Accessibility</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4 text-indigo-600">
            Tools & Workflow
          </h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li>• Git / GitHub</li>
            <li>• CI/CD</li>
            <li>• Testing</li>
            <li>• Vite / Webpack</li>
            <li>• Cloud Platforms</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4 text-indigo-600">
            Soft Skills
          </h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li>• Technical Writing</li>
            <li>• Code Reviews</li>
            <li>• Agile / Scrum</li>
            <li>• Collaboration</li>
            <li>• API Design</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);
