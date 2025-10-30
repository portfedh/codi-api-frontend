import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X, Copy, Check, QrCode, Building2, CreditCard } from "lucide-react";
import { useApiKey } from "../../hooks/useApiKey";
import { copyToClipboard } from "../../utils/clipboard";
import { useToast } from "../../hooks/useToast";
import codiApi from "../../services/api";

interface SponsorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type PaymentTab = "codi" | "spei" | "stripe";

// Real API key for CoDi donations (Bite Size S.A. de C.V.)
const DONATION_API_KEY =
  "ee9b8605ffaa6682d8f6b8077d0ec485f433a06345409a99f6b99335af44fb9cedddec8ff9cef8edc5417cf8f9a691e976fab7a44fc23f63ec659a31daacc8b6";

// Bank account details - REPLACE WITH YOUR ACTUAL COMPANY ACCOUNT INFO
const BANK_DETAILS = {
  bankName: "BBVA México",
  cuenta: "0187189982",
  clabe: "012180001871899823",
  accountHolder: "Bite Size S.A. de C.V.",
  reference: "DONACION-CODI-API",
};

export default function SponsorModal({ isOpen, onClose }: SponsorModalProps) {
  const [activeTab, setActiveTab] = useState<PaymentTab>("codi");
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [donationAmount, setDonationAmount] = useState<string>("100");
  const [isLoadingStripe, setIsLoadingStripe] = useState<boolean>(false);
  const navigate = useNavigate();
  const { saveApiKey } = useApiKey();
  const { showToast } = useToast();

  if (!isOpen) return null;

  const handleCopy = async (text: string, field: string) => {
    const success = await copyToClipboard(text);
    if (success) {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    }
  };

  const handleTryCodiNow = () => {
    saveApiKey(DONATION_API_KEY);
    onClose();
    navigate("/playground");
  };

  const handleStripeCheckout = async () => {
    const amount = parseFloat(donationAmount);

    // Validate amount
    if (isNaN(amount) || amount < 10) {
      showToast("El monto mínimo es $10 MXN", "error");
      return;
    }

    setIsLoadingStripe(true);

    try {
      // Call backend to create Stripe checkout session
      const response = await codiApi.createStripeCheckout({
        amount,
        currency: "mxn",
        description: "Donación para CoDi API Project",
      });

      // Redirect to Stripe checkout page
      if (response.success && response.url) {
        window.location.href = response.url;
      } else {
        throw new Error("No se recibió URL de checkout");
      }
    } catch (error) {
      console.error("Stripe checkout error:", error);
      showToast("Error al procesar el pago. Intenta nuevamente.", "error");
      setIsLoadingStripe(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">
            Apoya este Proyecto
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200">
          <nav className="flex px-6" aria-label="Tabs">
            <button
              onClick={() => setActiveTab("codi")}
              className={`flex items-center gap-2 px-4 py-3 border-b-2 font-medium text-sm transition-colors ${
                activeTab === "codi"
                  ? "border-primary-600 text-primary-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <QrCode className="w-4 h-4" />
              CoDi (QR)
            </button>
            <button
              onClick={() => setActiveTab("spei")}
              className={`flex items-center gap-2 px-4 py-3 border-b-2 font-medium text-sm transition-colors ${
                activeTab === "spei"
                  ? "border-primary-600 text-primary-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <Building2 className="w-4 h-4" />
              SPEI
            </button>
            <button
              onClick={() => setActiveTab("stripe")}
              className={`flex items-center gap-2 px-4 py-3 border-b-2 font-medium text-sm transition-colors ${
                activeTab === "stripe"
                  ? "border-primary-600 text-primary-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <CreditCard className="w-4 h-4" />
              Tarjeta
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {/* CoDi Tab */}
          {activeTab === "codi" && (
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-900">
                  <strong>¡Dona usando CoDi y prueba el API!</strong> Esta es
                  una clave API real de <strong>Bite Size S.A. de C.V.</strong>,
                  patrocinador de este proyecto. Úsala en el playground para
                  generar un QR de donación real y probar el API al mismo
                  tiempo.
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => handleCopy(DONATION_API_KEY, "apiKey")}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors"
                >
                  {copiedField === "apiKey" ? (
                    <>
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-green-700">¡Clave Copiada!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-5 h-5" />
                      <span>1. Copiar Clave API</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleTryCodiNow}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                >
                  <QrCode className="w-5 h-5" />
                  <span>2. Ir al Playground</span>
                </button>
              </div>

              <p className="text-xs text-gray-500 text-center">
                La clave se guardará automáticamente. Podrás generar un QR de
                donación con el monto que desees y pagar con tu app bancaria.
              </p>
            </div>
          )}

          {/* SPEI Tab */}
          {activeTab === "spei" && (
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-sm text-green-900">
                  <strong>Transferencia bancaria directa.</strong> Los fondos se
                  destinan al mantenimiento y mejora del proyecto.
                </p>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Banco
                  </label>
                  <div className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-md">
                    <p className="text-sm font-semibold text-gray-900">
                      {BANK_DETAILS.bankName}
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Beneficiario
                  </label>
                  <div className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-md">
                    <p className="text-sm font-semibold text-gray-900">
                      {BANK_DETAILS.accountHolder}
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Numero de cuenta
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      readOnly
                      value={BANK_DETAILS.cuenta}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-sm font-mono"
                    />
                    <button
                      onClick={() => handleCopy(BANK_DETAILS.cuenta, "cuenta")}
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                    >
                      {copiedField === "cuenta" ? (
                        <Check className="w-5 h-5 text-green-600" />
                      ) : (
                        <Copy className="w-5 h-5 text-gray-600" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CLABE Interbancaria
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      readOnly
                      value={BANK_DETAILS.clabe}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-sm font-mono"
                    />
                    <button
                      onClick={() => handleCopy(BANK_DETAILS.clabe, "clabe")}
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                    >
                      {copiedField === "clabe" ? (
                        <Check className="w-5 h-5 text-green-600" />
                      ) : (
                        <Copy className="w-5 h-5 text-gray-600" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <p className="text-xs text-yellow-900">
                  <strong>Nota:</strong> Las transferencias SPEI pueden tardar
                  hasta 24 horas hábiles en reflejarse.
                </p>
              </div>
            </div>
          )}

          {/* Stripe Tab */}
          {activeTab === "stripe" && (
            <div className="space-y-4">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <p className="text-sm text-purple-900">
                  <strong>Pago seguro con tarjeta.</strong> Procesado por
                  Stripe. Acepta tarjetas de débito y crédito.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monto de Donación (MXN)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    $
                  </span>
                  <input
                    type="number"
                    min="10"
                    step="10"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="100"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Monto mínimo: $10 MXN
                </p>
              </div>

              {/* Preset amounts */}
              <div className="grid grid-cols-4 gap-2">
                {[50, 100, 250, 500].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setDonationAmount(amount.toString())}
                    className={`px-3 py-2 rounded-md border text-sm font-medium transition-colors ${
                      donationAmount === amount.toString()
                        ? "bg-primary-100 border-primary-600 text-primary-700"
                        : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>

              <button
                onClick={handleStripeCheckout}
                disabled={isLoadingStripe}
                className="w-full px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 disabled:bg-purple-400 disabled:cursor-not-allowed"
              >
                {isLoadingStripe ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Procesando...
                  </>
                ) : (
                  <>
                    <CreditCard className="w-5 h-5" />
                    Continuar al Pago
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                Procesado de forma segura por Stripe
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 px-6 py-4 bg-gray-50">
          <p className="text-sm text-gray-600 text-center">
            Todas las donaciones se destinan al desarrollo, mantenimiento y
            hosting del proyecto.
          </p>
        </div>
      </div>
    </div>
  );
}
