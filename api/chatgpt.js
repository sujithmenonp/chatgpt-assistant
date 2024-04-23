const axios = require('axios');

async function chatGPTAssistant(question, model, setupText) {
    try {
        // Concatenate setup text and question
        const prompt = setupText + "\n\n" + question;

        const response = await axios.post(
            'https://api.openai.com/v1/completions',
            {
                prompt: prompt,
                model: model, // Include the model parameter
                max_tokens: 50, // Adjust based on your requirements
                temperature: 0.7, // Adjust based on your requirements
                stop: '\n'
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer YOUR_API_KEY'
                }
            }
        );
        return response.data.choices[0].text.trim();
    } catch (error) {
        throw new Error('Failed to get response from ChatGPT assistant.');
    }
}

module.exports = {
    chatGPTAssistant
};
