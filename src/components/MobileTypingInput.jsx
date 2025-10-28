import React, { useState, useEffect } from 'react';
import { useEasterEgg } from '@/context/EasterEggContext';

const MobileTypingInput = () => {
  const { incrementEggs, setConfettiActive } = useEasterEgg();
  const [typed, setTyped] = useState("");
  const correct = "aymane";

  useEffect(() => {
    if (typed.toLowerCase() === correct) {
      incrementEggs("#1");
      setConfettiActive(true);
      setTimeout(() => setConfettiActive(false), 5000);
      setTyped(""); // reset input
    }
  }, [typed]);

  return (
    <div className="mt-2 block sm:hidden">
      <label className="block text-xs font-sfregular text-gray-500 mb-1">
        On mobile? Type here to discover something...
      </label>
      <input
        type="text"
        placeholder="Start typing..."
        className="w-full text-sm px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-300 focus:outline-none transition"
        value={typed}
        onChange={(e) => setTyped(e.target.value)}
      />
    </div>
  );
};

export default MobileTypingInput;
