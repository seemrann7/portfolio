import { Briefcase, Calendar } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      title: "News Presenter / Reporter",
      company: "PADMA MEDIA GROUP (MOUNTAIN TELEVISION)",
      date: "June 2021 - August 2022",
      description: [
        "Presented live news segments, delivering current events and conducted on-air interviews with experts and the public.",
        "Reporting on occasions like New Year and peak election time with meaningful interaction with a huge mass.",
        "Assisted MCR engineers with technical tasks and became technical producer for a community-based TV program.",
        "Conducted offline interviews, gathering key sound bites and critical information for news reports."
      ]
    },
    {
      title: "News Presenter Trainee/Intern",
      company: "PADMA MEDIA GROUP",
      date: "March 2021 - June 2021",
      description: [
        "Learned the basics of news presenting and reporting.",
        "Assisted in the production of news segments and conducted research for upcoming stories."
      ]
    },
    {
      title: "Co-founder",
      company: "BICHITRAS",
      date: "Ongoing",
      description: [
        "Co-founded a startup focused on innovative solutions in the tech industry.",
        "Responsible for strategic planning and technology implementation."
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-teal-500">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold mb-2 text-teal-400">{exp.title}</h3>
              <p className="text-gray-400 mb-4 flex items-center">
                <Briefcase className="mr-2" size={18} />
                {exp.company}
              </p>
              <p className="text-gray-400 mb-4 flex items-center">
                <Calendar className="mr-2" size={18} />
                {exp.date}
              </p>
              <ul className="list-disc list-inside space-y-2">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-gray-300">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

