'use client'

const newsItems = [
  {
    title: "Apple Announces New M4 Chip with Advanced Neural Engine",
    description:
      "Apple unveils its next-generation M4 chip featuring an upgraded Neural Engine designed for faster and more efficient on-device AI processing.",
    impact:
      "Strengthens Apple’s AI moat and supports long-term device differentiation.",
    source: "Apple Press Release",
    time: "2 days ago",
    sentiment: "Bullish",
    url: "https://www.apple.com/newsroom/",
  },
  {
    title: "iPhone 16 Sales Exceed Expectations in Q4",
    description:
      "Strong holiday quarter performance driven by AI-powered features and an accelerated consumer upgrade cycle.",
    impact:
      "Improves near-term revenue outlook and supports premium valuation.",
    source: "Market Analysts",
    time: "4 days ago",
    sentiment: "Bullish",
    url: "https://www.bloomberg.com/",
  },
];

const NewsSimplifier = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <header className="mb-6">
        <h2 className="text-black text-xl sm:text-2xl font-semibold">
          News Simplifier
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          AI-simplified news and market impact for APPLE
        </p>
      </header>

      {/* News List */}
      <div className="space-y-4">
        {newsItems.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              block
              group
              bg-white
              border border-gray-200
              rounded-xl
              p-5
              shadow-sm
              transition-all
              duration-200
              hover:-translate-y-1
              hover:shadow-md
              hover:border-blue-500
            "
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              {/* Left Content */}
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base group-hover:text-blue-600 transition">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  {item.description}
                </p>

                {/* Impact */}
                <p className="text-sm mt-2 text-gray-700">
                  <span className="font-medium text-gray-900">
                    Market Impact:
                  </span>{" "}
                  {item.impact}
                </p>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-3 mt-3 text-xs text-gray-400">
                  <span>{item.time}</span>
                  <span>•</span>
                  <span>{item.source}</span>
                  <span className="flex items-center gap-1 text-blue-500">
                    Read more ↗
                  </span>
                </div>
              </div>

              {/* Sentiment Badge */}
              <div className="flex sm:justify-end">
                <span
                  className="
                    inline-flex items-center gap-1
                    rounded-full
                    border border-green-200
                    bg-green-50
                    px-3 py-1
                    text-xs
                    font-medium
                    text-green-700
                    whitespace-nowrap
                  "
                >
                  ↗ {item.sentiment}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default NewsSimplifier;
