import { Copy } from "lucide-react";
import { useToast } from "../../hooks/useToast";
import { copyToClipboard } from "../../utils/clipboard";

interface QRCodeDisplayProps {
  qrCode: string; // Base64 encoded PNG
  idc?: string; // IDC value (optional folio)
}

export default function QRCodeDisplay({ qrCode, idc }: QRCodeDisplayProps) {
  const { success: showSuccess } = useToast();
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = qrCode;
    link.download = `codi-qr-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyIdc = async (idcValue: string) => {
    const success = await copyToClipboard(idcValue);
    if (success) {
      showSuccess("IDC copiado al portapapeles");
    }
  };

  return (
    <div className="bg-white border-2 border-gray-200 rounded-lg p-4 sm:p-6">
      <h4 className="text-base sm:text-md font-semibold text-gray-900 mb-4">
        Código QR Generado
      </h4>

      <div className="flex flex-col items-center">
        {/* QR Code Image */}
        <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-300 shadow-sm">
          <img
            src={qrCode}
            alt="Código QR de pago CoDi"
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-contain"
          />
        </div>

        {/* Download Button */}
        <button
          onClick={handleDownload}
          className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white text-sm sm:text-base rounded-lg hover:bg-primary-700 transition-colors w-full sm:w-auto justify-center"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Descargar QR
        </button>

        <p className="mt-3 text-xs sm:text-sm text-gray-500 text-center px-2">
          El cliente puede escanear este código desde su app bancaria
        </p>

        {/* IDC Information */}
        {idc && (
          <div className="mt-4 w-full max-w-md p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="space-y-2">
              <div className="flex items-center gap-2 flex-wrap justify-center">
                <span className="text-sm font-semibold text-blue-900">
                  Folio IDC:
                </span>
                <code className="bg-blue-100 px-2 py-1 rounded text-sm font-mono text-blue-900">
                  {idc}
                </code>
                <button
                  onClick={() => handleCopyIdc(idc)}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-blue-700 bg-blue-100 hover:bg-blue-200 rounded-md transition-colors"
                  title="Copiar IDC"
                >
                  <Copy className="w-3.5 h-3.5" />
                  Copiar
                </button>
              </div>
              <p className="text-xs text-blue-700 text-center">
                <strong>💡 Nota:</strong> Puedes usar este Folio IDC en
                "Consulta Estado" una vez que el pago haya sido realizado.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
