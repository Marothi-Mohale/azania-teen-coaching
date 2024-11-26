import Image from "next/image";
import MindsetDevelopment from "./mindset-development/page"; // Adjust the import path if necessary
import GoalSetting from "./goal-setting/page"; // Adjust the import path if necessary
import TalentDevelopment from "./talent-development/page"; // Adjust the import path if necessary

export default function Home() {
  return (
    <div className="font-sans">
      {/* Header Section with South African Flag */}
      <header className="relative w-full h-64">
        {/* Logo in Top Left Corner */}
        <div className="absolute top-4 left-4 z-20">
          <Image
            src="/ATC.svg" // Replace with the correct path to your logo in the public folder
            alt="Azania Teen Coaching Logo"
            width={80} // Adjust size as needed for responsiveness
            height={80}
            className="rounded" // Optional: Add styling like rounded corners
          />
        </div>

        {/* Background Image of South African Flag */}
        <Image
          src="/sa.flag.png" // Path to the flag image in the public folder
          alt="South African Flag"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 -z-10"
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
          <div className="flex space-x-8">
            {/* Mindset Development */}
            <div className="w-1/3 p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Mindset Development</h3>
              <p className="text-gray-600">
                Focusing on building a growth mindset, confidence, and resilience.
              </p>
            </div>
            {/* Goal Setting */}
            <div className="w-1/3 p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Goal Setting</h3>
              <p className="text-gray-600">
                Helping teens set clear, actionable, and achievable life goals.
              </p>
            </div>
            {/* Talent Development */}
            <div className="w-1/3 p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Talent Development</h3>
              <p className="text-gray-600">
                Encouraging the discovery and nurturing of teens' innate talents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Optional: Additional sections for each category */}
      {/* Mindset Development Section */}
      <MindsetDevelopment />

      {/* Goal Setting Section */}
      <GoalSetting />

      {/* Talent Development Section */}
      <TalentDevelopment />
    </div>
  );
}
