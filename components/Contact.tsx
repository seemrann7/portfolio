import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-teal-500">Contact Me</h2>
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center gap-4">
            <a 
              href="mailto:simran.26gautam@gmail.com"
              className="flex items-center hover:text-teal-500 transition-colors"
            >
              <Mail className="w-6 h-6 text-teal-500 mr-4" />
              <p className="text-gray-300">simran.26gautam@gmail.com</p>
            </a>
            <a
              href="mailto:simran.26gautam@gmail.com"
              className="px-4 py-2 bg-teal-500 text-gray-900 rounded-full hover:bg-teal-600 transition-colors font-medium"
            >
              Mail me
            </a>
          </div>
          <div className="flex items-center">
            <Phone className="w-6 h-6 text-teal-500 mr-4" />
            <p className="text-gray-300">+977 9818000000</p>
          </div>
          <div className="flex items-center">
            <MapPin className="w-6 h-6 text-teal-500 mr-4" />
            <p className="text-gray-300">Kathmandu, Nepal</p>
          </div>
        </div>
      </div>
    </section>
  )
}

