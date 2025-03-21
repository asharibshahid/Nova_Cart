import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="container mx-auto py-20 px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            About Us
          </h1>
          <p className="text-lg md:text-xl font-medium max-w-3xl mx-auto">
            Welcome to our world of innovation and excellence. We take pride in
            our relentless dedication to delivering the best for our clients
          </p>
        </div>
      </div>

      {/* Logo Section */}
      <div className="container mx-auto py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">My Identity</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            My Name Is Asharib
          Our logo symbolizes the passion and hard work that drives us every
          day Its more than just a symbol its a testament to our journey
        </p>
        <div className="flex justify-center">
          <Image
            src="/thd1.jpg" // Replace with the path to your logo
            alt="Company Logo"
            width={300}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Hard Work Section */}
      <div className="bg-gray-800 py-12 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Asharib Hard Work</h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-8">
            Behind every success is a Motivation that never gives up Our journey is
            fueled by determination creativity, and the desire to make a
            difference I work tirelessly to turn dreams into reality
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4">Dedication</h3>
              <p className="text-gray-300">
                Every project I undertake is completed with unwavering focus
                and commitment to excellence
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-300">
                i constantly push the boundaries of creativity to deliver
                cutting edge solutions
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4">AloneWork</h3>
              <p className="text-gray-300">
                My strength lies in collaboration, bringing diverse talents
                together to achieve greatness
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 py-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            🤍 {new Date().getFullYear()} NovaCart. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
