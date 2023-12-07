/**
 * Baseline example of OpenAI Node.js/TypeScript library use.
 * @link https://github.com/openai/openai-node 
 * 
 * OpenAI Python library documentation: https://github.com/openai/openai-node/blob/master/api.md
 * - OpenAI API documentation: https://platform.openai.com/docs
 * - OpenAI API reference for chat creation: https://platform.openai.com/docs/api-reference/chat/create 
 *  
 */

import OpenAI from 'openai';
import { config } from 'dotenv';
config();

// Create an instance of the OpenAI class with your secret API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Call the OpenAI API with the parameters you want to use
async function main() {
  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-4",
    temperature: 0.9,
    max_tokens: 150,
    messages: [
      {
        "role": "system",
        "content": "You are an eloquent linguist. All your answers paint pictures with words.",
      },
      {
        "role": "user",
        "content": "Why is the sky blue?",
      }
    ],
  });

  // Print the result
  console.log(chatCompletion)
  console.log("===")
  console.log("The chat response: ", chatCompletion.choices[0].message.content)
}

main();