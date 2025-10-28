import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { Search, Puzzle, Crown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";



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
    id: "Achievement : EggLord",
    label: "Become the Easter Egg Lord",
    message: "Congratulations! You found all the Easter Eggs!",
    icon: <Crown />,
  },
  {
    id: "tip#1",
  },
  {
    id: "tip#2",
  },
  {
    id: "tip#3.0",
  },
  {
    id: "tip#3",
  },
];

/* ===== Eggs (inchangé) ===== */
const EggList = [
  {
    id: "#1",
    name: "Confettis",
    tip: "Try typing your favorite software engineer's name...",
    message: "You found the Confettis egg",
    level: "Easy",
    cursor: "egg#1",
  },
  {
    id: "#2",
    name: "Back to Basics",
    tip: "Sometimes you need to go back where it all began...",
    message: "You found the Back to Basics egg",
    level: "Easy",
    cursor: "egg#2",
  },
  {
    id: "#3",
    name: "Hidden Layers",
    tip: "Not everything is where it seems to be...",
    message: "You found the Hidden Layers egg",
    level: "Medium",
    cursor: "egg#3",
  },
  {
    id: "#4",
    name: "الهلال",
    tip: "أين يختبئ هلال القمر؟ (شكرًا ترجمة جوجل)",
    message: "You found the hidden crescent moon egg",
    level: "Medium",
    cursor: "egg#4",
  },
  {
    id: "#5",
    name: "ToolTip Quest",
    tip: "Hover the right place... and the silence will speak.",
    message: "You found the ToolTip Quest egg",
    level: "Hard",
    cursor: "egg#5",
  },

  {
    id: "#6",
    name: "Not Found",
    tip: "You'll have to take the wrong road...",
    message: "You found the Not Found egg",
    level: "Hard",
    cursor: "egg#6",
  },
  // {
  //   id: "#7",
  //   name: "////////",
  //   tip: "/////////////",
  //   level: "Ultimate",
  //   cursor: "egg#7",
  // },
];
export const useEasterEgg = () => useContext(EasterEggContext);

export const EasterEggProvider = ({ children }) => {
  const navigate = useNavigate();

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

      const newEggs = [...prev, eggId];

      // ✅ Vérifie si tous les eggs ont été trouvés
      const allEggsFound = EggList.every((e) => newEggs.includes(e.id));
      if (allEggsFound && !completedMissions.includes("eggLord")) {
        completeMission("eggLord");
        navigate("/easter-eggs");
        window.scrollTo({ top: 0, behavior: "smooth" });

      }

      return newEggs;
    });
  };

  const resetEggs = () => {
    localStorage.removeItem("foundEggs");
    setFoundEggs([]);
    toast("Quest reset. Fresh start!", { duration: 10000 });
  };

  /* ====== API Missions ====== */
  const isMissionCompleted = (missionId) =>
    completedMissions.includes(missionId);

  const completeMission = (missionIdRaw) => {
    if (!missionIdRaw) return;

    // normalisation douce (ex: " tip#1 " -> "tip#1")
    const missionId = String(missionIdRaw).trim();
    const isTip = missionId.toLowerCase().startsWith("tip#");

    setCompletedMissions((prev) => {
      // déjà présent → rien à faire
      if (prev.includes(missionId)) return prev;

      const next = [...prev, missionId];

      // 1) Toast uniquement si ce n'est PAS un tip
      if (!isTip) {
        const label =
          eggMission.find((m) => m.id === missionId)?.message ?? missionId;
        showInfoToast(label);
      }

      // 2) Si les 3 tips sont complétés ET que l’egg #3 n’est pas trouvé → on le déclenche
      const hasAllTips = ["tip#1", "tip#2", "tip#3.0", "tip#3"].every((t) =>
        next.includes(t)
      );

      const tip3Done = (completedMissions || []).some(
        (id) => String(id).trim().toLowerCase() === "tip#3"
      );

      if (hasAllTips && !tip3Done) {
        // Si ta fonction s'appelle autrement (ex: incrementsegg), adapte ici.
        incrementEggs("#5");
      }

      return next;
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
        } max-w-md w-full bg-bgLight dark:bg-bgDark shadow-lg rounded-xl pointer-events-auto flex ring-1 ring-lightPrimary dark:ring-darkBorder ring-opacity-5`}
    >
      {/* ID en gros */}
      <div className="flex items-center justify-center px-4 bg-gradient-to-b from-blue-500 via-orange-400 to-red-500 text-white font-ramidots text-6xl rounded-l-xl">
        {egg.id}
      </div>

      {/* Texte */}
      <div className="flex-1 w-0 p-4">
        <p className="text-sm font-sfbold text-lightPrimary dark:text-darkPrimary">{egg.name} Egg</p>
        <p className="mt-1 text-sm text-lightPrimary dark:text-darkPrimary">{egg.message}</p>
      </div>

      {/* Bouton fermer */}
      <div className="flex border-l border-ultralightGray dark:border-darkBorder">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-full h-full px-3 flex items-center justify-center text-xs font-sfregular text-lightSecondary dark:text-darkSecondary hover:text-gray-700 dark:hover:text-white"        >
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
          } max-w-md w-full bg-bgLight dark:bg-bgDark shadow-lg rounded-xl pointer-events-auto flex ring-1 ring-lightPrimary dark:ring-darkBorder ring-opacity-5`}
      >
        {/* Bloc couleur à gauche */}
        <div className="flex items-center justify-center px-4 bg-gradient-to-b from-blue-500 via-orange-400 to-red-500 text-white font-extrabold text-2xl rounded-l-xl">
          i
        </div>

        {/* Texte */}
        <div className="flex-1 w-0 p-4">
          <p className="text-sm font-sfbold text-lightPrimary dark:text-darkPrimary">{title}</p>
          <p className="mt-1 text-sm text-lightPrimary dark:text-darkPrimary">{message}</p>
        </div>

        {/* Bouton fermer */}
        <div className="flex border-l border-ultralightGray dark:border-darkBorder">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full h-full px-3 flex items-center justify-center text-xs font-sfregular text-lightSecondary dark:text-darkSecondary hover:text-gray-700 dark:hover:text-white"
          >
            ✕
          </button>
        </div>
      </div>
    ),
    { duration: 10000 }
  );
};