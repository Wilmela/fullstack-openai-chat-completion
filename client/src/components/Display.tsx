import React, { useState } from "react";
import axios from "axios";
import { loader, copy } from "../assets";

const Display = () => {
  const [prompt, setPrompt] = useState("");
  const [showPrompt, setShowPrompt] = useState(false);
  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  //Api options
  const options = {
    method: "POST",
    url: "https://chatgpt-api6.p.rapidapi.com/standard-gpt",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
      "X-RapidAPI-Host": "chatgpt-api6.p.rapidapi.com",
    },
    data: {
      conversation: [
        {
          role: "user",
          content: prompt,
        },
      ],
    },
  };

  //making a post request to node backend
  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   try {
  //     const res = await fetch("http://localhost:8080/api/v1/ai-completion", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ prompt }),
  //     });

  //     const result = await res.json();
  //     setAiResponse(result);
  //     console.log("The result:", result);
  //   } catch (isError) {
  //     console.log(error);
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Using RapidApi
    e.preventDefault();

    if (!prompt.length) return;

    setLoading(true);
    setShowPrompt(true);
    try {
      const { data } = await axios.request(options);
      setAiResponse(data.answer.content);
      console.log("The result:", data.answer.content);
      setLoading(false);
    } catch (error) {
      setIsError(true);
      setLoading(false);

      console.log(error);
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => alert("copied"));
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[500px] flex flex-col gap-2 mt-6 items-center"
      >
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="input_bar"
        />

        <button type="submit" className="git_btn ">
          Send
        </button>
      </form>

      {/* Question */}
      <div className="display_wrapper">
        <div className="question_wrapper">
          {showPrompt && <p className="question">{prompt}</p>}
        </div>
        <div className="answer_wrapper">
          {loading ? (
            <div className="w-full flex items-center justify-center">
              <img
                src={loader}
                alt="loader"
                className="w-16 h-16 object-contain"
              />
            </div>
          ) : isError ? (
            <p className="text-red-500 font-light font-boska">
              Something went wrong!
            </p>
          ) : (
            aiResponse && (
              <div className="w-full flex flex-col items-end p-2 cursor-pointer">
              
                  <img
                    src={copy}
                    alt="copy"
                    className="w-6 h-6"
                    onClick={() => handleCopy(aiResponse)}

                  />
                <p className="answer">{aiResponse}</p>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Display;
