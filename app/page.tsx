import Image from "next/image";
import MindsetDevelopment from "./mindset-development/page"; 
import GoalSetting from "./goal-setting/page";
import TalentDevelopment from "./talent-development/page"; 
import MeditationCorner from "./meditation-corner/page";

export default function Home() {
  return (
    <div className="font-sans">
      {/* Header Section with South African Flag */}
      <header className="relative w-full h-64">
        {/* Logo in Top Left Corner */}
        <div className="absolute top-4 left-4 z-20">
          <Image
            src="/ATC.svg"
            alt="Azania Teen Coaching Logo"
            width={80}
            height={80}
            className="rounded"
          />
        </div>

        {/* Background Image of South African Flag */}
        <Image
          src="/sa.flag.png"
          alt="South African Flag"
          fill
          className="absolute top-0 left-0 -z-10 object-cover"
        />

        {/* Overlay Text */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Welcome to Azania Teen Coaching
          </h1>
        </div>
      </header>

      {/* Categories Section: Horizontally Aligned */}
      <section className="py-16 px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Categories</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Mindset Development */}
            <div className="w-1/4 p-6 bg-white shadow-md rounded-lg">
              <Image
                src="/mindset.jpg"
                alt="Mindset Development"
                width={400}
                height={250}
                className="rounded-md mb-4 object-cover"
              />
              <h3 className="text-2xl font-semibold mb-4">Mindset Development</h3>
              <p className="text-gray-600">
                Focusing on building a growth mindset, confidence, and resilience.
              </p>
            </div>

            {/* Goal Setting */}
            <div className="w-1/4 p-6 bg-white shadow-md rounded-lg">
              <Image
                src="/goals.jpg"
                alt="Goal Setting"
                width={400}
                height={250}
                className="rounded-md mb-4 object-cover"
              />
              <h3 className="text-2xl font-semibold mb-4">Goal Setting</h3>
              <p className="text-gray-600">
                Helping teens set clear, actionable, and achievable life goals.
              </p>
            </div>

            {/* Talent Development */}
            <div className="w-1/4 p-6 bg-white shadow-md rounded-lg">
              <Image
                src="/talent.webp" // Path to the attached image
                alt="Talent Development"
                width={400}
                height={250}
                className="rounded-md mb-4 object-cover"
              />
              <h3 className="text-2xl font-semibold mb-4">Talent Development</h3>
              <p className="text-gray-600">
                Encouraging the discovery and nurturing of teens' innate talents.
              </p>
            </div>

            {/* Meditation Corner */}
            <div className="w-1/4 p-6 bg-white shadow-md rounded-lg">
              <Image
                src="/meditation.jpg"
                alt="Meditation Corner"
                width={300}
                height={200}
                className="rounded-md mb-4 object-cover"
              />
              <h3 className="text-2xl font-semibold mb-4">Meditation Corner</h3>
              <p className="text-gray-600">
                Discover mindfulness techniques to reduce stress and increase focus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Optional: Additional sections for each category */}
      <MindsetDevelopment />
      <GoalSetting />
      <TalentDevelopment />
      <MeditationCorner />
    </div>
  );
}