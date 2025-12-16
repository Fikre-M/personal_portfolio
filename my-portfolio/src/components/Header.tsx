import { Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const Header = ({ theme, toggleTheme }: HeaderProps) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a
          href="#"
          className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
        >
          JD
        </a>

        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className="hover:text-indigo-600 transition-colors">
            About
          </a>
          <a
            href="#projects"
            className="hover:text-indigo-600 transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-indigo-600 transition-colors"
          >
            Contact
          </a>
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="md:hidden p-2"
        >
          {mobileMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileMenu && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#about" onClick={() => setMobileMenu(false)}>
              About
            </a>
            <a href="#projects" onClick={() => setMobileMenu(false)}>
              Projects
            </a>
            <a href="#contact" onClick={() => setMobileMenu(false)}>
              Contact
            </a>
            <button onClick={toggleTheme} className="flex items-center gap-2">
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
              <span>Toggle Theme</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
