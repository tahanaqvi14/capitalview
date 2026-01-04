import Basicinf from "./Basicinfo"
import AIStockThesis from "./Aithesis"
import NewsSimplifier from "./News"
import Pricemovement from "./Pricemovement"

export default async function Onestock(props){

    const symbol=await props.params;
    console.log(symbol)
    return (
        <div className="bg-gray-50 min-h-screen">
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

            <Basicinf symbol={symbol.symbol}/>
            <AIStockThesis symbol={symbol.symbol}/>
            <NewsSimplifier />
            <Pricemovement />
        </div>

    )
}