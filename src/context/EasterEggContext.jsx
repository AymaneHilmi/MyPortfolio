import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { toast } from "react-hot-toast";
import { Search, Puzzle, Crown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";



const EasterEggContext = createContext();

/* Id de la mission "Easter Egg Lord".
   DOIT correspondre exactement à l'id défini dans `eggMission` ci-dessous,
   sinon la mission ne sera jamais reconnue comme complétée. */
const EGG_LORD_ID = "Achievement : EggLord";

/* Liste des tips de la quête des tooltips (egg #5) */
const TIP_MISSIONS = ["tip#1", "tip#2", "tip#3.0", "tip#3"];

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

  /* Refs de "diffing".
     Elles gardent la dernière valeur déjà traitée pour ne déclencher les
     effets de bord (toasts, confetti, missions...) QUE sur les nouveautés,
     et jamais au rechargement de page (réhydratation depuis localStorage). */
  const seenEggsRef = useRef(foundEggs);
  const seenMissionsRef = useRef(completedMissions);

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

  /* ====== API Eggs ======
     L'updater de state reste PUR : il se contente d'ajouter l'egg.
     TOUS les effets de bord (toasts, confetti, missions, navigation) sont
     gérés dans le useEffect qui observe `foundEggs` (source de vérité unique).
     => plus de setState imbriqué ni de side-effect dans un updater
        (cause des déclenchements partiels / doublés en StrictMode). */
  const incrementEggs = useCallback((eggId) => {
    if (seenEggsRef.current.includes(eggId)) {
      toast(`Easter Egg ${eggId} already found!`, { duration: 10000 });
      return;
    }
    setFoundEggs((prev) => (prev.includes(eggId) ? prev : [...prev, eggId]));
  }, []);

  const resetEggs = () => {
    localStorage.removeItem("foundEggs");
    setFoundEggs([]);
    toast("Quest reset. Fresh start!", { duration: 10000 });
  };

  /* ====== API Missions ====== */
  const isMissionCompleted = (missionId) =>
    completedMissions.includes(missionId);

  /* L'updater reste PUR : on ajoute la mission, point.
     Les toasts et le déclenchement de l'egg #5 (quête des tooltips) sont
     gérés dans le useEffect qui observe `completedMissions`. */
  const completeMission = useCallback((missionIdRaw) => {
    if (!missionIdRaw) return;
    const missionId = String(missionIdRaw).trim(); // normalisation: " tip#1 " -> "tip#1"
    setCompletedMissions((prev) =>
      prev.includes(missionId) ? prev : [...prev, missionId]
    );
  }, []);

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
    { name: "Reads", path: "/Reads" },
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
      updated.splice(3, 0, newLink);
      return updated;
    });
  };

  useEffect(() => {
    if (completedMissions.includes("eggChamber")) {
      setLinks((prev) => {
        if (prev.some((l) => l.name === "Easter Eggs")) return prev;
        const updated = [...prev];
        updated.splice(3, 0, { name: "Easter Eggs", path: "/easter-eggs" });
        return updated;
      });
    }
  }, [completedMissions]);

  /* ===== Effets de bord des EGGS (source de vérité : foundEggs) =====
     Se déclenche uniquement sur les eggs réellement NOUVEAUX, jamais au
     rechargement de page. Garantit que "eggStep" (premier egg trouvé) et
     "Egg Lord" (tous trouvés) sont TOUJOURS synchronisés avec foundEggs. */
  useEffect(() => {
    const prev = seenEggsRef.current;
    seenEggsRef.current = foundEggs;

    const newlyFound = foundEggs.filter((id) => !prev.includes(id));
    if (newlyFound.length === 0) return; // réhydratation / pas de nouveauté

    // Toast (+ confetti pour #1) pour chaque egg nouvellement trouvé
    newlyFound.forEach((id) => {
      const egg = EggList.find((e) => e.id === id);
      if (egg) showEggToast(egg);
      if (id === "#1") {
        setConfettiActive(true);
        setTimeout(() => setConfettiActive(false), 5000);
      }
    });

    // Premier egg résolu → mission "eggStep" (idempotent)
    completeMission("eggStep");

    // Tous les eggs trouvés → mission "Egg Lord" + redirection
    const allFound = EggList.every((e) => foundEggs.includes(e.id));
    if (allFound) {
      completeMission(EGG_LORD_ID);
      navigate("/easter-eggs");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [foundEggs, completeMission, navigate]);

  /* ===== Effets de bord des MISSIONS (source de vérité : completedMissions) ===== */
  useEffect(() => {
    const prev = seenMissionsRef.current;
    seenMissionsRef.current = completedMissions;

    const newly = completedMissions.filter((id) => !prev.includes(id));

    // Toast d'info pour chaque mission nouvellement complétée.
    // (les tips sont silencieux ; l'achievement final a sa propre célébration)
    newly.forEach((missionId) => {
      const isTip = missionId.toLowerCase().startsWith("tip#");
      if (!isTip && missionId !== EGG_LORD_ID) {
        const label =
          eggMission.find((m) => m.id === missionId)?.message ?? missionId;
        showInfoToast(label);
      }
    });

    // Quête des tooltips complète → déclenche l'egg #5 (une seule fois)
    const allTips = TIP_MISSIONS.every((t) => completedMissions.includes(t));
    if (allTips && !foundEggs.includes("#5")) {
      incrementEggs("#5");
    }
  }, [completedMissions, foundEggs, incrementEggs]);

  /* ===== Egg #1 : écoute clavier de la séquence "aymane" ===== */
  useEffect(() => {
    let typedText = "";
    const correctText = "aymane";

    const handleKeydown = (event) => {
      // ignore les touches non-caractère (Shift, Enter, flèches, Ctrl...)
      if (!event.key || event.key.length !== 1) return;

      const key = event.key.toLowerCase();
      typedText += key;

      if (typedText === correctText) {
        incrementEggs("#1");
        typedText = "";
        return;
      }

      // si la séquence ne correspond plus, on repart proprement :
      // on garde la dernière frappe seulement si elle peut amorcer "aymane"
      if (!correctText.startsWith(typedText)) {
        typedText = correctText.startsWith(key) ? key : "";
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [incrementEggs]);

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