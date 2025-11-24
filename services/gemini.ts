import { GoogleGenAI, Type } from "@google/genai";
import { MarketReportData } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// System instruction for the chat assistant
const CHAT_SYSTEM_INSTRUCTION = `
You are 'SwiftBot', a helpful and professional virtual assistant for SwiftMove UK, a leading cash house buying company.
Your goal is to assist UK homeowners who are interested in selling their property quickly.
Key Selling Points (Use these in your answers):
1. Speed: We can complete in as little as 7 days (or a timeframe that suits the seller).
2. Certainty: We use our own cash funds. No chains.
3. Fees: We pay all legal fees (up to £1,500). No estate agent fees.
4. Condition: We buy any property in any condition (damp, structural issues, probate, etc.).
5. Process: 1. Get Offer -> 2. Surveyor Visit -> 3. Legals -> 4. Cash in Bank.

Tone: Empathetic, professional, British English (use £, spell 'colour', etc.), and reassuring. 
Never give specific financial advice or guarantee an exact valuation figure without data.
If asked for a specific price, explain that you need more details and a formal valuation, but you can provide general market trends.
`;

export const getMarketReport = async (location: string): Promise<MarketReportData> => {
  try {
    const prompt = `
      Analyze the residential property market in ${location}, UK. 
      Act as a property expert.
      Provide a response in JSON format with the following structure:
      {
        "summary": "A 2-3 sentence overview of the current market activity in this area (simulated based on general UK trends if specific data is unavailable).",
        "traditionalVsCash": {
          "pros": ["3 distinct advantages of using a traditional estate agent in this market"],
          "cons": ["3 distinct disadvantages of using a traditional estate agent in this market (e.g., chain breaks, time)"]
        },
        "estimatedTimeOnMarket": "A realistic estimate string (e.g. '90-120 days') for a traditional sale in this area."
      }
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { type: Type.STRING },
            traditionalVsCash: {
              type: Type.OBJECT,
              properties: {
                pros: { type: Type.ARRAY, items: { type: Type.STRING } },
                cons: { type: Type.ARRAY, items: { type: Type.STRING } },
              },
            },
            estimatedTimeOnMarket: { type: Type.STRING },
          },
        },
      },
    });

    const jsonText = response.text;
    if (!jsonText) throw new Error("No data returned from Gemini");
    return JSON.parse(jsonText) as MarketReportData;

  } catch (error) {
    console.error("Gemini Market Report Error:", error);
    // Fallback data in case of API failure to prevent app crash
    return {
      summary: `We are currently experiencing high demand for market reports in ${location}. However, the general UK market is seeing extended completion times due to mortgage rate fluctuations.`,
      traditionalVsCash: {
        pros: ["Potentially higher final sale price", "Broad market exposure", "Competition between buyers"],
        cons: ["Lengthy conveyancing process (3-6 months)", "Risk of chain breaks", "Estate agent fees (1-2% + VAT)"]
      },
      estimatedTimeOnMarket: "100+ days"
    };
  }
};

export const createChatSession = () => {
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: CHAT_SYSTEM_INSTRUCTION,
    },
  });
};