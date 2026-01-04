import { getallnews } from "../../lib/Apis";


function timeAgo(unixSeconds) {
    const diff = Date.now() - unixSeconds * 1000;
  
    if (diff < 0) return 'in the future';
  
    const sec = Math.floor(diff / 1000);
    if (sec < 60) return 'just now';
  
    const min = Math.floor(sec / 60);
    if (min < 60) return `${min} min ago`;
  
    const hr = Math.floor(min / 60);
    if (hr < 24) return `${hr} hr ago`;
  
    const day = Math.floor(hr / 24);
    if (day < 7) return `${day} day${day > 1 ? 's' : ''} ago`;
  
    const week = Math.floor(day / 7);
    if (week < 5) return `${week} week${week > 1 ? 's' : ''} ago`;
  
    const month = Math.floor(day / 30);
    if (month < 12) return `${month} month${month > 1 ? 's' : ''} ago`;
  
    const year = Math.floor(day / 365);
    return `${year} year${year > 1 ? 's' : ''} ago`;
  }
  

export default async function Allstock() {
    let stocks = await getallnews();

    stocks = stocks.slice(0, 5).map(item => ({
        ...item,
        datetime: timeAgo(item.datetime)
      }));
    

    return (
        <div className="mx-auto py-6">
            <h2 className="text-lg font-semibold mb-4 text-black">
                Latest Market News
            </h2>

            {stocks.map((item) => (
                <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
            group
            block
            bg-white
            border border-gray-200
            rounded-lg
            p-5
            mb-4
            shadow-sm
            transition
            hover:border-blue-400
          "
                >
                    <div className="flex flex-col">
                        {/* Headline */}
                        <p className="
              text-base
              font-semibold
              text-black
              mb-1
              transition
              group-hover:text-blue-600
            ">
                            {item.headline}
                        </p>

                        {/* Summary */}
                        <p className="text-sm text-gray-600 leading-relaxed mb-3">
                            {item.summary}
                        </p>

                        {/* Meta */}
                        <div className="flex items-center text-xs text-gray-500">
                            <span className="font-medium text-gray-900 mr-2">
                                {item.source}
                            </span>
                            ·
                            <span className="ml-2">
                                {item.datetime}
                            </span>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
}
