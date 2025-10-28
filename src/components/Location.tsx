import { MapPin, Navigation } from 'lucide-react';

export default function Location() {
  const address = 'San Pablo, Heredia, Costa Rica';
  const lat = 10.0161;
  const lng = -84.1048;

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
  const wazeUrl = `https://waze.com/ul?ll=${lat},${lng}&navigate=yes`;

  return (
    <section id="ubicacion" className="py-16" style={{ backgroundColor: '#ffddd1' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Visítanos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            San Pablo, Heredia, 75 este de repuestos La Guacamaya, local a mano izquierda contiguo a Panaderia La Selecta. Contamos con Parqueo
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-8 border border-rose-100">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full mb-6 shadow-lg">
                <MapPin className="w-7 h-7 text-rose-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                blum floristería
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {address}
              </p>

              <div className="space-y-3">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-all border border-gray-200 shadow-sm hover:shadow-md"
                  style={{ backgroundColor: '#ffddd1' }}
                >
                  <MapPin className="w-5 h-5 text-rose-600" />
                  Abrir en Google Maps
                </a>
                <a
                  href={wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#33CCFF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2DB8E6] transition-all shadow-sm hover:shadow-md"
                >
                  <Navigation className="w-5 h-5" />
                  Abrir en Waze
                </a>
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl p-8 border border-gray-200">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Horario de atención
              </h4>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-medium">Lunes</span>
                  <span>Cerrado</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-medium">Martes - Viernes</span>
                  <span>10:00 AM - 5:30 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-medium">Sábado - Domingo</span>
                  <span>10:00 AM - 2:00 PM</span>
                </div>
              </div>

              <div className="mt-6 rounded-lg p-6 border border-gray-200 text-center" style={{ backgroundColor: '#ffddd1' }}>
                <p className="text-xl font-bold text-gray-900 mb-4">
                  Contacto directo:
                </p>
                <a
                  href="https://wa.me/50683551919"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 font-bold text-2xl transition-all"
                  style={{ color: '#a855f7' }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="inline-block"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  +506 8355-1919
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-xl border border-gray-200">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15716.0!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDAwJzU4LjAiTiA4NMKwMDYnMTcuMyJX!5e0!3m2!1sen!2scr!4v1234567890123!5m2!1sen!2scr`}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de blum floristería"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
