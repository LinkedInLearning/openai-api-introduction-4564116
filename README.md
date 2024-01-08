# OpenAI API: Introduction
This is the repository for the LinkedIn Learning course OpenAI API: Introduction. The full course is available from [LinkedIn Learning][lil-course-url].


The OpenAI API gives you programmatic access to OpenAI’s GPT system for everything from chat (your own ChatGPT clone) to image processing through Dall-E, to audio processing with Whisper, to building custom assistants and more. In this course you’ll learn how the OpenAI API works, how to use it both in the OpenAI playground and in your own apps, and where to find up-to-date documentation and examples.

_See the readme file in the main branch for updated instructions and information._

## Instructions
This repository provides basic examples of how to use the OpenAI API in both Python and Node.js. The Python examples are found in the `/python` folder, the Node.js examples in the `/node` folder. The examples perform identical tasks using the same API across the two different languages.

There is also a stand-alone web-based example of how to use the streaming feature in the `/streaming` folder. The `/streaming/request.js` file contains the request and stream handling code. To run this example, open `./index.html` in Live Server.

To use these exercise files you need an OpenAI API key. You get that key at [platform.openai.com](https://platform.openai.com)

## Running the examples in GitHub Codespaces
1. Click the "Code" button and select "Codespaces."
2. Create a new Codespace or open one you've already created.
3. Create a new file named `.env` in the root folder.
4. Add `OPENAI_API_KEY=` followed by your OpenAI API key to `.env`
5. Note `.env` is not tracked by GitHub so the file will only exist in this Codespace.
6. To run the Python example in terminal, use the `python example-python.py` command.
7. To run the Node.js example in terminal, use the `node example-node.js` command.

## Running the streaming example in your browser
# For demonstration purposes only!
1. Rename the file `config-template.json` to `config.json`.
2. Add your OpenAI API key to the JSON object.
3. Use the Live Server extension to run `/streaming/index.html` in the browser.
4. Interact with the agent.
5. The API interaction happens in `/streaming/request.js`.
6. IMPORTANT: Read the warning at the top of `/streaming/request.js`.


[0]: # (Replace these placeholder URLs with actual course URLs)

[lil-course-url]: https://www.linkedin.com/learning/openai-api-introduction
[lil-thumbnail-url]: https://media.licdn.com/dms/image/D560DAQEWS5-DC0zYIw/learning-public-crop_675_1200/0/1704245394141?e=2147483647&v=beta&t=DgHF-0BoUcdfRz5JMRlgjCG849Cpr2BnDo1J9fLu-rc

