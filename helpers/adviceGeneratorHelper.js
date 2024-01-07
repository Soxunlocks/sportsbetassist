const { OpenAI } = require('openai');
const openai = new OpenAI(process.env.OPENAI_API_KEY);

async function generateBettingAdvice(oddsData) {
  const prompts = oddsData.map(event => {
    return `Event: ${event.name}, Start Time: ${event.startTime}, Participants: ${event.participants.join(', ')}, Odds: ${JSON.stringify(event.odds)}`;
  }).join('\n');

  const prompt = `Analyze the following betting odds and provide advice:\n${prompts}`;

  try {
    const response = await openai.createCompletion({
      model: "GPT-4", // INPUT_REQUIRED {Change to GPT-4 model when available}
      prompt: prompt,
      max_tokens: 100,
      n: 1,
      stop: ["\n", " Human:"],
      temperature: 0,
    });

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error(`Error generating betting advice: ${error}`);
    throw error;
  }
}

module.exports = { generateBettingAdvice };
