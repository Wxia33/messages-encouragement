"use client";

import { useState } from 'react';
import Link from 'next/link';

import CookieConsent from '@components/CookieConsent';

export default function Home() {
  const [step, setStep] = useState(1);
  const [response, setResponse] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOptionClick = (answer: any) => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      setResponse("TODO: Generate response based on user's answers.");
    }
  };

  const handleRegenerate = () => {
    setStep(1);
    setResponse('');
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10 bg-gradient-to-r from-cyan-500 to-blue-500">
        <CookieConsent />
        <div className="absolute top-5 right-5">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
          {/* Hamburger Icon */}
          &#9776;
        </button>
        {isMenuOpen && (
          <div className="bg-white rounded-md p-2 mt-2">
            <Link href="/responses" className="text-gray-700 hover:text-gray-900">
              See Responses
            </Link>
          </div>
        )}
      </div>

      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-white">
          Keep Going
        </h1>
        <p className="mb-8 text-xl font-light text-gray-200">
          Don’t give up
        </p>
      </div>
      <div className="max-w-4xl p-6 bg-white rounded-lg shadow-xl mb-10">
        <p className="mb-4 text-lg text-gray-700">
          What you’re doing is HARD. When it seems like you’ve nothing to show for all your effort, you’ve just run in circles all this time, and you’re worried about what the “others” will say.
        </p>
        <p className="mb-4 text-lg text-gray-700">
          Breathe.
        </p>
        <p className="mb-4 text-lg text-gray-700">
          Your community needs your story.
        </p>
        <p className="mb-4 text-lg text-gray-700">
          It doesn’t have to be today, or tomorrow, or next month, or next year.
        </p>
        <p className="mb-4 text-lg text-gray-700">
          But they need you.
        </p>
        <p className="mb-4 text-lg text-gray-700">
          Take a step back, and try again.
        </p>
        <p className="mb-4 text-lg text-gray-700">
          And again.
        </p>
        <p className="mb-4 text-lg text-gray-700">
          And again.
        </p>
        <p className="text-lg text-gray-700">
          You’ll only lose if you stop.
        </p>
      </div>

      {/* Interactive Component Starts Here */}
      <div className="w-full max-w-md p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className={`text-gray-700 ${step <= 3 ? 'block' : 'hidden'}`}>
          {step === 1 && (
            <Question
              question="What are you feeling?"
              options={['Something', 'Nothing', 'Everything']}
              onSelect={handleOptionClick}
            />
          )}
          {step === 2 && (
            <Question
              question="What troubles you the most?"
              options={['Work', 'Relationships', 'Health']}
              onSelect={handleOptionClick}
            />
          )}
          {step === 3 && (
            <Question
              question="What do you wish you could do?"
              options={['Go back in time', 'See the future', 'Feel something']}
              onSelect={handleOptionClick}
            />
          )}
        </div>
        {response && (
          <div className="text-center">
            <p className="mb-4 text-lg font-medium">{response}</p>
            <div className="flex justify-center space-x-4">
              <button className="px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-700" onClick={() => navigator.clipboard.writeText(response)}>Copy</button>
              <button className="px-4 py-2 text-sm text-white bg-green-500 rounded hover:bg-green-700">Share on this website</button>
              <button className="px-4 py-2 text-sm text-white bg-purple-500 rounded hover:bg-purple-700">Save to account</button>
              <button className="px-4 py-2 text-sm text-white bg-red-500 rounded hover:bg-red-700">Share on social media</button>
              <button className="px-4 py-2 text-sm text-gray-700 bg-gray-200 rounded hover:bg-gray-300" onClick={handleRegenerate}>Regenerate response</button>
            </div>
          </div>
        )}
      </div>

      <div className="mt-8">
        <Link href="/responses" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">
            See what others have shared
        </Link>
      </div>
    </main>
  );
}

type QuestionProps = {
  question: string;
  options: string[];
  onSelect: (option: string) => void;
};

const Question: React.FC<QuestionProps> = ({ question, options, onSelect }) => {
  return (
    <div className="mb-4">
      <p className="text-lg font-semibold mb-2">{question}</p>
      <div className="flex flex-col">
        {options.map((option, index) => (
          <button
            key={index}
            className="mb-2 px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded hover:bg-gray-200"
            onClick={() => onSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

