/**
 * OpenAI API integration
 */
// import spinner and its methods
import { startSpinner, stopSpinner } from "./spinner.js";
import { config } from '../config.js';

// get the API key from the .env file
console.log("config: ", config);


const OPENAI_API_KEY = await config(); // Replace with your OpenAI API key

export async function request(chat, inputValue) {
  const stream = chat.querySelector(".stream");
  console.log(stream);
  let string = ` <span class="cursor">></span> `;

  startSpinner(chat);

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a slightly anxious and stressed out assistant. Provide short responses. Always end with a follow-up question.",
        },
        { role: "user", content: inputValue },
      ],
      temperature: 0.7,
      stream: true,
    }),
  });

  stopSpinner();

  const reader = response.body.getReader();
  let chunks = "";
  reader.read().then(function processText({ done, value }) {
    if (done) {
      console.log("Stream complete");
      return Promise.resolve();
    }

    chunks += new TextDecoder("utf-8").decode(value);

    // Process all complete chunks in 'chunks'
    let endOfChunkIndex;
    while ((endOfChunkIndex = chunks.indexOf("\n")) !== -1) {
      // Extract one complete chunk
      const chunk = chunks.substring(0, endOfChunkIndex);
      chunks = chunks.substring(endOfChunkIndex + 1);

      // Check if the chunk starts with 'data: '
      if (chunk.startsWith("data: ")) {
        if (chunk.trim() !== "data: [DONE]") {
          try {
            // Parse the chunk into an object
            const chunkObject = JSON.parse(chunk.substring(5)); // Remove 'data: ' prefix and parse JSON

            // Access the content property
            const content = chunkObject.choices[0]?.delta?.content;
            if (content) {
              string = string + content;
              console.log(content);
              console.log(string);
              stream.innerHTML = string;
            }
          } catch (error) {
            console.error("Error parsing JSON:", error);
          }
        }
      }
    }

    return reader.read().then(processText);
  });
}
