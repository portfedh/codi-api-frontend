import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/layout/Container";
import UserTypeSelector from "../components/enrollment/UserTypeSelector";
import PersonalInfoForm from "../components/enrollment/PersonalInfoForm";
import CompanyInfoForm from "../components/enrollment/CompanyInfoForm";
import DocumentUploadForm from "../components/enrollment/DocumentUploadForm";
import { useToast } from "../hooks/useToast";
import { codiApi, getErrorMessage } from "../services/api";

type UserType = "fisica" | "moral" | null;

type FormData = {
  userType: UserType;
  nombre: string;
  email: string;
  celular: string;
  razonSocial?: string;
  rfc?: string;
  representanteLegal?: string;
  webhookUrl?: string;
  websiteUrl?: string;
  fixedIp?: string;
  documents: {
    ine: File | null;
    constanciaFiscal: File | null;
    comprobanteDomicilio: File | null;
    caratulaBancaria: File | null;
  };
};

export default function Enrollment() {
  const navigate = useNavigate();
  const { success, error } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    userType: null,
    nombre: "",
    email: "",
    celular: "",
    documents: {
      ine: null,
      constanciaFiscal: null,
      comprobanteDomicilio: null,
      caratulaBancaria: null,
    },
  });

  const handleUserTypeSelect = (type: UserType) => {
    setFormData({ ...formData, userType: type });
    setStep(2);
  };

  const handlePersonalInfoSubmit = (data: {
    nombre: string;
    email: string;
    celular: string;
    webhookUrl?: string;
    websiteUrl?: string;
    fixedIp?: string;
  }) => {
    setFormData({ ...formData, ...data });
    setStep(3);
  };

  const handleCompanyInfoSubmit = (data: {
    razonSocial: string;
    rfc: string;
    representanteLegal: string;
    email: string;
    celular: string;
    webhookUrl?: string;
    websiteUrl?: string;
    fixedIp?: string;
  }) => {
    setFormData({ ...formData, ...data });
    setStep(3);
  };

  const handleDocumentSubmit = async (documents: FormData["documents"]) => {
    const updatedFormData = { ...formData, documents };
    setFormData(updatedFormData);

    // Prepare enrollment submission data
    const enrollmentData = {
      userType: updatedFormData.userType!,
      email: updatedFormData.email,
      celular: updatedFormData.celular,
      nombre: updatedFormData.nombre,
      razonSocial: updatedFormData.razonSocial,
      rfc: updatedFormData.rfc,
      representanteLegal: updatedFormData.representanteLegal,
      webhookUrl: updatedFormData.webhookUrl,
      websiteUrl: updatedFormData.websiteUrl,
      fixedIp: updatedFormData.fixedIp,
      documents,
    };

    try {
      // Submit enrollment to backend API
      const response = await codiApi.submitEnrollment(enrollmentData);

      success(
        response.message ||
          "Registro enviado exitosamente. Recibirá un correo de confirmación con los siguientes pasos."
      );

      // Navigate to home or confirmation page
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      const errorMessage = getErrorMessage(err);
      error(
        `Error al enviar el registro: ${errorMessage}. Por favor intente de nuevo.`
      );
      console.error("Enrollment submission error:", err);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const getStepTitle = () => {
    if (step === 1) return "Tipo de Usuario";
    if (step === 2) return "Información Personal";
    if (step === 3) return "Documentos Requeridos";
    return "";
  };

  const getStepDescription = () => {
    if (step === 1) return "Seleccione el tipo de registro que desea realizar";
    if (step === 2) {
      return formData.userType === "fisica"
        ? "Complete sus datos personales"
        : "Complete los datos de su empresa";
    }
    if (step === 3)
      return "Cargue los documentos necesarios para completar su registro";
    return "";
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Container>
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl">
              Registro CoDi API
            </h1>
            <p className="text-gray-600">
              Complete el formulario para registrarse en nuestro servicio de API
              CoDi gratuito
            </p>
            <p>
              El tiempo de respuesta de Banxico es de aproximadamente 7 días.
            </p>
          </div>

          {/* Form Card */}
          <div className="rounded-lg bg-white p-6 shadow-lg md:p-8">
            {/* Progress Indicator */}
            <div className="mb-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex gap-2">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={`h-2 w-12 rounded-full transition-colors ${
                        s <= step ? "bg-primary-600" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">Paso {step} de 3</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold text-gray-900">
                {getStepTitle()}
              </h2>
              <p className="text-gray-600">{getStepDescription()}</p>
            </div>

            {/* Form Steps */}
            <div className="overflow-hidden">
              {step === 1 && (
                <UserTypeSelector onSelect={handleUserTypeSelect} />
              )}

              {step === 2 && formData.userType === "fisica" && (
                <PersonalInfoForm
                  initialData={{
                    nombre: formData.nombre,
                    email: formData.email,
                    celular: formData.celular,
                    webhookUrl: formData.webhookUrl,
                    websiteUrl: formData.websiteUrl,
                    fixedIp: formData.fixedIp,
                  }}
                  onSubmit={handlePersonalInfoSubmit}
                  onBack={handleBack}
                />
              )}

              {step === 2 && formData.userType === "moral" && (
                <CompanyInfoForm
                  initialData={{
                    razonSocial: formData.razonSocial || "",
                    rfc: formData.rfc || "",
                    representanteLegal: formData.representanteLegal || "",
                    email: formData.email,
                    celular: formData.celular,
                    webhookUrl: formData.webhookUrl,
                    websiteUrl: formData.websiteUrl,
                    fixedIp: formData.fixedIp,
                  }}
                  onSubmit={handleCompanyInfoSubmit}
                  onBack={handleBack}
                />
              )}

              {step === 3 && (
                <DocumentUploadForm
                  userType={formData.userType!}
                  initialDocuments={formData.documents}
                  onSubmit={handleDocumentSubmit}
                  onBack={handleBack}
                />
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
