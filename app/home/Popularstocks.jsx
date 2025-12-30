
export default function Popularstok() {
    
    const stocks = [
        { symbol: "AAPL", name: "Apple Inc.", price: 184.52, change: 2.5 },
        { symbol: "MSFT", name: "Microsoft Corp.", price: 416.03, change: 1.8 },
        { symbol: "NVDA", name: "NVIDIA Corp.", price: 135.89, change: 3.2 },
        { symbol: "TSLA", name: "Tesla Inc.", price: 242.84, change: -1.5 },
        { symbol: "GOOGL", name: "Alphabet Inc.", price: 178.45, change: 0.8 },
    ];

    return (
        <div className="mb-10">
            <h2 className="text-lg font-semibold mb-4 text-black">
                Popular Stocks
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {stocks.map((stock) => (
                    <a
                        key={stock.symbol}
                        href="https://www.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-white p-4 rounded-lg border hover:shadow-lg hover:-translate-y-1 transition-transform transition-shadow duration-500 ease-out cursor-pointer"
                    >
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="font-semibold text-black">{stock.symbol}</p>
                                <p className="text-sm text-black">{stock.name}</p>
                            </div>
                            <span className={stock.change >= 0 ? "text-green-600" : "text-red-600"}>
                                {stock.change >= 0 ? "↗" : "↘"}
                            </span>
                        </div>
                        <div className="mt-4">
                            <p className="text-xl font-semibold text-black">${stock.price.toFixed(2)}</p>
                            <p className={`text-sm ${stock.change >= 0 ? "text-green-600" : "text-red-600"}`}>
                                {stock.change > 0 && "+"}
                                {stock.change}%
                            </p>
                        </div>
                    </a>
                ))}
            </div>


        </div>
    )



}