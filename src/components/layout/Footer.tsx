import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import Container from "./Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const githubUrl =
    import.meta.env.VITE_GITHUB_REPO || "https://github.com/portfedh/codi-api";

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <Container>
        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">CoDi API</h3>
              <p className="text-sm text-gray-600">
                API para pagos digitales CoDi.
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Integrado con Banco de Mexico.
              </p>
              <p className="text-sm text-gray-500 mt-2">100% Código Abierto</p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-3">
                Enlaces
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/docs"
                    className="text-sm text-gray-600 hover:text-primary-600"
                  >
                    Documentación
                  </Link>
                </li>
                <li>
                  <Link
                    to="/playground"
                    className="text-sm text-gray-600 hover:text-primary-600"
                  >
                    Playground
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tools"
                    className="text-sm text-gray-600 hover:text-primary-600"
                  >
                    Herramientas
                  </Link>
                </li>
                <li>
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-primary-600"
                  >
                    Código Fuente
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-3">
                Contacto
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:contacto@bite-size.mx"
                    className="text-sm text-gray-600 hover:text-primary-600 inline-flex items-center"
                  >
                    <Mail className="w-4 h-4 mr-1" />
                    contacto@bite-size.mx
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              © {currentYear} CoDi API. Licencia Apache 2.0.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
