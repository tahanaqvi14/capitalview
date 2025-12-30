import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b">
        <div className="text-xl font-bold text-blue-600">CV</div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/login" className="text-blue-600 font-medium">Log In</a></li>
            <li><a href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-xl">Sign Up</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <div className="w-full flex flex-col items-center justify-center">
        <main className="flex flex-col items-center justify-center text-center py-16 px-4 sm:px-8 md:px-16 lg:px-32 max-w-5xl">
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Understand Stocks the Way a Human Investor Does
          </div>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            CapitalView uses AI to turn prices, news, and events into clear, human-readable reasoning about any stock.
          </p>

          <div className="flex space-x-4">
            <Link href={"/home"} className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700">
              Explore a Stock
            </Link>
            <button className="border border-gray-300 px-6 py-3 rounded-xl text-lg text-gray-700 hover:bg-gray-100">
              See How It Works
            </button>
          </div>
        </main>
      </div>

      <section className="bg-gray-50 py-16 sm:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3">
              The Problem with Stock Research
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Investors are overwhelmed with information but lack clarity.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-7">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 font-semibold mb-4">
                1
              </div>
              <h3 className="font-semibold text-base sm:text-lg text-black mb-2">
                Raw Data Without Context
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Stock prices and numbers don&apos;t tell the whole story
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-7">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 font-semibold mb-4">
                2
              </div>
              <h3 className="font-semibold text-base sm:text-lg text-black mb-2">
                Complex Financial News
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Industry jargon and dense reports are hard to understand
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-7">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 font-semibold mb-4">
                3
              </div>
              <h3 className="font-semibold text-base sm:text-lg text-black mb-2">
                No Clear Reasoning
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                It&apos;s unclear why stocks move and what it means for you
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">

            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-bold text-black leading-tight mb-6">
                We Don&apos;t Predict Prices. <br />
                We Explain Businesses.
              </h2>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
                CapitalView simplifies stock research by using AI to analyze price movements,
                news, and corporate events. Instead of overwhelming you with data, we give
                you clear, reasoned explanations.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-semibold">✓</span>
                  <span className="text-sm sm:text-base text-gray-700">
                    AI-powered analysis of stocks and events
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-semibold">✓</span>
                  <span className="text-sm sm:text-base text-gray-700">
                    Human-readable reasoning you can trust
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-semibold">✓</span>
                  <span className="text-sm sm:text-base text-gray-700">
                    Built for learning, not speculation
                  </span>
                </li>
              </ul>
            </div>

            {/* Right Visual */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="w-full max-w-md aspect-square rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center">
                <svg
                  className="w-20 h-20 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            Core Features
          </h2>
          <p className="mt-3 text-gray-600 text-base md:text-lg">
            Everything you need for thoughtful stock research.
          </p>

          {/* Cards */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 text-left">
              <div className="mb-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTTTpzYLzq7B7QCz0Xi6l7Eh8nE3HUjcsL4Q&s"
                  alt="Stock Thesis Generator"
                  className="h-10 w-10"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Stock Thesis Generator
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Get AI-generated business overview, key risks, and long-term outlook
                for any stock.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 text-left">
              <div className="mb-4">
                <img
                  src="https://www.freeiconspng.com/uploads/news-icon-43.png"
                  alt="News Simplifier"
                  className="h-10 w-10"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                News Simplifier
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Complex financial news converted into plain language you can
                understand.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 text-left">
              <div className="mb-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP_xg-_bXYww1uWUAjrMunD30R11kW8xMwcQ&s"
                  alt="Event-Driven Explanation"
                  className="h-10 w-10"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Event-Driven Explanation
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Understand why a stock moved after earnings, mergers, or major
                announcements.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="py-4 bg-gray-100 text-center text-sm text-gray-600">
        <p>© 2025 CapitalView. All rights reserved.</p>
      </footer>
    </div>

  );
}
