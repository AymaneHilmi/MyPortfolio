import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { Search, Puzzle, Crown, CheckCircle2 } from "lucide-react";

const EasterEggContext = createContext();

/* ===== Missions (indépendantes des eggs) ===== */
const eggMission = [
  {
    id: "eggChamber",
    label: "Find the Easter Egg chamber",
    icon: <Search />,
    message:
      "Congratulations! You found the Egg Chamber. A new 'Easter Eggs' button has appeared in the navbar — you can now access it directly from there.",
  },
  {
    id: "eggSteps",
    label: "Solve the Easter Eggs",
    icon: <Puzzle />,
    message: "Congratulations! You solved the Easter Eggs.",
  },
  {
    id: "eggLord",
    label: "Become the Easter Egg Lord",
    icon: <Crown />,
    message: "You became a Easter Egg Lord, i'm proud of you !",
  },
];

/* ===== Eggs (inchangé) ===== */
const EggList = [
  {
    id: "#1",
    name: "Confettis",
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
    name: "الهلال",
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
  /* ===== Eggs trouvés (persistés) ===== */
  const [foundEggs, setFoundEggs] = useState(() => {
    const saved = localStorage.getItem("foundEggs");
    return saved ? JSON.parse(saved) : [];
  });

  /* ===== Missions complétées (persistées) — totalement indépendant ===== */
  const [completedMissions, setCompletedMissions] = useState(() => {
    const saved = localStorage.getItem("completedMissions");
    return saved ? JSON.parse(saved) : []; // tableau d'IDs de missions
  });

  const [confettiActive, setConfettiActive] = useState(false);

  /* Persist */
  useEffect(() => {
    localStorage.setItem("foundEggs", JSON.stringify(foundEggs));
  }, [foundEggs]);

  useEffect(() => {
    localStorage.setItem(
      "completedMissions",
      JSON.stringify(completedMissions)
    );
  }, [completedMissions]);

  /* ====== API Eggs (indépendant) ====== */
  const incrementEggs = (eggId) => {
    setFoundEggs((prev) => {
      if (prev.includes(eggId)) {
        toast(`Easter Egg ${eggId} already found!`, {
          icon: "ℹ️",
          duration: 4000,
          style: {
            borderRadius: "12px",
            background: "#f5f5f5",
            color: "#1E1E1E",
            border: "1px solid #d1d5db",
            padding: "14px 16px",
            fontWeight: 500,
          },
          iconTheme: { primary: "#10B981", secondary: "#E0F2F1" },
        });
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
        iconTheme: { primary: "#10B981", secondary: "#E0F2F1" },
      });

      return [...prev, eggId];
    });
  };

  const resetEggs = () => {
    localStorage.removeItem("foundEggs");
    setFoundEggs([]);
    toast("🔄 Easter Eggs reset");
  };

  /* ====== API Missions (aucun lien avec eggs) ====== */
  const isMissionCompleted = (missionId) =>
    completedMissions.includes(missionId);

  const completeMission = (missionId) => {
    if (!missionId) return;
    setCompletedMissions((prev) => {
      if (prev.includes(missionId)) return prev;
      const label =
        eggMission.find((m) => m.id === missionId)?.message ?? missionId;
      toast.custom(
        (t) => (
          <div
            className={`flex items-start gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 shadow-sm transition-all ${
              t.visible
                ? "animate-in fade-in slide-in-from-top-2"
                : "animate-out fade-out slide-out-to-top-2"
            }`}
          >
            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
            <div className="flex flex-col">
              <p className="text-sm font-semibold text-gray-800">
                Congratulations! You found the Egg Chamber.
              </p>
              <p className="text-sm text-gray-600">
                A new <span className="font-medium">Easter Eggs</span> button
                has appeared in the navbar.
              </p>
              <p className="text-sm text-gray-600">
                You can now access it directly from there.
              </p>
            </div>
          </div>
        ),
        { duration: 10000 }
      );
      return [...prev, missionId];
    });
    uncompleteMission(missionId);
  };

  const uncompleteMission = (missionId) => {
    setCompletedMissions((prev) => prev.filter((id) => id !== missionId));
  };

  const resetMissions = () => {
    localStorage.removeItem("completedMissions");
    setCompletedMissions([]);
    toast("🔄 Missions reset");
  };

  /* ====== Progression des missions ====== */

  const missionsProgress = completedMissions.length / eggMission.length;

  /* ===== Mission #1 : ajout du bouton Easter Eggs dans la navbar ===== */

  const [links, setLinks] = useState([
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Email", path: `mailto:contact@aymanehilmi.com` },
    {
      name: "LinkedIn",
      path: "https://www.linkedin.com/in/aymanehilmi/",
      external: true,
    },
    {
      name: "Github",
      path: "https://github.com/aymanehilmi",
      external: true,
    },
  ]);

  // Fonction pour ajouter le bouton Easter Eggs dynamiquement a la navbar
  const addEasterEggLink = () => {
    setLinks((prev) => {
      if (prev.some((l) => l.name === "Easter Eggs")) return prev;

      const newLink = { name: "Easter Eggs", path: "/easter-eggs" };
      const updated = [...prev];
      updated.splice(2, 0, newLink); // insère à la 3ème place
      return updated;
    });
  };

  /* ===== Egg #1 : Confettis (existant) ===== */
  useEffect(() => {
    let typedText = "";
    const correctText = "aymane";

    const handleKeydown = (event) => {
      typedText += event.key.toLowerCase();

      if (typedText === correctText) {
        incrementEggs("#1");
        setConfettiActive(true);
        setTimeout(() => setConfettiActive(false), 5000);
        typedText = "";
      }

      if (!correctText.startsWith(typedText)) {
        typedText = event.key.toLowerCase();
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

  return (
    <EasterEggContext.Provider
      value={{
        /* Eggs */
        EggList,
        foundEggs,
        eggsFounded: foundEggs.length,
        eggsTotal: EggList.length,
        incrementEggs,
        resetEggs,

        /* Missions — système à part */
        eggMission,
        completedMissions,
        isMissionCompleted,
        completeMission,
        uncompleteMission,
        resetMissions,
        missionsProgress,

        /* navbar */
        links,
        addEasterEggLink,

        /* Confetti */
        confettiActive,
        setConfettiActive,
      }}
    >
      {children}
    </EasterEggContext.Provider>
  );
};
