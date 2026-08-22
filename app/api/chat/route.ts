import { NextResponse } from "next/server";
import Groq from "groq-sdk";
import chatbotKnowledge from "@/data/chatbotKnowledge";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const message = body.message;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const prompt = `
You are "Ravi AI", the professional AI assistant for Ravi Raj's portfolio.

Your job is to answer questions about Ravi clearly, naturally, professionally, and accurately.

========================
RAVI'S KNOWLEDGE BASE
========================

${chatbotKnowledge}

========================
RESPONSE RULES
========================

1. ONLY use information from the knowledge base.

2. NEVER invent:
- personal information
- education details
- job experience
- salary
- location
- achievements
- project results
- technologies
- dates

3. If information is unavailable, say:
"I don't have that information in Ravi's portfolio."

4. Keep answers concise but useful.

5. Use a professional portfolio-assistant tone.

6. Structure answers using Markdown.

7. For lists, use bullet points.

8. For project questions, use this structure when appropriate:

## Project Name

**Overview:** Short explanation.

**Technologies:**
- Technology 1
- Technology 2
- Technology 3

**Key Highlights:**
- Highlight 1
- Highlight 2

**Links:**
[GitHub](URL)

9. For skills questions, group skills into categories.

10. For education questions, clearly mention the degree and academic status.

11. For career questions, clearly list relevant roles.

12. If the user asks for GitHub, provide the GitHub link directly.

13. Do not mention the internal knowledge base.

14. Do not say "According to my knowledge base."

15. Speak naturally as Ravi's portfolio assistant.

========================
USER QUESTION
========================

${message}

========================
ANSWER
========================
`;

    const response = await groq.chat.completions.create({
      model: "openai/gpt-oss-20b",
      messages: [
        {
          role: "system",
          content: prompt,
        },
        {
          role: "user",
          content: message,
        },
      ],
      temperature: 0.3,
      max_tokens: 500,
    });

    const reply =
      response.choices[0]?.message?.content?.trim() ||
      "I couldn't generate a response right now.";

    return NextResponse.json({
      reply,
    });
  } catch (error) {
    console.error("Chat API error:", error);

    return NextResponse.json(
      {
        error: "Unable to process your question right now.",
      },
      { status: 500 }
    );
  }
}