import express from "express";
import cors from "cors";
import multer from "multer";
import { Resend } from "resend";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Load environment variables
dotenv.config();

// ES Module __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Middleware
app.use(cors());
app.use(express.json());

// Configure multer for file uploads (store in memory)
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB max per file
  },
});

// Serve static files from Vite build in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../dist")));
}

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "codi-api-frontend-server" });
});

// Enrollment email endpoint
app.post(
  "/api/enrollment",
  upload.fields([
    { name: "ine", maxCount: 1 },
    { name: "constanciaFiscal", maxCount: 1 },
    { name: "comprobanteDomicilio", maxCount: 1 },
    { name: "caratulaBancaria", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const {
        userType,
        nombre,
        razonSocial,
        rfc,
        representanteLegal,
        email,
        celular,
        webhookUrl,
        websiteUrl,
        fixedIp,
      } = req.body;

      // Build email content
      const isPersonal = userType === "fisica";

      const emailHtml = `
      <h2>Nueva Solicitud de Registro CoDi API</h2>

      <h3>Tipo de Usuario</h3>
      <p><strong>${isPersonal ? "Persona Física" : "Persona Moral"}</strong></p>

      <h3>Información de Contacto</h3>
      <ul>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Celular:</strong> ${celular}</li>
      </ul>

      ${
        isPersonal
          ? `
        <h3>Información Personal</h3>
        <ul>
          <li><strong>Nombre:</strong> ${nombre || "N/A"}</li>
        </ul>
      `
          : `
        <h3>Información de la Empresa</h3>
        <ul>
          <li><strong>Razón Social:</strong> ${razonSocial || "N/A"}</li>
          <li><strong>RFC:</strong> ${rfc || "N/A"}</li>
          <li><strong>Representante Legal:</strong> ${
            representanteLegal || "N/A"
          }</li>
        </ul>
      `
      }

      ${
        webhookUrl || websiteUrl || fixedIp
          ? `
        <h3>Información Adicional</h3>
        <ul>
          ${
            webhookUrl
              ? `<li><strong>Webhook URL:</strong> ${webhookUrl}</li>`
              : ""
          }
          ${
            websiteUrl
              ? `<li><strong>Sitio Web:</strong> ${websiteUrl}</li>`
              : ""
          }
          ${fixedIp ? `<li><strong>IP Fija:</strong> ${fixedIp}</li>` : ""}
        </ul>
      `
          : ""
      }

      <h3>Documentos Adjuntos</h3>
      <p>Se adjuntan ${
        Object.keys(req.files || {}).length
      } documento(s) a este correo.</p>

      <hr>
      <p style="color: #666; font-size: 12px;">
        Este correo fue generado automáticamente desde el formulario de registro en CoDi API.
      </p>
    `;

      // Prepare attachments
      const attachments = [];
      if (req.files) {
        for (const [fieldName, fileArray] of Object.entries(req.files)) {
          if (fileArray && fileArray[0]) {
            const file = fileArray[0];
            attachments.push({
              filename: file.originalname,
              content: file.buffer,
            });
          }
        }
      }

      // Generate date in YY-MM-DD format
      const now = new Date();
      const year = now.getFullYear().toString().slice(-2);
      const month = (now.getMonth() + 1).toString().padStart(2, "0");
      const day = now.getDate().toString().padStart(2, "0");
      const dateStr = `${year}-${month}-${day}`;

      // Send email via Resend
      const result = await resend.emails.send({
        from: "CoDi API Registros <onboarding@resend.dev>",
        to: "pablo.cruz@bite-size.mx",
        subject: `Registro de CoDi API - Nueva Solicitud ${dateStr}`,
        html: emailHtml,
        attachments,
      });

      console.log("Email sent successfully:", result);

      res.json({
        success: true,
        message:
          "Registro enviado exitosamente. Recibirá un correo de confirmación con los siguientes pasos.",
        emailId: result.data?.id,
      });
    } catch (error) {
      console.error("Error sending enrollment email:", error);

      res.status(500).json({
        error: "Error al enviar el registro",
        message: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }
);

// Serve index.html for all other routes (SPA support) in production
if (process.env.NODE_ENV === "production") {
  app.use((req, res) => {
    res.sendFile(path.join(__dirname, "../dist/index.html"));
  });
}

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(
    `📧 Email service: ${
      process.env.RESEND_API_KEY ? "Configured" : "NOT CONFIGURED"
    }`
  );
  console.log(`🌍 Environment: ${process.env.NODE_ENV || "development"}`);
});
