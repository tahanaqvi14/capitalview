import { getTopStocks } from "../../lib/Apis"
import Link from "next/link";


export  default async function  Popularstok({ apiResponse }) {
    const stocks=await getTopStocks();
    // console.log(stocks);
    return (
        <div className="mb-10">
            <h2 className="text-lg font-semibold mb-4 text-black">
                Popular Stocks
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {Object.entries(stocks).map(([symbol, stock]) => {
                    const price = Number(stock.close);
                    const change = Number(stock.percent_change);
                    const isUp = change >= 0;

                    return (
                        <Link
                            key={symbol}
                            href={`home/stocks/${stock.symbol}`}
                            rel="noopener noreferrer"
                            className="block bg-white p-4 rounded-lg border hover:shadow-lg hover:-translate-y-1 transition-transform transition-shadow duration-500 ease-out cursor-pointer"
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="font-semibold text-black">{stock.symbol}</p>
                                    <p className="text-sm text-black">{stock.name}</p>
                                </div>

                                <span className={isUp ? "text-green-600" : "text-red-600"}>
                                    {isUp ? "↗" : "↘"}
                                </span>
                            </div>

                            <div className="mt-4">
                                <p className="text-xl font-semibold text-black">
                                    ${price.toFixed(2)}
                                </p>
                                <p className={`text-sm ${isUp ? "text-green-600" : "text-red-600"}`}>
                                    {isUp && "+"}
                                    {change.toFixed(2)}%
                                </p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
