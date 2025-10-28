import { MessageCircle, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => setShowTooltip(true), 500);
      setTimeout(() => setShowTooltip(false), 5000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = 'https://wa.me/50683551919?text=Hola%20blum,%20quiero%20ordenar%20un%20arreglo&utm_source=website&utm_medium=floating_button&utm_campaign=conversion';

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
        {showTooltip && (
          <div className="hidden sm:block bg-white px-4 py-3 rounded-lg shadow-xl border border-gray-200 max-w-[200px] animate-bounce">
            <p className="text-sm font-medium text-gray-900 mb-1">
              ¿Necesitas ayuda?
            </p>
            <p className="text-xs text-gray-600">
              Chatea con nosotros
            </p>
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 bg-gray-900 text-white rounded-full p-1 hover:bg-gray-700 transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        )}

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all hover:scale-110 flex items-center justify-center"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="w-7 h-7 group-hover:rotate-12 transition-transform" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
            1
          </span>
        </a>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce {
          animation: bounce 1s ease-in-out 3;
        }
      `}</style>
    </>
  );
}
