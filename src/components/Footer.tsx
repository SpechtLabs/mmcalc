import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 py-3 mt-auto">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-3">
        <nav className="flex items-center gap-4 text-xs text-gray-400 dark:text-gray-500">
          <Link
            to="/impressum"
            className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            Impressum
          </Link>
          <Link
            to="/privacy"
            className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            Terms of Service
          </Link>
        </nav>
        <details className="text-xs text-gray-400 dark:text-gray-500 w-full max-w-lg">
          <summary className="cursor-pointer text-center hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            Also available from the CLI
          </summary>
          <div className="mt-2 space-y-2 text-left">
            <p>
              Usage:&nbsp;
              <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-[11px] font-mono">
                curl
                mmcalc.com/&lt;sensor&gt;-&lt;focal_length&gt;-&lt;aperture&gt;
              </code>
            </p>
            <div className="space-y-1">
              <p className="font-medium text-gray-500 dark:text-gray-400">
                Examples:
              </p>
              <code className="block bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-[11px] font-mono select-all">
                curl mmcalc.com/gfx-80-1.7
              </code>
            </div>
            <div>
              <p className="font-medium text-gray-500 dark:text-gray-400 mb-1">
                Sensors:
              </p>
              <p className="text-[11px] leading-relaxed">
                <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded font-mono">
                  ff
                </code>{" "}
                <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded font-mono">
                  apsc
                </code>{" "}
                <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded font-mono">
                  apsc-canon
                </code>{" "}
                <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded font-mono">
                  apsh
                </code>{" "}
                <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded font-mono">
                  mft
                </code>{" "}
                <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded font-mono">
                  1inch
                </code>{" "}
                <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded font-mono">
                  gfx
                </code>{" "}
                <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded font-mono">
                  hasselblad
                </code>{" "}
                <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded font-mono">
                  phaseone
                </code>{" "}
                <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded font-mono">
                  pentax645d
                </code>{" "}
                <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded font-mono">
                  645
                </code>{" "}
                <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded font-mono">
                  6x6
                </code>{" "}
                <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded font-mono">
                  6x7
                </code>{" "}
                <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded font-mono">
                  6x9
                </code>{" "}
                <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded font-mono">
                  4x5
                </code>{" "}
                <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded font-mono">
                  8x10
                </code>
              </p>
            </div>
          </div>
        </details>
      </div>
    </footer>
  );
}
