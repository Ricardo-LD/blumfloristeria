import { Shield, Truck, MessageCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  return (
    <section className="relative pt-20 pb-16 md:pt-24 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50/80 -z-10" style={{ background: 'linear-gradient(to bottom, rgba(255, 228, 230, 0.8), #ffddd1, #ffddd1)' }}></div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight floating-hearts" style={{ color: '#8B5FBF' }}>
              <span>Flores con encanto</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl mx-auto md:mx-0 font-bold">
              ¡Con un blum bouquet serás inolvidable!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-10">
              <a
                href="https://wa.me/50683551919?text=Hola%20blum,%20quiero%20ordenar%20un%20arreglo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-[#20BA5A] transition-all shadow-lg shadow-green-600/30 hover:shadow-xl hover:shadow-green-600/40 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                Pedir por WhatsApp
              </a>
              <a
                href="#catalogo"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-xl font-bold transition-all border-2"
                style={{ backgroundColor: '#ffddd1', color: '#8B5FBF', borderColor: '#8B5FBF' }}
              >
                Ver catálogo
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto md:mx-0">
              <div className="relative">
                <button
                  onClick={() => setIsPaymentOpen(!isPaymentOpen)}
                  className="flex flex-col items-center gap-2 p-3 rounded-lg border-2 w-full transition-all hover:shadow-md"
                  style={{ backgroundColor: '#ffddd1', borderColor: '#8B5FBF' }}
                >
                  <Shield className="w-6 h-6" style={{ color: '#8B5FBF' }} />
                  <span className="text-base font-bold text-center" style={{ color: '#8B5FBF' }}>Pago en línea</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isPaymentOpen ? 'rotate-180' : ''}`} style={{ color: '#8B5FBF' }} />
                </button>
                {isPaymentOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 p-4 rounded-lg border-2 shadow-lg z-10" style={{ backgroundColor: '#ffddd1', borderColor: '#8B5FBF' }}>
                    <ul className="space-y-2">
                      <li className="text-sm font-semibold text-center" style={{ color: '#8B5FBF' }}>
                        • Sinpe Móvil
                      </li>
                      <li className="text-sm font-semibold text-center" style={{ color: '#8B5FBF' }}>
                        • Transferencia BAC
                      </li>
                      <li className="text-sm font-semibold text-center" style={{ color: '#8B5FBF' }}>
                        • Link de pago
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="flex flex-col items-center gap-2 p-3 rounded-lg border-2" style={{ backgroundColor: '#ffddd1', borderColor: '#8B5FBF' }}>
                <Truck className="w-6 h-6" style={{ color: '#8B5FBF' }} />
                <span className="text-base font-bold text-center" style={{ color: '#8B5FBF' }}>Servicio de envío</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-3 rounded-lg border-2" style={{ backgroundColor: '#ffddd1', borderColor: '#8B5FBF' }}>
                <MessageCircle className="w-6 h-6" style={{ color: '#8B5FBF' }} />
                <span className="text-base font-bold text-center" style={{ color: '#8B5FBF' }}>Atención personalizada</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square md:aspect-auto md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/Gemini_Generated_Image_hxlvd9hxlvd9hxlv copy.png"
                alt="Chica joven sonriendo con ramo de flores en tonos pastel"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 p-4 rounded-lg shadow-xl border border-gray-100" style={{ backgroundColor: '#ffddd1' }}>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-900">Entrega hoy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
