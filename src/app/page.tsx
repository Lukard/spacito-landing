import WaitlistForm from "@/components/WaitlistForm";

const steps = [
  {
    num: "1",
    title: "Publica tu espacio",
    desc: "¿Tienes un garaje, trastero o habitación sin usar? Ponlo en Spacito en minutos.",
  },
  {
    num: "2",
    title: "Conectamos con alguien",
    desc: "Encontramos a la persona perfecta que necesita tu espacio cerca de ti.",
  },
  {
    num: "3",
    title: "Cobra cada mes",
    desc: "Recibe tu pago de forma segura cada mes. Sin complicaciones.",
  },
];

const benefits = [
  {
    icon: "📄",
    title: "Contrato incluido",
    desc: "Contrato estándar generado automáticamente para proteger a ambas partes.",
  },
  {
    icon: "💳",
    title: "Pago seguro",
    desc: "Pagos gestionados a través de la plataforma. Sin sorpresas.",
  },
  {
    icon: "🛡️",
    title: "Tus cosas, protegidas",
    desc: "Cobertura incluida para que puedas almacenar con total tranquilidad.",
  },
  {
    icon: "⭐",
    title: "Valoraciones",
    desc: "Sistema de reseñas para que elijas con confianza a quién alquilas o dónde guardas.",
  },
];

const quotes = [
  {
    text: "Llevaba meses buscando dónde guardar los muebles de mi antigua piso. Con Spacito encontré un garaje a 5 minutos de casa por 65€/mes. No me lo podía creer.",
    author: "Marta G., Barcelona",
  },
  {
    text: "Tengo un garaje que no uso desde que me compré moto. Siempre pensé en alquilarlo pero me parecía un lío. Si hubiera una plataforma que lo hiciera fácil y seguro, lo haría sin dudar.",
    author: "Jordi P., Hospitalet",
  },
  {
    text: "En Barcelona guardar cosas cuesta un dineral. Por 60€ al mes en un garaje de particular te ahorras el doble comparado con los trasteros profesionales.",
    author: "Ana R., Gràcia",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            Spacito 📦
          </span>
          <a
            href="#waitlist"
            className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-orange-600 transition-colors"
          >
            Únete a la lista
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="waitlist"
        className="relative py-20 sm:py-28 px-4 overflow-hidden"
        style={{
          backgroundImage: "url('/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/75" />
        <div className="relative max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Tu espacio libre,
            <br />
            <span className="text-primary">su solución de almacenaje</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Conectamos personas con garajes y trasteros sin usar con quienes necesitan almacenaje
            asequible en Barcelona. Desde 60€/mes.
          </p>
          <div className="mt-10 flex justify-center">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">
            ¿Cómo funciona?
          </h2>
          <div className="mt-14 grid md:grid-cols-3 gap-10">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary text-white text-2xl font-bold flex items-center justify-center mx-auto">
                  {step.num}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Spacito */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">
            ¿Por qué Spacito?
          </h2>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-white border border-gray-100 rounded-xl p-6 text-center shadow-sm"
              >
                <div className="text-4xl">{b.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {b.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">
            Lo que dicen las personas que lo han probado
          </h2>
          <p className="mt-3 text-center text-gray-600 text-lg">
            Experiencias reales de hosts y renters
          </p>
          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {quotes.map((q, i) => (
              <blockquote
                key={i}
                className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm"
              >
                <p className="text-gray-700 italic">&ldquo;{q.text}&rdquo;</p>
                <footer className="mt-4 text-sm text-gray-500">
                  — {q.author}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Sé el primero en saber cuándo lanzamos en Barcelona
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Únete a la lista de espera y te avisaremos antes que nadie.
          </p>
          <div className="mt-10 flex justify-center">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 px-4">
        <div className="max-w-5xl mx-auto text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Spacito. Hecho en Barcelona.
        </div>
      </footer>
    </div>
  );
}
