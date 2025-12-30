'use client'

export default function Basicinf() {

    return(
        <div className="w-full max-w-6xl mt-5 mx-auto bg-white rounded-xl border border-gray-200 px-6 py-5 sm:px-8 sm:py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        {/* LEFT SECTION */}
        <div className="flex flex-col gap-4">
            <div>
                <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    Apple Inc.
                </h1>
                <p className="text-sm text-gray-500">AAPL</p>
            </div>

            <div className="flex gap-12">
                <div>
                    <p className="text-sm text-gray-500">Sector</p>
                    <p className="text-sm font-medium text-gray-900">
                        Technology
                    </p>
                </div>

                <div>
                    <p className="text-sm text-gray-500">Market Cap</p>
                    <p className="text-sm font-medium text-gray-900">
                        $3.2T
                    </p>
                </div>
            </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="text-left sm:text-right">
            <p className="text-3xl sm:text-4xl font-bold text-gray-900">
                $242.84
            </p>
            <p className="mt-1 text-sm font-medium text-green-600 flex sm:justify-end items-center gap-1">
                <span>↗</span>
                <span>+$5.92 (2.48%)</span>
            </p>
        </div>
    </div>
    )
}