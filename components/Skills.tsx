export default function Skills() {
  const skills = [
    { category: "Programming", items: ["Python", "HTML/CSS", "React-JS"] },
    { category: "AI & Machine Learning", items: ["TensorFlow", "Scikit-learn", "Pandas"] },
    { category: "Tools & Technologies", items: ["Git", "Docker", "VS Code"] },
    { category: "Soft Skills", items: ["Communication", "Leadership", "Teamwork", "Adaptability"] },
    { category: "Languages", items: ["Nepali", "English"] }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-teal-500">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillSet, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold mb-4 text-teal-400">{skillSet.category}</h3>
              <ul className="space-y-2">
                {skillSet.items.map((skill, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                    <span className="text-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

