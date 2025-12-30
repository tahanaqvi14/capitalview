'use client'

export default function Allstock({keyword}) {


    return (
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="block bg-white border rounded-lg p-4 flex justify-between items-center hover:shadow-lg hover:-translate-y-1 transition-transform transition-shadow duration-500 ease-out cursor-pointer mb-2">
            <div>
                <p className="font-semibold text-black">META</p>
                <p className="text-sm text-black">Meta Platforms Inc.</p>
            </div>

            <div className="text-right">
                <p className="font-semibold text-black">$512.45</p>
                <p className="text-sm text-black">NASDAQ · USD</p>
            </div>
        </a>
        // <div className=" w-full max-w-3xl mx-auto rounded-lg border border-gray-200 bg-white px-4 sm:px-6 lg:px-8 py-8 sm:py-10 text-center">
        //     <p className=" text-sm sm:text-base font-medium text-gray-700">
        //         No stocks found matching{" "}
        //         <span className="font-semibold">"{keyword}"</span>
        //     </p>
        //     <p className=" mt-2 text-xs sm:text-sm text-gray-500">
        //         Try searching with different keywords, symbols, or country names
        //     </p>
        // </div>

    )
}