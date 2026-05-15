const cards = [
  {
    icon: '/images/icons/vision.png',
    title: 'Our Vision',
    text: "To be India's most trusted supplier of industrial cleaning materials and protective gear, known for quality and reliability.",
  },
  {
    icon: '/images/icons/mission.png',
    title: 'Our Mission',
    text: 'To deliver top-quality Old Dhoti, Cutting Cloth, Rags, and Hand Gloves with integrity, fair pricing, and lasting partnerships.',
  },
  {
    icon: '/images/icons/goal.png',
    title: 'Our Goal',
    text: 'To consistently maintain the highest standards of product quality and customer service.',
  },
];

export default function VisionMissionGoal() {
  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <article
              key={card.title}
              className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6">
                <img
                  src={card.icon}
                  alt={card.title}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{card.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
