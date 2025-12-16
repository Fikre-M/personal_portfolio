import {
  Mail,
  Linkedin,
  Github,
  Phone,
  Calendar,
  Download,
  Rocket,
} from "lucide-react";

export const Contact = () => (
  <section id="contact" className="bg-gray-50 dark:bg-gray-800 py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-4">
        Let's Work Together
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
        Open to new opportunities. Reach out via email or social platforms.
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="space-y-4">
          <a
            href="mailto:john.doe@example.com"
            className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg hover:shadow-md transition-shadow"
          >
            <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
              <Mail className="text-indigo-600" size={24} />
            </div>
            <div>
              <div className="font-medium">Email</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                john.doe@example.com
              </div>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/johndoe"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg hover:shadow-md transition-shadow"
          >
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <Linkedin className="text-blue-600" size={24} />
            </div>
            <div>
              <div className="font-medium">LinkedIn</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                /in/johndoe
              </div>
            </div>
          </a>

          <a
            href="https://github.com/johndoe"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg hover:shadow-md transition-shadow"
          >
            <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <Github className="text-gray-900 dark:text-white" size={24} />
            </div>
            <div>
              <div className="font-medium">GitHub</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                /johndoe
              </div>
            </div>
          </a>

          <a
            href="tel:+1234567890"
            className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg hover:shadow-md transition-shadow"
          >
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
              <Phone className="text-green-600" size={24} />
            </div>
            <div>
              <div className="font-medium">Phone</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                +1 (234) 567-890
              </div>
            </div>
          </a>
          <div>
            <a
              href="/resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <Download className="text-blue-600" size={24} />
              </div>
              <div>
                <div className="font-medium">Resume</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Download my resume (PDF)
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Quick Message</h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
            />
            <button className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center justify-center gap-2">
              <Rocket size={20} /> Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);
