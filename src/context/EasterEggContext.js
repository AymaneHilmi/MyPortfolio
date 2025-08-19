import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const EasterEggContext = createContext();

const EggList = [
  {
    id: "#1",
    name: "Confettis ",
    tip: "Try typing your favorite dev’s name...",
    message: "Confetti mode activated!",
    level: "Easy",
    cursor: "egg#1",
  },
  {
    id: "#2",
    name: "Back to Basics",
    tip: "Sometimes you need to go back where it all began...",
    message: "You found the birthplace egg 🇮🇹",
    level: "Easy",
    cursor: "egg#2",
  },
  {
    id: "#3",
    name: "الهلال", // Croissant de lune en arabe
    tip: "أين يختبئ الهلال؟ (شكرًا ترجمة جوجل)",
    message: "🌙 You found the hidden crescent moon!",
    level: "Medium",
    cursor: "egg#3",
  },
  {
    id: "#4",
    name: "////////",
    tip: "/////////////",
    message: "Clicking instincts on point!",
    level: "Hard",
    cursor: "egg#4",
  },
  {
    id: "#5",
    name: "////////",
    tip: "/////////////",
    level: "Hard",
    cursor: "egg#5",
  },
  {
    id: "#7",
    name: "////////",
    tip: "/////////////",
    level: "Ultimate",
    cursor: "egg#7",
  },
];

export const useEasterEgg = () => useContext(EasterEggContext);

export const EasterEggProvider = ({ children }) => {
  const [foundEggs, setFoundEggs] = useState(() => {
    const saved = localStorage.getItem("foundEggs");
    return saved ? JSON.parse(saved) : [];
  });

  const [confettiActive, setConfettiActive] = useState(false);

  useEffect(() => {
    localStorage.setItem("foundEggs", JSON.stringify(foundEggs));
  }, [foundEggs]);

  const incrementEggs = (eggId) => {
    setFoundEggs((prev) => {
      if (prev.includes(eggId)) {
        toast(`Easter Egg ${eggId} already found!`, {
          icon: "ℹ️",
          duration: 5000,
          style: {
            borderRadius: "12px",
            background: "#f5f5f5",
            color: "#1E1E1E",
            border: "1px solid #d1d5db",
            padding: "14px 16px",
            fontWeight: 500,
          },
          iconTheme: {
            primary: "#10B981",
            secondary: "#E0F2F1",
          },
        });
        resetEggs();
        return prev;
      }

      const message =
        EggList.find((egg) => egg.id === eggId)?.message ||
        `Easter Egg ${eggId} found!`;

      toast.success(message, {
        duration: 5000,
        style: {
          borderRadius: "12px",
          background: "#f5f5f5",
          color: "#1E1E1E",
          border: "1px solid #d1d5db",
          padding: "14px 16px",
          fontWeight: 500,
        },
        iconTheme: {
          primary: "#10B981",
          secondary: "#E0F2F1",
        },
      });
      // resetEggs();
      return [...prev, eggId];
    });
  };

  const resetEggs = () => {
    localStorage.removeItem("foundEggs");
    toast("🔄 Easter Eggs reset");
  };

  // --------------------------------
  //    Easter Egg #1 : Confettis
  // --------------------------------
  useEffect(() => {
    let typedText = "";
    const correctText = "aymane";

    const handleKeydown = (event) => {
      typedText += event.key.toLowerCase();

      if (typedText === correctText) {
        incrementEggs("#1");
        setConfettiActive(true);
        setTimeout(() => {
          setConfettiActive(false);
        }, 5000);
        typedText = "";
      }

      if (!correctText.startsWith(typedText)) {
        typedText = event.key.toLowerCase();
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <EasterEggContext.Provider
      value={{
        foundEggs,
        eggsFounded: foundEggs.length,
        incrementEggs,
        resetEggs,
        confettiActive,
        setConfettiActive,
        eggsTotal: EggList.length,
        EggList,
      }}
    >
      {children}
    </EasterEggContext.Provider>
  );
};