import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// Simple in-memory cache (per server instance)
const thesisCache = new Map();

export async function getStockThesis(symbol) {
  if (!symbol) return null;

  // ✅ Return cached result if available
  if (thesisCache.has(symbol)) {
    return thesisCache.get(symbol);
  }

  const prompt = `
You are an expert financial analyst. I am giving you a stock symbol: "${symbol}"

Generate a brief AI-powered stock thesis for this company. Include these sections:

1. Business Model
2. Revenue Drivers
3. Growth Drivers
4. Key Risks
5. Competitive Position
6. Long-term Outlook

Output ONLY valid JSON:

{
  "symbol": "${symbol}",
  "businessModel": "",
  "revenueDrivers": "",
  "growthDrivers": "",
  "keyRisks": "",
  "competitivePosition": "",
  "longTermOutlook": ""
}
`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
    });

    let aiText =
      response?.candidates?.[0]?.content?.parts?.[0]?.text ?? "";

    if (!aiText) return null;

    aiText = aiText.replace(/```(?:json)?/g, "").trim();

    const parsed = JSON.parse(aiText);

    // ✅ Cache successful result
    thesisCache.set(symbol, parsed);

    return parsed;

  } catch (error) {
    // 🚨 DO NOT THROW
    console.error("Gemini stock info error:", error);
    return null;
  }
}
