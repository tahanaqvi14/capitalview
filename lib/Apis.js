const BASE_URL = "https://api.twelvedata.com"
const BASE_URL_NEW = "https://finnhub.io/api/v1"


export async function getTopStocks() {
  const res = await fetch(`${BASE_URL}/quote?symbol=AAPL,MSFT,NVDA,GOOGL,TSLA&apikey=${process.env.TWELVEDATA_API_KEY}`, {
    next: { revalidate: 1160 }, // ISR
  })
  return res.json();
}


export async function getallnews() {
  const res = await fetch(`${BASE_URL_NEW}/news?category=general&token=${process.env.FINHUB_API_KEY}`, {
    next: { revalidate: 8000 }, // ISR
  })
  return res.json();
}


// export async function getNameOfStock(params) {
//   // console.log(params);
//   const res=await fetch(`${BASE_URL_NEW}/search?q=${params}&token=${process.env.FINHUB_API_KEY}`,{
//     cache: 'no-store'
//   })
//   return res.json();
// }

export async function getNameOfStock(params, retries = 2) {
  for (let i = 0; i <= retries; i++) {
    try {
      const res = await fetch(`${BASE_URL_NEW}/search?q=${params}&token=${process.env.FINHUB_API_KEY}`, {
        cache: 'no-store'
      })
      if (!res.ok) throw new Error(`Status: ${res.status}`);
      console.log(res);
      return await res.json();
    } catch (err) {
      console.warn(`Fetch attempt ${i + 1} failed.`);
      if (i === retries) return { result: [] }; // fallback after last try
      await new Promise(r => setTimeout(r, 500)); // wait 0.5s
    }
  }
}


export async function getPriceInfo(params) {
  const res = await fetch(`${BASE_URL_NEW}/quote?symbol=${params}&token=${process.env.FINHUB_API_KEY}`, {
  })
  return res.json()
}

export async function getCopmanyInfo(params) {
  const res = await fetch(`${BASE_URL_NEW}/stock/profile2?symbol=${params}&token=${process.env.FINHUB_API_KEY}`, {
  })
  return res.json()
}

