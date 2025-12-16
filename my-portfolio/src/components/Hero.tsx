export const Hero = () => (
  <section id="about" className="container mx-auto px-4 py-20 md:py-32">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
        Senior Frontend Engineer
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
        Building high-performance, accessible web experiences with React,
        TypeScript, and modern web technologies.
      </p>
      <div className="flex flex-wrap gap-4 justify-center mb-12">
        <a
          href="#projects"
          className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors font-medium"
        >
          Contact Me
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
          <div className="text-3xl font-bold text-indigo-600 mb-2">6+</div>
          <div className="text-gray-600 dark:text-gray-400">
            Years Experience
          </div>
        </div>
        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
          <div className="text-3xl font-bold text-indigo-600 mb-2">50+</div>
          <div className="text-gray-600 dark:text-gray-400">
            Projects Shipped
          </div>
        </div>
        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
          <div className="text-3xl font-bold text-indigo-600 mb-2">95+</div>
          <div className="text-gray-600 dark:text-gray-400">
            Avg Lighthouse Score
          </div>
        </div>
      </div>
    </div>
  </section>
);
