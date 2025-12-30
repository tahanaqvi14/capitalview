export default function Allstock() {
    return (
        <div>
            <h2 className="text-lg font-semibold mb-4 text-black" >
                All Stocks
            </h2>

            <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white border rounded-lg p-4 flex justify-between items-center hover:shadow-lg hover:-translate-y-1 transition-transform transition-shadow duration-500 ease-out cursor-pointer mb-2"
            >
                <div>
                    <p className="font-semibold text-black">META</p>
                    <p className="text-sm text-black">Meta Platforms Inc.</p>
                </div>

                <div className="text-right">
                    <p className="font-semibold text-black">$512.45</p>
                    <p className="text-sm text-black">NASDAQ · USD</p>
                </div>
            </a>

            <div className="bg-white border rounded-lg p-4 flex justify-between items-center hover:shadow-lg hover:-translate-y-1 transition-transform transition-shadow duration-500 ease-out cursor-pointer">
                <div>
                    <p className="font-semibold text-black">META</p>
                    <p className="text-sm text-black">
                        Meta Platforms Inc.
                    </p>
                </div>

                <div className="text-right">
                    <p className="font-semibold text-black">$512.45</p>
                    <p className="text-sm text-black">
                        NASDAQ · USD
                    </p>
                </div>
            </div>
        </div>
    )
}