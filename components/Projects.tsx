import { Code, BarChart, Gamepad } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: "AI BASED INVENTORY MANAGEMENT SYSTEM",
      description: "Developed a web application to address stock management challenges and streamline operational workflows. Implemented an LSTM-based deep learning model for accurate sales forecasting, enhancing inventory control.",
      icon: <Code className="w-12 h-12 text-teal-500" />
    },
    {
      title: "TITANIC EDA",
      description: "Conducted EDA on titanic dataset to analyze insights related to survival rates, gender distribution correlating gender and age. Drew insights on survival and death distributions, emphasizing key factors like age and sex influencing survival rates.",
      icon: <BarChart className="w-12 h-12 text-teal-500" />
    },
    {
      title: "SNAKE GAME",
      description: "Developed interactive snake game implementing movement, collision detection, scoring like game mechanism. Smooth user experience applying responsive design.",
      icon: <Gamepad className="w-12 h-12 text-teal-500" />
    }
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-teal-500">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300 flex flex-col">
              <div className="flex justify-center mb-4">
                {project.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center text-teal-400">{project.title}</h3>
              <p className="text-gray-300 flex-grow">{project.description}</p>
              <button className="mt-4 bg-teal-500 text-gray-900 px-4 py-2 rounded font-bold hover:bg-teal-600 transition duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

