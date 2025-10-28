import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <img
                src="/LOGO FINAL BLUM octubre 25.png"
                alt="floristería"
                className="h-20 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Flores frescas y arreglos personalizados para cada ocasión especial.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/blum.floristeria"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-lg hover:bg-rose-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/blumfloristeria"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-lg hover:bg-rose-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com/@blumfloristeria"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-lg hover:bg-rose-600 transition-colors"
                aria-label="TikTok"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#catalogo" className="hover:text-rose-400 transition-colors">
                  Catálogo
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-rose-400 transition-colors">
                  Beneficios
                </a>
              </li>
              <li>
                <a href="#testimonios" className="hover:text-rose-400 transition-colors">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#ubicacion" className="hover:text-rose-400 transition-colors">
                  Ubicación
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-rose-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                <span>San Pablo, Heredia, Costa Rica</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                <a href="tel:+50683551919" className="hover:text-rose-400 transition-colors">
                  +506 8355-1919
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@blumfloristeria.com" className="hover:text-rose-400 transition-colors">
                  info@blumfloristeria.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Horario</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <strong className="text-white">Lunes:</strong> Cerrado
              </li>
              <li>
                <strong className="text-white">Martes a Viernes:</strong> 10:00 AM - 5:30 PM
              </li>
              <li>
                <strong className="text-white">Sábado y Domingo:</strong> 10:00 AM - 2:00 PM
              </li>
              <li className="text-xs text-gray-400 mt-2">
                Días feriados: Consultar con tienda
              </li>
            </ul>
            <a
              href="https://wa.me/50683551919"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-rose-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-rose-700 transition-colors"
            >
              Ordenar por WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>
              © {currentYear} floristería. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#privacidad" className="hover:text-rose-400 transition-colors">
                Política de Privacidad
              </a>
              <a href="#terminos" className="hover:text-rose-400 transition-colors">
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
