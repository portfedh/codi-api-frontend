type UserType = 'fisica' | 'moral';

interface UserTypeSelectorProps {
  onSelect: (type: UserType) => void;
}

export default function UserTypeSelector({ onSelect }: UserTypeSelectorProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Persona Física */}
      <button
        onClick={() => onSelect('fisica')}
        className="group relative overflow-hidden rounded-lg border-2 border-gray-200 bg-white p-6 text-left transition-all hover:border-primary-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
      >
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>

        <h3 className="mb-2 text-xl font-bold text-gray-900">
          Persona Física
        </h3>

        <p className="mb-4 text-sm text-gray-600">
          Registro individual para personas físicas con actividad empresarial
        </p>

        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex items-start gap-2">
            <span className="text-primary-600">•</span>
            <span>Identificación oficial (INE/IFE)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600">•</span>
            <span>Constancia de situación fiscal</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600">•</span>
            <span>Comprobante de domicilio</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600">•</span>
            <span>Carátula bancaria</span>
          </li>
        </ul>

        <div className="mt-4 flex items-center text-primary-600 font-medium">
          <span className="text-sm">Seleccionar</span>
          <svg
            className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </button>

      {/* Persona Moral */}
      <button
        onClick={() => onSelect('moral')}
        className="group relative overflow-hidden rounded-lg border-2 border-gray-200 bg-white p-6 text-left transition-all hover:border-primary-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
      >
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
        </div>

        <h3 className="mb-2 text-xl font-bold text-gray-900">
          Persona Moral
        </h3>

        <p className="mb-4 text-sm text-gray-600">
          Registro para empresas y personas morales con representante legal
        </p>

        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex items-start gap-2">
            <span className="text-primary-600">•</span>
            <span>Acta constitutiva</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600">•</span>
            <span>Identificación del representante</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600">•</span>
            <span>Constancia de situación fiscal</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600">•</span>
            <span>Comprobante de domicilio</span>
          </li>
        </ul>

        <div className="mt-4 flex items-center text-primary-600 font-medium">
          <span className="text-sm">Seleccionar</span>
          <svg
            className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </button>
    </div>
  );
}
