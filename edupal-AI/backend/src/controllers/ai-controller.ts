// import express from "express"
import generateContent from "../services/gemini";
import express from "express";

interface ChatMessage {
    role: 'user' | 'model';
    parts: string;
}

interface ChatRequest {
    messages: ChatMessage[];
    subjectExpert: string; // This will be one of your six expert types
}

const reviewCodeController = async (req: express.Request, res: express.Response) => {
  try {
    const { messages, subjectExpert }: ChatRequest = req.body;
    
    if (!messages || !subjectExpert) {
      res.status(400).json({ 
        message: "Both messages array and subjectExpert are required" 
      });
      return;
    }

    // Get the latest user message
    const latestUserMessage = messages
      .filter(msg => msg.role === 'user')
      .pop()?.parts;

    if (!latestUserMessage) {
      res.status(400).json({ message: "No user message found in messages array" });
      return;
    }

    const response = await generateContent(messages, subjectExpert);
    res.status(200).send({ message: response });
  } catch (error) {
    console.error("Error in reviewCodeController:", error);
    res.status(500).send({ message: "Internal server error" });
  }
};

export default reviewCodeController;

// import express from "express"

// export const reviewCodeController = async (req: express.Request, res: express.Response) => {
//     res.status(200).send({ message: "Hello World" });
//   };