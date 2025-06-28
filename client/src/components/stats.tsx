export default function Stats() {
  const stats = [
    { number: "500+", label: "Global Partners" },
    { number: "50+", label: "Countries Covered" },
    { number: "1000+", label: "Successful Matches" },
    { number: "15+", label: "Years Experience" },
  ];

  return (
    <section className="py-20 gradient-secondary text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
