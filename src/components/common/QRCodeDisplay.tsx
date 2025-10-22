interface QRCodeDisplayProps {
  qrCode: string; // Base64 encoded PNG
}

export default function QRCodeDisplay({ qrCode }: QRCodeDisplayProps) {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = qrCode;
    link.download = `codi-qr-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
      <h4 className="text-md font-semibold text-gray-900 mb-4">Código QR Generado</h4>

      <div className="flex flex-col items-center">
        {/* QR Code Image */}
        <div className="bg-white p-4 rounded-lg border border-gray-300 shadow-sm">
          <img
            src={qrCode}
            alt="Código QR de pago CoDi"
            className="w-64 h-64 object-contain"
          />
        </div>

        {/* Download Button */}
        <button
          onClick={handleDownload}
          className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Descargar QR
        </button>

        <p className="mt-3 text-sm text-gray-500 text-center">
          El cliente puede escanear este código desde su app bancaria
        </p>
      </div>
    </div>
  );
}
