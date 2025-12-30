'use client'
import { useSearchParams } from 'next/navigation';
import Searchbar from './Searchbar';
import Allstock from './Allstocks'
export default function Stockpage() {
    const searchParams = useSearchParams();
    const query = searchParams.get('query');

    console.log(query);

    return (
        <main className='bg-gray-50 min-h-screen'>
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

            <section className="w-full px-1 py-6">
                <Searchbar />
                <div className="w-full mt-3 py-4 sm:py-6">
                    <div className="max-w-4xl mx-auto px-3 sm:px-4">
                        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
                            Search Results for{" "}
                            <span className="text-[#193CB8]">"{query}"</span>
                        </h1>

                        <p className="mb-4 mt-1 text-xs sm:text-sm text-gray-500">
                            Showing stocks matching your search keyword
                        </p>
                        <Allstock keyword={query}/>
                    </div>
                </div>

            </section>

        </main>
    );
}
