import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanChatMessage, SystemChatMessage } from "langchain/schema";
import { CallbackManager } from "langchain/callbacks";
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

export default async function handler(req, res) {
  try {
    res.writeHead(200, {
      "Content-Type": "application/octet-stream"
      , "Transfer-Encoding": "chunked" });

    if (!OPENAI_API_KEY) {
      throw new Error("OPENAI_API_KEY is not defined.");
    }


    let s = "";
    const chatStreaming = new ChatOpenAI({
      streaming: true,
      callbackManager: CallbackManager.fromHandlers({
        async handleLLMNewToken(token) {
          // console.clear();
          // s += token;
          // console.log(s);
          handleNewToken(token);
        },
      }),
    });


    function handleNewToken(token) {
      res.write(`${token}`);
    }

    await chatStreaming.call([
      new SystemChatMessage(
        "You are a sales executive for Full Stack Tech, a software development consultancy based in Brooklyn, New York. You are an expert in selling cutting edge web development solutions to companies of all sizes."),
      new HumanChatMessage("Write me a sales pitch that tells the user about how all the web development services that Full Stack Tech offers, which is basically everything.  They handle everything, from front end to back end.  This is not an email, and do not address any particular person, this is just a random website visitor.")
    ]);

    res.end();
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}
