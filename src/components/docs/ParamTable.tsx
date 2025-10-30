interface Parameter {
  name: string;
  type: string;
  required: boolean;
  description: string;
  example?: string;
}

interface ParamTableProps {
  parameters: Parameter[];
  title?: string;
}

export default function ParamTable({ parameters, title = 'Parámetros' }: ParamTableProps) {
  return (
    <div className="my-6">
      <h4 className="text-lg font-semibold text-gray-900 mb-3">{title}</h4>

      {/* Desktop Table View */}
      <div className="hidden md:block bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nombre
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tipo
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Requerido
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Descripción
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {parameters.map((param) => (
                <tr key={param.name} className="hover:bg-gray-50">
                  <td className="px-4 py-3 whitespace-nowrap">
                    <code className="text-sm font-mono text-primary-600 bg-primary-50 px-2 py-1 rounded">
                      {param.name}
                    </code>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className="text-sm text-gray-600 font-mono">{param.type}</span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    {param.required ? (
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                        Sí
                      </span>
                    ) : (
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                        No
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <div className="text-sm text-gray-700">
                      {param.description}
                      {param.example && (
                        <div className="mt-1">
                          <span className="text-xs text-gray-500">Ejemplo: </span>
                          <code className="text-xs font-mono text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded">
                            {param.example}
                          </code>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-3">
        {parameters.map((param) => (
          <div key={param.name} className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex items-start justify-between mb-2">
              <code className="text-sm font-mono text-primary-600 bg-primary-50 px-2 py-1 rounded">
                {param.name}
              </code>
              {param.required ? (
                <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800 ml-2">
                  Requerido
                </span>
              ) : (
                <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800 ml-2">
                  Opcional
                </span>
              )}
            </div>
            <div className="text-xs text-gray-500 font-mono mb-2">
              Tipo: <span className="text-gray-700">{param.type}</span>
            </div>
            <div className="text-sm text-gray-700">
              {param.description}
            </div>
            {param.example && (
              <div className="mt-2 pt-2 border-t border-gray-100">
                <span className="text-xs text-gray-500">Ejemplo: </span>
                <code className="text-xs font-mono text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded">
                  {param.example}
                </code>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
