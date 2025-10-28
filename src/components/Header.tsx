import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-gray-100 transition-all duration-300" style={{ backgroundColor: 'rgba(255, 221, 209, 0.95)' }}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-8">
          <div className="flex items-center gap-2 flex-shrink-0">
            <img
              src="/LOGO FINAL BLUM octubre 25.png"
              alt="blum floristería"
              className="h-20 w-auto animate-heartbeat"
            />
          </div>

          <nav className="hidden md:flex items-center gap-4 flex-grow justify-center">
            <a href="#catalogo" className="text-xl font-bold text-black transition-colors hover:text-[#8B5FBF]">Catálogo</a>
            <a href="#beneficios" className="text-xl font-bold text-black transition-colors hover:text-[#8B5FBF]">Beneficios</a>
            <a href="#testimonios" className="text-xl font-bold text-black transition-colors hover:text-[#8B5FBF]">Testimonios</a>
            <a href="#ubicacion" className="text-xl font-bold text-black transition-colors hover:text-[#8B5FBF]">Ubicación</a>
            <a href="#faq" className="text-xl font-bold text-black transition-colors hover:text-[#8B5FBF]">FAQ</a>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="https://instagram.com/blum.floristeria"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
              aria-label="Instagram"
            >
              <svg className="w-[45px] h-[45px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="ig-gradient" cx="30%" cy="107%" r="150%">
                    <stop offset="0%" stopColor="#fdf497" />
                    <stop offset="5%" stopColor="#fdf497" />
                    <stop offset="45%" stopColor="#fd5949" />
                    <stop offset="60%" stopColor="#d6249f" />
                    <stop offset="90%" stopColor="#285AEB" />
                  </radialGradient>
                </defs>
                <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#ig-gradient)" />
                <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" fill="none" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
              </svg>
            </a>
            <a
              href="https://tiktok.com/@blum.floristeria"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
              aria-label="TikTok"
            >
              <svg className="w-[45px] h-[45px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="#000000"/>
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="#EE1D52"/>
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="#69C9D0"/>
              </svg>
            </a>
            <a
              href="https://facebook.com/blumfloristeria"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
              aria-label="Facebook"
            >
              <svg className="w-[45px] h-[45px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="#1877F2" />
                <path d="M15.5 15.5L16 12H12.5V9.75C12.5 8.8 13 8 14.25 8H16.1V4.95C16.1 4.95 14.95 4.75 13.85 4.75C11.55 4.75 10 6.15 10 9.45V12H6.75V15.5H10V23.85C10.65 23.95 11.3 24 12 24C12.7 24 13.35 23.95 14 23.85V15.5H15.5Z" fill="white" />
              </svg>
            </a>
            <a
              href="https://wa.me/50683551919?text=Hola%20blum,%20quiero%20ordenar%20un%20arreglo"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex bg-[#25D366] text-white px-3 py-2 rounded-lg hover:bg-[#20BA5A] transition-colors"
              aria-label="WhatsApp"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col gap-3">
              <a
                href="#catalogo"
                className="text-lg font-bold text-black hover:text-[#8B5FBF] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Catálogo
              </a>
              <a
                href="#beneficios"
                className="text-lg font-bold text-black hover:text-[#8B5FBF] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Beneficios
              </a>
              <a
                href="#testimonios"
                className="text-lg font-bold text-black hover:text-[#8B5FBF] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonios
              </a>
              <a
                href="#ubicacion"
                className="text-lg font-bold text-black hover:text-[#8B5FBF] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Ubicación
              </a>
              <a
                href="#faq"
                className="text-lg font-bold text-black hover:text-[#8B5FBF] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
