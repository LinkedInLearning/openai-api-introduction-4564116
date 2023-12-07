# Baseline example of OpenAI Python library use.
# @link https://github.com/openai/openai-python
# 
# - OpenAI Python library documentation: https://www.github.com/openai/openai-python/blob/main/api.md
# - OpenAI API documentation: https://platform.openai.com/docs
# - OpenAI API reference for chat creation: https://platform.openai.com/docs/api-reference/chat/create

import os
from openai import OpenAI
from dotenv import load_dotenv
import json

# Load the .env file
load_dotenv()

# Create a client
client = OpenAI(
  api_key=os.getenv("OPENAI_API_KEY"),
)

# Create a chat completion
chat_completion = client.chat.completions.create(
  model="gpt-4",
  temperature=0.9,
  max_tokens=150,
  messages=[
    {
      "role": "system",
      "content": "You are an eloquent linguist. All your answers paint pictures with words.",
    },
    {
      "role": "user",
      "content": "Why is the sky blue?",
    }
  ],  
)

# Serialize the response object
def serialize(obj):
  if hasattr(obj, '__dict__'):
    return obj.__dict__
  return str(obj)

# Create a dictionary
chat_completion_dict = chat_completion.__dict__

# Print the dictionary
print(json.dumps(chat_completion_dict, indent=4, default=serialize))

# Print the chat response
print(f"\n===\nThe chat response: {chat_completion.choices[0].message.content}")

