import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: '¿Qué métodos de pago aceptan?',
      answer: 'Aceptamos SINPE Móvil, transferencias bancarias y tarjetas de crédito/débito. El pago se confirma al momento de realizar el pedido por WhatsApp.',
    },
    {
      question: '¿Cuál es el horario de atención?',
      answer: 'Lunes cerrado. Martes a viernes de 10:00 AM a 5:30 PM. Sábados y domingos de 10:00 AM a 2:00 PM. Días feriados: consultar con tienda. Pedidos fuera de horario se procesan al día siguiente.',
    },
    {
      question: '¿Hacen entregas el mismo día?',
      answer: 'Confirmamos el tiempo estimado al procesar tu orden.',
    },
    {
      question: '¿Puedo personalizar mi arreglo?',
      answer: 'Por supuesto. Contáctanos por WhatsApp con tus preferencias de colores, flores y estilo. Nuestro equipo te ayudará a crear el arreglo perfecto.',
    },
    {
      question: '¿Cómo cuidar mis flores?',
      answer: 'Nuestras flores frescas te duraran mas si le agregas: 1 cucharadita de azúcar y 1 cucharadita de cloro a cada litro de agua, revuelves bien y pones las flores en un hermosos jarrón. Corta el tallo cada dos dias , aproximadamente 1 cm cada vez. No rocíes con agua los pétalos de las flores, ya que se podrían dañar rápidamente. Ten cuidado con el cloro, recuerda que no debes ingerirlo ni tocar partes sensibles de tu rostro o cuerpo para no irritar los tejidos. Y sobre todo, ponles todos los días mucho amor.',
    },
  ];

  return (
    <section id="faq" className="py-16 bg-gradient-to-b" style={{ background: 'linear-gradient(to bottom, #f5c5b8, #ffddd1)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Todo lo que necesitas saber sobre nuestros servicios
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 overflow-hidden transition-all hover:border-rose-200"
              style={{ backgroundColor: '#ffddd1' }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-rose-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4">
            ¿No encuentras lo que buscas?
          </p>
          <a
            href="https://wa.me/50683551919?text=Hola%20blum,%20tengo%20una%20pregunta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-purple-600 text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-purple-700 transition-colors"
          >
            Contáctanos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
