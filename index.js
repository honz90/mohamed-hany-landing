export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black px-6 py-10">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">Mohamed Hany Hussein</h1>
        <p className="text-xl mt-2">Founder @LXET | Proptech Visionary</p>
        <p className="text-md text-gray-600 mt-1">Turning Agents into Owners. Cities into Empires.</p>
      </header>

      <section className="max-w-4xl mx-auto space-y-6">
        <div>
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="mt-2 text-gray-700">
            Mohamed Hany Hussein is a real estate entrepreneur and the founder of LXET — a modern real estate platform reimagining the future of property through technology, education, and ownership. His mission is to transform agents into empowered entrepreneurs and cities into interconnected empires.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Speaking Topics</h2>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>The Future of Real Estate: From Brokerage to Platform</li>
            <li>Turning Agents into Entrepreneurs</li>
            <li>Design, Tech & Brand in Real Estate</li>
            <li>How to Scale Without Losing Soul</li>
            <li>Personal Mastery for Founders</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Signature Quotes</h2>
          <ul className="mt-2 text-gray-700 space-y-2">
            <li>"We don’t sell homes. We build legacies."</li>
            <li>"LXET is not a brokerage. It’s a movement."</li>
            <li>"Leadership isn’t about control. It’s about platforming others."</li>
            <li>"Every agent is one system away from becoming an empire."</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Connect</h2>
          <div className="flex flex-col space-y-2 mt-2">
            <a href="https://www.instagram.com/lxetegypt" className="text-blue-600 underline">Instagram</a>
            <a href="https://www.linkedin.com" className="text-blue-600 underline">LinkedIn</a>
            <a href="https://www.facebook.com" className="text-blue-600 underline">Facebook</a>
            <a href="mailto:press@lxet.com" className="text-blue-600 underline">press@lxet.com</a>
          </div>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-10">
        Cairo, Egypt / Available Globally
      </footer>
    </div>
  );
}