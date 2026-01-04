import { getCopmanyInfo } from "@/lib/Apis";
import { getPriceInfo } from "@/lib/Apis";

function formatMarketCap(marketCapMillions) {
    if (marketCapMillions == null) return "—";

    if (marketCapMillions >= 1_000_000) {
        return (marketCapMillions / 1_000_000).toFixed(2) + "T";
    }

    if (marketCapMillions >= 1_000) {
        return (marketCapMillions / 1_000).toFixed(2) + "B";
    }

    if (marketCapMillions >= 1) {
        return marketCapMillions.toFixed(2) + "M";
    }

    if (marketCapMillions >= 0.001) {
        return (marketCapMillions * 1_000).toFixed(2) + "K";
    }

    return "$" + (marketCapMillions * 1_000_000).toFixed(0);
}



export default async function Basicinf({ symbol }) {
    const stocksinfo = await getCopmanyInfo(symbol);
    const stocksinfo1 = await getPriceInfo(symbol);

    // loading checks
    const isCompanyLoading = !stocksinfo;
    const isPriceLoading = !stocksinfo1;

    const isNegative = stocksinfo1?.dp < 0;

    return (
        <div className="w-full max-w-7xl mt-5 mx-auto bg-white rounded-xl border border-gray-200 px-6 py-5 sm:px-8 sm:py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            
            {/* LEFT SECTION */}
            <div className="flex flex-col gap-4">
                <div>
                    <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
                        {isCompanyLoading ? (
                            <div className="h-6 w-48 bg-gray-200 animate-pulse rounded" />
                        ) : (
                            stocksinfo.name
                        )}
                    </h1>
                    <p className="text-sm text-gray-500">
                        {isCompanyLoading ? "Loading..." : symbol}
                    </p>
                </div>

                <div className="flex gap-12">
                    <div>
                        <p className="text-sm text-gray-500">Sector</p>
                        <p className="text-sm font-medium text-gray-900">
                            {isCompanyLoading ? (
                                <div className="h-4 w-24 bg-gray-200 animate-pulse rounded" />
                            ) : (
                                stocksinfo.finnhubIndustry
                            )}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">Market Cap</p>
                        <p className="text-sm font-medium text-gray-900">
                            {isCompanyLoading ? (
                                <div className="h-4 w-28 bg-gray-200 animate-pulse rounded" />
                            ) : (
                                `$${formatMarketCap(stocksinfo.marketCapitalization)}`
                            )}
                        </p>
                    </div>
                </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="text-left sm:text-right">
                <p className="text-3xl sm:text-4xl font-bold text-gray-900">
                    {isPriceLoading ? (
                        <div className="h-10 w-28 bg-gray-200 animate-pulse rounded ml-auto" />
                    ) : (
                        `$${stocksinfo1.c}`
                    )}
                </p>

                {!isPriceLoading && (
                    <p
                        className={`mt-1 text-sm font-medium flex sm:justify-end items-center gap-1
                        ${isNegative ? "text-red-600" : "text-green-600"}`}
                    >
                        <span>{isNegative ? "↘" : "↗"}</span>
                        <span>
                            {stocksinfo1.d > 0 ? "+" : ""}
                            {stocksinfo1.d} ({stocksinfo1.dp}%)
                        </span>
                    </p>
                )}
            </div>
        </div>
    );
}
