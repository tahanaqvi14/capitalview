
export default function Infocard() {

    return (
        <div className="bg-white rounded-xl shadow-sm p-4">
            <p className="text-xs uppercase font-semibold mb-1 text-gray-500">Event</p>
            <h3 className="text-lg font-semibold mb-4 text-black">
                Federal Rate Hike
            </h3>

            <div className="border rounded-lg p-3 mb-4 flex justify-between">
                <span className="text-sm text-black ">Price Reaction</span>
                <span className="text-lg font-bold text-red-500">-3.1%</span>
            </div>

            <p className="text-sm text-gray-600 mb-3">
                Broader market selloff as rising rates increased discount rates
                for future cash flows.
            </p>

            <div className="bg-green-50 text-green-700 text-sm p-3 rounded-lg">
                Fear – uncertainty about economic slowdown triggered profit-taking
            </div>
        </div>
    )

}