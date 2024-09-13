const express = require("express");
const axios = require("axios");
const ParaphraseRouter = express.Router();

ParaphraseRouter.post("/", async (req, res) => {
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
              "You are a helpful assistant that rephrases sentences provided by the user. You should only return the rephrased sentences without any additional comments or context.",
          },
          { role: "user", content: text },
        ],
        max_tokens: 100,
        n: 3,
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
    const paraphrasedText = response.data.choices.map(
      (choice) => choice.message.content
    );
    res.status(200).json(paraphrasedText || []);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = ParaphraseRouter;
