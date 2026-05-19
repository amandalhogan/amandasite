"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const assetPath = "/assets/get-2-know-game";

const questions = [
  "What are you proud of?",
  "Where are you from?",
  "What is your favorite song?",
  "What motivates you to work hard?",
  "What's your favorite class right now?",
];

const answerImages = [
  "Answer1.png",
  "Answer2.png",
  "Answer3.png",
  "Answer4.png",
  "Answer5.png",
];

const amandaImages = ["QAm1.png", "QAm2.png", "QAm3.png", "QAm3.png", "QAm1.png"];

export default function Get2KnowPlayPage() {
  const [screen, setScreen] = useState<"start" | "questions" | "answer">("start");
  const [clickedQuestions, setClickedQuestions] = useState<boolean[]>(
    Array(questions.length).fill(false),
  );
  const [activeQuestion, setActiveQuestion] = useState(0);

  function chooseQuestion(index: number) {
    setActiveQuestion(index);
    setClickedQuestions((current) =>
      current.map((clicked, questionIndex) => clicked || questionIndex === index),
    );
    setScreen("answer");
  }

  return (
    <main className="min-h-screen bg-[#fdfbf7] px-6 py-10 text-gray-900">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-5xl flex-col">
        <Link
          href="/projects/get-2-know"
          className="mb-8 text-xs font-bold uppercase tracking-widest text-emerald-800 hover:underline"
        >
          ← Back to Get2Know Project
        </Link>

        <section className="mx-auto flex w-full max-w-[800px] flex-1 flex-col items-center justify-center rounded-sm border border-pink-100 bg-white p-6 shadow-sm sm:p-10">
          {screen === "start" && (
            <div className="flex w-full flex-col items-center text-center">
              <Image
                src={`${assetPath}/AmandaBrookeIcon.png`}
                alt="Amanda Brooke icon"
                width={200}
                height={200}
                className="mb-8 h-40 w-40 object-contain sm:h-48 sm:w-48"
                priority
              />
              <p className="max-w-2xl text-base leading-relaxed sm:text-lg">
                Hello Brookies! You prompted: “GPAs and college transcripts don’t
                paint a complete picture of a person. What else do we need to
                know about you?” So, I thought I would give you the opportunity
                to ask away in a virtual conversation! Some questions are silly,
                and some are more serious, but they all reveal pieces of me.
                Please enjoy this simple game.
              </p>
              <button
                type="button"
                onClick={() => setScreen("questions")}
                className="mt-10 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-4"
                aria-label="Begin game"
              >
                <Image
                  src={`${assetPath}/Begin_button_image.png`}
                  alt=""
                  width={250}
                  height={92}
                  className="h-auto w-44 sm:w-56"
                />
              </button>
            </div>
          )}

          {screen === "questions" && (
            <div className="flex w-full flex-col items-center">
              <h1 className="mb-10 font-serif text-4xl">Ask Amanda</h1>
              <div className="grid w-full max-w-2xl gap-4">
                {questions.map((question, index) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => chooseQuestion(index)}
                    className={`rounded-sm px-5 py-4 text-center text-lg font-medium text-white transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-4 ${
                      clickedQuestions[index] ? "bg-gray-400" : "bg-pink-300"
                    }`}
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {screen === "answer" && (
            <div className="grid w-full items-center gap-8 md:grid-cols-[220px_1fr]">
              <div className="flex justify-center md:justify-start">
                <Image
                  src={`${assetPath}/${amandaImages[activeQuestion]}`}
                  alt="Amanda portrait illustration"
                  width={210}
                  height={244}
                  className="h-auto max-h-64 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={`${assetPath}/${answerImages[activeQuestion]}`}
                  alt={`Answer to: ${questions[activeQuestion]}`}
                  width={666}
                  height={374}
                  className="h-auto w-full max-w-xl object-contain"
                  priority
                />
                <button
                  type="button"
                  onClick={() => setScreen("questions")}
                  className="mt-8 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-4"
                  aria-label="Choose another question"
                >
                  <Image
                    src={`${assetPath}/Next_Question.png`}
                    alt=""
                    width={150}
                    height={58}
                    className="h-auto w-36"
                  />
                </button>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
