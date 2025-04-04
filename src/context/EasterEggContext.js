import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const EasterEggContext = createContext();

export const useEasterEgg = () => useContext(EasterEggContext);

export const EasterEggProvider = ({ children }) => {
    const [foundEggs, setFoundEggs] = useState(() => {
        const saved = localStorage.getItem('foundEggs');
        return saved ? JSON.parse(saved) : [];
    });

    const [confettiActive, setConfettiActive] = useState(false);

    useEffect(() => {
        localStorage.setItem('foundEggs', JSON.stringify(foundEggs));
    }, [foundEggs]);

    const incrementEggs = (eggId) => {
        setFoundEggs((prev) => {
            if (prev.includes(eggId)) {
                toast('Already found this one! 🧐');
                return prev;
            }

            toast.success('🥚 New Easter Egg found!');
            return [...prev, eggId];
        });
    };

    const resetEggs = () => {
        setFoundEggs([]);
        toast('🔄 Easter Eggs reset');
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
                incrementEggs('egg_001');
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
                incrementEggs,
                resetEggs,
                eggCount: foundEggs.length,
                confettiActive,
                setConfettiActive,
            }}
        >
            {children}
        </EasterEggContext.Provider>
    );
};