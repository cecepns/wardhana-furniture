import { Helmet } from "react-helmet";
import { ArrowRight, Star, Users, Award, Truck, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import furniture1 from "../assets/furniture-1.png";
import furniture2 from "../assets/furniture-2.png";
import furniture3 from "../assets/furniture-3.png";
import furniture4 from "../assets/furniture-4.png";
import furniture5 from "../assets/furniture-5.png";
import furniture6 from "../assets/furniture-6.png";
import furniture7 from "../assets/furniture-7.png";
import furniture8 from "../assets/furniture-8.jpg";

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const features = [
    {
      icon: <Star className="w-8 h-8" />,
      title: "Kualitas Premium",
      description: "Menggunakan bahan berkualitas tinggi dan finishing terbaik",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Pelayanan Terbaik",
      description: "Tim profesional siap membantu kebutuhan furniture Anda",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Desain Modern",
      description: "Desain contemporary yang mengikuti tren terkini",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Pengiriman Aman",
      description: "Pengiriman dengan packaging khusus untuk keamanan produk",
    },
  ];

  const products = [
    {
      name: "Furniture 1",
      image: furniture1,
    },
    {
      name: "Furniture 2",
      image: furniture2,
    },
    {
      name: "Furniture 3",
      image: furniture3,
    },
    {
      name: "Furniture 4",
      image: furniture4,
    },
    {
      name: "Furniture 5",
      image: furniture5,
    },
    {
      name: "Furniture 6",
      image: furniture6,
    },
    {
      name: "Furniture 7",
      image: furniture7,
    },
    {
      name: "Furniture 8",
      image: furniture8,
    },
  ];

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Helmet>
        <title>Wardhana Furniture - Furniture Berkualitas Tinggi</title>
        <meta
          name="description"
          content="Wardhana Furniture menyediakan furniture berkualitas tinggi dengan desain modern dan elegan. Melayani area Sidoarjo dan sekitarnya."
        />
        <meta
          name="keywords"
          content="furniture, mebel, sofa, meja, lemari, tempat tidur, sidoarjo, wardhana"
        />
      </Helmet>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeImageModal}
              className="absolute -top-4 -right-4 bg-white bg-opacity-90 hover:bg-white text-gray-800 hover:text-gray-600 transition-all duration-200 rounded-full p-2 shadow-lg hover:shadow-xl z-10"
              aria-label="Tutup gambar"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedImage}
              alt="Furniture Preview"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-primary-100 section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h1 className="text-4xl md:text-6xl font-bold text-primary-900 mb-6 leading-tight">
                Menyediakan Sofa Milenial dan Aesthetic sesuai dengan kebutuhan
                anda
              </h1>
              <p className="text-lg text-primary-700 mb-8 leading-relaxed">
                Wardhana Furniture hadir dengan koleksi furniture premium yang
                menggabungkan desain modern, kualitas terbaik, dan harga
                terjangkau untuk mewujudkan rumah impian Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/6281232478048"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  Konsultasi Gratis
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <Link
                  to="/about"
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  Tentang Kami
                </Link>
              </div>
            </div>
            <div data-aos="fade-left" className="relative">
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Furniture Wardhana"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <Star className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary-900">
                      Kualitas Terjamin
                    </p>
                    <p className="text-sm text-primary-600">
                      Garansi & After Sales
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Mengapa Memilih Wardhana Furniture?
            </h2>
            <p className="text-lg text-primary-600 max-w-2xl mx-auto">
              Kami berkomitmen memberikan yang terbaik dengan standar kualitas
              tinggi dan pelayanan yang memuaskan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="text-center p-6 rounded-xl bg-primary-50 hover:bg-primary-100 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="bg-primary-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-primary-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Koleksi Furniture Kami
            </h2>
            <p className="text-lg text-primary-600 max-w-2xl mx-auto">
              Berbagai pilihan furniture berkualitas dengan desain modern dan
              elegan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105"
              >
                <div
                  className="cursor-pointer"
                  onClick={() => openImageModal(product.image)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover hover:opacity-90 transition-opacity"
                  />
                </div>
                <div className="p-6">
                  {/* <h3 className="text-xl font-semibold text-primary-900 mb-4">
                    {product.name}
                  </h3> */}
                  <a
                    href="https://wa.me/6281232478048"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
                  >
                    Tanya Harga
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
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
              Siap Mewujudkan Rumah Impian Anda?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Konsultasikan kebutuhan furniture Anda dengan tim ahli kami.
              Dapatkan penawaran terbaik dan solusi yang tepat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6281232478048"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
              >
                Hubungi Sekarang
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300 inline-flex items-center justify-center"
              >
                Info Kontak
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
