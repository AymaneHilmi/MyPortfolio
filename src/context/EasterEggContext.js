import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { Search, Puzzle, Crown } from "lucide-react";

const EasterEggContext = createContext();

/* ===== Missions (indépendantes des eggs) ===== */
const eggMission = [
  {
    id: "eggChamber",
    label: "Find the Easter Egg chamber",
    icon: <Search />,
    message:
      "Congratulations! You found the Egg Chamber.\n\n A new 'Easter Eggs' button has appeared in the navbar. You can now access to the Easter Egg chamber directly from there.",
  },
  {
    id: "eggStep",
    label: "Solve an Easter Egg",
    icon: <Puzzle />,
    message: "Congratulations! You solved you're first Easter Egg.",
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
    tip: "Try typing your favorite developer's name...",
    message: "I think you can do better, it's the easiest one",
    level: "Easy",
    cursor: "egg#1",
  },
  {
    id: "#2",
    name: "Back to Basics",
    tip: "Sometimes you need to go back where it all began...",
    message: "You found the birthplace egg",
    level: "Easy",
    cursor: "egg#2",
  },
  {
    id: "#3",
    name: "Hidden Layers",
    tip: "Not everything is where it seems to be...",
    message: "Good one you're starting being good",
    level: "Medium",
    cursor: "egg#3",
  },
  {
    id: "#4",
    name: "الهلال",
    tip: "أين يختبئ الهلال؟ (شكرًا ترجمة جوجل)",
    message: "You found the hidden crescent moon!",
    level: "Medium",
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
    id: "#6",
    name: "Not Found Egg",
    tip: "You'll have to take the wrong road...",
    message: "You are actually starting impressing me !",
    level: "Hard",
    cursor: "egg#6",
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

  /* ===== Missions complétées (persistées) ===== */
  const [completedMissions, setCompletedMissions] = useState(() => {
    const saved = localStorage.getItem("completedMissions");
    return saved ? JSON.parse(saved) : [];
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

  /* ====== API Eggs ====== */
  const incrementEggs = (eggId) => {
    setFoundEggs((prev) => {
      if (prev.includes(eggId)) {
        toast(`Easter Egg ${eggId} already found!`, { duration: 10000 });
        return prev;
      }
      // Si c'est le tout premier egg, compléter les mission 'eggStep' avant d'afficher le toast
      if (prev.length === 0 && !completedMissions.includes("eggStep")) {
        completeMission("eggStep");
      }

      const egg = EggList.find((e) => e.id === eggId);
      const message = egg?.message || `Easter Egg ${eggId} found!`;
      showEggToast(egg);

      return [...prev, eggId];
    });
  };

  const resetEggs = () => {
    localStorage.removeItem("foundEggs");
    setFoundEggs([]);
    toast("Easter Eggs reset", { duration: 10000 });
  };

  /* ====== API Missions ====== */
  const isMissionCompleted = (missionId) =>
    completedMissions.includes(missionId);

  const completeMission = (missionId) => {
    if (!missionId) return;
    setCompletedMissions((prev) => {
      if (prev.includes(missionId)) return prev;
      const label =
        eggMission.find((m) => m.id === missionId)?.message ?? missionId;
      showInfoToast(label);
      return [...prev, missionId];
    });
  };

  const uncompleteMission = (missionId) => {
    setCompletedMissions((prev) => prev.filter((id) => id !== missionId));
  };

  const resetMissions = () => {
    localStorage.removeItem("completedMissions");
    setCompletedMissions([]);
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

  const addEasterEggLink = () => {
    setLinks((prev) => {
      if (prev.some((l) => l.name === "Easter Eggs")) return prev;
      const newLink = { name: "Easter Eggs", path: "/easter-eggs" };
      const updated = [...prev];
      updated.splice(2, 0, newLink);
      return updated;
    });
  };

  useEffect(() => {
    if (completedMissions.includes("eggChamber")) {
      setLinks((prev) => {
        if (prev.some((l) => l.name === "Easter Eggs")) return prev;
        const updated = [...prev];
        updated.splice(2, 0, { name: "Easter Eggs", path: "/easter-eggs" });
        return updated;
      });
    }
  }, [completedMissions]);

  /* ===== Egg #1 : Confettis ===== */
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

        /* Missions */
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


const showEggToast = (egg) => {
    toast.custom((t) => (
        <div
            className={`${t.visible ? "animate-custom-enter" : "animate-custom-leave"
                } max-w-md w-full bg-white shadow-lg rounded-xl pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
            {/* ID en gros */}
            <div className="flex items-center justify-center px-4 bg-gradient-to-b from-blue-500 via-orange-400 to-red-500 text-white font-ramidots text-6xl rounded-l-xl">
                {egg.id}
            </div>

            {/* Texte */}
            <div className="flex-1 w-0 p-4">
                <p className="text-sm font-semibold text-gray-900">{egg.name} Egg</p>
                <p className="mt-1 text-sm text-gray-600">{egg.message}</p>
            </div>

            {/* Bouton fermer */}
            <div className="flex border-l border-gray-200">
                <button
                    onClick={() => toast.dismiss(t.id)}
                    className="w-full h-full px-3 flex items-center justify-center text-xs font-medium text-gray-500 hover:text-gray-700"
                >
                    ✕
                </button>
            </div>
        </div>
    ), { duration: 10000 });
};

const showInfoToast = (title, message) => {
    toast.custom(
        (t) => (
            <div
                className={`${t.visible ? "animate-custom-enter" : "animate-custom-leave"
                    } max-w-md w-full bg-white shadow-lg rounded-xl pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
                {/* Bloc couleur à gauche */}
                <div className="flex items-center justify-center px-4 bg-gradient-to-b from-blue-500 via-orange-400 to-red-500 text-white font-extrabold text-2xl rounded-l-xl">
                    i
                </div>

                {/* Texte */}
                <div className="flex-1 w-0 p-4">
                    <p className="text-sm font-semibold text-gray-900">{title}</p>
                    <p className="mt-1 text-sm text-gray-600">{message}</p>
                </div>

                {/* Bouton fermer */}
                <div className="flex border-l border-gray-200">
                    <button
                        onClick={() => toast.dismiss(t.id)}
                        className="w-full h-full px-3 flex items-center justify-center text-xs font-medium text-gray-500 hover:text-gray-700"
                    >
                        ✕
                    </button>
                </div>
            </div>
        ),
        { duration: 10000 }
    );
};