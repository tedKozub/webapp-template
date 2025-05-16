import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-100 flex flex-col">
      {/* Header */}
      <header className="p-6 flex justify-between items-center max-w-7xl mx-auto w-full">
        <h1 className="text-2xl font-bold text-sky-700">MyApp</h1>
        <nav className="space-x-4">
          <a href="#" className="text-gray-600 hover:text-sky-700">
            Features
          </a>
          <a href="#" className="text-gray-600 hover:text-sky-700">
            Pricing
          </a>
          <a href="#" className="text-gray-600 hover:text-sky-700">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero */}
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          <h2 className="text-5xl font-extrabold text-sky-800 mb-4">
            Build fast with Vite + React
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Lightning-fast development experience with Tailwind CSS styling out
            of the box.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-sky-600 text-white px-6 py-3 rounded-xl shadow hover:bg-sky-700 transition">
              Get Started
            </button>
            <button className="border border-sky-600 text-sky-600 px-6 py-3 rounded-xl hover:bg-sky-50 transition">
              Learn More
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-400 text-sm">
        © 2025 MyApp. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
