import { useState } from 'react';
import { MapPin, Store, Truck, Clock, Phone } from 'lucide-react';

export default function Delivery() {
  const [deliveryType, setDeliveryType] = useState<'pickup' | 'delivery'>('delivery');


  return (
    <section className="py-16 bg-gradient-to-b" style={{ background: 'linear-gradient(to bottom, #f5c5b8, #ffddd1)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Entrega y Retiro
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Elige la opción que mejor se ajuste a tus necesidades
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex gap-4 mb-8 p-2 rounded-xl border border-gray-200 max-w-md mx-auto" style={{ backgroundColor: '#ffddd1' }}>
            <button
              onClick={() => setDeliveryType('pickup')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold transition-all ${
                deliveryType === 'pickup'
                  ? 'text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
              style={deliveryType === 'pickup' ? { backgroundColor: '#9333ea' } : undefined}
            >
              <Store className="w-5 h-5" />
              Retiro en tienda
            </button>
            <button
              onClick={() => setDeliveryType('delivery')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold transition-all ${
                deliveryType === 'delivery'
                  ? 'text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
              style={deliveryType === 'delivery' ? { backgroundColor: '#9333ea' } : undefined}
            >
              <Truck className="w-5 h-5" />
              Envío
            </button>
          </div>

          {deliveryType === 'pickup' ? (
            <div className="rounded-xl p-8 border border-gray-100 shadow-lg text-center" style={{ backgroundColor: '#ffddd1' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ backgroundColor: 'rgba(147, 51, 234, 0.1)' }}>
                <Store className="w-8 h-8" style={{ color: '#9333ea' }} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Retira en nuestra tienda
              </h3>
              <p className="text-gray-600 mb-6">
                San Pablo, Heredia
              </p>
              <a
                href="https://wa.me/50683551919?text=Hola%20blum,%20quiero%20coordinar%20mi%20hora%20de%20retiro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-purple-600 text-black px-6 py-3 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-all shadow-md hover:shadow-lg"
              >
                <Phone className="w-6 h-6" />
                506 8355-1919
              </a>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto">
              <div className="rounded-xl p-8 border border-gray-100 shadow-lg" style={{ backgroundColor: '#ffddd1' }}>
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="bg-rose-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-rose-600" />
                  </div>
                  <div className="bg-rose-100 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-rose-600" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 text-center mb-6">
                  Coordina y cotiza el envío según tu ubicación y hora
                </h3>

                <a
                  href="https://wa.me/50683551919?text=Hola%20blum,%20quiero%20coordinar%20la%20entrega"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-purple-600 hover:bg-purple-700 text-black font-semibold py-4 px-6 rounded-lg transition-all shadow-md hover:shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  506 8355-1919
                </a>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
