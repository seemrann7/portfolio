export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-teal-500">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/simran-uxdFxWOsfztncJbpSc9W26jMBWeNkJ.jpeg"
              alt="Simran Gautam"
              className="rounded-lg w-64 h-64 object-cover mx-auto border-4 border-teal-500"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg mb-4">
              I'm a Computer Engineering student at Advanced College of Engineering and Management, passionate about AI, web development, and technology. With a background in news presenting and reporting, I bring a unique perspective to my technical projects.
            </p>
            <p className="text-lg mb-4">
              My journey in tech has led me to explore various fields, from AI-based inventory management systems to data analysis and computer graphics. I'm always eager to learn and apply new technologies to solve real-world problems.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me advocating for student rights, organizing tech seminars, or volunteering for community service projects.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="/SimranGautam_CV.pdf"
                download
                className="bg-teal-500 text-gray-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-teal-600 transition duration-300 flex items-center"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

