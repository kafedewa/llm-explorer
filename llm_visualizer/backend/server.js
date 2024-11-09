import express from 'express'
import dotenv from 'dotenv'
import OpenAI from "openai";
import { parse } from 'postcss';

dotenv.config();

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.post('/api/getNextResponse', async (req, res) => {
    try {
        const {prompt, response, temperature, top_p} = req.body;

        console.log(response);

        let formattedMessages = [
            {
                "role": "system",
                "content": [
                  {
                    "type": "text",
                    "text": "\"You are a helpful assistant. Provide the next token to continue the assistant message.  Include spaces between words.  Assume tokens will be joined as-is.  For example, for the prompt \\\"What is the square root of 4?\\\" The response should be the tokens \\\"The\\\", \\\" square\\\", \\\" root\\\", \\\" of\\\", \\\" \\\", \\\"4\\\", \\\" is\\\", \\\" \\\", \\\"2\\\", and \\\".\\\" \""
                  }
                ]
              },
              {
                "role": "user",
                "content": [
                  {
                    "type": "text",
                    "text": "what is the square root of 4?"
                  }
                ]
              },
              {
                "role": "assistant",
                "content": [
                  {
                    "type": "text",
                    "text": "The"
                  }
                ]
              },
              {
                "role": "assistant",
                "content": [
                  {
                    "type": "text",
                    "text": " square"
                  }
                ]
              },
              {
                "role": "assistant",
                "content": [
                  {
                    "type": "text",
                    "text": " root"
                  }
                ]
              },
              {
                "role": "assistant",
                "content": [
                  {
                    "type": "text",
                    "text": " of"
                  }
                ]
              },
              {
                "role": "assistant",
                "content": [
                  {
                    "type": "text",
                    "text": " 4"
                  }
                ]
              },
              {
                "role": "assistant",
                "content": [
                  {
                    "type": "text",
                    "text": " is"
                  }
                ]
              },
              {
                "role": "assistant",
                "content": [
                  {
                    "type": "text",
                    "text": " 2"
                  }
                ]
              },
              {
                "role": "assistant",
                "content": [
                  {
                    "type": "text",
                    "text": "."
                  }
                ]
              },
            {
                role: "user",
                content: [{ "type": "text", "text": prompt}]
            }, 
        ];

        if(response.length > 0){
            formattedMessages = formattedMessages.concat(response.map((r) => ({
                role: "assistant",
                content: [{"type": "text", "text": r}]
            })));
        }

        
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            logprobs: true,
            top_logprobs: 5,
            max_completion_tokens: 1,
            messages: formattedMessages,
            temperature: parseFloat(temperature),
            top_p: parseFloat(top_p),
            frequency_penalty: 0,
            presence_penalty: 0,
            response_format: {
                "type": "text"
            },
        });

        console.log(completion);

        res.status(200).json(completion);

    } catch (error) {

        console.error(error);
    res.status(500).json({ error: "An error occurred" });
        
    }

}); 

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});