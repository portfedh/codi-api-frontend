import { useState } from 'react';

interface PersonalInfoFormProps {
  initialData: {
    nombre: string;
    email: string;
    celular: string;
    webhookUrl?: string;
    websiteUrl?: string;
    fixedIp?: string;
  };
  onSubmit: (data: {
    nombre: string;
    email: string;
    celular: string;
    webhookUrl?: string;
    websiteUrl?: string;
    fixedIp?: string;
  }) => void;
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

  const validateWebhookUrl = (value: string) => {
    if (!value.trim()) {
      return ''; // Optional field
    }
    try {
      const url = new URL(value);
      if (!url.protocol.startsWith('http')) {
        return 'La URL debe comenzar con http:// o https://';
      }
    } catch {
      return 'Ingrese una URL válida (ej: https://ejemplo.com/webhook)';
    }
    return '';
  };

  const validateWebsiteUrl = (value: string) => {
    if (!value.trim()) {
      return ''; // Optional field
    }
    try {
      const url = new URL(value);
      if (!url.protocol.startsWith('http')) {
        return 'La URL debe comenzar con http:// o https://';
      }
    } catch {
      return 'Ingrese una URL válida (ej: https://ejemplo.com)';
    }
    return '';
  };

  const validateFixedIp = (value: string) => {
    if (!value.trim()) {
      return ''; // Optional field
    }
    const ipPattern = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if (!ipPattern.test(value)) {
      return 'Ingrese una dirección IP válida (ej: 192.168.1.1)';
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
      if (field === 'webhookUrl') error = validateWebhookUrl(value);
      if (field === 'websiteUrl') error = validateWebsiteUrl(value);
      if (field === 'fixedIp') error = validateFixedIp(value);

      setErrors({ ...errors, [field]: error });
    }
  };

  const handleBlur = (field: string) => {
    setTouched({ ...touched, [field]: true });

    let error = '';
    if (field === 'nombre') error = validateNombre(formData.nombre);
    if (field === 'email') error = validateEmail(formData.email);
    if (field === 'celular') error = validateCelular(formData.celular);
    if (field === 'webhookUrl') error = validateWebhookUrl(formData.webhookUrl || '');
    if (field === 'websiteUrl') error = validateWebsiteUrl(formData.websiteUrl || '');
    if (field === 'fixedIp') error = validateFixedIp(formData.fixedIp || '');

    setErrors({ ...errors, [field]: error });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nombreError = validateNombre(formData.nombre);
    const emailError = validateEmail(formData.email);
    const celularError = validateCelular(formData.celular);
    const webhookUrlError = validateWebhookUrl(formData.webhookUrl || '');
    const websiteUrlError = validateWebsiteUrl(formData.websiteUrl || '');
    const fixedIpError = validateFixedIp(formData.fixedIp || '');

    const newErrors = {
      nombre: nombreError,
      email: emailError,
      celular: celularError,
      webhookUrl: webhookUrlError,
      websiteUrl: websiteUrlError,
      fixedIp: fixedIpError,
    };

    setErrors(newErrors);
    setTouched({
      nombre: true,
      email: true,
      celular: true,
      webhookUrl: true,
      websiteUrl: true,
      fixedIp: true,
    });

    if (Object.values(newErrors).every((error) => !error)) {
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

        {/* Section Divider */}
        <div className="border-t border-gray-200 pt-4">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Configuración Técnica{" "}
            <span className="text-sm font-normal text-gray-500">(Opcional)</span>
          </h3>
        </div>

        {/* Webhook URL */}
        <div className="space-y-2">
          <label
            htmlFor="webhookUrl"
            className="block text-sm font-medium text-gray-700"
          >
            URL de Webhook
          </label>
          <input
            id="webhookUrl"
            type="url"
            value={formData.webhookUrl || ''}
            onChange={(e) => handleChange('webhookUrl', e.target.value)}
            onBlur={() => handleBlur('webhookUrl')}
            placeholder="https://ejemplo.com/webhook/codi"
            className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 ${
              errors.webhookUrl && touched.webhookUrl
                ? 'border-red-500'
                : 'border-gray-300'
            }`}
          />
          {errors.webhookUrl && touched.webhookUrl && (
            <p className="text-sm text-red-600">{errors.webhookUrl}</p>
          )}
          <p className="text-sm text-gray-500">
            URL para recibir notificaciones de transacciones
          </p>
        </div>

        {/* Website URL */}
        <div className="space-y-2">
          <label
            htmlFor="websiteUrl"
            className="block text-sm font-medium text-gray-700"
          >
            URL del Sitio Web
          </label>
          <input
            id="websiteUrl"
            type="url"
            value={formData.websiteUrl || ''}
            onChange={(e) => handleChange('websiteUrl', e.target.value)}
            onBlur={() => handleBlur('websiteUrl')}
            placeholder="https://ejemplo.com"
            className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 ${
              errors.websiteUrl && touched.websiteUrl
                ? 'border-red-500'
                : 'border-gray-300'
            }`}
          />
          {errors.websiteUrl && touched.websiteUrl && (
            <p className="text-sm text-red-600">{errors.websiteUrl}</p>
          )}
          <p className="text-sm text-gray-500">
            Sitio web donde se utilizará la API
          </p>
        </div>

        {/* Fixed IP */}
        <div className="space-y-2">
          <label
            htmlFor="fixedIp"
            className="block text-sm font-medium text-gray-700"
          >
            IP Fija del Servidor
          </label>
          <input
            id="fixedIp"
            type="text"
            value={formData.fixedIp || ''}
            onChange={(e) => handleChange('fixedIp', e.target.value)}
            onBlur={() => handleBlur('fixedIp')}
            placeholder="192.168.1.1"
            className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 ${
              errors.fixedIp && touched.fixedIp
                ? 'border-red-500'
                : 'border-gray-300'
            }`}
          />
          {errors.fixedIp && touched.fixedIp && (
            <p className="text-sm text-red-600">{errors.fixedIp}</p>
          )}
          <p className="text-sm text-gray-500">
            Dirección IP fija de su servidor
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
