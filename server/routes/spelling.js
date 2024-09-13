const express = require("express");
const axios = require("axios");
const SpellingRouter = express.Router();

SpellingRouter.post("/", async (req, res) => {
  const { text } = req.body;
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You are a helpful assistant that corrects spellings in sentences provided by the user. You should only return the corrected sentences without any additional comments or context.",
          },
          { role: "user", content: text },
        ],
        max_tokens: 100,
        n: 1,
        temperature: 0.7,
        stop: null,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );
    const correctedText = response.data.choices[0].message.content;
    res.status(200).json(correctedText || []);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = SpellingRouter;
