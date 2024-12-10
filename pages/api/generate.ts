// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Groq from "groq-sdk";

const groq = new Groq();

export type Data = {
  plan: string;
};


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { exam, time, syllabus, context } = req.body

  const plan = await generatePlan({exam, time, syllabus, context})

  // console.log(exam, time, syllabus, context)
  // console.log(plan.choices[0]?.message?.content || "")

  res.status(200).json({ plan: plan.choices[0]?.message?.content || "" });
}

interface generatePlanProps {
  exam: string,
  time: string,
  syllabus: string,
  context: string
}

export const generatePlan = async ({ exam, time, syllabus, context }: generatePlanProps) => {
  const system_prompt = "You are a trainer who has trained several toppers. You are very helpful and very useful when it comes to giving advice. You are often given a specific time and some syllabus and some other important information which can be case sensitive. You must return with an action plan to finish the task at hand and help your students ace the exam using your previous knowledge of the weightage of chapter for whatsoever exam you are asked for. The action plan you return with must be capable of returning maximum marks for the given time allotted and also provide high quality practice questions with highest rate of coming. Please note the action plan will be displayed in a div component so return in tailwind css html tags format."

  const user_content = `Create an action plan for the ${exam} exam. The syllabus includes: ${syllabus}. You have ${time} to prepare. Additional context: ${context}.`

  return groq.chat.completions.create({
    messages: [
      {
        "role": "system",
        "content": system_prompt
      },
      {
        "role": "user",
        "content": user_content,
      }
    ],

    
    model: "llama3-8b-8192",

    temperature: 0.5,

    max_tokens: 1024,

    top_p: 1,

    stop: null,

    stream: false,
  });
};
