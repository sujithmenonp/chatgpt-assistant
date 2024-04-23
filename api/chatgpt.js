const axios = require('axios');

async function chatGPTAssistant(question, model) {
    try {
        const response = await axios.post(
            'https://api.openai.com/v1/completions',
            {
                prompt: question,
                model: model, // Include the model parameter
                max_tokens: 50, // Adjust based on your requirements
                temperature: 0.7, // Adjust based on your requirements
                stop: '\n'
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer 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'
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
