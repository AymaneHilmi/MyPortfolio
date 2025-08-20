import { useEffect, useState } from "react";
import { useEasterEgg } from "./EasterEggContext";
import { X, Lock, Check, Search, Puzzle, Crown } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, useAnimation } from "framer-motion";

export default function EasterEggsCard({}) {
  // valeurs des easter eggs
  const { eggMission, isMissionCompleted, completeMission , addEasterEggLink  } = useEasterEgg();
  const missions = eggMission.slice(0, 3);
  

  // pour le bouton troll

  const [cancelOnRight, setCancelOnRight] = useState(false);
  const CONFIRM_W_PX = 160;
  const GAP_PX = 12;

  // Animation de vibration de la section easter egg et arret une fois cliqué une fois (à ameliorer avec le weblocalstorage)

  const controls = useAnimation();
  const [eggAnimationEnabled, setEggAnimationEnabled] = useState(true);

  useEffect(() => {
    if (!eggAnimationEnabled) return;

    const interval = setInterval(() => {
      controls.start({
        rotate: [0, -5, 5, -3, 3, 0],
        transition: {
          duration: 0.8,
          ease: "easeInOut",
        },
      });
    }, 5000);


    // pour le bouton qui s'ajoute sur la navbar dynamiquement


    return () => clearInterval(interval);
  }, [controls, eggAnimationEnabled]);




  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="relative z-10 shrink-0 w-full lg:w-[340px] rounded-3xl bg-white border border-gray-200 shadow-sm p-5 lg:p-6"
    >
      <span className="absolute -top-3 -left-3 h-7 w-7 rounded-full bg-gray-900 text-white text-xs font-sfbold grid place-items-center">
        2
      </span>

      <div className="space-y-3">
        {missions.map((m, i) => {
          const completed = isMissionCompleted(m.id);
          const unlocked = completed || i === 0;
          const rightBadge = completed ? (
            <Check size={14} />
          ) : unlocked ? (
            <>?</>
          ) : (
            <Lock size={14} />
          );

          // --- PREMIER ÉLÉMENT AVEC DIALOG ---
          if (i === 0) {
            return (
              <Dialog.Root key={m.id}>
                <Dialog.Trigger asChild>
                  <motion.div
                    animate={eggAnimationEnabled ? controls : {}}
                    whileHover={
                      unlocked
                        ? {
                            y: -2,
                            scaleX: 1.012,
                            scaleY: 0.992,
                            rotateX: -1.25,
                            rotateY: 1.25,
                          }
                        : {}
                    }
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      mass: 0.6,
                    }}
                    className={[
                      "group flex items-center justify-between rounded-2xl border px-3 py-2.5",
                      "bg-gray-50 border-gray-200",
                    ].join(" ")}
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-7 w-7 flex items-center justify-center rounded-full bg-gray-200 text-darkGray">
                        {m.icon}
                      </div>
                      <div>
                        <p className="text-sm font-sfbold text-darkGray">
                          {m.label}
                        </p>
                        <p className="text-[11px] font-sfregular text-lightGray">
                          step {i + 1}
                        </p>
                      </div>
                    </div>

                    <div className="h-7 w-7 grid place-items-center rounded-full border border-gray-300 text-darkGray">
                      {rightBadge}
                    </div>
                  </motion.div>
                </Dialog.Trigger>

                {/* CONTENU DU DIALOG */}
                <Dialog.Portal>
                  <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40 data-[state=open]:animate-fadeIn" />
                  <Dialog.Content
                    className="fixed z-50 left-1/2 top-1/2 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2
                              rounded-2xl bg-white p-6 shadow-lg outline-none data-[state=open]:animate-fadeIn"
                  >
                    <Dialog.Title className="text-4xl font-ramidots bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent inline-block w-fit mb-2">
                      Easter Eggs Quest
                    </Dialog.Title>
                    <Dialog.Description className="mt-2 text-sm text-lightGray">
                      Are you sure you want to start the Easter Egg Quest ?
                      <br></br>(don't even try to click on cancel or you will be
                      surprised).
                    </Dialog.Description>

                    {/* Zone boutons */}
                    <div className="mt-5 relative h-10">
                      {/* Bouton Confirmer — fixé à droite */}
                      <Dialog.Close asChild>
                        <button
                          onClick={() => {
                            completeMission("eggChamber");
                            addEasterEggLink();
                          }}
                          className="absolute top-0 right-0 h-10 w-40 flex items-center justify-center rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800"
                        >
                          Yes, let's go !
                        </button>
                      </Dialog.Close>

                      {/* Bouton Annuler — glisse gauche ↔ juste à gauche du bouton droit */}

                      <button
                        onMouseEnter={() => setCancelOnRight((v) => !v)}
                        onClick={() => setCancelOnRight((v) => !v)}
                        className="absolute top-0 h-10 px-4 flex items-center justify-center rounded-lg border text-sm font-medium text-darkGray bg-white hover:bg-gray-100 transition-[left,right] duration-300"
                        style={
                          cancelOnRight
                            ? // se place juste à gauche du bouton droit avec un gap
                              {
                                right: `${CONFIRM_W_PX + GAP_PX}px`,
                                left: "auto",
                              }
                            : // collé à gauche
                              { left: 0, right: "auto" }
                        }
                      >
                        Cancel
                      </button>
                    </div>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            );
          }

          // --- AUTRES ÉLÉMENTS (LOCK / STATIC) ---
          return (
            <motion.div
              key={m.id}
              animate={{}} // pas d'animation
              whileHover={{}} // pas de hover
              className={[
                "group flex items-center justify-between rounded-2xl border px-3 py-2.5",
                "bg-gray-50 border-gray-200",
              ].join(" ")}
            >
              <div className="flex items-center gap-3">
                <div className="h-7 w-7 flex items-center justify-center rounded-full bg-gray-200 text-darkGray opacity-70">
                  {m.icon}
                </div>
                <div>
                  <p className="text-sm font-sfbold text-darkGray">{m.label}</p>
                  <p className="text-[11px] font-sfregular text-lightGray">
                    step {i + 1}
                  </p>
                </div>
              </div>

              <div className="h-7 w-7 grid place-items-center rounded-full border border-gray-300 text-darkGray opacity-80">
                {rightBadge}
              </div>
            </motion.div>
          );
        })}
      </div>

      <p className="mt-4 text-sm font-sfregular text-lightGray">
        A playful (and slightly complicated) easter-eggs quest.
      </p>
    </motion.div>
  );
}
