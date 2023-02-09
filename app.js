const API_KEY = "your_api_key_here";
const model_engine = "text-davinci-002";
const prompt = "What is the capital of France?";

async function generateText() {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/engines/text-davinci-002/jobs",
      {
        prompt: prompt,
        max_tokens: 100,
        n: 1,
        stop: null,
        temperature: 0.5,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`,
        },
      }
    );

    const generatedText = response.data.choices[0].text;
    console.log(generatedText);
  } catch (error) {
    console.error(error);
  }
}

generateText();
