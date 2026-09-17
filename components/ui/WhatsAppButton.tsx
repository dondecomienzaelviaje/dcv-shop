"use client";

// Botón flotante de WhatsApp — visible en todas las páginas.
// Ajusta el mensaje predeterminado (WHATSAPP_MESSAGE) a tu gusto.

const WHATSAPP_NUMBER = "573136037290";
const WHATSAPP_MESSAGE = "Hola, tengo una pregunta sobre un producto";

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
      <div className="rounded-lg bg-neutral-900/95 px-3 py-2 text-right text-xs text-neutral-200 shadow-lg backdrop-blur-sm">
        <p className="font-semibold text-[#25D366]">
          Respondemos en menos de 1 h
        </p>
        <p className="text-neutral-400">
          Todos los dias, 6am-11pm
        </p>
      </div>

      <a
              
      href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribenos por WhatsApp - respondemos en menos de 1 hora, todos los dias de 6am a 11pm"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7 fill-white"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347z" />
          <path d="M12.05 2C6.578 2 2.13 6.447 2.13 11.92c0 1.837.494 3.63 1.433 5.198L2 22l5.006-1.541a9.9 9.9 0 0 0 5.044 1.371h.004c5.472 0 9.919-4.447 9.919-9.92C21.973 6.447 17.526 2 12.05 2Zm0 18.056a8.12 8.12 0 0 1-4.14-1.135l-.297-.176-3.028.933.943-2.982-.194-.306a8.13 8.13 0 0 1-1.24-4.37c0-4.487 3.652-8.138 8.146-8.138 2.175 0 4.219.847 5.756 2.386a8.09 8.09 0 0 1 2.386 5.759c0 4.487-3.652 8.03-8.332 8.03Z" />
        </svg>
      </a>
    </div>
  );
}