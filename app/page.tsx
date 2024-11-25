import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-gray-800 text-white h-screen flex items-center justify-center relative">
        <Image
          src="/hero-background.jpg" // Replace with your background image
          alt="Hero background"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 -z-10"
        />
        <div className="text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Welcome to Azania Teen Coaching</h1>
          <p className="text-lg mb-6">
            Empowering teens to unlock their full potential and achieve their dreams.
          </p>
          <button className="bg-blue-600 px-6 py-3 rounded-md hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Azania Teen Coaching, we are passionate about guiding young individuals
            through the challenges of teenage years. Our personalized coaching programs
            help build confidence, resilience, and the skills needed to excel in life.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Life Coaching</h3>
              <p className="text-gray-600">
                Tailored sessions to help teens set goals, overcome challenges, and
                build a successful mindset.
              </p>
            </div>
            {/* Service 2 */}
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Academic Support</h3>
              <p className="text-gray-600">
                Empowering teens to improve their study habits, time management, and
                academic performance.
              </p>
            </div>
            {/* Service 3 */}
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Parent-Teen Workshops</h3>
              <p className="text-gray-600">
                Interactive sessions designed to enhance communication and strengthen
                family bonds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="p-6 bg-white shadow-md rounded-lg">
              <p className="italic text-gray-600 mb-4">
                "Azania Teen Coaching has been a game-changer for my son. He's more
                confident and focused on his future!"
              </p>
              <h3 className="font-semibold text-gray-800">- Parent of a Teen Client</h3>
            </div>
            {/* Testimonial 2 */}
            <div className="p-6 bg-white shadow-md rounded-lg">
              <p className="italic text-gray-600 mb-4">
                "The workshops helped me improve my communication with my parents.
                Highly recommend!"
              </p>
              <h3 className="font-semibold text-gray-800">- Teen Client</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-8 bg-gray-800 text-white text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Azania Teen Coaching. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
