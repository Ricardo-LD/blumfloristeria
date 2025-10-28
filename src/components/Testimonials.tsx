import { useEffect, useState } from 'react';
import { supabase, type Testimonial } from '../lib/supabase';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTestimonials();
  }, []);

  const loadTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('is_featured', true)
        .order('display_order');

      if (error) throw error;
      setTestimonials(data || []);
    } catch (error) {
      console.error('Error loading testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (index: number) => {
    const dates = [
      '15 de marzo de 2025',
      '8 de junio de 2025',
      '22 de enero de 2025',
      '3 de septiembre de 2025',
      '17 de abril de 2025'
    ];
    return dates[index % dates.length];
  };

  if (loading) {
    return (
      <section id="testimonios" className="py-16" style={{ backgroundColor: '#ffddd1' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lo que dicen nuestros clientes
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse bg-gray-100 rounded-xl p-6 h-48"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonios" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#8B4789' }}>
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Todos nuestros clientes quedan más que satisfechos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.slice(0, 5).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="rounded-xl p-6 border border-gray-100 hover:border-rose-200 hover:shadow-lg transition-all"
              style={{ backgroundColor: '#ffddd1' }}
            >
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={testimonial.customer_photo}
                  alt={testimonial.customer_name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-rose-100"
                  loading="lazy"
                />
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 mb-1">
                    {testimonial.customer_name}
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                {testimonial.comment}
              </p>

              <div className="text-xs text-gray-500">
                {formatDate(index)}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <div className="inline-flex items-center gap-2 bg-rose-50 px-6 py-3 rounded-full">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 4).map((t, i) => (
                <img
                  key={i}
                  src={t.customer_photo}
                  alt=""
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  loading="lazy"
                />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-700">
              +500 clientes satisfechos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
