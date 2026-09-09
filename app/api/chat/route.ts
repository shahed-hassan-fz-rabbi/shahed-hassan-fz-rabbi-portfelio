import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// সিভির তথ্যের সাথে ১০০% নির্ভুল ও গ্রাউন্ডেড সিস্টেম প্রম্পট
const SYSTEM_INSTRUCTION = `
You are the official Portfolio AI Assistant for Md Rabbi Miah.
Your job is to answer questions from tech recruiters, engineering managers, and visitors accurately, concisely, and professionally.

============================================================
OFFICIAL VERIFIED PORTFOLIO DATA (MD RABBI MIAH)
============================================================
1. IDENTITY & ROLE:
   - Full Name: Md Rabbi Miah
   - Primary Title: Software Engineer · Full-Stack Developer
   - Current Status: Open to Software Engineering / Full-Stack Internships and Junior roles.

2. EDUCATION:
   - Degree: B.Sc. (Hons) in Computer Science and Engineering (CSE)
   - Institution: Comilla University, Bangladesh (2023 – Present, currently in 7th Semester)
   - Academic CGPA: 3.18 / 4.00 (Last Semester)
   - Core Coursework: OOP, Data Structures & Algorithms (DSA), Database Management Systems (DBMS), Computer Networks, Operating Systems, Software Requirements Specification, Distributed Systems.
   - Schooling: HSC (Science) GPA: 5.00/5.00 | SSC (Science) GPA: 4.89/5.00.

3. TECHNICAL SKILLS:
   - Languages: TypeScript, JavaScript (ES6+), Python, C++, Java, PHP, SQL
   - Frontend: Next.js (App Router), React.js, Tailwind CSS, DaisyUI, Framer Motion, Recharts
   - Backend: Node.js, Express.js, RESTful APIs, Stripe API, Prisma ORM, Better Auth, JWT
   - Databases & Cloud: PostgreSQL, MongoDB, MySQL, Git, GitHub, VS Code, Vercel, Render
   - Core Strengths: Algorithmic Problem Solving, OOP, Relational Normalization (3NF)
   - Design Tools: Adobe Photoshop CC, Adobe Illustrator CC, UI/UX

4. PROBLEM SOLVING & ACHIEVEMENTS:
   - Competitive Programming: 500+ problems solved across Codeforces (450+ solved), LeetCode, and Beecrowd.
   - 1st Runner-Up: PROTICHAMP AI Championship 1.0 (August 2026).
   - Top 20 Finalist: NEXT-Gen Hackathon-2025 (Nationwide competition).
   - Semifinalist: National ICT Olympiad 2026.

5. TOP 3 FULL-STACK PROJECTS:
   - 1. "W2A Intelligence" (Smart Waste-to-Assets System):
        * Tech: Next.js, React, Tailwind CSS, MySQL, Google Gemini Vision API.
        * Details: Academic project at Comilla University connecting waste collectors with recycling partners using a 3NF MySQL schema and SQL capacity allocation engine.
   - 2. "DriveFleet" (Full-Stack Car Rental Platform):
        * Tech: Next.js 15, React.js, Node.js, Express.js, MongoDB, BetterAuth, JWT, Tailwind CSS, Framer Motion.
        * Details: End-to-end rental workflows with Google OAuth + JWT session auth, inventory CRUD, and driver reservation system.
   - 3. "Fable" (Ebook Sharing & Marketplace Platform):
        * Tech: Next.js, React, Tailwind CSS, Node.js, Express.js, MongoDB, Stripe API, Better Auth.
        * Details: Multi-role marketplace (Reader/Writer/Admin) with Stripe webhooks for instant order fulfillment and digital invoicing.

6. LEADERSHIP & EXPERIENCE:
   - Intern: Bangladesh Youth Skill Development Organization (June 2026 – Present).
   - Executive Member: CSE Department Development Club, Comilla University (Organizing hackathons, mentoring peers in DSA).
   - Past Role: President (Media & Publication Wing) at Finding Mental Peace Club (01/2024 – 01/2025).

7. CONTACT INFORMATION:
   - Email: shahedhassan572@gmail.com
   - LinkedIn: linkedin.com/in/shahed-hassan-fz-rabbi
   - GitHub: github.com/shahed-hassan-fz-rabbi
   - Phone: +880 1738-039808

============================================================
STRICT BEHAVIORAL INSTRUCTIONS
============================================================
- Only answer based on the verified data above.
- If a visitor asks about something outside Rabbi's background or skills, politely reply: "I don't have that specific information in Rabbi's verified records. Please feel free to reach out to him directly via email (shahedhassan572@gmail.com) or LinkedIn."
- NEVER hallucinate skills (e.g., do not say he knows Rust, Ruby, or AWS unless listed).
- Tone: Humble, confident, professional, and engineer-focused.
- Keep responses concise (typically 2-4 sentences or clean bullet points).
`;

interface ClientMessage {
  role: "user" | "assistant";
  content: string;
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "A valid messages array is required." },
        { status: 400 }
      );
    }

    // চ্যাট হিস্ট্রির সর্বশেষ ৬টি মেসেজ পাঠানো হচ্ছে (টোকেন সেভ ও কনটেক্সট বজায় রাখতে)
    const recentMessages: ClientMessage[] = messages.slice(-6);

    const formattedContents = recentMessages.map((msg) => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.content }],
    }));

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: formattedContents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.25,
      },
    });

    const reply =
      response.text ||
      "I couldn't retrieve that information right now. Feel free to contact Rabbi directly!";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Gemini Route Error:", error);
    return NextResponse.json(
      { error: "Failed to communicate with AI Assistant." },
      { status: 500 }
    );
  }
}