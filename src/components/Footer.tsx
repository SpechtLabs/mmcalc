import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-gray-400 dark:text-gray-500">
          Equivalent aperture is for depth of field comparison only, not exposure.
        </p>
        <nav className="flex items-center gap-4 text-xs text-gray-400 dark:text-gray-500">
          <Link to="/impressum" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            Impressum
          </Link>
          <Link to="/privacy" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  );
}
