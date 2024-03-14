import { geminiAIConfig, safetySettings } from "@/config/ai_config";
import { GoogleGenerativeAI } from "@google/generative-ai"
import { NextResponse } from "next/server"
import { generationConfig } from "../../../config/ai_config";

export async function GET(req) {
    return NextResponse.json({ 'Message': 'Hello🖐, Api is Working 🚀' }, { status: 200 })
}

export async function POST(req) {
    try {
        const { prompt, lang } = await req.json();
        if (!prompt) {
            return NextResponse.json({ message: 'Prompt Cannot be empty' }, { status: 400 })
        }
        const PROMPT = process.env.DETAILED_PROMPT + " " + prompt + `and the language is ${lang}`;
        const model = new GoogleGenerativeAI(geminiAIConfig.apiKey);
        const genAI = model.getGenerativeModel({ model: geminiAIConfig.textModel });

        const result = (await genAI.generateContent(PROMPT, generationConfig, safetySettings)).response;
        const output = result.text();

        return NextResponse.json({ 'output': output }, { status: 200 });

    }
    catch (err) {
        return NextResponse.json({ message: 'Internal Server Error', error: err }, { status: 500 })
    }
}

