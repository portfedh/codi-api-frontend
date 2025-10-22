import { useState } from 'react';

interface CompanyInfoFormProps {
  initialData: {
    razonSocial: string;
    rfc: string;
    representanteLegal: string;
    email: string;
    celular: string;
  };
  onSubmit: (data: {
    razonSocial: string;
    rfc: string;
    representanteLegal: string;
    email: string;
    celular: string;
  }) => void;
  onBack: () => void;
}

export default function CompanyInfoForm({
  initialData,
  onSubmit,
  onBack,
}: CompanyInfoFormProps) {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateRazonSocial = (value: string) => {
    if (!value.trim()) {
      return 'La razón social es requerida';
    }
    if (value.trim().length < 3) {
      return 'La razón social debe tener al menos 3 caracteres';
    }
    return '';
  };

  const validateRFC = (value: string) => {
    if (!value.trim()) {
      return 'El RFC es requerido';
    }
    const rfcPattern = /^[A-ZÑ&]{3,4}\d{6}[A-Z0-9]{3}$/;
    if (!rfcPattern.test(value.toUpperCase())) {
      return 'Ingrese un RFC válido (ej: ABC123456XYZ)';
    }
    return '';
  };

  const validateRepresentante = (value: string) => {
    if (!value.trim()) {
      return 'El nombre del representante legal es requerido';
    }
    if (value.trim().length < 3) {
      return 'El nombre debe tener al menos 3 caracteres';
    }
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value)) {
      return 'El nombre solo puede contener letras';
    }
    return '';
  };

  const validateEmail = (value: string) => {
    if (!value.trim()) {
      return 'El correo electrónico es requerido';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return 'Ingrese un correo electrónico válido';
    }
    return '';
  };

  const validateCelular = (value: string) => {
    if (!value.trim()) {
      return 'El número de celular es requerido';
    }
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length !== 10) {
      return 'El celular debe tener 10 dígitos';
    }
    return '';
  };

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });

    if (touched[field]) {
      let error = '';
      if (field === 'razonSocial') error = validateRazonSocial(value);
      if (field === 'rfc') error = validateRFC(value);
      if (field === 'representanteLegal') error = validateRepresentante(value);
      if (field === 'email') error = validateEmail(value);
      if (field === 'celular') error = validateCelular(value);

      setErrors({ ...errors, [field]: error });
    }
  };

  const handleBlur = (field: string) => {
    setTouched({ ...touched, [field]: true });

    let error = '';
    if (field === 'razonSocial')
      error = validateRazonSocial(formData.razonSocial);
    if (field === 'rfc') error = validateRFC(formData.rfc);
    if (field === 'representanteLegal')
      error = validateRepresentante(formData.representanteLegal);
    if (field === 'email') error = validateEmail(formData.email);
    if (field === 'celular') error = validateCelular(formData.celular);

    setErrors({ ...errors, [field]: error });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      razonSocial: validateRazonSocial(formData.razonSocial),
      rfc: validateRFC(formData.rfc),
      representanteLegal: validateRepresentante(formData.representanteLegal),
      email: validateEmail(formData.email),
      celular: validateCelular(formData.celular),
    };

    setErrors(newErrors);
    setTouched({
      razonSocial: true,
      rfc: true,
      representanteLegal: true,
      email: true,
      celular: true,
    });

    if (Object.values(newErrors).every((error) => !error)) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        {/* Razón Social */}
        <div className="space-y-2">
          <label
            htmlFor="razonSocial"
            className="block text-sm font-medium text-gray-700"
          >
            Razón Social <span className="text-red-600">*</span>
          </label>
          <input
            id="razonSocial"
            type="text"
            value={formData.razonSocial}
            onChange={(e) => handleChange('razonSocial', e.target.value)}
            onBlur={() => handleBlur('razonSocial')}
            placeholder="Ej: Empresa Ejemplo S.A. de C.V."
            className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 ${
              errors.razonSocial && touched.razonSocial
                ? 'border-red-500'
                : 'border-gray-300'
            }`}
          />
          {errors.razonSocial && touched.razonSocial && (
            <p className="text-sm text-red-600">{errors.razonSocial}</p>
          )}
        </div>

        {/* RFC */}
        <div className="space-y-2">
          <label
            htmlFor="rfc"
            className="block text-sm font-medium text-gray-700"
          >
            RFC <span className="text-red-600">*</span>
          </label>
          <input
            id="rfc"
            type="text"
            value={formData.rfc}
            onChange={(e) =>
              handleChange('rfc', e.target.value.toUpperCase())
            }
            onBlur={() => handleBlur('rfc')}
            placeholder="ABC123456XYZ"
            maxLength={13}
            className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 ${
              errors.rfc && touched.rfc
                ? 'border-red-500'
                : 'border-gray-300'
            }`}
          />
          {errors.rfc && touched.rfc && (
            <p className="text-sm text-red-600">{errors.rfc}</p>
          )}
          <p className="text-sm text-gray-500">RFC de 12 o 13 caracteres</p>
        </div>

        {/* Representante Legal */}
        <div className="space-y-2">
          <label
            htmlFor="representanteLegal"
            className="block text-sm font-medium text-gray-700"
          >
            Representante Legal <span className="text-red-600">*</span>
          </label>
          <input
            id="representanteLegal"
            type="text"
            value={formData.representanteLegal}
            onChange={(e) =>
              handleChange('representanteLegal', e.target.value)
            }
            onBlur={() => handleBlur('representanteLegal')}
            placeholder="Ej: María González López"
            className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 ${
              errors.representanteLegal && touched.representanteLegal
                ? 'border-red-500'
                : 'border-gray-300'
            }`}
          />
          {errors.representanteLegal && touched.representanteLegal && (
            <p className="text-sm text-red-600">
              {errors.representanteLegal}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Correo Electrónico <span className="text-red-600">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            onBlur={() => handleBlur('email')}
            placeholder="correo@empresa.com"
            className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 ${
              errors.email && touched.email
                ? 'border-red-500'
                : 'border-gray-300'
            }`}
          />
          {errors.email && touched.email && (
            <p className="text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        {/* Celular */}
        <div className="space-y-2">
          <label
            htmlFor="celular"
            className="block text-sm font-medium text-gray-700"
          >
            Número de Celular <span className="text-red-600">*</span>
          </label>
          <input
            id="celular"
            type="tel"
            value={formData.celular}
            onChange={(e) => handleChange('celular', e.target.value)}
            onBlur={() => handleBlur('celular')}
            placeholder="5512345678"
            maxLength={10}
            className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 ${
              errors.celular && touched.celular
                ? 'border-red-500'
                : 'border-gray-300'
            }`}
          />
          {errors.celular && touched.celular && (
            <p className="text-sm text-red-600">{errors.celular}</p>
          )}
          <p className="text-sm text-gray-500">
            Ingrese 10 dígitos sin espacios ni guiones
          </p>
        </div>
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
          Continuar
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}
