import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY!);

const VALID_EXPERTS = [
  "operating systems",
  "computer networking",
  "object-oriented programming",
  "data structures and algorithms",
  "database management systems",
  "artificial intelligence,machine learning,deep learning",
  "cyber security",
  "c and c++",
  "cloud computing",
  "computer architecture",
  "internet of things",
  "data science, analytics, and data engineering",
];

const generateContent = async (
  messages: Array<{ role: string; parts: string }>,
  subjectExpert: string
) => {
  try {
    const expert = VALID_EXPERTS.includes(subjectExpert.toLowerCase())
      ? subjectExpert
      : "general computer science about cyber security, C and C++, cloud computing, computer architecture, internet of things, data science, analytics, and data engineering ,operating systems, computer networking, object-oriented programming, data structures and algorithms, database management systems, artificial intelligence, machine learning, deep learning";

    const systemInstruction = `
**AI System Instruction: ${expert.toUpperCase()} Exam Guru**

█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
   STRICT EXAM MODE
█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█

You are an expert assistant for last-minute exam preparation in the field of ${expert.toUpperCase()}. Your mission is to deliver urgent, practical, and concise guidance for acing Computer Science university exams.

1. TOPIC ENFORCEMENT:
   🚫 Reject any off-topic questions.
  
   Example rejection: 
   "🚫 [${expert.toUpperCase()} MODE LOCKED] I specialize in:
    • [Topic 1]
    • [Topic 2]
    • [Topic 3]
    Ask me about these for:
    📘 Deep-study resources 
    🔮 Exam predictions"

2. LAST-MINUTE CRISIS MODE:
   If user mentions "exam tomorrow", "urgent", or "last minute":
   - 💥 3 Key Mnemonics
   - 🚨 5 Rapid 1-Markers
   - ⚡ Top Mistake to Avoid
   - 🔥 **Predicted Hot Questions (2025):**
     🎯 1-Mark: Definition/concept
     📘 5-Mark: Diagram/derivation
     📚 10-Mark: Case study/problem

3. TEMPLATE FOR EVERY TOPIC:
   💎 3-Line Explanation (use real-world analogy)
   🧠 5 Key Points (🏗️ format)
   🌐 Real-Life Application
     - Industry: [example]
     - Daily Life: [example]
   📝 Exam Questions:
     🎯 1-Mark Focus
     📘 5-Mark Blueprint
     📚 10-Mark Strategy
   ⚠️ 2 Common Mistakes (with safety risk)
   📚 Deep-Study Resources:
     - Textbook Reference
     - Simulation/MOOC
     - Recent Research

4. TONE:
   Start with: "You've got this! Let's crush ${expert.toUpperCase()} 💪"
   End with: "Remember: 'Engineering is the art of directing nature' - James Nasmyth 🛠️"
`;

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash-preview-04-17",
      systemInstruction,
    });

    const chat = model.startChat({
      history: messages.map((msg) => ({
        role: msg.role,
        parts: [{ text: msg.parts }],
      })),
    });

    const latestUserMessage =
      messages.filter((msg) => msg.role === "user").pop()?.parts || "";

    const result = await chat.sendMessage(latestUserMessage);

    return `📘 ${expert.toUpperCase()} Exam Prep Mode Activated:\n\n${result.response.text()}\n\nYou've got this! 💪`;
  } catch (error) {
    console.error("Error generating content:", error);
    throw new Error("Failed to generate content");
  }
};

export default generateContent;
