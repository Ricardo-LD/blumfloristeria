import { Flower2, Palette, Truck } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: Flower2,
      title: 'Flores del día',
      description: 'Cortamos y preparamos cada arreglo el mismo día de tu pedido',
    },
    {
      icon: Palette,
      title: 'Personalización',
      description: 'Diseños a tu estilo, preferencias y presupuesto para cada ocasión especial',
    },
    {
      icon: Truck,
      title: 'Entrega a domicilio',
      description: 'Recibe ó envía ése hermoso diseño floral',
    },
  ];

  return (
    <section id="beneficios" className="py-16 bg-gradient-to-b" style={{ background: 'linear-gradient(to bottom, #ffddd1, #f5c5b8)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#8B4789' }}>
            ¿Por qué elegir blum?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Compromiso con la calidad y frescura en cada arreglo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-2xl mb-5 group-hover:scale-110 transition-all" style={{ backgroundColor: 'transparent' }}>
                  <Icon className="w-8 h-8 text-black transition-colors" style={{ color: 'black' }} onMouseEnter={(e) => e.currentTarget.style.color = '#8B4789'} onMouseLeave={(e) => e.currentTarget.style.color = 'black'} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
