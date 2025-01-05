import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center py-20">
      <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-down">
        Simran Gautam
      </h1>
      <p className="text-xl md:text-2xl mb-8 text-gray-400 animate-fade-in-up">
        Computer Engineering Student & Aspiring Developer
      </p>
      <a
        href="#contact"
        className="bg-teal-500 text-gray-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-teal-600 transition duration-300 flex items-center animate-bounce"
      >
        Get in touch <ArrowRight className="ml-2" />
      </a>
    </section>
  )
}

