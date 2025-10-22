export default function OpenSourceSection() {
  const githubUrl =
    import.meta.env.VITE_GITHUB_REPO || "https://github.com/portfedh/codi-api";

  return (
    <section className="py-16 bg-gradient-to-br from-primary-50 to-purple-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Proyecto de Código Abierto
        </h2>

        <p className="text-xl text-gray-700 mb-8">
          CoDi API es un proyecto de código abierto bajo licencia Apache 2.0.
          <br />
          Revisable, auditable y extensible por la comunidad.
        </p>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 shadow-sm">
            <svg
              className="w-5 h-5 text-green-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm font-medium text-gray-700">
              Apache 2.0 License
            </span>
          </span>

          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 shadow-sm">
            <svg
              className="w-5 h-5 text-blue-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
            <span className="text-sm font-medium text-gray-700">
              Contribuciones Bienvenidas
            </span>
          </span>

          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 shadow-sm">
            <svg
              className="w-5 h-5 text-purple-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm font-medium text-gray-700">
              Documentación Completa
            </span>
          </span>
        </div>

        {/* GitHub Link */}
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
            />
          </svg>
          Ver en GitHub
        </a>

        <p className="mt-6 text-sm text-gray-600">
          Únete a la comunidad y ayuda a mejorar este proyecto
        </p>
      </div>
    </section>
  );
}
