import { MapPin, Phone, Instagram, Music } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div data-aos="fade-up">
            <div className="flex items-center space-x-3 mb-4">
              <h3 className="text-xl font-bold">Wardhana Furniture</h3>
            </div>
            <p className="text-primary-200 mb-4">
              Menyediakan furniture berkualitas tinggi dengan desain modern dan elegan 
              untuk memenuhi kebutuhan rumah impian Anda.
            </p>
          </div>

          {/* Contact Info */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-lg font-semibold mb-4">Kontak Kami</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-300 mt-1 flex-shrink-0" />
                <p className="text-primary-200 text-sm">
                  Jl Suko Legok IV No 49 RT 17 RW 06<br />
                  Ds Suko, Sukodono, Sidoarjo<br />
                  Kode Pos 61258
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-300" />
                <a 
                  href="https://wa.me/6281232478048" 
                  className="text-primary-200 hover:text-white transition-colors duration-200"
                >
                  081232478048
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-lg font-semibold mb-4">Ikuti Kami</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/wardhana_furniture"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-800 p-3 rounded-full hover:bg-primary-700 transition-colors duration-200 group"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              </a>
              <a
                href="https://tiktok.com/@wardhana_furniture"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-800 p-3 rounded-full hover:bg-primary-700 transition-colors duration-200 group"
              >
                <Music className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              </a>
              <a
                href="https://wa.me/6281232478048"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 p-3 rounded-full hover:bg-green-500 transition-colors duration-200 group"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-8 pt-8 text-center">
          <p className="text-primary-300">
            © 2025 Wardhana Furniture. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer