import { Helmet } from 'react-helmet'
import { MapPin, Phone, Clock, Instagram, Music, Mail } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Alamat",
      content: "Jl Suko Legok IV No 49 RT 17 RW 06, Ds Suko, Sukodono, Sidoarjo, Kode Pos 61258",
      link: "https://maps.google.com/?q=Jl+Suko+Legok+IV+No+49+RT+17+RW+06+Ds+Suko+Sukodono+Sidoarjo"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "WhatsApp",
      content: "081232478048",
      link: "https://wa.me/6281232478048"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Jam Operasional",
      content: "Senin - Sabtu: 08.00 - 17.00 WIB\nMinggu: 09.00 - 15.00 WIB"
    }
  ]

  const socialMedia = [
    {
      icon: <Instagram className="w-8 h-8" />,
      name: "Instagram",
      handle: "@wardhana_furniture",
      link: "https://instagram.com/wardhana_furniture",
      color: "bg-pink-500 hover:bg-pink-600"
    },
    {
      icon: <Music className="w-8 h-8" />,
      name: "TikTok",
      handle: "@wardhana_furniture",
      link: "https://tiktok.com/@wardhana_furniture",
      color: "bg-black hover:bg-gray-800"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      name: "WhatsApp",
      handle: "081232478048",
      link: "https://wa.me/6281232478048",
      color: "bg-green-500 hover:bg-green-600"
    }
  ]

  return (
    <>
      <Helmet>
        <title>Kontak Kami - Wardhana Furniture</title>
        <meta name="description" content="Hubungi Wardhana Furniture untuk konsultasi furniture. Alamat: Jl Suko Legok IV No 49, Sukodono, Sidoarjo. WhatsApp: 081232478048" />
        <meta name="keywords" content="kontak wardhana furniture, alamat, telepon, whatsapp, sidoarjo" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-primary-100 section-padding">
        <div className="container-custom">
          <div className="text-center mb-12" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              Hubungi Kami
            </h1>
            <p className="text-lg text-primary-700 max-w-2xl mx-auto">
              Kami siap membantu mewujudkan furniture impian Anda. Konsultasikan kebutuhan 
              furniture Anda dengan tim ahli kami.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold text-primary-900 mb-8">
                Informasi Kontak
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors duration-200">
                    <div className="bg-primary-600 text-white p-3 rounded-full flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary-900 mb-2">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-700 transition-colors duration-200 whitespace-pre-line"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-primary-600 whitespace-pre-line">
                          {info.content}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div data-aos="fade-left">
              <h2 className="text-3xl font-bold text-primary-900 mb-8">
                Lokasi Kami
              </h2>
              <div className="bg-primary-50 rounded-xl p-6 h-full">
                <div className="bg-primary-200 rounded-lg h-64 flex items-center justify-center mb-6">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                    <p className="text-primary-700 font-medium">
                      Peta Lokasi
                    </p>
                    <p className="text-primary-600 text-sm mt-2">
                      Klik tombol di bawah untuk membuka di Google Maps
                    </p>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=Jl+Suko+Legok+IV+No+49+RT+17+RW+06+Ds+Suko+Sukodono+Sidoarjo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center"
                >
                  Buka di Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Ikuti Media Sosial Kami
            </h2>
            <p className="text-lg text-primary-600 max-w-2xl mx-auto">
              Dapatkan update terbaru tentang koleksi furniture dan promo menarik dari kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialMedia.map((social, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`${social.color} text-white p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center transition-colors duration-200`}>
                  {social.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-2">
                  {social.name}
                </h3>
                <p className="text-primary-600 mb-6">
                  {social.handle}
                </p>
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full"
                >
                  Kunjungi
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom text-center">
          <div data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Siap Berkolaborasi dengan Kami?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Jangan ragu untuk menghubungi kami. Tim profesional kami siap membantu 
              mewujudkan furniture impian Anda dengan kualitas terbaik.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6281232478048"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
              >
                <Phone className="mr-2 w-5 h-5" />
                WhatsApp Sekarang
              </a>
              <a
                href="https://instagram.com/wardhana_furniture"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300 inline-flex items-center justify-center"
              >
                <Instagram className="mr-2 w-5 h-5" />
                Follow Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact