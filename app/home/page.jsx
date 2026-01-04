import Searchbar from "./stocks/Searchbar";
import Popularstok from "./Popularstocks";
import Allstock from "./AllStocks";
import { Suspense } from "react";


export default function HomePage() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="flex items-center justify-between px-8 py-4 bg-white border-b">
                <div className="flex items-center gap-2 text-xl font-semibold">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded flex items-center justify-center">
                        S
                    </div>
                    StockExplorer
                </div>

                <nav className="flex gap-6 text-sm text-black">
                    <span className="text-black font-medium">Dashboard</span>
                    <span>Watchlist</span>
                    <span>Insights</span>
                    <span>Settings</span>
                </nav>
            </header>

            {/* Content */}
            <section className="w-full px-8 py-6">
                <Searchbar />
                {/* <Suspense fallback={<p className="text-black text-center mt-5">Loading popular stocks...</p>}>
                    <Popularstok />
                </Suspense> */}

                <Suspense fallback={<p className="text-black text-center mt-5">Loading News...</p>}>
                    <Allstock />
                </Suspense>
            </section>

        </main>
    );
}
