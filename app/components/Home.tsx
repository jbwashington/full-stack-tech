import { Message } from 'ai/react'
import { useChat } from 'ai/react'
import { ChatRequest, FunctionCallHandler, nanoid } from 'ai'

export default function Home() {
  const functionCallHandler: FunctionCallHandler = async (
    chatMessages,
    functionCall
  ) => {
    if (functionCall.name === 'eval_code_in_browser') {
      if (functionCall.arguments) {
        // Parsing here does not always work since it seems that some characters in generated code aren't escaped properly.
        const parsedFunctionCallArguments: { code: string } = JSON.parse(
          functionCall.arguments
        )
        // WARNING: Do NOT do this in real-world applications!
        eval(parsedFunctionCallArguments.code)
        const functionResponse = {
          messages: [
            ...chatMessages,
            {
              id: nanoid(),
              name: 'eval_code_in_browser',
              role: 'function' as const,
              content: parsedFunctionCallArguments.code
            }
          ]
        }
        return functionResponse
      }
    }
  }

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat-with-functions',
    experimental_onFunctionCall: functionCallHandler
  })

  // Generate a map of message role to text color
  const roleToColorMap: Record<Message['role'], string> = {
    system: 'red',
    user: 'black',
    function: 'blue',
    assistant: 'green'
  }

  return (
      <div className="flex flex-col h-screen justify-between bg-gray-100">

      <div className="flex flex-col sm:flex-row p-4 overflow-y-auto">
        <div className="sm:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4">See what AI can do for your business.</h2>
          <p className="text-xl mb-4">
            Seamlessly integrate ChatGPT with your existing systems, processes, and data to perform complex, automated tasks and make decisions in real-time.
          </p>
        </div>

        <div className="sm:w-1/2 p-4 flex flex-col rounded bg-white">
          <div className="overflow-y-auto flex-grow rounded-t">
            {messages.length > 0
              ? messages.map((m: Message) => (
                <div
                  key={m.id}
                  className="whitespace-pre-wrap"
                  style={{ color: roleToColorMap[m.role] }}
                >
                  <strong>{`${m.role}: `}</strong>
                  {m.content || JSON.stringify(m.function_call)}
                  <br />
                  <br />
                </div>
              ))
              : null}
            <div id="chart-goes-here"></div>
          </div>

          <form onSubmit={handleSubmit} className="mt-auto bg-gray-200 rounded-b">
            <input
              className="w-full p-2 border border-gray-300 rounded"
              value={input}
              placeholder="Say something..."
              onChange={handleInputChange}
            />
          </form>
        </div>
      </div>

    </div>)
}


