import { Helmet } from 'react-helmet'
import { CheckCircle, Heart, Target, Users } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion",
      description: "Kami memiliki passion yang tinggi dalam menciptakan furniture berkualitas yang dapat membahagiakan pelanggan."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Quality Focus",
      description: "Fokus pada kualitas adalah prioritas utama kami dalam setiap produk yang kami hasilkan."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer First",
      description: "Kepuasan pelanggan adalah tujuan utama kami. Kami selalu mengutamakan kebutuhan dan keinginan pelanggan."
    }
  ]

  const achievements = [
    { number: "500+", label: "Pelanggan Puas" },
    { number: "5+", label: "Tahun Pengalaman" },
    { number: "1000+", label: "Furniture Terjual" },
    { number: "24/7", label: "Customer Support" }
  ]

  return (
    <>
      <Helmet>
        <title>Tentang Kami - Wardhana Furniture</title>
        <meta name="description" content="Wardhana Furniture adalah perusahaan furniture terpercaya di Sidoarjo dengan pengalaman lebih dari 5 tahun dalam industri furniture berkualitas." />
        <meta name="keywords" content="tentang wardhana furniture, sejarah, visi misi, furniture sidoarjo" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-primary-100 section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
                Tentang Wardhana Furniture
              </h1>
              <p className="text-lg text-primary-700 mb-6 leading-relaxed">
                Wardhana Furniture adalah perusahaan furniture yang telah berpengalaman lebih dari 5 tahun 
                dalam menyediakan furniture berkualitas tinggi untuk rumah dan kantor. Kami berkomitmen 
                untuk memberikan produk terbaik dengan harga yang kompetitif.
              </p>
              <p className="text-lg text-primary-700 leading-relaxed">
                Berlokasi di Sidoarjo, Jawa Timur, kami melayani pelanggan di seluruh Indonesia 
                dengan standar kualitas internasional dan pelayanan yang memuaskan.
              </p>
            </div>
            <div data-aos="fade-left">
              <img
                src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="About Wardhana Furniture"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-lg text-primary-600 max-w-2xl mx-auto">
              Nilai-nilai yang menjadi fondasi dalam setiap langkah perjalanan bisnis kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="text-center p-8 rounded-xl bg-primary-50 hover:bg-primary-100 transition-all duration-300"
              >
                <div className="bg-primary-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-primary-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pencapaian Kami
            </h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Angka-angka yang menunjukkan dedikasi dan kepercayaan pelanggan kepada kami
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {achievement.number}
                </div>
                <div className="text-primary-100 font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Mission Section */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold text-primary-900 mb-6">Visi Kami</h2>
              <p className="text-lg text-primary-700 mb-8 leading-relaxed">
                Menjadi perusahaan furniture terdepan di Indonesia yang dikenal karena 
                kualitas produk yang superior, inovasi desain yang berkelanjutan, dan 
                pelayanan pelanggan yang luar biasa.
              </p>
              
              <h2 className="text-3xl font-bold text-primary-900 mb-6">Misi Kami</h2>
              <div className="space-y-4">
                {[
                  "Menyediakan furniture berkualitas tinggi dengan harga yang kompetitif",
                  "Mengutamakan kepuasan pelanggan melalui pelayanan yang excellent",
                  "Terus berinovasi dalam desain dan teknologi furniture",
                  "Membangun hubungan jangka panjang dengan pelanggan dan mitra bisnis"
                ].map((mission, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                    <p className="text-primary-700">{mission}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div data-aos="fade-left">
              <img
                src="https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Vision Mission"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Tim Profesional Kami
            </h2>
            <p className="text-lg text-primary-600 max-w-2xl mx-auto">
              Tim berpengalaman yang siap membantu mewujudkan furniture impian Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Tim Desain",
                role: "Desainer Interior",
                description: "Menciptakan desain furniture yang modern dan fungsional sesuai kebutuhan Anda"
              },
              {
                name: "Tim Produksi",
                role: "Craftsman Ahli",
                description: "Mengerjakan setiap detail furniture dengan keahlian dan ketelitian tinggi"
              },
              {
                name: "Tim Customer Service",
                role: "Pelayanan Pelanggan",
                description: "Memberikan konsultasi dan pelayanan terbaik untuk kepuasan pelanggan"
              }
            ].map((team, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="text-center p-6 rounded-xl bg-primary-50 hover:bg-primary-100 transition-all duration-300"
              >
                <div className="bg-primary-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-2">
                  {team.name}
                </h3>
                <p className="text-primary-600 font-medium mb-3">
                  {team.role}
                </p>
                <p className="text-primary-600 text-sm">
                  {team.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default About