import { useEffect, useState } from 'react';
import { supabase, type Product } from '../lib/supabase';
import { ShoppingCart } from 'lucide-react';

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('is_featured', true)
        .order('display_order');

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CR', {
      style: 'currency',
      currency: 'CRC',
      minimumFractionDigits: 0,
    }).format(price);
  };

  if (loading) {
    return (
      <section id="catalogo" className="py-16" style={{ backgroundColor: '#ffddd1' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="8" fill="#9333ea" />
                <g>
                  <ellipse cx="50" cy="30" rx="8" ry="15" fill="white" stroke="#9333ea" strokeWidth="2" />
                  <ellipse cx="70" cy="50" rx="15" ry="8" fill="white" stroke="#9333ea" strokeWidth="2" />
                  <ellipse cx="50" cy="70" rx="8" ry="15" fill="white" stroke="#9333ea" strokeWidth="2" />
                  <ellipse cx="30" cy="50" rx="15" ry="8" fill="white" stroke="#9333ea" strokeWidth="2" />
                  <ellipse cx="64" cy="36" rx="11" ry="11" fill="white" stroke="#9333ea" strokeWidth="2" transform="rotate(45 64 36)" />
                  <ellipse cx="64" cy="64" rx="11" ry="11" fill="white" stroke="#9333ea" strokeWidth="2" transform="rotate(-45 64 64)" />
                  <ellipse cx="36" cy="64" rx="11" ry="11" fill="white" stroke="#9333ea" strokeWidth="2" transform="rotate(45 36 64)" />
                  <ellipse cx="36" cy="36" rx="11" ry="11" fill="white" stroke="#9333ea" strokeWidth="2" transform="rotate(-45 36 36)" />
                </g>
              </svg>
              <h2 className="text-3xl md:text-4xl font-bold text-black transition-colors hover:text-purple-600 cursor-default">
                blum catálogo
              </h2>
              <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="8" fill="#9333ea" />
                <g>
                  <ellipse cx="50" cy="30" rx="8" ry="15" fill="white" stroke="#9333ea" strokeWidth="2" />
                  <ellipse cx="70" cy="50" rx="15" ry="8" fill="white" stroke="#9333ea" strokeWidth="2" />
                  <ellipse cx="50" cy="70" rx="8" ry="15" fill="white" stroke="#9333ea" strokeWidth="2" />
                  <ellipse cx="30" cy="50" rx="15" ry="8" fill="white" stroke="#9333ea" strokeWidth="2" />
                  <ellipse cx="64" cy="36" rx="11" ry="11" fill="white" stroke="#9333ea" strokeWidth="2" transform="rotate(45 64 36)" />
                  <ellipse cx="64" cy="64" rx="11" ry="11" fill="white" stroke="#9333ea" strokeWidth="2" transform="rotate(-45 64 64)" />
                  <ellipse cx="36" cy="64" rx="11" ry="11" fill="white" stroke="#9333ea" strokeWidth="2" transform="rotate(45 36 64)" />
                  <ellipse cx="36" cy="36" rx="11" ry="11" fill="white" stroke="#9333ea" strokeWidth="2" transform="rotate(-45 36 36)" />
                </g>
              </svg>
            </div>
            <p className="text-lg text-black font-bold max-w-2xl mx-auto">
              ¡Envíale flores de blum hoy!
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 aspect-square rounded-xl mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="catalogo" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="8" fill="#9333ea" />
              <g>
                <ellipse cx="50" cy="30" rx="8" ry="15" fill="white" stroke="#9333ea" strokeWidth="2" />
                <ellipse cx="70" cy="50" rx="15" ry="8" fill="white" stroke="#9333ea" strokeWidth="2" />
                <ellipse cx="50" cy="70" rx="8" ry="15" fill="white" stroke="#9333ea" strokeWidth="2" />
                <ellipse cx="30" cy="50" rx="15" ry="8" fill="white" stroke="#9333ea" strokeWidth="2" />
                <ellipse cx="64" cy="36" rx="11" ry="11" fill="white" stroke="#9333ea" strokeWidth="2" transform="rotate(45 64 36)" />
                <ellipse cx="64" cy="64" rx="11" ry="11" fill="white" stroke="#9333ea" strokeWidth="2" transform="rotate(-45 64 64)" />
                <ellipse cx="36" cy="64" rx="11" ry="11" fill="white" stroke="#9333ea" strokeWidth="2" transform="rotate(45 36 64)" />
                <ellipse cx="36" cy="36" rx="11" ry="11" fill="white" stroke="#9333ea" strokeWidth="2" transform="rotate(-45 36 36)" />
              </g>
            </svg>
            <h2 className="text-3xl md:text-4xl font-bold text-black transition-colors hover:text-purple-600 cursor-default">
              blum catálogo
            </h2>
            <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="8" fill="#9333ea" />
              <g>
                <ellipse cx="50" cy="30" rx="8" ry="15" fill="white" stroke="#9333ea" strokeWidth="2" />
                <ellipse cx="70" cy="50" rx="15" ry="8" fill="white" stroke="#9333ea" strokeWidth="2" />
                <ellipse cx="50" cy="70" rx="8" ry="15" fill="white" stroke="#9333ea" strokeWidth="2" />
                <ellipse cx="30" cy="50" rx="15" ry="8" fill="white" stroke="#9333ea" strokeWidth="2" />
                <ellipse cx="64" cy="36" rx="11" ry="11" fill="white" stroke="#9333ea" strokeWidth="2" transform="rotate(45 64 36)" />
                <ellipse cx="64" cy="64" rx="11" ry="11" fill="white" stroke="#9333ea" strokeWidth="2" transform="rotate(-45 64 64)" />
                <ellipse cx="36" cy="64" rx="11" ry="11" fill="white" stroke="#9333ea" strokeWidth="2" transform="rotate(45 36 64)" />
                <ellipse cx="36" cy="36" rx="11" ry="11" fill="white" stroke="#9333ea" strokeWidth="2" transform="rotate(-45 36 36)" />
              </g>
            </svg>
          </div>
          <p className="text-lg text-black font-bold max-w-2xl mx-auto">
            ¡Envíale flores de blum hoy!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group rounded-xl overflow-hidden border border-gray-100 hover:border-rose-200 transition-all hover:shadow-xl"
              style={{ backgroundColor: '#ffddd1' }}
            >
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-rose-600">
                    {formatPrice(product.price)}
                  </span>
                  <a
                    href={`https://wa.me/50683551919?text=Hola%20blum,%20quiero%20ordenar%20${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-rose-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-rose-700 transition-colors"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Comprar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://wa.me/50683551919?text=Hola%20blum,%20quiero%20ver%20más%20opciones"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-rose-600 px-8 py-4 rounded-lg text-base font-semibold transition-all border-2 border-rose-600"
            style={{ backgroundColor: '#ffddd1' }}
          >
            Ver más opciones
          </a>
        </div>
      </div>
    </section>
  );
}
