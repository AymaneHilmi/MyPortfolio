// src/Screens/NotFoundScreen.js
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import avatar from "@/assets/AvatarAymane.png";


export default function NotFoundScreen() {
    const navigate = useNavigate();
    const containerRef = useRef(null);
    const [spot, setSpot] = useState({ x: 50, y: 50 });


    // Déplace le spotlight (souris & touch)
    const handlePointer = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const clientX = e.touches?.[0]?.clientX ?? e.clientX;
        const clientY = e.touches?.[0]?.clientY ?? e.clientY;
        const x = ((clientX - rect.left) / rect.width) * 100;
        const y = ((clientY - rect.top) / rect.height) * 100;
        setSpot({ x, y });
    };

    const digits = [
        { value: "29", left: "12%", top: "20%", floatDelay: 0 },
        { value: "13", left: "70%", top: "25%", floatDelay: 0.15 },
        { value: "22", left: "22%", top: "68%", floatDelay: 0.3 },
        { value: "02", left: "76%", top: "70%", floatDelay: 0.45 },
    ];

    return (
        <section className="relative w-full h-screen overflow-hidden  select-none">
            {/* Blobs doux */}
            <div className="absolute inset-0 -z-20 pointer-events-none">
                <div className="absolute -top-24 -left-20 h-[36rem] w-[36rem] blur-3xl opacity-25 bg-gradient-to-br from-blue-500/35 to-transparent" />
                <div className="absolute -bottom-24 -right-16 h-[34rem] w-[34rem] blur-3xl opacity-25 bg-gradient-to-br from-orange-400/35 to-transparent" />
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[28rem] w-[28rem] blur-3xl opacity-20 bg-gradient-to-br from-red-500/30 to-transparent" />
            </div>

            {/* Bruit subtil */}


            <div
                ref={containerRef}
                className="relative h-full w-full px-6 flex items-center justify-center"
                onMouseMove={handlePointer}
                onTouchMove={handlePointer}
            >
                {/* Calque des chiffres avec masque spotlight */}
                <div
                    className="absolute inset-0"
                    style={{
                        WebkitMaskImage: `radial-gradient(180px 180px at ${spot.x}% ${spot.y}%, rgba(0,0,0,1), rgba(0,0,0,0.15) 65%, transparent 75%)`,
                        maskImage: `radial-gradient(180px 180px at ${spot.x}% ${spot.y}%, rgba(0,0,0,1), rgba(0,0,0,0.15) 65%, transparent 75%)`,
                    }}
                >
                    {digits.map((d, i) => (
                        <FloatingDigit key={i} {...d} />
                    ))}
                </div>

                {/* Contenu principal */}
                <div className="relative z-10 max-w-3xl w-full text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.2,
                                },
                            },
                        }}
                        className="text-center flex flex-col items-center justify-center"
                    >
                        {/* <motion.h1
                            variants={{
                                hidden: { opacity: 0, y: 30, scale: 0.95 },
                                visible: { opacity: 1, y: 0, scale: 1 },
                            }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-[48px] md:text-9xl font-ramidots tracking-tight bg-brandgradient bg-clip-text text-transparent w-fit inline-block"
                        >
                            404
                        </motion.h1> */}


                        <motion.img
                            variants={{
                                hidden: { opacity: 0, y: 30, scale: 0.95 },
                                visible: { opacity: 1, y: 0, scale: 1 },
                            }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            width={300}
                            height={300}
                            src={avatar}

                        />

                        <motion.p
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="mt-2 text-lightPrimary dark:text-darkPrimary font-sfbold text-2xl md:text-xl"
                        >
                            404 - Not Found
                        </motion.p>


                        <motion.p
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="mt-2 text-lightPrimary dark:text-darkPrimary  text-base md:text-lg"
                        >
                            You look for something ? There is probably nothing here...
                        </motion.p>

                        <motion.button
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate("/")}
                            className="mt-6 inline-flex items-center gap-2 rounded-full border border-ultralightGray dark:border-darkBorder px-6 py-3 text-sm md:text-base font-sfregular text-lightPrimary dark:text-darkPrimary shadow-sm hover:shadow-md hover:bg-lightContainer dark:bg-darkContainer transition-all"
                        >
                            <Home className="w-4 h-4" />
                            Back to Home
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

/** Gros chiffres flottants, révélés par le spotlight */
function FloatingDigit({ value, left, top, floatDelay = 0 }) {
    return (
        <motion.div
            className="absolute"
            style={{ left, top }}
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: [0, -6, 0], scale: 1 }}
            transition={{
                opacity: { duration: 0.6, ease: "easeOut", delay: floatDelay },
                y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: floatDelay },
            }}
        >
            <span
                className="block leading-none text-[72px] md:text-[120px] font-ramidots bg-brandgradient bg-clip-text text-transparent"
                style={{
                    filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.05))",
                }}
            >
                {value}
            </span>

            {/* Aura douce */}
            <motion.span
                aria-hidden
                className="absolute -inset-6 -z-10 blur-2xl"
                animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.05, 1] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: floatDelay }}
                style={{
                    background:
                        "linear-gradient(90deg, rgba(59,130,246,.35), rgba(251,146,60,.35), rgba(239,68,68,.35))",
                    WebkitMaskImage:
                        "radial-gradient(70% 60% at 50% 50%, black, transparent)",
                    maskImage:
                        "radial-gradient(70% 60% at 50% 50%, black, transparent)",
                }}
            />
        </motion.div>
    );
}
