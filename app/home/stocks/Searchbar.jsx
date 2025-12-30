'use client'

import { useRouter } from "next/navigation";
import { useRef } from "react";


export default function Searchbar() {
    const inputRef = useRef()

    const router = useRouter();


    const handleSearch = (e) => {
        e.preventDefault();
        const query = inputRef.current.value.trim();
        if (!query.trim()) return;
        router.push(`/home/stocks?query=${encodeURIComponent(query.trim())}`);
    };

    return (
        <form className="max-w-md mx-auto">
            <label htmlFor="search" className="sr-only">Search</label>
            <div className="relative">
                {/* Search icon */}
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                        className="w-4 h-4 text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth="2"
                            d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                        />
                    </svg>
                </div>

                {/* Input */}
                <input
                    ref={inputRef}
                    type="search"
                    id="search"
                    className="block w-full p-3 pl-9 border border-gray-300 rounded-md text-sm text-gray-900 focus:ring-[#193CB8] focus:border-[#193CB8] placeholder-gray-400 shadow-sm"
                    placeholder="Search Stocks"
                    required
                />

                {/* Button */}
                <button
                    type="submit"
                    onClick={handleSearch}
                    className="absolute right-1.5 bottom-1.5 text-white bg-[#193CB8] hover:bg-[#152F8F] active:bg-[#122885] active:translate-y-px border border-transparent rounded text-xs px-3 py-1.5 focus:outline-none shadow-sm font-medium transition-all"
                >
                    Search
                </button>

            </div>
        </form>
    )
}