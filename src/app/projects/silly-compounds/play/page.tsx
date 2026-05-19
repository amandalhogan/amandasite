"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Round = {
  word: string;
  isReal: boolean;
};

const realCompounds = [
  "airplane",
  "backpack",
  "baseball",
  "basketball",
  "birdbath",
  "blueberry",
  "bookcase",
  "butterfly",
  "campfire",
  "cupcake",
  "doorbell",
  "dragonfly",
  "firefly",
  "football",
  "greenhouse",
  "hairbrush",
  "homework",
  "jellyfish",
  "keyboard",
  "lighthouse",
  "moonlight",
  "notebook",
  "pancake",
  "rainbow",
  "sandbox",
  "snowman",
  "starfish",
  "strawberry",
  "sunflower",
  "toothbrush",
  "waterfall",
];

const beginnings = [
  "apple",
  "bubble",
  "cloud",
  "garden",
  "moon",
  "pickle",
  "pillow",
  "rain",
  "rocket",
  "sun",
  "tomato",
  "waffle",
];

const endings = [
  "basket",
  "button",
  "castle",
  "chair",
  "flower",
  "glove",
  "ladder",
  "lamp",
  "pocket",
  "river",
  "shoe",
  "window",
];

function randomItem(items: string[]) {
  return items[Math.floor(Math.random() * items.length)];
}

function makeRound(): Round {
  if (Math.random() < 0.7) {
    return {
      word: randomItem(realCompounds),
      isReal: true,
    };
  }

  let word = "";

  do {
    word = `${randomItem(beginnings)}${randomItem(endings)}`;
  } while (realCompounds.includes(word));

  return {
    word,
    isReal: false,
  };
}

export default function SillyCompoundsPlayPage() {
  const firstRound = useMemo(() => makeRound(), []);
  const [name, setName] = useState("");
  const [hasStarted, setHasStarted] = useState(false);
  const [round, setRound] = useState<Round>(firstRound);
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState({ correct: 0, total: 0 });

  function answer(guessIsReal: boolean) {
    const isCorrect = guessIsReal === round.isReal;

    setScore((current) => ({
      correct: current.correct + (isCorrect ? 1 : 0),
      total: current.total + 1,
    }));
    setFeedback(
      isCorrect
        ? `Correct! ${round.word} ${round.isReal ? "is" : "is not"} a real compound word.`
        : `Not quite. ${round.word} ${round.isReal ? "is" : "is not"} a real compound word.`,
    );
  }

  function nextRound() {
    setRound(makeRound());
    setFeedback("");
  }

  return (
    <main className="min-h-screen bg-[#fdfbf7] px-6 py-10 text-gray-900">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-5xl flex-col">
        <Link
          href="/projects/silly-compounds"
          className="mb-8 text-xs font-bold uppercase tracking-widest text-emerald-800 hover:underline"
        >
          ← Back to Silly Compounds Project
        </Link>

        <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center rounded-sm border border-emerald-100 bg-white p-6 shadow-sm sm:p-10">
          {!hasStarted ? (
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-700">
                Silly Compounds
              </p>
              <h1 className="mt-4 font-serif text-5xl text-gray-950">
                Real word or made-up mashup?
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                A compound is formed from two words joined together to create a
                new word with a deeper or different meaning. Some examples are
                football, birdbath, and strawberry.
              </p>
              <label className="mt-8 block text-left text-sm font-bold uppercase tracking-widest text-gray-500">
                What is your name, grasshopper?
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="mt-3 w-full rounded-sm border border-gray-200 px-4 py-3 text-base font-normal normal-case tracking-normal text-gray-900 outline-none transition-colors focus:border-emerald-700"
                  placeholder="Type your name"
                />
              </label>
              <button
                type="button"
                onClick={() => setHasStarted(true)}
                className="mt-8 rounded-full border border-emerald-800 px-6 py-3 text-sm font-bold uppercase tracking-widest text-emerald-800 transition-colors hover:bg-emerald-800 hover:text-white"
              >
                Start
              </button>
            </div>
          ) : (
            <div className="mx-auto w-full max-w-2xl text-center">
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-bold uppercase tracking-widest text-gray-400">
                <span>Hello {name.trim() || "grasshopper"}</span>
                <span>
                  Score {score.correct}/{score.total}
                </span>
              </div>
              <p className="mt-12 text-sm font-bold uppercase tracking-[0.3em] text-emerald-700">
                Is this a correct word?
              </p>
              <h1 className="mt-5 break-words font-serif text-6xl text-gray-950 sm:text-7xl">
                {round.word}
              </h1>

              {feedback ? (
                <div className="mt-10">
                  <p className="rounded-sm bg-[#fdfbf7] px-5 py-4 text-lg text-gray-700">
                    {feedback}
                  </p>
                  <button
                    type="button"
                    onClick={nextRound}
                    className="mt-8 rounded-full border border-emerald-800 px-6 py-3 text-sm font-bold uppercase tracking-widest text-emerald-800 transition-colors hover:bg-emerald-800 hover:text-white"
                  >
                    Next Word
                  </button>
                </div>
              ) : (
                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={() => answer(true)}
                    className="rounded-sm bg-emerald-700 px-6 py-4 text-lg font-bold text-white transition-transform hover:scale-[1.02]"
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    onClick={() => answer(false)}
                    className="rounded-sm bg-pink-300 px-6 py-4 text-lg font-bold text-white transition-transform hover:scale-[1.02]"
                  >
                    No
                  </button>
                </div>
              )}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
