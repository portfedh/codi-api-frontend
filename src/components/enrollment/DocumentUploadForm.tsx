import { useState } from 'react';

interface DocumentUploadFormProps {
  userType: 'fisica' | 'moral';
  initialDocuments: {
    ine: File | null;
    constanciaFiscal: File | null;
    comprobanteDomicilio: File | null;
    caratulaBancaria: File | null;
  };
  onSubmit: (documents: {
    ine: File | null;
    constanciaFiscal: File | null;
    comprobanteDomicilio: File | null;
    caratulaBancaria: File | null;
  }) => void;
  onBack: () => void;
}

type DocumentKey =
  | 'ine'
  | 'constanciaFiscal'
  | 'comprobanteDomicilio'
  | 'caratulaBancaria';

export default function DocumentUploadForm({
  userType,
  initialDocuments,
  onSubmit,
  onBack,
}: DocumentUploadFormProps) {
  const [documents, setDocuments] = useState(initialDocuments);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const documentLabels: Record<
    DocumentKey,
    { title: string; description: string }
  > = {
    ine: {
      title:
        userType === 'fisica'
          ? 'INE/IFE'
          : 'INE/IFE del Representante Legal',
      description: 'Identificación oficial vigente (ambos lados)',
    },
    constanciaFiscal: {
      title: 'Constancia de Situación Fiscal',
      description: 'Documento emitido por el SAT (no mayor a 3 meses)',
    },
    comprobanteDomicilio: {
      title: 'Comprobante de Domicilio',
      description: 'Recibo de luz, agua o teléfono (no mayor a 3 meses)',
    },
    caratulaBancaria: {
      title: 'Carátula Bancaria',
      description:
        userType === 'fisica'
          ? 'Estado de cuenta o carátula con CLABE interbancaria (los montos pueden estar cubiertos o tachados). El nombre en la cuenta debe coincidir con el nombre de la persona que envía la documentación.'
          : 'Estado de cuenta o carátula con CLABE interbancaria (los montos pueden estar cubiertos o tachados). La cuenta debe estar a nombre de la empresa.',
    },
  };

  const handleFileSelect = (key: DocumentKey, file: File | null) => {
    if (file) {
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors({ ...errors, [key]: 'El archivo no debe superar 5MB' });
        return;
      }

      // Validate file type
      const validTypes = [
        'application/pdf',
        'image/jpeg',
        'image/jpg',
        'image/png',
      ];
      if (!validTypes.includes(file.type)) {
        setErrors({
          ...errors,
          [key]: 'Solo se permiten archivos PDF, JPG o PNG',
        });
        return;
      }

      setErrors({ ...errors, [key]: '' });
    }

    setDocuments({ ...documents, [key]: file });
  };

  const handleRemoveFile = (key: DocumentKey) => {
    setDocuments({ ...documents, [key]: null });
    setErrors({ ...errors, [key]: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};

    // Validate all required documents
    Object.keys(documentLabels).forEach((key) => {
      if (!documents[key as DocumentKey]) {
        newErrors[key] = 'Este documento es requerido';
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onSubmit(documents);
    }
  };

  const formatFileSize = (bytes: number) => {
    return (bytes / 1024).toFixed(1);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        {(Object.keys(documentLabels) as DocumentKey[]).map((key) => (
          <div key={key} className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              {documentLabels[key].title} <span className="text-red-600">*</span>
            </label>
            <p className="text-sm text-gray-500">
              {documentLabels[key].description}
            </p>

            {!documents[key] ? (
              <div
                className={`rounded-lg border-2 border-dashed transition-colors hover:border-primary-600 ${
                  errors[key] ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <label
                  htmlFor={key}
                  className="flex cursor-pointer flex-col items-center justify-center gap-2 p-6 text-center"
                >
                  <div className="rounded-full bg-gray-100 p-3">
                    <svg
                      className="h-6 w-6 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Haga clic para cargar o arrastre el archivo
                    </p>
                    <p className="text-xs text-gray-500">
                      PDF, JPG o PNG (máx. 5MB)
                    </p>
                  </div>
                  <input
                    id={key}
                    type="file"
                    className="hidden"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => {
                      const file = e.target.files?.[0] || null;
                      handleFileSelect(key, file);
                    }}
                  />
                </label>
              </div>
            ) : (
              <div className="rounded-lg border border-green-200 bg-green-50">
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-green-100 p-2">
                      <svg
                        className="h-5 w-5 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {documents[key]!.name}
                      </p>
                      <p className="text-xs text-gray-600">
                        {formatFileSize(documents[key]!.size)} KB
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="h-5 w-5 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <button
                      type="button"
                      onClick={() => handleRemoveFile(key)}
                      className="rounded p-1 hover:bg-gray-200"
                    >
                      <svg
                        className="h-4 w-4 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {errors[key] && (
              <p className="text-sm text-red-600">{errors[key]}</p>
            )}
          </div>
        ))}
      </div>

      {/* Info Note */}
      <div className="rounded-lg bg-blue-50 p-4">
        <p className="text-sm text-blue-900">
          <strong className="font-semibold">Nota:</strong> Todos los
          documentos son obligatorios. Asegúrese de que sean legibles y estén
          vigentes. Los archivos deben ser menores a 5MB en formato PDF, JPG o
          PNG.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 pt-2">
        <button
          type="button"
          onClick={onBack}
          className="flex flex-1 items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Atrás
        </button>
        <button
          type="submit"
          className="flex flex-1 items-center justify-center gap-2 rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          Enviar Registro
        </button>
      </div>
    </form>
  );
}
