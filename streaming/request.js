/**
 * Demonstration of how to use the OpenAI API to stream a conversation.
 * NOTE: This is not a production-ready solution. It is a demonstration of how to use the API.
 *       This approach exposes the API key to the client, which is not secure.
 *       In a real-world scenario, the API key and requests should be handled on the server.
 */

// Import the spinner component methods and config settings.
import { startSpinner, stopSpinner } from "./spinner.js";
import { config } from '../config.js';

// Get the OPENAI_API_KEY from config.json
// WARNING: This is an insecure way of handling keys. 
// DO NOT DO THIS IN PRODUCTION.
const OPENAI_API_KEY = await config();

/**
 * Send a request to the OpenAI API to stream a conversation.
 * @param {HTMLElement} chat - The chat element.
 * @param {string} inputValue - The user's input.
 * @returns {Promise<void>} - A promise that resolves when the request is complete.
 * 
 */
export async function request(chat, inputValue) {
  // Get the stream element and add a cursor.
  const stream = chat.querySelector(".stream");
  let string = ` <span class="cursor">></span> `;

  // Start the spinner.
  startSpinner(chat);

  // Send a request to the OpenAI API.
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
      stream: true, // Stream the response
    }),
  });

  // Stop the spinner.
  stopSpinner();

  // Use the getReader() method to access the response body as a stream.
  const reader = response.body.getReader();

  let chunks = "";

  // Read the stream and process the text.
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
