# OpenAI API: Introduction
This is the repository for the LinkedIn Learning course OpenAI API: Introduction. The full course is available from [LinkedIn Learning][lil-course-url].


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
6. To run the Python examples in terminal, navigate to the `/python` folder and use the `python [filename.py]` command.
7. To run the Node.js examples in terminal, navigate to the `/node` folder and use the `node [filename.js]` command.


[0]: # (Replace these placeholder URLs with actual course URLs)

[lil-course-url]: https://www.linkedin.com/learning/
[lil-thumbnail-url]: http://

