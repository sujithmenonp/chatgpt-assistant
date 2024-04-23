const express = require('express');
const bodyParser = require('body-parser');
const { chatGPTAssistant } = require('./api/chatgpt');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Define your API endpoint for handling questions
app.post('/ask', async (req, res) => {
    try {
        const question = req.body.question;
        const response = await chatGPTAssistant("What is the capital of France?", "gpt-3.5");
        res.json({ response });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
