/**
 * Helper function to get OpenAI API Key from config.json
 * @returns {Promise<string>} OpenAI API Key
 
 */
export const config = async () => {
  try {
    const response = await fetch('../config.json');
    const config = await response.json();
    return config.OPENAI_API_KEY;
  } catch (error) {
    console.error('Error:', error);
  }
};