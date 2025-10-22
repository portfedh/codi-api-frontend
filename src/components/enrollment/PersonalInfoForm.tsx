import { useState } from 'react';

interface PersonalInfoFormProps {
  initialData: {
    nombre: string;
    email: string;
    celular: string;
  };
  onSubmit: (data: { nombre: string; email: string; celular: string }) => void;
  onBack: () => void;
}

export default function PersonalInfoForm({
  initialData,
  onSubmit,
  onBack,
}: PersonalInfoFormProps) {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateNombre = (value: string) => {
    if (!value.trim()) {
      return 'El nombre es requerido';
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
      if (field === 'nombre') error = validateNombre(value);
      if (field === 'email') error = validateEmail(value);
      if (field === 'celular') error = validateCelular(value);

      setErrors({ ...errors, [field]: error });
    }
  };

  const handleBlur = (field: string) => {
    setTouched({ ...touched, [field]: true });

    let error = '';
    if (field === 'nombre') error = validateNombre(formData.nombre);
    if (field === 'email') error = validateEmail(formData.email);
    if (field === 'celular') error = validateCelular(formData.celular);

    setErrors({ ...errors, [field]: error });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nombreError = validateNombre(formData.nombre);
    const emailError = validateEmail(formData.email);
    const celularError = validateCelular(formData.celular);

    const newErrors = {
      nombre: nombreError,
      email: emailError,
      celular: celularError,
    };

    setErrors(newErrors);
    setTouched({ nombre: true, email: true, celular: true });

    if (!nombreError && !emailError && !celularError) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        {/* Nombre Completo */}
        <div className="space-y-2">
          <label
            htmlFor="nombre"
            className="block text-sm font-medium text-gray-700"
          >
            Nombre Completo <span className="text-red-600">*</span>
          </label>
          <input
            id="nombre"
            type="text"
            value={formData.nombre}
            onChange={(e) => handleChange('nombre', e.target.value)}
            onBlur={() => handleBlur('nombre')}
            placeholder="Ej: Juan Pérez García"
            className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 ${
              errors.nombre && touched.nombre
                ? 'border-red-500'
                : 'border-gray-300'
            }`}
          />
          {errors.nombre && touched.nombre && (
            <p className="text-sm text-red-600">{errors.nombre}</p>
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
            placeholder="correo@ejemplo.com"
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
