import * as Dialog from '@radix-ui/react-dialog';
import { X, Lock, CheckCircle, Circle } from 'lucide-react';
import { useEasterEgg } from './EasterEggContext';
import React from 'react';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import MobileTypingInput from '../components/MobileTypingInput';

// Tailwind gradient helper


const getBadgeStyle = (level) => {
    switch (level) {
        case 'Easy':
            return 'bg-green-100 text-green-700';
        case 'Medium':
            return 'bg-yellow-100 text-yellow-700';
        case 'Hard':
            return 'bg-red-100 text-red-700';
        default:
            return 'bg-gray-100 text-gray-600';
    }
};

const EasterEggsDialog = () => {
    const { foundEggs, triggerTrophyFly, EggList } = useEasterEgg();

    const total = EggList.length;
    const progress = Math.round((foundEggs.length / total) * 100);


    const [animatedEggs, setAnimatedEggs] = useState([]);
    const hasAnimated = useRef(new Set());

    useEffect(() => {
        setAnimatedEggs(foundEggs.filter(id => !hasAnimated.current.has(id)));
        foundEggs.forEach(id => hasAnimated.current.add(id));
    }, [foundEggs]);

    return (
        <div>
            {/* Funny intro */}
            <h2 className="text-5xl font-ramidots bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent inline-block w-fit mb-2 ">
                Egg Chamber
            </h2>
            <p className="text-sm text-gray-500 mb-6 italic">
                Welcome to the Egg Chamber! Here you'll find some tips and tricks to help you on your quest.
                (Make sure you’re not using private browsing or you’ll lose progress!)
            </p>

            {/* Progress */}
            <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Progress</span>
                    <span>{foundEggs.length} / {total} eggs found</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-green-500 transition-all"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            {/* Easter Egg List */}

            <div className="space-y-4 mb-6">
                {EggList.map((egg) => {
                    const isFound = foundEggs.includes(egg.id);
                    const animateOnMount = animatedEggs.includes(egg.id);
                    const cardClass = isFound
                        ? 'bg-green-50 border-green-300 shadow-[0_0_15px_rgba(34,197,94,0.2)]'
                        : 'bg-gray-50 border-gray-200';

                    return (
                        <motion.div
                            key={egg.id}
                            initial={animateOnMount ? { opacity: 0, y: 20 } : false}
                            animate={animateOnMount ? { opacity: 1, y: 0 } : false}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                            className={`flex flex-col gap-3 border p-4 rounded-xl transition-all duration-300 ${cardClass}`}
                            data-cursor-icon={egg.cursor}
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <p className="font-semibold text-gray-700">{egg.name}</p>
                                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${getBadgeStyle(egg.level)}`}>
                                            {egg.level}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-500 italic">{egg.tip}</p>
                                </div>
                                <div className="ml-4 mt-1">
                                    {isFound ? (
                                        <CheckCircle className="text-green-500 w-5 h-5" />
                                    ) : (
                                        <Circle className="text-gray-400 w-5 h-5" />
                                    )}
                                </div>
                            </div>

                            {/* 👇 Mobile typing input only for egg #1 */}
                            {egg.id === '#1' && !isFound && (
                                <MobileTypingInput />
                            )}
                        </motion.div>
                    );
                })}
            </div>


            {/* Rank & Secret Reward */}
            <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">
                    Rank: <span className="text-indigo-500">{progress === 100 ? 'Egg Lord 👑' : 'Egg Seeker 🐣'}</span>
                </p>
                {progress === 100 ? (
                    <div className="p-4 bg-indigo-100 text-indigo-800 rounded-xl font-medium">
                        🎉 You’ve unlocked the secret: <span className="underline">/ultimate</span>
                    </div>
                ) : (
                    <div className="p-4 bg-gray-100 text-gray-500 rounded-xl flex items-center gap-2 italic">
                        <Lock className="w-4 h-4" /> Find all eggs to unlock the secret...
                    </div>
                )}
            </div>

            {/* Bonus Quote */}
            <p className="text-xs text-gray-400 mt-6 text-center">
                “The egg chooses the seeker.” – Ancient Portfolio Wisdom
            </p>
        </div>
    );
};

export default EasterEggsDialog;