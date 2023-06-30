import { useState } from "react";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanChatMessage, SystemChatMessage, AIChatMessage } from "langchain/schema";
import {
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
  ChatPromptTemplate,
} from "langchain/prompts";
import { Document } from "langchain/document";

function Chatbot() {
  const [chatMessages, setChatMessages] = useState([]);
  const chatPrompt = ChatPromptTemplate.fromPromptMessages([
    SystemMessagePromptTemplate.fromTemplate(
      "The following is a friendly conversation between a human and an AI. The AI is talkative and provides lots of specific details from its context. If the AI does not know the answer to a question, it truthfully says it does not know."
    ),
    new MessagesPlaceholder("history"),
    HumanMessagePromptTemplate.fromTemplate("{input}"),
  ]);

  const chain = new ConversationChain({
    memory: new BufferMemory({ returnMessages: true, memoryKey: "history" }),
    prompt: chatPrompt,
    llm: chat,
  });

  const translationPrompt = ChatPromptTemplate.fromPromptMessages([
    SystemMessagePromptTemplate.fromTemplate(
      "You are a helpful assistant that translates {input_language} to {output_language}."
    ),
    HumanMessagePromptTemplate.fromTemplate("{text}"),
  ]);


  const responseA = await chat.generatePrompt([
    await translationPrompt.formatPromptValue({
      input_language: "English",
      output_language: "French",
      text: "I love programming.",
    }),
  ]);

  console.log(responseA);

  return (
    <>
    <button
    className="text-lg font-bold text-slate-500"
    onClick={handleButtonClick}
    >
    Find Out How
    </button>
    <div className="container" style={{maxHeight: '200px', overflow: 'auto', minHeight: '200px'}}>
    <div className='row py-2'>
    <div className='col-12'>
    {chatMessages && chatMessages.map((msg, index) => <span key={index}>{msg}</span>)}
    </div>
    </div>
    </div>
    </>
  );
}

export default Chatbot;

