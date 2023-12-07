/**
 * Core app functionality.
 */
import { request } from "./request.js";

const chat = document.querySelector("#chat");
const input = document.querySelector(".inputform");
const inputField = document.querySelector(".inputfield");

// Create input field
chat.appendChild(input);
inputField.focus();

// Create cursor
const cursor = document.createElement("span");
cursor.setAttribute("class", "cursor");
cursor.innerHTML = " > ";

/**
 * Add the AI response to the chat div.
 * @param {string} inputValue
 */
const getAIResponse = async (inputValue) => {
  const assistant = document.createElement("span");
  assistant.classList.add("assistant");
  assistant.classList.add("stream");
  chat.appendChild(assistant);
  try {
    await request(chat, inputValue);
  } catch (error) {
    console.error("Error:", error);
  }

  assistant.classList.remove("stream");
};

/**
 * On submit input:
 * 1. Get input value
 * 2. Add input value to chat div inside a span with class "user"
 * 3. Call getAIResponse() function
 * 4. Append input field to chat div
 */
input.onsubmit = async (e) => {
  e.preventDefault();

  const inputValue = inputField.value;
  // remove input from the chat div
  input.remove();
  const chatText = chat.innerHTML;
  chat.innerHTML = `${chatText} <span class="user">${inputValue}</span> `;
  inputField.value = "";
  try {
    await getAIResponse(inputValue);
  } catch (error) {
    console.error("Error:", error);
  }
  chat.appendChild(cursor);
  chat.appendChild(input);
  inputField.focus();
};
