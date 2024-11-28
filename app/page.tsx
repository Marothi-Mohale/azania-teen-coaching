import Image from "next/image";
import MindsetDevelopment from "./mindset-development/page";
import GoalSetting from "./goal-setting/page";
import TalentDevelopment from "./talent-development/page";
import MeditationCorner from "./meditation-corner/page";

export default function Home() {
  return (
    <div className="font-sans">
      {/* Header Section */}
      <header className="relative w-full h-[50vh]">
        {/* Logo in Top Left */}
        <div className="absolute top-6 left-6 z-20">
          <Image
            src="/ATC.svg"
            alt="Azania Teen Coaching Logo"
            width={80}
            height={80}
            className="rounded"
          />
        </div>

        {/* Menu Buttons in Top Right */}
        <nav className="absolute top-6 right-6 z-20">
          <ul className="flex space-x-6 text-white text-lg font-semibold">
            <li>
              <a href="#home" className="hover:text-gray-300 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-300 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Background Image */}
        <Image
          src="/sa.flag.png"
          alt="South African Flag"
          fill
          className="absolute top-0 left-0 -z-10 object-cover"
        />

        {/* Welcome Text */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
            Welcome to Azania Teen Coaching
          </h1>
          <p className="text-xl md:text-2xl text-white">
            Empowering the next generation to achieve their dreams.
          </p>
        </div>
      </header>

      {/* Categories Section */}
      <section id="home" className="py-20 px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">Our Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Mindset Development */}
            <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/mindset.jpg"
                alt="Mindset Development"
                width={400}
                height={250}
                className="rounded-md mb-4 object-cover"
              />
              <h3 className="text-2xl font-semibold mb-2">Mindset Development</h3>
              <p className="text-gray-600">
                Focusing on building a growth mindset, confidence, and resilience.
              </p>
            </div>

            {/* Goal Setting */}
            <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/goals.jpg"
                alt="Goal Setting"
                width={400}
                height={250}
                className="rounded-md mb-4 object-cover"
              />
              <h3 className="text-2xl font-semibold mb-2">Goal Setting</h3>
              <p className="text-gray-600">
                Helping teens set clear, actionable, and achievable life goals.
              </p>
            </div>

            {/* Talent Development */}
            <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/talent.webp"
                alt="Talent Development"
                width={400}
                height={250}
                className="rounded-md mb-4 object-cover"
              />
              <h3 className="text-2xl font-semibold mb-2">Talent Development</h3>
              <p className="text-gray-600">
                Encouraging the discovery and nurturing of teens' innate talents.
              </p>
            </div>

            {/* Meditation Corner */}
            <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/meditation.jpg"
                alt="Meditation Corner"
                width={300}
                height={200}
                className="rounded-md mb-4 object-cover"
              />
              <h3 className="text-2xl font-semibold mb-2">Meditation Corner</h3>
              <p className="text-gray-600">
                Discover mindfulness techniques to reduce stress and increase focus.
              </p>
            </div>
          </div>

          {/* Get Started Button */}
          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="bg-black text-white text-lg font-bold py-3 px-8 rounded-md shadow hover:bg-gray-900 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-gray-700 text-lg">
            Azania Teen Coaching is dedicated to empowering teens with tools, strategies, and
            insights to navigate life successfully. We focus on personal development, goal setting, 
            and talent nurturing, ensuring every teen has the opportunity to excel.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
          <p className="text-gray-700 text-lg">
            Have questions? Reach out to us at <a href="mailto:info@azaniateencoaching.com" className="text-blue-600 hover:underline">info@azaniateencoaching.com</a>.
          </p>
        </div>
      </section>

      {/* Additional sections for each category */}
      <MindsetDevelopment />
      <GoalSetting />
      <TalentDevelopment />
      <MeditationCorner />
    </div>
  );
}
