import { Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <div className="flex space-x-4">
          <a 
            href="https://github.com/seemrann7" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-teal-500 transition duration-300"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/simran-gautam-b1b07721b/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-teal-500 transition duration-300"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  )
}

