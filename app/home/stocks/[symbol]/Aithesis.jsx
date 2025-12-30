'use client'
const thesisItems = [
  {
    title: "Business Model",
    icon: "🧩",
    description:
      "Apple operates a vertically integrated ecosystem combining hardware, software, and services to create high-margin recurring revenue streams.",
  },
  {
    title: "Revenue Drivers",
    icon: "📈",
    description:
      "iPhone sales remain the core revenue driver, accounting for 52% of total revenue, while services segment is growing at 16% YoY.",
  },
  {
    title: "Growth Drivers",
    icon: "⚡",
    description:
      "AI integration in devices, expansion in emerging markets, and growing services adoption are key growth catalysts for 2024–2025.",
  },
  {
    title: "Key Risks",
    icon: "🛡️",
    description:
      "Regulatory pressures, increased competition in premium devices, and macroeconomic headwinds could impact growth.",
  },
  {
    title: "Competitive Position",
    icon: "🏆",
    description:
      "Strong brand loyalty, ecosystem lock-in, and significant R&D spending maintain Apple’s competitive moat in the premium segment.",
  },
  {
    title: "Long-term Outlook",
    icon: "🔮",
    description:
      "Bullish outlook driven by AI innovations, subscription services growth, and potential margin expansion opportunities.",
  },
];

const AIStockThesis = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <header className="mb-8">
        <h2 className="text-xl text-black sm:text-2xl font-semibold flex items-center gap-2">
          ⚡ AI Stock Thesis
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          AI-generated analysis of APPLE&apos;s investment thesis
        </p>
      </header>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {thesisItems.map((item, index) => (
          <div
            key={index}
            className="
              group
              rounded-xl
              border border-gray-200
              bg-white
              p-5
              transition-all
              duration-200
              hover:border-blue-500
              hover:ring-2
              hover:ring-blue-500/20
              hover:bg-blue-50/30
              focus-within:ring-2
              focus-within:ring-blue-500/20
            "
          >
            {/* Card Header */}
            <div className="flex items-center gap-3 mb-3">
              <div className="
                w-9 h-9
                flex items-center justify-center
                rounded-full
                bg-gray-100
                text-lg
                group-hover:bg-blue-100
                transition
              ">
                {item.icon}
              </div>

              <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                {item.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AIStockThesis;
