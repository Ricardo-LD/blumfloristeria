import { useEffect, useState } from 'react';
import { supabase, type Promotion } from '../lib/supabase';
import { Tag, CheckCircle, XCircle, MessageCircle } from 'lucide-react';

export default function Promotions() {
  const [promotions, setPromotions] = useState<Promotion[]>([]);
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<Promotion | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    loadPromotions();
    checkUrlCoupon();
  }, []);

  const loadPromotions = async () => {
    try {
      const { data, error } = await supabase
        .from('promotions')
        .select('*')
        .eq('is_active', true)
        .gte('valid_until', new Date().toISOString());

      if (error) throw error;
      setPromotions(data || []);
    } catch (error) {
      console.error('Error loading promotions:', error);
    }
  };

  const checkUrlCoupon = () => {
    const params = new URLSearchParams(window.location.search);
    const urlCoupon = params.get('cupon');

    if (urlCoupon) {
      setCouponCode(urlCoupon);
      applyCoupon(urlCoupon);
    }

    const sessionCoupon = sessionStorage.getItem('appliedCoupon');
    if (sessionCoupon) {
      try {
        const savedCoupon = JSON.parse(sessionCoupon);
        setAppliedCoupon(savedCoupon);
      } catch (e) {
        console.error('Error loading saved coupon:', e);
      }
    }
  };

  const applyCoupon = async (code?: string) => {
    const codeToApply = code || couponCode.toUpperCase();
    setError('');

    if (!codeToApply) {
      setError('Por favor ingresa un código');
      return;
    }

    try {
      const { data, error } = await supabase
        .from('promotions')
        .select('*')
        .eq('code', codeToApply)
        .eq('is_active', true)
        .gte('valid_until', new Date().toISOString())
        .maybeSingle();

      if (error) throw error;

      if (data) {
        setAppliedCoupon(data);
        sessionStorage.setItem('appliedCoupon', JSON.stringify(data));
        setCouponCode('');
      } else {
        setError('Cupón inválido o expirado');
        setAppliedCoupon(null);
        sessionStorage.removeItem('appliedCoupon');
      }
    } catch (error) {
      console.error('Error applying coupon:', error);
      setError('Error al aplicar el cupón');
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    sessionStorage.removeItem('appliedCoupon');
    setError('');
  };

  const sendToWhatsApp = () => {
    if (!appliedCoupon) return;

    const message = `Hola blum, quiero aplicar mi código de descuento: ${appliedCoupon.code}`;
    const whatsappUrl = `https://wa.me/50683551919?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-12 bg-gradient-to-r from-rose-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Promociones Especiales
            </h2>
            <p className="text-gray-600">
              Aprovecha nuestros descuentos exclusivos
            </p>
          </div>

          <div className="rounded-xl p-6 shadow-lg border border-rose-100 mb-6" style={{ backgroundColor: '#ffddd1' }}>
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <div className="flex-1">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                  placeholder="Ingresa tu código de cupón"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none text-center sm:text-left font-medium uppercase"
                  disabled={!!appliedCoupon}
                />
              </div>
              <button
                onClick={() => applyCoupon()}
                disabled={!!appliedCoupon}
                className="px-8 py-3 text-white rounded-lg font-semibold transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed whitespace-nowrap"
                style={{ backgroundColor: appliedCoupon ? undefined : '#8B5FBF' }}
                onMouseEnter={(e) => !appliedCoupon && (e.currentTarget.style.backgroundColor = '#7a4fa8')}
                onMouseLeave={(e) => !appliedCoupon && (e.currentTarget.style.backgroundColor = '#8B5FBF')}
              >
                Aplicar cupón
              </button>
            </div>

            {error && (
              <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 px-4 py-2 rounded-lg">
                <XCircle className="w-4 h-4 flex-shrink-0" />
                {error}
              </div>
            )}

            {appliedCoupon && (
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-3 text-green-700 bg-green-50 px-4 py-3 rounded-lg">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="font-semibold">
                      Cupón {appliedCoupon.code} aplicado: {appliedCoupon.discount_type === 'percentage' ? `${appliedCoupon.discount_value}%` : `₡${appliedCoupon.discount_value}`} de descuento
                    </span>
                  </div>
                  <button
                    onClick={removeCoupon}
                    className="text-sm text-red-600 hover:text-red-700 font-medium whitespace-nowrap"
                  >
                    Remover
                  </button>
                </div>
                <button
                  onClick={sendToWhatsApp}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 text-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
                  style={{ backgroundColor: '#25D366' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1fb855')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#25D366')}
                >
                  <MessageCircle className="w-5 h-5" />
                  Usar cupón en WhatsApp
                </button>
              </div>
            )}
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {promotions.map((promo) => (
              <button
                key={promo.id}
                onClick={() => {
                  setCouponCode(promo.code);
                  applyCoupon(promo.code);
                }}
                className="rounded-lg p-5 border-2 border-dashed border-rose-300 hover:border-rose-500 hover:shadow-md transition-all text-left group"
                style={{ backgroundColor: '#ffddd1' }}
                disabled={!!appliedCoupon}
              >
                <div className="flex items-start gap-3">
                  <div className="bg-rose-100 p-2 rounded-lg group-hover:bg-rose-200 transition-colors">
                    <Tag className="w-5 h-5 text-rose-600" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-lg text-gray-900 mb-1">
                      {promo.code}
                    </div>
                    <div className="text-sm text-gray-600">
                      {promo.discount_type === 'percentage' ? `${promo.discount_value}%` : `₡${promo.discount_value}`} de descuento
                      {promo.min_purchase > 0 && ` en compras desde ₡${Number(promo.min_purchase).toLocaleString('es-CR')}`}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
