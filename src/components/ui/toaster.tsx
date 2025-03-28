// 📄 src/components/Toaster.tsx

"use client";

import { Toaster as SonnerToaster, toast } from "sonner";
import { Alert } from "react-bootstrap";

// 💡 Tam uyumlu, canlıya hazır toast component
export function Toaster() {
  return (
    <SonnerToaster
      position="top-right"
      richColors
      toastOptions={{
        // Genel stil
        style: {
          fontSize: "0.875rem",
          fontFamily: "Inter, sans-serif",
          borderRadius: "0.5rem",
        },
        // Mesaj yapısı
        render: (message) => (
          <Alert variant="success" className="mb-2 py-2 px-3 fw-medium shadow-sm">
            {message}
          </Alert>
        ),
      }}
    />
  );
}

// ⚡ toast fonksiyonunu dışa aktar (isteğe bağlı global import için)
export { toast };
